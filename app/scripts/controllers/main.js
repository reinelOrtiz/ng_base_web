'use strict';

/**
 * @ngdoc function
 * @name webNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webNgApp
 */
angular.module('webNgApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
