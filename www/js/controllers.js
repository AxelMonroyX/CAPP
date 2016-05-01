angular.module('app.controllers', [])


.controller('homeCtrl', function($scope, $http) {

    $http.get("js/user.json")
        .then(function(response) {
            $scope.myWelcome = response.data.nombre;
            if (response.data.nombre != "") {
                $scope.speakText('Bienvenido ' + response.data.nombre);
            };
            //$scope.speakText('Bienvenido ' + response.data.nombre);
        });
    $scope.speakText = function(text) {
        var speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-ES';
        speechSynthesis.speak(speech);
    };


})

.controller('cartCtrl', function($scope) {

})

.controller('cloudCtrl', function($scope) {

})

.controller('tiposDeJuegosCtrl', function($scope) {

})

.controller('completarPalabrasCtrl', function($scope) {

})

.controller('felicidadesCtrl', function($scope) {
    $scope.speakText = function(text) {
        var speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-ES';
        speechSynthesis.speak(speech);
    };

    $scope.speakText('Eres genial, has ganado 10 monedas');


})

.controller('vuelveAIntentarloCtrl', function($scope) {
    $scope.speakText = function(text) {
        var speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-ES';
        speechSynthesis.speak(speech);
    };

    $scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');

})

.controller('completarPalabras1Ctrl', function($scope, $state) {
    var respuestaActual;
    var respuestaCorrecta = 'ol';
    $scope.items = ['al', 'el', 'il', 'ol', 'ul'];


    $scope.speakText = function(text) {
        var speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-ES';
        speechSynthesis.speak(speech);
    };

    $scope.speakText('Selecciona solo una opcion');



    $scope.respuesta = function(text) {
        respuestaActual = text;
    };
    $scope.verificar = function() {
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