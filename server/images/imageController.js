var request = require('request'),
    cheerio = require('cheerio'), // gives jQuery functionality
    fs = require('fs');

module.exports = {
  getImages: function(req, res, next){
    console.log('in getImages')
    var url = 'https://en.wikipedia.org/wiki/List_of_paintings_by_Rembrandt';
    request(url, function(error, response, html){
      if(!error && response.statusCode == 200){
        var works = [];
        var $ = cheerio.load(html);
        $('a.image').each(function(i, element){
          var json = { imageURL: "", title: "", year: "", technique: "", dimensions: "", gallery: "", commentary: ""};
          json.imageURL = $(this).children().attr('src').slice(2);
          json.title = $(this).parent().next().text();
          json.year = $(this).parent().next().next().text();
          json.technique = $(this).parent().next().next().next().text();
          json.dimensions = $(this).parent().next().next().next().next().text();
          json.gallery = $(this).parent().next().next().next().next().next().children().text();
          json.commentary = $(this).parent().next().next().next().next().next().next().next() ? $(this).parent().next().next().next().next().next().next().next().text() : "";
          works.push(json);
        });
        returnWorks(works);
      }
    });
    var returnWorks = function(data){
      res.send(data);
    };
  }

};

// Previous json retrieval

// var Image = require('./imageModel.js');
// var Q = require('q');

// getImages: function(req, res, next){
//   var findAll = Q.nbind(Image.find, Image);
//   findAll({})
//     .then(function(images){
//       res.json(images);
//     })
//     .fail(function(err){
//       console.log('imageController error', err)
//       next(err);
//     });
// }
