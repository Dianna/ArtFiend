angular.module('artFiend.galleryService', [])
.factory('Images', function($http){
  var getImages = function(){
    return $http({
      method: 'GET',
      url: '/api/images'
    })
    .then(function(res){
      return res.data;
    }, function(res){
      console.log('error in galleryServices', res);
    });
  };

  return {
    getImages: getImages
  };
});
