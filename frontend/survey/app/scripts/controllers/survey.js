'use strict';

/**
 * @ngdoc function
 * @name likeetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the likeetApp
 */
angular.module('likeetApp')
  .controller('SurveyCtrl', ['$scope', '$state', 'dataService', 'Restangular', function ($scope, $state, dataService, Restangular) {

    var baseResources = Restangular.all('randomresources');
    baseResources.getList().then(function(resources){
      $scope.resource = resources[0];
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
