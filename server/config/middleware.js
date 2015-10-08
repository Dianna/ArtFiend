var morgan = require('morgan');
var bodyParser = require('body-parser');
var helpers = require('./helpers');

var request = require('request'),
    cheerio = require('cheerio'), // gives jQuery functionality
    fs = require('fs');

module.exports = function(app, express){
  var imageRouter = express.Router();
  var scrapeRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(express.static(__dirname+'/../../client/'));
  app.use('/dist', express.static(__dirname+'/../../dist/'));
  app.use('/bower_components', express.static(__dirname+'/../../bower_components/'));
  app.use('/api/images', imageRouter);
  // app.use('/scrape', scrapeRouter);

  app.get('/scrape', function (req, res, next) {
    var url = 'https://en.wikipedia.org/wiki/List_of_paintings_by_Rembrandt';
    var data;
    request(url, function(error, response, html){
      if(!error){
        var works = [];
        var $ = cheerio.load(html);
        $('a.image').each(function(i, element){
          var json = { imageURL: "", title: "", year: "", technique: "", dimensions: "", gallery: "", commentary: ""};
          json.imageURL = "https://en.wikipedia.org" + $(this).attr('href');
          json.title = $(this).parent().next().text();
          json.year = $(this).parent().next().next().text();
          json.technique = $(this).parent().next().next().next().text();
          json.dimensions = $(this).parent().next().next().next().next().text();
          json.gallery = $(this).parent().next().next().next().next().next().children().text();
          json.commentary = $(this).parent().next().next().next().next().next().next().next() ? $(this).parent().next().next().next().next().next().next().next().text() : "";
          works.push(json);
        });
        data = works;
        returnWorks();
      }
    });
    var returnWorks = function(){
      res.send(data);
    }
  });

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // app.use('/app', express.static(__dirname+'/client/app/'));
  // app.use('/gallery', express.static(__dirname+'/client/app/gallery/'));

  require('../images/imageRoutes.js')(imageRouter);
  // require('./scrape')(scrapeRouter);
};
