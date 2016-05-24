angular.module('app.controllers', ['ionic'])


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
        //Web
        try {
            var speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speechSynthesis.speak(speech);
        } catch (e) {

            console.log(e);
        }
        //Android
        try {
            TTS.speak({
                text: text,
                locale: 'es-ES',
                rate: 1.5
            }, function() {
                // Do Something after success
            }, function(reason) {
                // Handle the error case
            });
        } catch (e) {
            // statements
            console.log(e);
        }



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
        //Web
        try {
            var speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speechSynthesis.speak(speech);
        } catch (e) {

            console.log(e);
        }
        //Android
        try {
            TTS.speak({
                text: text,
                locale: 'es-ES',
                rate: 1.5
            }, function() {
                // Do Something after success
            }, function(reason) {
                // Handle the error case
            });
        } catch (e) {
            // statements
            console.log(e);
        }



    };


    $scope.speakText('Eres genial, has ganado 10 monedas');


})

.controller('vuelveAIntentarloCtrl', function($scope) {
    $scope.speakText = function(text) {
        //Web
        try {
            var speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speechSynthesis.speak(speech);
        } catch (e) {

            console.log(e);
        }
        //Android
        try {
            TTS.speak({
                text: text,
                locale: 'es-ES',
                rate: 1.5
            }, function() {
                // Do Something after success
            }, function(reason) {
                // Handle the error case
            });
        } catch (e) {
            // statements
            console.log(e);
        }



    };

    $scope.speakText('Puedes hacerlo mejor, pero toma 2 monedas');

})

.controller('completarPalabras1Ctrl', function($scope, $state) {
    var respuestaActual;
    var respuestaCorrecta = 'ol';
    $scope.items = ['al', 'el', 'il', 'ol', 'ul'];


    $scope.speakText = function(text) {
        //Web
        try {
            var speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speechSynthesis.speak(speech);
        } catch (e) {

            console.log(e);
        }
        //Android
        try {
            TTS.speak({
                text: text,
                locale: 'es-ES',
                rate: 1.5
            }, function() {
                // Do Something after success
            }, function(reason) {
                // Handle the error case
            });
        } catch (e) {
            // statements
            console.log(e);
        }



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


.controller('completarPalabras1Ctrl2', function($scope, $state) {
    var respuestaActual;
    var respuestaCorrecta = 'co';
    $scope.items = ['te', 'ba', 'co', 'ci', 'ce'];


    $scope.speakText = function(text) {
        //Web
        try {
            var speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speechSynthesis.speak(speech);
        } catch (e) {

            console.log(e);
        }
        //Android
        try {
            TTS.speak({
                text: text,
                locale: 'es-ES',
                rate: 1.5
            }, function() {
                // Do Something after success
            }, function(reason) {
                // Handle the error case
            });
        } catch (e) {
            // statements
            console.log(e);
        }



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

.controller('acercaDeCtrl', function($scope) {

})

.controller('instruccionesCtrl', function($scope) {

})

.controller('usuarioCtrl', function($scope) {

})