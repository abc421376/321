/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
  'use strict';

  angular.module('starter.controllers')
    .controller('ChangePasswordCtrl', ['$scope', 'localStorageService','$ionicPopup',function ($scope, localStorageService,$ionicPopup) {
      $scope.user = {
        oldPassword: '',
        password: '',
        confirmPassword: ''

      };
      $scope.save = function () {
        var User=localStorageService.get('user');
        if(User.password===$scope.user.oldPassword && $scope.user.password===$scope.user.confirmPassword){
          User.password=$scope.user.password;
          localStorageService.update('user',User);
        }
        else{
          $ionicPopup.alert({
            title: '警告',
            template: '旧密码不正确或者新密码不一致',
            okText: '确定',
            okType: 'energized-bg'
          });
        }
      };

    }]);
})();
