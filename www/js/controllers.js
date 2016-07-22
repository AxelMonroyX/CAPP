angular.module('app.controllers', ['ionic'])


.controller('homeCtrl', function ($scope, $http, SpeakService) {

  $http.get("js/user.json")
    .then(function (response) {
      $scope.myWelcome = response.data.nombre;
      if (response.data.nombre != "") {
        SpeakService.speakText('Bienvenido ' + response.data.nombre);
      };
      //$scope.speakText('Bienvenido ' + response.data.nombre);
    });


})

.controller('cartCtrl', function ($scope) {

})

.controller('cloudCtrl', function ($scope) {

})

.controller('tiposDeJuegosCtrl', function ($scope) {

})

.controller('completarPalabrasCtrl', function ($scope) {

})

.controller('felicidadesCtrl', function ($scope, SpeakService) {
  $scope.speakText = function (text) {
    SpeakService.speakText(text);
  };


  $scope.speakText('Eres genial, has ganado 10 monedas');


})

.controller('vuelveAIntentarloCtrl', function ($scope, SpeakService) {
  $scope.speakText = function (text) {
    SpeakService.speakText(text);


  };

  $scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');

})

.controller('completarPalabras1Ctrl', function ($scope, $state, SpeakService) {
  var respuestaActual;
  var respuestaCorrecta = 'ol';
  $scope.items = ['al', 'el', 'il', 'ol', 'ul'];


  $scope.speakText = function (text) {
    SpeakService.speakText(text)


  };

  $scope.speakText('Selecciona solo una opcion');



  $scope.respuesta = function (text) {
    respuestaActual = text;
  };
  $scope.verificar = function () {
    if (respuestaActual == respuestaCorrecta) {
      $state.go('menu.felicidades', {}, {
        reload: true
      });
    } else {
      //$scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');
      $state.go('vuelveAIntentarlo', {}, {
        reload: true
      });
    }
  };



})


.controller('completarPalabras1Ctrl2', function ($scope, $state, SpeakService) {
  var respuestaActual;
  var respuestaCorrecta = 'co';
  $scope.items = ['te', 'ba', 'co', 'ci', 'ce'];


  $scope.speakText = function (text) {
    SpeakService.speakText(text);


  };

  $scope.speakText('Selecciona solo una opcion');



  $scope.respuesta = function (text) {
    respuestaActual = text;
  };
  $scope.verificar = function () {
    if (respuestaActual == respuestaCorrecta) {
      $state.go('menu.felicidades', {}, {
        reload: true
      });
    } else {
      //$scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');
      $state.go('vuelveAIntentarlo', {}, {
        reload: true
      });
    }
  };



})


.controller('completarPalabras1Ctrl3', function ($scope, $state, SpeakService) {
  var respuestaActual;
  var respuestaCorrecta = 'cera';
  $scope.items = ['mesa', 'sa', 'ra', 'cera', 'nace'];


  $scope.speakText = function (text) {
    SpeakService.speakText(text)

  };

  $scope.speakText('Selecciona solo una opcion');



  $scope.respuesta = function (text) {
    respuestaActual = text;
  };
  $scope.verificar = function () {
    if (respuestaActual == respuestaCorrecta) {
      $state.go('menu.felicidades', {}, {
        reload: true
      });
    } else {
      //$scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');
      $state.go('vuelveAIntentarlo', {}, {
        reload: true
      });
    }
  };



})


.controller('completarPalabras1Ctrl4', function ($scope, $state, SpeakService) {
  var respuestaActual;
  var respuestaCorrecta = 'tón';
  $scope.items = ['tan', 'tón', 'pón', 'zón', 'tin'];


  $scope.speakText = function (text) {
    SpeakService.speakText(text)

  };

  $scope.speakText('Selecciona solo una opcion');



  $scope.respuesta = function (text) {
    respuestaActual = text;
  };
  $scope.verificar = function () {
    if (respuestaActual == respuestaCorrecta) {
      $state.go('menu.felicidades', {}, {
        reload: true
      });
    } else {
      //$scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');
      $state.go('vuelveAIntentarlo', {}, {
        reload: true
      });
    }
  };



})


.controller('completarPalabras1Ctrl5', function ($scope, $state, SpeakService) {
  var respuestaActual;
  var respuestaCorrecta = 'Ca';
  $scope.items = ['Ta', 'Ca', 'Pa', 'To', 'Da'];


  $scope.speakText = function (text) {
    SpeakService.speakText(text)

  };

  $scope.speakText('Selecciona solo una opcion');



  $scope.respuesta = function (text) {
    respuestaActual = text;
  };
  $scope.verificar = function () {
    if (respuestaActual == respuestaCorrecta) {
      $state.go('menu.felicidades', {}, {
        reload: true
      });
    } else {
      //$scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');
      $state.go('vuelveAIntentarlo', {}, {
        reload: true
      });
    }
  };



})




.controller('acercaDeCtrl', function ($scope) {

})

.controller('instruccionesCtrl', function ($scope) {

})

.controller('usuarioCtrl', function ($scope) {

})
