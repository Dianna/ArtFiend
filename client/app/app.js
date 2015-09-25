console.log('app.js accessed')
var app = angular.module('artFiend', [
  'artFiend.gallery',
  'artFiend.imageService',
  'ui.router'
])
// Routing
.config(function($stateProvider, $urlRouterProvider){
  // Unmatched url catch
  $urlRouterProvider.otherwise("/gallery");
  // States
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'app/gallery/gallery.html',
      controller: 'GalleryCtrl'
    })
});
