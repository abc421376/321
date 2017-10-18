// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngMessages','starter.controllers', 'starter.services','ngCordova','shi.directives'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);


      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'view/menu/menu.html',
        controller: 'AppCtrl'
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'view/welcome/welcome.html'
      })
      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })
      .state('main', {
        url: '/',
        controller: 'MainCtrl'
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'view/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.category-list', {
        url: '/category-list',
        views: {
          'menuContent': {
            templateUrl: 'view/category/category-list.html',
            controller: 'CategoryListCtrl'
          }
        }
      })
      .state('app.category-add', {
        url: '/category-add/:id/:name',
        views: {
          'menuContent': {
            templateUrl: 'view/category/category-add.html',
            controller: 'CategoryAddCtrl'
          }
        }
      })
      .state('app.setting', {
        url: '/setting',
        views: {
          'menuContent': {
            templateUrl: 'view/setting/setting.html',
            controller: 'SettingCtrl'
          }
        }
      })
      .state('app.shop', {
        url: '/shop',
        views: {
          'menuContent': {
            templateUrl: 'view/shop/shop.html',
            controller: 'ShopCtrl'
          }
        }
      })
      .state('app.shop-edit', {
        url: '/shop-edit',
        params:{title:'',property:''},
        views: {
          'menuContent': {
            templateUrl: 'view/shop/shop-edit.html',
            controller: 'ShopEditCtrl'
          }
        }
      })
      .state('app.product-add', {
        url: '/product-add',
        views: {
          'menuContent': {
            templateUrl: 'view/product/product-add.html',
            controller: 'ProductAddCtrl'
          }
        }
      })
      .state('app.product-list', {
        url: '/product-list',
        views: {
          'menuContent': {
            templateUrl: 'view/product/product-list.html',
            controller: 'ProductListCtrl'
          }
        }
      })
      .state('app.change-password', {
        url: '/change-password',
        views: {
          'menuContent': {
            templateUrl: 'view/change-password/change-password.html',
            controller: 'ChangePasswordCtrl'
          }
        }
      })

      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })


      .state('list-inset', {
        url: '/list-inset',
        templateUrl: 'view/list-inset/list-inset.html',
      })

      .state('login', {
        url: '/login',
        templateUrl: 'view/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/app/playlists');
    $urlRouterProvider.otherwise('/');
  });

