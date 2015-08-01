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
    return nFormatter(ohms);
  }
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
  return service;
});
