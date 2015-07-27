'use strict';

angular.module('misFinanzas.controllers').controller('GoalsController', ['$scope', '$interval', function ($scope, $interval) {
  $scope.isShown = false;

  $scope.vacationsMax = 500;
  $scope.vacationsValue = 0;

  $scope.universityMax = 400;
  $scope.universityValue = 0;

  $scope.concertMax = 300;
  $scope.concertValue = 0;

  $scope.carMax = 700;
  $scope.carValue = 0;

  $scope.getPercentage = function (total, value) {
    return (value * 100) / total;
  };

  $scope.getClass = function (total, value) {
    var percentage = (value * 100) / total;

    if (percentage <= 25)
      return 'red';
    else if (percentage > 25 && percentage <= 50)
      return 'orange';
    else if (percentage > 50 && percentage < 100)
      return 'yellow';
    else
      return 'green';
  };

  $scope.getColor = function (total, value) {
    var percentage = (value * 100) / total;

    if (percentage <= 25)
      return '#ef512c';
    else if (percentage > 25 && percentage <= 50)
      return '#ff890a';
    else if (percentage > 50 && percentage < 100)
      return '#dbce00';
    else
      return '#8dc63f';
  };

  $scope.showThem = function (inview) {
    if (inview && !$scope.isShown) {
      $scope.isShown = true;

      $interval(function () {
        $scope.vacationsValue = $scope.vacationsValue + 1;
      }, 4, ($scope.vacationsMax * 0.25));

      $interval(function () {
        $scope.universityValue = $scope.universityValue + 1;
      }, 4, ($scope.universityMax * 0.5));

      $interval(function () {
        $scope.concertValue = $scope.concertValue + 1;
      }, 4, ($scope.concertMax * 0.75));

      $interval(function () {
        $scope.carValue = $scope.carValue + 1;
      }, 4, ($scope.carMax));
    }
  };

}]);