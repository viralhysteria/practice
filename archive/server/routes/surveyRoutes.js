const _ = require('lodash');
const Path = require('path-parser').default;
const {URL} = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireTokens = require('../middlewares/requireTokens');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys')

module.exports = app => {
  app.get('/api/surveys',
  requireLogin,
  async (req, res) => {
      const surveys = await Survey.find({_user: req.user.id})
      .select({recipients: false});
  });

  app.get('/api/surveys/grazi', (req, res) => {
    res.send('fank u');
  });

  app.post(
    '/api/surveys/webhooks',
    (req, res) => {
      const p = new Path('/api/surveys/:surveyId/:choice');

      _.chain(req.body)
      .map(({email, url}) => {
        const match = p.test(new URL(url).pathname);
        if(match) {
          return {email, surveyId: match.surveyId, choice: match.choice};
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({surveyId, email, choice}) => {
        Survey.updateOne({
          id: surveyId,
          recipients: {
            $elemMatch: {email: email, repsonded: false}
          }
        }, {
          $inc: {[choice]: 1},
          $set: {'recipients.$.responded': true},
          lastResponse: new Date()
        }).exec();
      })
      .value();

    res.send({});
    }
  );

  app.post(
    '/api/surveys',
    requireLogin,
    requireTokens,
    async (req, res) => {
      const {title, subject, body, recipients} = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => ({email: email.trim()})),
        _user: req.user.id,
        dateSent: Date.now()
      });

      const mailer = new Mailer(
        survey, surveyTemplate(survey)
      );
      
      try {
        await mailer.send();
        await survey.save();
        req.user.tokens -= 1;
        const user = await req.user.save();
  
        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
}