'use strict';

/**
 * @ngdoc function
 * @name likeetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the likeetApp
 */
angular.module('likeetApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
