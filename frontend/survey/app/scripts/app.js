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
    'restangular'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
  })

    .config(function(RestangularProvider) {
      //set the base url for api calls on our RESTful services
      var newBaseUrl = "";
      if (window.location.hostname == "localhost") {
        newBaseUrl = "http://localhost:5000/api";
      } else {
        var deployedAt = window.location.href.substring(0, window.location.href);
        newBaseUrl = deployedAt + "/api";
      }
      RestangularProvider.setBaseUrl(newBaseUrl);
    })



;
