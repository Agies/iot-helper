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
    colors: colors
  };
  return service;
});
