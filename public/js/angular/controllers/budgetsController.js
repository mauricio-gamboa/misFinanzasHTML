'use strict';

angular.module('misFinanzas.controllers').controller('BudgetsController', ['$scope', function ($scope) {

  $scope.transportationMax = 300;
  $scope.transportationVal = $scope.transportationMax * (1 / 3);

  $scope.marketMax = 500;
  $scope.marketVal = $scope.marketMax * (2 / 3);

  $scope.restaurantsMax = 125;
  $scope.restaurantsVal = $scope.restaurantsMax * (3 / 3);

  $scope.getStyle = function (total, value, style) {
    return style + ': ' + (value * 100) / total + '%;';
  };

  $scope.getClass = function (total, value) {
    var percentage = (value) / total;

    if (percentage <= (1 / 3))
      return 'green';
    else if (percentage <= (2 / 3))
      return 'yellow';
    else
      return 'red';
  };
}]);