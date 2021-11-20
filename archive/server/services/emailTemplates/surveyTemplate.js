const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style='text-align: center'>
          <h3>Thank you for your feedback!</h3>
          <br/>
          <p>
          <h2>"</h2>${survey.body}<h2>"</h2>
          </p>
          <br/>
          <img src='https://i.redd.it/4tb0wu0yz8f11.jpg' style='max-width:50%'/>
          <br/>
          <div>
            <a href='${keys.redirectDomain}/api/surveys/${survey.id}/grazi'>Let's fight Chad</a>
          </div>
          <div>
            <a href='${keys.redirectDomain}/api/surveys/${survey.id}/wadda'>This is so sad</a>
          </div>
        </div>
      </body>
    </html>
  `;
};