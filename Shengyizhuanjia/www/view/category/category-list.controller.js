/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('CategoryListCtrl', ['$scope','CategoryService','$ionicHistory','$ionicActionSheet', function ($scope,CategoryService,$ionicHistory,$ionicActionSheet) {
    $scope.showInfo='无小分类进入大分类';
    $scope.$on('$stateChangSuccess',function (event,toState,toPArams,fromState,fromParams) {
      $scope.showInfo='无小分类进入大分类';
      console.log(event,toState,toPArams,fromState,fromParams);
      if(fromState.name=='app.product-list'){
        $scope.showInfo='全部商品';
      }
    });
    $scope.categories = [
      {
        ID: 1,
        Name: '电脑整机',
        Children: [
          {
            ID: 11,
            Name: '笔记本'
          },
          {
            ID: 12,
            Name: '台式机'
          },
          {
            ID: 13,
            Name: '平板电脑'
          }
        ]
      },
      {
        ID: 2,
        Name: '电脑配件',
        Children: [
          {
            ID: 21,
            Name: 'CPU'
          },
          {
            ID: 22,
            Name: '内存'
          }
        ]
      },
      {
        ID: 3,
        Name: '外设产品',
        Children: [
          {
            ID: 31,
            Name: '鼠标'
          },
          {
            ID: 32,
            Name: '键盘'
          }
        ]
      },
      {
        ID: 4,
        Name: '路由产品',
        Children: [
          {
            ID: 41,
            Name: '路由器'
          },
          {
            ID: 42,
            Name: '交换机'
          },
          {
            ID: 43,
            Name: '网卡'
          }
          ,
          {
            ID: 44,
            Name: '网络配件'
          }
        ]
      },
      {
        ID: 5,
        Name: '默认分类',
        Children: []
      }
    ];
    $scope.activeCategory = {};
    $scope.activeSubCategory = {};
    if ($scope.categories.length > 0) {
      $scope.activeCategory = $scope.categories[0];
    }

    $scope.selectCategory = function (index) {
      if ($scope.selectCategory.ID != $scope.categories[index].ID) {
        $scope.activeCategory = $scope.categories[index];
      }
    };
    $scope.selectSubCategory = function (data) {
      $scope.activeSubCategory = data;
      $ionicHistory.goBack();
    };
    $scope.showActionSheet = function () {
      $ionicActionSheet.show(
        {
          buttons: [
            {
              text: '<b>新增小分类</b>'
            },
            {
              text: '编辑分类'
            }
          ],
          cancelText: '取消',

          buttonClicked: function (index) {
            switch (index) {
              case  0:
                $scope.gotoCategoryAdd();
                break;
              case  1:
                break;
            }
          }
      ,
      titleText:'更多操作'
    })
      ;
    };
    $scope.gotoCategoryAdd = function () {
      location.href = '#/app/category-add/' + $scope.activeCategory.ID + '/' + $scope.activeCategory.Name;
    }
    $scope.$watch('activeSubCategory',function (newValue,oldValue) {
      if(newValue.ID){
        CategoryService.updateCategory($scope.activeSubCategory);
      }
    })

  }]);
})();
