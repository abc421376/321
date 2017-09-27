/**
 * Created by Administrator on 2017/9/21.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('HomeCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
      $scope.$on('$ionicview.beforeEnter',function () {
        var user=localStorageService.get('user');
        if(user.islogin===false){
          $state.go('login')
        }
      })
      }])
})();
