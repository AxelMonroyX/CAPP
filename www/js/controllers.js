angular.module('app.controllers', [])

<<<<<<< HEAD
.controller('homeCtrl', function($scope) {
=======
.controller('homeCtrl', function($scope, $http) {

	$http.get("js/user.json")
		.then(function(response) {
			$scope.myWelcome = response.data.nombre;
			if (response.data.nombre!="") {$scope.speakText('Bienvenido ' + response.data.nombre);};
			//$scope.speakText('Bienvenido ' + response.data.nombre);
		});
	$scope.speakText = function(text) {
		var speech = new SpeechSynthesisUtterance(text);
		speech.lang = 'es-ES';
		speechSynthesis.speak(speech);
	};
>>>>>>> completarpalabras

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

})

.controller('vuelveAIntentarloCtrl', function($scope) {

})

.controller('completarPalabras1Ctrl', function($scope) {
  $scope.items=['al','el','il','ol','ul'];

<<<<<<< HEAD
})
=======


	$scope.speakText = function(text) {
		var speech = new SpeechSynthesisUtterance(text);
		speech.lang = 'es-ES';
		speechSynthesis.speak(speech);
	};

	$scope.speakText('Selecciona solo una opcion');

})
>>>>>>> completarpalabras
