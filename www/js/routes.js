angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.preguntas', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/preguntas.html',
        controller: 'preguntasCtrl'
      }
    }
  })

  .state('tabsController.perfil', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('universidad', {
    url: '/page5',
    templateUrl: 'templates/universidad.html',
    controller: 'universidadCtrl'
  })

  .state('carrera', {
    url: '/page6',
    templateUrl: 'templates/carrera.html',
    controller: 'carreraCtrl'
  })

  .state('tabsController.pregunta1', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/pregunta1.html',
        controller: 'pregunta1Ctrl'
      }
    }
  })

  .state('tabsController.pregunta2', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/pregunta2.html',
        controller: 'pregunta2Ctrl'
      }
    }
  })

  .state('tabsController.pregunta3', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/pregunta3.html',
        controller: 'pregunta3Ctrl'
      }
    }
  })

  .state('tabsController.resultados', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/resultados.html',
        controller: 'resultadosCtrl'
      }
    }
  })

  .state('tabsController.facebook', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/facebook.html',
        controller: 'facebookCtrl'
      }
    }
  })

  .state('tabsController.page', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      }
    }
  })

  .state('page2', {
    url: '/page13',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('login', {
    url: '/page14',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});