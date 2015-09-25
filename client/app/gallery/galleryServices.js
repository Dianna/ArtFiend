angular.module('artFiend.imageService', [])
.factory('Images', function($http){
  var getImages = function(){
    return $http({
      method: 'GET',
      url: '/api/images'
    })
    .then(function(res){
      return res.data;
    });
  }

  return {
    getImages: getImages
  }
});
