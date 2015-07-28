(function(module){
	'use strict';
	module.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	  $scope.chat = Chats.get($stateParams.chatId);
	})
})(angular.module('iot.controllers'))