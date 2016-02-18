'use strict';

/**
 * @ngdoc overview
 * @name movieRaterJsApp
 * @description
 * # movieRaterJsApp
 *
 * Main module of the application.
 */
angular
  .module('movieRaterJsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap'
  ])
  .run(['$rootScope', function($rootScope){
    $rootScope._ = window._;
  }])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .state('movie', {
        url:'/movie/:movieId',
        templateUrl: 'views/about.html',
        controller: 'MovieDetailController'
      })
      .state('actor', {
        url:'/actor/:actorId',
        templateUrl: 'views/actor.html',
        controller: 'ActorDetailController'
      })

     $urlRouterProvider.otherwise("/");
  })
  .factory("LocalStorageSrv", ["$localStorage", function($localStorage) {
    var service = {
      get: function(storageName) {
        return $localStorage[storageName]
      },
      put: function(storageName, data) {
        return $localStorage[storageName] = data
      },
      remove: function(storageName) {
        delete $localStorage[storageName]
      }
    };
    return service

  }]);
