/**
 * Created by xx on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
      $scope.title=$stateParams.title;
      $scope.property=$stateParams.property;

      $scope.shop=localStorageService.get('Shop',{
        phone:'13023825085',
        createTime:'2017-9-28 11:53:00',
        name:'',
        ab:'',
        boss:'',
        email:'',
        shopPhone:''
      });
     console.log($scope.shop);
      $scope.save =function () {
        localStorageService.update('Shop',$scope.shop);
      };
    }]);
})();
