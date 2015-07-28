'use strict';

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
  }])

  .directive('stopVideo', [function () {
    return {
      restrict: 'A',

      link: function (scope, element) {
        element.on('hidden.bs.modal', function () {
          var $iframe = element.find('iframe');
          $iframe.attr('src', $iframe.attr('src'));
        });
      }
    };
  }])

  .directive('scrollAnimate', ['deviceDetector', '$window', '$document', function (deviceDetector, $window, $document) {
    return {
      restrict: 'A',

      link: function (scope, element) {
        if (deviceDetector.browser != 'safari') {
          var distance = element.offset().top - 400;
          var $phone = element.find('.phone');
          var windowElement = angular.element($window);
          var bodyElement = angular.element($document[0].body);
          var $html = $('html');
          var $use = ((deviceDetector.browser == 'firefox' || deviceDetector.browser == 'ie') ? $html : bodyElement);
          var top = 100;
          var y = top;
          var lastScrollTop = 0;

          $phone.css('transform', 'translate3d(0px, ' + y + 'px, 0px)');

          windowElement.on('scroll', function () {
            if ($use) {
              if ($use.scrollTop() >= distance) {
                var st = $(this).scrollTop();

                if (st > lastScrollTop) {
                  if (y > 0) y--;
                } else {
                  if (y < top) y++;
                }

                $phone.css('transform', 'translate3d(0px, ' + y + 'px, 0px)');

                lastScrollTop = st;
              }
            }
          });
        }
      }
    };
  }]);