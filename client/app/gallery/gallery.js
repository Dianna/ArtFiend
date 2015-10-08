angular.module('artFiend.gallery', [])

.controller('GalleryCtrl', function($scope, Images){
  $scope.images = [];
  $scope.getImages = function(){
    Images.getImages()
      .then(function(data){
        // console.log('data in GalleryCtrl: ', data);
        $scope.images = data;
        console.log($scope.images[0])
      })
      .catch(function(err){
        console.log('err in GalleryCtrl');
        console.error(err);
      });
  };
  $scope.getImages();
})
.directive('imageFront', function(){
  return {
    restrict: 'E',
    scope: { 
      image: '=',
    },
    templateUrl: 'app/gallery/image-front.html'
  };
});


// .directive('galleryRow', function(){
//   return {
//     restrict: 'E',
//     scope: {
//       images: '='
//     },
//     templateUrl: 'app/gallery/gallery-row.html'
//   };
// })
// .directive('afImg', function(){
//   return {
//     // priority: 1001,
//     restrict: 'E',
//     scope: { 
//       image: '=',
//     },
//     templateUrl: 'app/gallery/af-img.html'
//   };
// });
