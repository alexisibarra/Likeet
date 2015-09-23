'use strict';

/**
 * @ngdoc function
 * @name likeetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the likeetApp
 */
angular.module('likeetApp')
  .controller('SurveyCtrl', function ($scope, $state) {

    $scope.awesomeThings = [
      {id: "1", kind: "text", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in hendrerit libero. Donec sit amet porta lorem. Nam mollis metus quam, non sagittis mi egestas tempus. Nam quis ipsum massa. Nunc nec sollicitudin leo. Donec tincidunt justo vel porttitor malesuada. Suspendisse potenti."},
      {id: "2", kind: "text", body: "Quisque maximus ex arcu, nec viverra velit luctus sed. Cras in lectus sit amet orci suscipit porta et sed odio. Aenean scelerisque mauris arcu, sit amet placerat odio efficitur in. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam maximus ante mi, eu convallis arcu ultrices sit amet. Cras lacinia orci vitae ultrices lobortis. Mauris cursus volutpat odio, ut pharetra sapien egestas a. In euismod est et finibus cursus. Sed non urna imperdiet, pharetra erat sed, condimentum purus. Nulla non diam et arcu ullamcorper lacinia. Sed purus eros, ullamcorper eu dui ac, rutrum varius lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc at eros vel sapien lobortis vehicula vitae ut ligula."},
      {id: "3", kind: "text", body: "Maecenas pellentesque scelerisque orci, at facilisis arcu pretium et. Vestibulum eget hendrerit nisi. Donec pretium libero ante, id maximus sem pulvinar sed. Curabitur molestie quam eget magna volutpat iaculis. Maecenas in lacus nec lacus semper lacinia quis nec nisi. Quisque sit amet porta sapien. Maecenas malesuada sapien augue. Ut et sapien tortor. Nam dictum sit amet nisl semper accumsan. Etiam consequat rutrum interdum. Pellentesque egestas a tellus sit amet fermentum. Maecenas id nisi ligula. Nam rutrum nisl vel lorem gravida, egestas eleifend neque dignissim."},
      {id: "4", kind: "text", body: "Nam tempor erat eget ante dictum, id posuere neque porta. Duis dignissim est magna. Cras auctor vel augue vitae pulvinar. In sodales ligula at interdum facilisis. Vestibulum sit amet ex magna. Donec urna nisl, tristique sed rhoncus sit amet, volutpat at velit. Phasellus blandit, velit sit amet mattis luctus, purus justo sagittis risus, in eleifend dui urna vel mauris. Phasellus interdum venenatis est vitae convallis. Donec dignissim bibendum risus, quis pellentesque dolor lobortis id. Aliquam at gravida dolor. Mauris odio nisi, blandit eget tincidunt at, vulputate sed odio. Phasellus a quam eu tortor lobortis fermentum."},
      {id: "5", kind: "text", body: "Fusce in odio bibendum, cursus risus sed, varius justo. Suspendisse magna massa, iaculis quis metus eget, tempor dignissim nisl. Curabitur eget enim id nibh hendrerit ultricies. Aenean ut ligula pretium, fermentum dolor non, dapibus risus. Sed egestas iaculis pellentesque. Ut in tellus lectus. Cras maximus vulputate elementum. Etiam ut sem mattis, malesuada felis et, luctus ligula. Praesent sit amet libero non sapien luctus tincidunt vulputate mattis nisl. Duis dapibus lorem tellus, non aliquam nulla fringilla vitae. Aenean facilisis eu dolor quis condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
      {id: "6", kind: "image", src: "http://lorempixel.com/860/400/"},
      {id: "7", kind: "image", src: "http://lorempixel.com/120/650/"},
      {id: "8", kind: "image", src: "http://lorempixel.com/800/900/"},
      {id: "9", kind: "image", src: "http://lorempixel.com/1000/350/"},
      {id: "10", kind: "image", src: "http://lorempixel.com/700/920/"},
    ];

    $scope.resource = $scope.awesomeThings[Math.floor(Math.random()*$scope.awesomeThings.length)];

    $scope.processResource = function(resourceId, decision ){
      if (decision){
        console.log("You liked resource: " + resourceId);
      } else {
        console.log("You disliked resource: " + resourceId);
      }
      $state.go($state.current, {}, {reload: true});
    };
  });
