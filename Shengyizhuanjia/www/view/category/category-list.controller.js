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
        Name: '小吃',
        Children: [
          {
            ID: 11,
            Name: '香肠'
          },
          {
            ID: 12,
            Name: '鱼丸'
          },
          {
            ID: 13,
            Name: '鸡腿'
          }
        ]
      },
      {
        ID: 2,
        Name: '汽车',
        Children: [
          {
            ID: 21,
            Name: '宝马'
          },
          {
            ID: 22,
            Name: '奔驰'
          }
        ]
      },
      {
        ID: 3,
        Name: '日本女星',
        Children: [
          {
            ID: 31,
            Name: '苍老师'
          },
          {
            ID: 32,
            Name: '小泽玛利亚'
          }
        ]
      },
      {
        ID: 4,
        Name: '动漫',
        Children: [
          {
            ID: 41,
            Name: '狐妖小红娘'
          },
          {
            ID: 42,
            Name: '秦时明月'
          },
          {
            ID: 43,
            Name: '恶魔高校'
          }
          ,
          {
            ID: 44,
            Name: '日在校园'
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
