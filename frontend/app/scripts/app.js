'use strict';

/**
 * @ngdoc overview
 * @name likeetApp
 * @description
 * # likeetApp
 *
 * Main module of the application.
 */
angular
  .module('likeetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('register', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        url: '/'
      })
      .state('survey', {
        templateUrl: 'views/survey.html',
        controller: 'SurveyCtrl',
        url: '/survey'
      });
  });
