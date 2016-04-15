'use strict';

/**
 * @ngdoc function
 * @name generatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorApp
 */
angular.module('generatorApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    activate();

    function activate() {
    	$scope.test = 'This is a test of ba bla bla';
    	console.log($scope);
    }

  });
