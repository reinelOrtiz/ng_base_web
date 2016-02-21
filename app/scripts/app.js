'use strict';

/**
 * @ngdoc overview
 * @name webNgApp
 * @description
 * # webNgApp
 *
 * Main module of the application.
 */
angular
  .module('webNgApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(["$routeProvider", "$locationProvider", function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });      
  }]);
