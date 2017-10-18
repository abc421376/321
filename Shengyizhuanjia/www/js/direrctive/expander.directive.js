/**
 * Created by Administrator on 2017/10/11.
 */
angular.module('shi.directives')
  .directive('expanderDirective',[function () {
    return{
      restrict:'EA',
      template:'<div ng-transclude ng-show="show"></div> \
      <button class="button button-positive button-clear\
      icon-left ion-plus-circled" \
      ng-class="{\'ion-plus-corcled\':!show,\'ion-minus-circled\':show}"\
      ng-click="toggle()">\
      {{title}}\
      </button>',
     link:function (scope,element,attrs) {
       scope.title='完善更多信息';
       scope.show=false;
       scope.toggle=function () {
         scope.show=!scope.show;
         scope.title=scope.show?'收起':'完善更多信息';
       };
     },
      transclude:true
    };
  }]);
