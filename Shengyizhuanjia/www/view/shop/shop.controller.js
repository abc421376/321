/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ShopCtrl', ['$scope', 'localStorageService', '$state', function ($scope, localStorageService, $state) {
      $scope.shop = {};

      $scope.editShop = function (titleValue, propertyValue) {
        $state.go('app.shop-edit', {
          title: titleValue,
          property: propertyValue
        });
      };
      $scope.$on('$stateChangeSuccess', function () {
        $scope.shop = localStorageService.get('Shop', {
          phone: '13023825085',
          createTime: '2017-9-28 11:53:00'
          /* name:'',
           ab:'',
           boss:'',
           email:'',
           shopPhone:''*/

        });
      });
    }]);
})();
