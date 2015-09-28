'use strict';

/**
 * @ngdoc function
 * @name likeetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the likeetApp
 */
angular.module('likeetApp')
  .controller('RegisterCtrl', ['$scope', '$state', 'Restangular', 'userService', function ($scope, $state, Restangular, userService) {
    $scope.UserData = {};

    $scope.registerUser = function(){
      var newUser = {email: $scope.UserData.email};
      var baseUsers = Restangular.all('users');

      $scope.User = userService;

      baseUsers.post(newUser).then(function(user){
        $scope.User['id'] = user.id;
        $scope.User['email'] = user.email;

        $state.go('survey');
      });
    };
  }]);
