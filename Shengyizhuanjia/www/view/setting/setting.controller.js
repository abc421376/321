/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('SettingCtrl',['$scope','$ionicHistory','localStorageService','$state',function ($scope,$ionicHistory,localStorageService,$state) {
      $scope.goBack=function () {
        $ionicHistory.nextViewOptions(
          {
            disableBack:true
          }
        );
        $state.go('app.home')
;      };
      $scope.shop=function () {
        shopPhone:'13023825085'
      };
      $scope.callPhone=function () {

        location.href="tel:" +$scope.shop.shopPhone;
      };
      $scope.logout=function () {
        $scope.User=localStorageService.get('user');
        $scope.User.isLogin=false;
        localStorageService.update('user', $scope.User);
        $state.go('login');
      }

    }])
})();
