'use strict';

var myApp = angular.module('misFinanzas', ['angular-svg-round-progress', 'ng.deviceDetector']);

myApp.controller('GoalsController', ['$scope', function ($scope) {
  $scope.vacationsMax = 850;
  $scope.vacationsValue = $scope.vacationsMax * 0.25;

  $scope.universityMax = 200;
  $scope.universityValue = $scope.universityMax * 0.5;

  $scope.concertMax = 450;
  $scope.concertValue = $scope.concertMax * 0.75;

  $scope.carMax = 2250;
  $scope.carValue = $scope.carMax * 1;

  $scope.getPercentage = function (total, value) {
    return (value * 100) / total;
  };

  $scope.getClass = function (total, value) {
    var percentage = (value * 100) / total;

    if (percentage <= 25)
      return 'red';
    else if (percentage <= 50)
      return 'orange';
    else if (percentage <= 75)
      return 'yellow';
    else
      return 'green';
  };

  $scope.getColor = function (total, value) {
    var percentage = (value * 100) / total;

    if (percentage <= 25)
      return '#ef512c';
    else if (percentage <= 50)
      return '#ff890a';
    else if (percentage <= 75)
      return '#dbce00';
    else
      return '#8dc63f';
  };
}]);

myApp.directive('changeMenu', ['deviceDetector', '$window', '$document', function (deviceDetector, $window, $document) {
  return {
    restrict: 'A',

    link: function (scope, element) {
      var windowElement = angular.element($window);
      var bodyElement = angular.element($document[0].body);
      var $html = $('html');
      var $use = ((deviceDetector.browser == 'firefox' || deviceDetector.browser == 'ie') ? $html : bodyElement);

      windowElement.on('scroll', function () {
        if ($use) {
          var marginTop = element.css('margin-top').replace('px', '') * 1;
          var marginBottom = element.css('margin-bottom').replace('px', '') * 1;
          var height = (element.outerHeight() - element.outerHeight()) + marginBottom + marginTop;

          if ($use.scrollTop() > (height))
            element.addClass('smaller-menu');
          else
            element.removeClass('smaller-menu');
        }
      });
    }
  };
}]);