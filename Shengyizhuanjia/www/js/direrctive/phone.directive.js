/**
 * Created by Administrator on 2017/10/13.
 */
(function () {
  'use strict';
  angular.module('shi.directives')
    .directive('phone', [function () {
      var PHONE_REGEXP = /^0(10|(2[0-9])|[3-9]\d{2})-?\d{8}$/;
      var MOBILEPHONE_REGEXP = /^1[3578]\d{9}$/;
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
          ngModelCtrl.$parsers.unshift(function (viewValue) {
            if(PHONE_REGEXP.test((viewValue)||MOBILEPHONE_REGEXP.test(viewValue))){
              ngModelCtrl.$setValidity('phone',true);
              return viewValue;
            }
            else {
              ngModelCtrl.$setValidity('phone',false);
              return undefined;
            }
          });

        }
      };
    }]);
})();
