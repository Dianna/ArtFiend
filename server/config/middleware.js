var morgan = require('morgan');

module.exports = function(app, express){
  var imageRouter = express.Router();

  app.use(morgan('dev'));

  app.use(express.static(__dirname+'/../../client/'));
  app.use('/bower_components', express.static(__dirname+'/../../bower_components/'))
  app.use('/api/images', imageRouter);

  // app.use('/app', express.static(__dirname+'/client/app/'));
  // app.use('/gallery', express.static(__dirname+'/client/app/gallery/'));

  app.get('/', function(req, res){
    res.send('index.html');
  });

  require('./images/imageRoutes.js')(imageRouter);
};
