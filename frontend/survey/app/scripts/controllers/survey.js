'use strict';

/**
 * @ngdoc function
 * @name likeetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the likeetApp
 */
angular.module('likeetApp')
  .controller('SurveyCtrl', ['$scope', '$state', 'dataService', function ($scope, $state, dataService) {
    dataService.get_resource()
      .success(function (resource) {
        $scope.error = false;
        $scope.resource = resource;
      })
      .error(function (error) {
        $scope.error = 'Error retrieving customers! ' + error.message;
      });

    $scope.processResource = function(resourceId, decision ){
      if (decision){
        console.log("You liked resource: " + resourceId);
      } else {
        console.log("You disliked resource: " + resourceId);
      }
      $state.go($state.current, {}, {reload: true});
    };
  }]);
