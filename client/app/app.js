console.log('app.js accessed')
var app = angular.module('artFiend', ['ui.router'])
// Routing
.config(function($stateProvider, $urlRouterProvider){
  // Unmatched url catch
  $urlRouterProvider.otherwise("/gallery");
  // States
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'app/gallery/gallery.html'
    })
});

// var app = angular.module('artFiend', [])
//   .config(function($routeProvider){
//     $routeProvider
//     .when('/gallery', {
//       templateUrl: 'gallery/gallery.html'
//     })
//     .otherwise('/gallery')
//   })
