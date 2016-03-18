'use strict';

/* Controllers */

var marksApp = angular.module('marksApp', []);

marksApp.controller('marksController', function($scope) {
  $scope.stuff = [
   //objects in here
   {name: "Mark", age: 34},
   {name: "Belinda", age: 34},
   {name: "Jude", age: 3}
  ];

});