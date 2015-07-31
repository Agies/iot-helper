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
  module.controller('resistor', function ($scope, $ionicModal) {
    $scope.colors = [
          {
            name: "black",
            value: 0
          },
          {
            name: "brown",
            value: 1
          },
          {
            name: "red",
            value: 2
          },
          {
            name: "orange",
            value: 3
          },
          {
            name: "yellow",
            value: 4
          },
          {
            name: "green",
            value: 5
          },
          {
            name: "blue",
            value: 6
          },
          {
            name: "violet",
            value: 7
          },
          {
            name: "grey",
            value: 8
          },
          {
            name: "white",
            value: 9
          }
    ];
    $scope.add = function () {
      $scope.bands.push({
        name: $scope.colors[0].name,
        value: $scope.colors[0].value
      });
    };
    $scope.remove = function (index) {
      $scope.bands.splice(index, 1);
    };
    $scope.bands = [{
      name: $scope.colors[1].name,
      value: $scope.colors[1].value
    }, {
      name: $scope.colors[1].name,
      value: $scope.colors[1].value
    }, {
      name: $scope.colors[0].name,
      value: $scope.colors[0].value
    }];
    $scope.total = function () {
      var ohms = '';
      var length = $scope.bands.length - 1;
      if (length < 0) {
        return 0;
      }
      if (length == 0) {
        return $scope.bands[0].value;
      }
      for (var i = 0; i < length; i++) {
        ohms += $scope.bands[i].value;
      }
      ohms += Array($scope.bands[length].value + 1).join('0');
      return nFormatter(ohms);
    }
    $scope.select = function (band, color) {
      band.value = color.value;
      band.name = color.name;
      $scope.close();
    };

    function nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num;
    }
  });
  module.directive('iotResistorBand', function ($ionicModal) {
    function link(scope, element, attrs) {
      $ionicModal.fromTemplateUrl(
      'app/reference/components/color-selection.html', {
        scope: scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        scope.modal = modal;
      });
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
    }
    return {
      restrict: 'E',
      link: link,
      scope: {
        band: '=band',
        colors: '=',
        remove: '&onRemove',
      },
      template: '<button class="iot-resistor-band" style="background-color: {{band.name}}" ng-click="open()"></button>'
    }
  });
})(angular.module('iot.controllers'))