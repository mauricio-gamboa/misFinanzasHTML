'use strict';

angular.module('misFinanzas.controllers').controller('BudgetsController', ['$scope', '$interval', function ($scope, $interval) {

  $scope.showFirst = false;
  $scope.showMedium = false;
  $scope.showLast = false;

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
    if (inview && !$scope.showFirst) {
      $scope.showFirst = true;

      $interval(function () {
        $scope.transportationVal = $scope.transportationVal + 1;
        if ($scope.transportationVal == ($scope.transportationMax * 0.25)) $scope.displayMedium();
      }, 4, ($scope.transportationMax * 0.25));
    }
  };

  $scope.displayMedium = function () {
    if (!$scope.showMedium) {
      $scope.showMedium = true;

      $interval(function () {
        $scope.marketVal = $scope.marketVal + 1;
        if ($scope.marketVal == ($scope.marketMax * 0.75)) $scope.displayLast();
      }, 4, ($scope.marketMax * 0.75));
    }
  };

  $scope.displayLast = function () {
    if (!$scope.showLast) {
      $scope.showLast = true;

      $interval(function () {
        $scope.restaurantsVal = $scope.restaurantsVal + 1;
      }, 4, ($scope.restaurantsMax));
    }
  };
}]);