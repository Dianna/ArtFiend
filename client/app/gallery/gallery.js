angular.module('artFiend.gallery', [])
.controller('GalleryCtrl', function($scope, Images){
  $scope.images = [];
  $scope.getImages = function(){
    console.log('getting images');
    Images.getImages()
      .then(function(data){
        console.log('data in GalleryCtrl: ', data);
        $scope.images = data;
      })
      .catch(function(err){
        console.error(err);
      });
    console.log($scope.images);
  }
  $scope.getImages();
});
