(function() {
  'use strict';

  angular
    .module('app.contact-us')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/contact-us', {
        controller: 'ContactUsController',
        templateUrl: 'contact-us/contact-us.html'
      });
  }

})();
