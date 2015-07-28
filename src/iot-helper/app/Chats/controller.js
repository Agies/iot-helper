(function(module) {
	'use strict';
	module.controller('ChatsCtrl', function($scope, Chats) {
	  $scope.chats = Chats.all();
	  $scope.remove = function(chat) {
		Chats.remove(chat);
	  };
	})
})(angular.module('iot.controllers'))