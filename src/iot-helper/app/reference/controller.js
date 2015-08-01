(function (module) {
  'use strict';
  module.controller('reference', function ($scope) {
    $scope.filter = "";
    $scope.items = [];
    $scope.items.push({
      title: "Resistor",
      view: "app/reference/components/resistor.html"
    }, {
      title: "Led",
      view: "app/reference/components/led.html"
    });
  });
  module.controller('resistor', function ($scope, referenceService) {
    $scope.add = function () {
      $scope.bands.push({
        name: referenceService.colors[0].name,
        value: referenceService.colors[0].value
      });
    };
    $scope.remove = function (index) {
      $scope.bands.splice(index, 1);
    };
    $scope.bands = [{
      name: referenceService.colors[1].name,
      value: referenceService.colors[1].value
    }, {
      name: referenceService.colors[1].name,
      value: referenceService.colors[1].value
    }, {
      name: referenceService.colors[0].name,
      value: referenceService.colors[0].value
    }];
    $scope.total = function () {
      return referenceService.total($scope.bands);
    }
    $scope.select = function (band, color) {
      band.value = color.value;
      band.name = color.name;
      $scope.close();
    };
  });
  module.controller('led', function ($scope, referenceService) {

  });
  module.directive('iotResistorBand', function ($ionicModal, referenceService) {
    function link(scope, element, attrs) {
      $ionicModal.fromTemplateUrl(
      'app/reference/components/color-selection.html', {
        scope: scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        scope.modal = modal;
      });
      scope.colors = referenceService.colors;
      scope.open = function () {
        scope.modal.show();
      };
      scope.close = function () {
        scope.modal.hide();
      };
      scope.select = function (color) {
        scope.band.name = color.name;
        scope.band.value = color.value;
        scope.close();
      }
      scope.onRemove = function () {
        scope.remove();
        scope.close();
      }
      element.on('$destroy', function () {
        scope.modal.remove();
      });
    }
    return {
      restrict: 'E',
      link: link,
      scope: {
        band: '=band',
        remove: '&onRemove',
      },
      template: '<button class="iot-resistor-band" style="background-color: {{band.name}}" ng-click="open()"></button>'
    }
  });
})(angular.module('iot.controllers'))