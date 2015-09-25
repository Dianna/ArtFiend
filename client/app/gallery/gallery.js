angular.module('artFiend.gallery', [])
.controller('GalleryCtrl', function($scope){
  $scope.images = [];
  $scope.getImages = function(){
    console.log('getting images');
    $scope.images.push('in scope images');
    console.log($scope.images);
  }
  $scope.getImages();
});