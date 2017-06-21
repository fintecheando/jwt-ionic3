cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-tts.tts",
        "file": "plugins/cordova-plugin-tts/www/tts.js",
        "pluginId": "cordova-plugin-tts",
        "clobbers": [
            "TTS"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognition",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognition.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognition"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionError",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionError.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionError"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionAlternative",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionAlternative.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionAlternative"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResult",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResult.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionResult"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResultList",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResultList.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionResultList"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechRecognitionEvent",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionEvent.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechRecognitionEvent"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechGrammar",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammar.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechGrammar"
        ]
    },
    {
        "id": "phonegap-plugin-speech-recognition.SpeechGrammarList",
        "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammarList.js",
        "pluginId": "phonegap-plugin-speech-recognition",
        "clobbers": [
            "SpeechGrammarList"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-speechrecognition.SpeechRecognition",
        "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
        "pluginId": "cordova-plugin-speechrecognition",
        "merges": [
            "window.plugins.speechRecognition"
        ]
    },
    {
        "id": "cordova-plugin-sim.Sim",
        "file": "plugins/cordova-plugin-sim/www/sim.js",
        "pluginId": "cordova-plugin-sim",
        "merges": [
            "window.plugins.sim"
        ]
    },
    {
        "id": "cordova-plugin-sim.SimAndroid",
        "file": "plugins/cordova-plugin-sim/www/android/sim.js",
        "pluginId": "cordova-plugin-sim",
        "merges": [
            "window.plugins.sim"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-tts": "0.2.3",
    "cordova-plugin-compat": "1.1.0",
    "phonegap-plugin-speech-recognition": "0.2.0",
    "cordova-plugin-geolocation": "2.4.3",
    "cordova-plugin-speechrecognition": "1.1.2",
    "cordova-plugin-sim": "1.3.3"
};
// BOTTOM OF METADATA
});