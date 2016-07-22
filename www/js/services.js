angular.module('app.services', [])

.factory('BlankFactory', [function () {

}])

.service('SpeakService', [function () {
  this.speakText = function (text) {
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
      }, function () {
        // Do Something after success
      }, function (reason) {
        // Handle the error case
      });
    } catch (e) {
      // statements
      console.log(e);
    }



  };
}]);
