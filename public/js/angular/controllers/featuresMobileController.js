'use strict';

angular.module('misFinanzas.controllers')

  .controller('FeaturesMobileController', ['$scope', function ($scope) {
    $scope.features = [
      {
        title: 'Maneja fácilmente tus finanzas',
        image: 'public/images/feature-1.png',
        content: 'Crea presupuestos y monitorea tus gastos por categoría. Podrás administrar fácilmente tus finanzas y alcanzar tus metas de ahorro.'
      },
      {
        title: 'Elige tu moneda de análisis',
        image: 'public/images/feature-2.png',
        content: 'Elige la moneda en la cual deseas analizar tu información financiera. Adiós a los tipos de cambio, Mis Finanzas hace las conversiones por ti.'
      },
      {
        title: 'Sincroniza Automáticamente tus productos BAC | Credomatic',
        image: 'public/images/feature-3.png',
        content: 'Sincroniza la información de todos tus productos BAC Credomatic. Dedicarás menos tiempo a actualizar datos y más a tomar mejores decisiones financieras.'
      },
      {
        title: 'Obtén una visión completa de tus finanzas',
        image: 'public/images/feature-4.png',
        content: 'Agrega fácilmente tus cuentas y tarjetas de otras instituciones. Podrás consolidar toda tu información y visualizar tu panorama financiero completo.'
      }
    ];
  }]);