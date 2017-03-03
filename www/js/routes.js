angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.pollo', {
    url: '/pollo',
    views: {
      'pollo': {
        templateUrl: 'templates/pollo.html',
        controller: 'polloCtrl'
      }
    }
  })

  .state('tabsController.chori', {
    url: '/chori',
    views: {
      'chori': {
        templateUrl: 'templates/chori.html',
        controller: 'choriCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('home', {
    url: '/homecliente',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('tabsController.cerdo', {
    url: '/cerdo',
    views: {
      'cerdo': {
        templateUrl: 'templates/cerdo.html',
        controller: 'cerdoCtrl'
      }
    }
  })

  .state('tabsController.vaca', {
    url: '/vaca',
    views: {
      'vaca': {
        templateUrl: 'templates/vaca.html',
        controller: 'vacaCtrl'
      }
    }
  })

  .state('tabsController.embu', {
    url: '/embutido',
    views: {
      'embu': {
        templateUrl: 'templates/embu.html',
        controller: 'embuCtrl'
      }
    }
  })
   .state('carga', {
    url: '/carga',
    templateUrl: 'templates/carga.html',
    controller: 'CargaCtrl'
  })
 

$urlRouterProvider.otherwise('/login')

  

});