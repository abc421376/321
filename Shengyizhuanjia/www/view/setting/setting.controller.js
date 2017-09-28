/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('SettingCtrl',['$scope','$ionicHistory','$state',function ($scope,$ionicHistory,$state) {
      $scope.goBack=function () {
        $ionicHistory.nextViewOptions(
          {
            disableBack:ture
          }
        );
        $state.go('app.home')
;      };

    }])
})();
