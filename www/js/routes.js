angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.acercaDe', {
    url: '/acercade',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDe.html',
        controller: 'acercaDeCtrl'
      }
    }
  })

  .state('menu.usuario', {
    url: '/Usuario',
    views: {
      'side-menu21': {
        templateUrl: 'templates/usuario.html',
        controller: 'usuarioCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.tiposDeJuegos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tiposDeJuegos.html',
        controller: 'tiposDeJuegosCtrl'
      }
    }
  })

  .state('menu.completarPalabras', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/completarPalabras.html',
        controller: 'completarPalabrasCtrl'
      }
    }
  })

  .state('menu.felicidades', {
    url: '/felicidades',
    views: {
      'side-menu21': {
        templateUrl: 'templates/felicidades.html',
        controller: 'felicidadesCtrl'
      }
    }
  })

  .state('vuelveAIntentarlo', {
    url: '/page8',
    templateUrl: 'templates/vuelveAIntentarlo.html',
    controller: 'vuelveAIntentarloCtrl'
  })

  .state('menu.completarPalabras1', {
    url: '/CompletarPalabras1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/completarPalabras1.html',
        controller: 'completarPalabras1Ctrl'
      }
    }
  })

  .state('menu.completarPalabras2', {
    url: '/CompletarPalabras1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/completarPalabras2.html',
        controller: 'completarPalabras1Ctrl2'
      }
    }
  })

    .state('menu.completarPalabras3', {
    url: '/CompletarPalabras1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/completarPalabras3.html',
        controller: 'completarPalabras1Ctrl3'
      }
    }
  })

  .state('menu.instrucciones', {
    url: '/instrucciones',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instrucciones.html',
        controller: 'instruccionesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});