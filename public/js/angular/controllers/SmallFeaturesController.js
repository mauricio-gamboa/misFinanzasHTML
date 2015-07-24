'use strict';

angular.module('misFinanzas.controllers')

  .controller('FeaturesSmallController', ['$scope', '$interval', function ($scope, $interval) {
    $scope.isShown = false;

    $scope.features = [];

    $scope.original = [
      {
        title: 'Mis Transacciones',
        image: 'public/images/small-feature-1.png'
      },
      {
        title: 'Mi Calendario',
        image: 'public/images/small-feature-2.png'
      },
      {
        title: 'Mi Análisis',
        image: 'public/images/small-feature-3.png'
      },
      {
        title: 'Mi Flujo de Efectivo',
        image: 'public/images/small-feature-4.png'
      },
      {
        title: 'Mi Presupuesto',
        image: 'public/images/small-feature-5.png'
      },
      {
        title: 'Mis Metas de Ahorro',
        image: 'public/images/small-feature-6.png'
      }
    ];

    $scope.showThem = function (inview) {
      if (inview && !$scope.isShown) {
        $scope.isShown = true;

        $interval(function (index) {
          $scope.features.push($scope.original[index]);
        }, 50, $scope.original.length);
      }
    };
  }]);