(function(module) {
	'use strict';
	module.controller('AccountCtrl', function($scope) {
	  $scope.settings = {
		enableFriends: true
	  };
	});
})(angular.module('iot.controllers'))