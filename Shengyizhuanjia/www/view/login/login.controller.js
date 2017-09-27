/**
 * Created by Administrator on 2017/9/20.
 */
/**
 * Created by Administrator on 2017/9/19.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('LoginCtrl', ['$scope', '$ionicPopup', 'localStorageService', '$state',function ($scope, $ionicPopup, localStorageService,$state) {
      var USER_KEY = 'user';
      $scope.user = {
        username: '',
        password: ''
      };
      $scope.login = function () {
        var account = localStorageService.get(USER_KEY, {
          username: 'xiaoli',
          password: '123'
        });
        if (account.username === $scope.user.username && account.password === $scope.user.password) {
          account.isLogin = true;
          localStorageService.update(USER_KEY, account);
          $state.go('app.home');
        }
        else {
          $ionicPopup.alert({
            title: '警告',
            template: '用户名或密码错误',
            okText: '确定',
            okType: 'energized-bg'
          });
        }
      };
    }]);
})();
