(function(module) {
	'use strict';
	module.controller('reference', function($scope) {
		$scope.filter = "";
		$scope.items = [];
		$scope.items.push({
			title: "Resistor",
			view: "app/reference/components/resistor.html"
		});
	});
	module.controller('resistor', function($scope) {
		
	});
})(angular.module('iot.controllers'))