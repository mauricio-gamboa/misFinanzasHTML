'use strict';

angular.module('misFinanzas.controllers').controller('BudgetsController', ['$scope', '$interval', function ($scope, $interval) {

  $scope.isShowThem = false;

  $scope.transportationMax = 200;
  $scope.transportationVal = 0;

  $scope.marketMax = 300;
  $scope.marketVal = 0;

  $scope.restaurantsMax = 125;
  $scope.restaurantsVal = 0;

  $scope.getStyle = function (total, value, style) {
    return style + ': ' + (value * 100) / total + '%;';
  };

  $scope.getClass = function (total, value) {
    var percentage = (value) / total;

    if (percentage <= 0.25)
      return 'green';
    else if (percentage > 0.25 && percentage < 1)
      return 'yellow';
    else
      return 'red';
  };

  $scope.showThem = function (inview) {
    if (inview && !$scope.isShowThem) {
      $scope.isShowThem = true;

      $interval(function () {
        $scope.transportationVal = $scope.transportationVal + 1;
      }, 100, ($scope.transportationMax * 0.25));

      $interval(function () {
        $scope.marketVal = $scope.marketVal + 1;
      }, 4, ($scope.marketMax * 0.75));

      $interval(function () {
        $scope.restaurantsVal = $scope.restaurantsVal + 1;
      }, 30, ($scope.restaurantsMax));
    }
  };
}]);