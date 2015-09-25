module.exports = {
  errorLogger: function(error, req, res, next){
    // log error then send to middleware.js
    console.error(error.stack);
    next(error);
  },

  errorHandler: function(error, req, res, next){
    // send error to client
    res.send(500, {error: error.message});
  }
};
