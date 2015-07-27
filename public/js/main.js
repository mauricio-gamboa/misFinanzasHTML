'use strict';

var misFinanzas = angular.module('misFinanzas', [
  'ngAnimate',
  'angular-inview',
  'angular-svg-round-progress',
  'ng.deviceDetector',
  'misFinanzas.controllers',
  'misFinanzas.services',
  'misFinanzas.directives',
  'misFinanzas.filters'
]);

angular.module('misFinanzas.controllers', []);

angular.module('misFinanzas.services', []);

angular.module('misFinanzas.directives', []);

angular.module('misFinanzas.filters', []);;'use strict';

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
  }]);;'use strict';

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
}]);;'use strict';

angular.module('misFinanzas.controllers')

  .controller('FeaturesController', ['$scope', '$interval', function ($scope, $interval) {
    $scope.isShown = false;

    $scope.features = [];

    $scope.original = [
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

    $scope.showThem = function (inview) {
      if (inview && !$scope.isShown) {
        $scope.isShown = true;

        $interval(function (index) {
          $scope.features.push($scope.original[index]);
        }, 50, $scope.original.length);
      }
    };
  }]);;'use strict';

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
  }]);;'use strict';

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

}]);;'use strict';

angular.module('misFinanzas.controllers').controller('MainController', ['$scope', function ($scope) {
  $scope.isShowThem = false;

  $scope.showThem = function (inView) {
    if (!$scope.isShowThem && inView)
      $scope.isShowThem = true;
  };
}]);;'use strict';

angular.module('misFinanzas.directives', [])

  .directive('changeMenu', ['deviceDetector', '$window', '$document', function (deviceDetector, $window, $document) {
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
  }])

  .directive('owlSingleNav', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',

      link: function (scope, element) {

        $timeout(function () {
          element.owlCarousel({
            autoPlay: true,
            singleItem: true
          });
        }, 0);
      }
    };
  }])

  .directive('enterElement', ['$animate', function ($animate) {
    return {
      restrict: 'A',

      link: function (scope, element) {
        $animate.addClass(element, 'on');
      }
    };
  }])

  .directive('heightParent', ['$window', function ($window) {
    return {
      restrict: 'A',

      link: function (scope, element) {

        element.parent().css('min-height', element.innerHeight() + 30);

        var w = angular.element($window);

        w.on('resize', function () {
          element.parent().css('min-height', element.innerHeight() + 30);
        });
      }
    };
  }]);;'use strict';;'use strict';