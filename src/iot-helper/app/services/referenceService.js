angular.module('iot.services', [])

.factory('referenceService', function () {
  var colors = [
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
  var service = {
    colors: colors,
    total: total
  };
  function total(bands) {
    var ohms = '';
    var length = bands.length - 1;
    if (length < 0) {
      return 0;
    }
    if (length == 0) {
      return bands[0].value;
    }
    for (var i = 0; i < length; i++) {
      ohms += bands[i].value;
    }
    ohms += Array(bands[length].value + 1).join('0');
    return ohms;
  }
  return service;
})

.factory('ohmsService', function () {
  var service = {};
  service.findVoltage = function (amps, resistance) {
    if (!resistance || !amps) return 0;
    return amps * resistance;
  };
  service.findAmps = function (source, forward, resistance) {
    if (!source || !resistance) return 0;
    return (source - forward) / resistance;
  };
  service.findResistance = function (source, forward, amps) {
    if (!source || !amps) return 0;
    var temp = (source - (forward || 0)) / amps / 10;
    var total = temp.toFixed(0) * 10;
    return total;
  };
  return service;
})

.filter('n', function () {
  function nFormatter(num) {
    if (!num) return null;
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    if (num <= .0000001) {
      return (num * 1000000000).toFixed(1).replace(/\.0$/, '') + 'n';
    }
    if (num <= .0001) {
      return (num * 1000000).toFixed(1).replace(/\.0$/, '') + 'u';
    }
    if (num <= .1) {
      return (num * 1000).toFixed(1).replace(/\.0$/, '') + 'm';
    }
    return parseFloat(num).toFixed(1).replace(/\.0$/, '');
  }
  return function (input) {
    return nFormatter(input);
  };
});
