/**
 * Created by Administrator on 2017/10/11.
 */
angular.module('shi.directives')
  .directive('companyDirective',[function () {
    return{
      restrict:'E',
      template:'<div class="row text-center" style="position:fixed;bottom:{{bottom}};width: 100%;height: 44px;text-align: center;">\
                  <h6 style="width: 100%"><span>@2011-2017 生意专家</span></h6>\
                  </div>',
      replace:true,
      scope:{
        bottom:'@'
      }
    };
  }]);
