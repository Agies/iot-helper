(function(module) {
	'use strict';
	module.controller('home', function($scope) {
	  $scope.settings = {
		enableFriends: true
	  };
	});
})(angular.module('iot.controllers', []))