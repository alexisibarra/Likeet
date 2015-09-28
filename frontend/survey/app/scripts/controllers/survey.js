'use strict';

/**
 * @ngdoc function
 * @name likeetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the likeetApp
 */
angular.module('likeetApp')
  .controller('SurveyCtrl', ['$scope', '$state', 'Restangular', 'userService', function ($scope, $state, Restangular, userService) {
      $scope.User = userService;

      if($scope.User.isNotSet()){
        $state.go('register');
      }

      var baseResources = Restangular.all('randomresources');
      baseResources.getList().then(function(resources){
          $scope.resource = resources[0];
      });

      $scope.processResource = function(resourceId, decision ){
        var info = {
            resourceId: resourceId,
            like: decision
        };

        Restangular
          .one('users', $scope.User.id)
          .post('process', info)
          .then(function(data){
              $state.go($state.current, {}, {reload: true});
          });
      };
  }]);
