module.exports = (req, res, next) => {
  if (req.user.tokens < 1) {
    return res.status(403).send({
      error: 'token balance insufficient'
    });
  }

  next();
};