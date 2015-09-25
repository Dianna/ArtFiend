angular.module('artFiend.gallery', [])
.controller('GalleryCtrl', function($scope, Images){
  $scope.images = [];
  $scope.getImages = function(){
    Images.getImages()
      .then(function(data){
        console.log('data in GalleryCtrl: ', data);
        $scope.images = data;
      })
      .catch(function(err){
        console.log('err in GalleryCtrl')
        console.error(err);
      });
  }
  $scope.getImages();
});
