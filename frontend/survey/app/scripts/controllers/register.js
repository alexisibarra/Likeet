'use strict';

/**
 * @ngdoc function
 * @name likeetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the likeetApp
 */
angular.module('likeetApp')
  .controller('RegisterCtrl', function ($scope, $state) {
    $scope.UserData = {};

    $scope.registerUser = function(){
      console.log('Registered ' + $scope.UserData.email);

      $state.go('survey');
    };
  });
