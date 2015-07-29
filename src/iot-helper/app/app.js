angular.module('iot', ['ionic', 'iot.controllers', 'iot.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/tabs.html'
      })
      
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'app/home/tab-home.html',
            controller: 'home'
          }
        }
      })

      .state('tab.reference', {
        url: '/reference',
        views: {
          'tab-reference': {
            templateUrl: 'app/reference/tab-reference.html',
            controller: 'reference'
          }
        }
      })
      .state('tab.formulas', {
        url: '/formulas',
        views: {
          'tab-formulas': {
            templateUrl: 'app/formulas/tab-formulas.html',
            controller: 'formulas'
          }
        }
      })

      .state('tab.tools', {
        url: '/tools',
        views: {
          'tab-tools': {
            templateUrl: 'app/tools/tab-tools.html',
            controller: 'tools'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
