var mongoose = require('mongoose');
var Q = require('q');

var ImageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
    unique: true
  }
});
// mongoose.model('Image', ImageSchema);
// var Image = mongoose.model('Image');
// Image.remove({}, function(err){
//   console.log('Images removed');
// }).then(function(){

//   for (var i=1; i<=13; i++){
//   var image = new Image();
//     image.path = 'stockImages/rembrandt'+i+'.jpg';
//     (function(image){
//         image.save(function(err, savedImage){
//           if (err){
//             throw err;
//             console.log(err);
//           } else {
//             console.log(savedImage, ' saved!');
//           }
//         });
//     }(image));

//   }


// })


module.exports = mongoose.model('images', ImageSchema);
