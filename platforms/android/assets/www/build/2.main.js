webpackJsonp([2],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_page__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */]
        ]
    })
], ProfilePageModule);

//# sourceMappingURL=profile-page.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedPage; });
var ProtectedPage = (function () {
    function ProtectedPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ProtectedPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.navCtrl.setRoot('LoginPage');
                return false;
            }
        });
        return true;
    };
    return ProtectedPage;
}());

//# sourceMappingURL=protected-page.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name Speech Recognition
 * @description
 * This plugin does speech recognition using cloud services
 *
 * @usage
 * ```typescript
 * import { SpeechRecognition } from '@ionic-native/speech-recognition';
 *
 * constructor(private speechRecognition: SpeechRecognition) { }
 *
 * ...
 *
 *
 *
 * // Check feature available
 * this.speechRecognition.isRecognitionAvailable()
 *   .then((available: boolean) => console.log(available))
 *
 * // Start the recognition process
 * this.speechRecognition.startListening(options)
 *   .subscribe(
 *     (matches: Array<string>) => console.log(matches),
 *     (onerror) => console.log('error:', onerror)
 *   )
 *
 * // Stop the recognition process (iOS only)
 * this.speechRecognition.stopListening()
 *
 * // Get the list of supported languages
 * this.speechRecognition.getSupportedLanguages()
 *   .then(
 *     (languages: Array<string>) => console.log(languages),
 *     (error) => console.log(error)
 *   )
 *
 * // Check permission
 * this.speechRecognition.hasPermission()
 *   .then((hasPermission: boolean) => console.log(hasPermission))
 *
 * // Request permissions
 * this.speechRecognition.requestPermission()
 *   .then(
 *     () => console.log('Granted'),
 *     () => console.log('Denied')
 *   )
 *
 * ```
 */
var SpeechRecognition = (function (_super) {
    __extends(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check feature available
     * @return {Promise<boolean>}
     */
    SpeechRecognition.prototype.isRecognitionAvailable = function () {
        return;
    };
    /**
     * Start the recognition process
     * @return {Promise< Array<string> >} list of recognized terms
     */
    SpeechRecognition.prototype.startListening = function (options) {
        return;
    };
    /**
     * Stop the recognition process
     */
    SpeechRecognition.prototype.stopListening = function () {
        return;
    };
    /**
     * Get the list of supported languages
     * @return {Promise< Array<string> >} list of languages
     */
    SpeechRecognition.prototype.getSupportedLanguages = function () {
        return;
    };
    /**
     * Check permission
     * @return {Promise<boolean>} has permission
     */
    SpeechRecognition.prototype.hasPermission = function () {
        return;
    };
    /**
     * Request permissions
     * @return {Promise<void>}
     */
    SpeechRecognition.prototype.requestPermission = function () {
        return;
    };
    return SpeechRecognition;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
SpeechRecognition.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
SpeechRecognition.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "isRecognitionAvailable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        callbackOrder: 'reverse',
        observable: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], SpeechRecognition.prototype, "startListening", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "stopListening", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "getSupportedLanguages", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "hasPermission", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "requestPermission", null);
SpeechRecognition = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'SpeechRecognition',
        plugin: 'cordova-plugin-speechrecognition',
        pluginRef: 'plugins.speechRecognition',
        repo: 'https://github.com/pbakondy/cordova-plugin-speechrecognition',
        platforms: ['Android', 'iOS']
    })
], SpeechRecognition);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextToSpeech; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Text To Speech
 * @description
 * Text to Speech plugin
 *
 * @usage
 * ```typescript
 * import { TextToSpeech } from '@ionic-native/text-to-speech';
 *
 * constructor(private tts: TextToSpeech) { }
 *
 * ...
 *
 * this.tts.speak('Hello World')
 *   .then(() => console.log('Success'))
 *   .catch((reason: any) => console.log(reason));
 *
 * ```
 * @interfaces
 * TTSOptions
 */
var TextToSpeech = (function (_super) {
    __extends(TextToSpeech, _super);
    function TextToSpeech() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function speaks
     * @param textOrOptions {string | TTSOptions} Text to speak or TTSOptions
     * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
     */
    TextToSpeech.prototype.speak = function (textOrOptions) {
        return;
    };
    /**
     * Stop any current TTS playback
     * @return {Promise<any>}
     */
    TextToSpeech.prototype.stop = function () {
        return;
    };
    return TextToSpeech;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
TextToSpeech.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TextToSpeech.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TextToSpeech.prototype, "speak", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TextToSpeech.prototype, "stop", null);
TextToSpeech = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'Text To Speech',
        plugin: 'cordova-plugin-tts',
        pluginRef: 'TTS',
        repo: 'https://github.com/vilic/cordova-plugin-tts',
        platforms: ['Android', 'iOS', 'Windows Phone 8']
    })
], TextToSpeech);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(navCtrl, navParams, menuCtrl, storage, formBuilder, speech, tts, zone, authService) {
        var _this = _super.call(this, navCtrl, navParams, storage) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.menuCtrl = menuCtrl;
        _this.storage = storage;
        _this.formBuilder = formBuilder;
        _this.speech = speech;
        _this.tts = tts;
        _this.zone = zone;
        _this.authService = authService;
        _this.isListening = false;
        _this.storage.get('user').then(function (user) {
            _this.user = user;
        });
        _this.profileData = _this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
            workPhone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
            firstname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
            secondname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required]
        });
        return _this;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true);
    };
    return ProfilePage;
}(__WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__["a" /* ProtectedPage */]));
ProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile-page',template:/*ion-inline-start:"/home/afiliamedica/dev/jwt-ionic3/src/pages/profile-page/profile-page.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>{{ \'page.profile\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngIf="user">\n    \n    <ion-row>\n      <ion-col col-25>{{ \'label.username\' | translate }}:</ion-col>\n      <ion-col col-75>{{ user.username }}</ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-25>{{ \'label.email\' | translate }}:</ion-col>\n      <ion-col col-75>{{ user.email }}</ion-col>\n    </ion-row>\n       \n  </ion-card>\n    \n   <form [formGroup]="profileData" (ngSubmit)="register()" >\n        <ion-grid>\n          <ion-row>\n            <ion-col width-90>\n                <ion-item>\n                  <ion-label floating>{{ \'label.name\' | translate }}:</ion-label>\n                  <ion-input type="text" formControlName="name" ></ion-input>\n                </ion-item>  \n            </ion-col>\n            <ion-col width-10>\n                  <ion-icon name="mic" item-right (click)="listenName()"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width-90>\n                <ion-item>\n                  <ion-label floating>{{ \'label.lastName\' | translate }}:</ion-label>\n                  <ion-input type="text" formControlName="firstname" ></ion-input>\n                </ion-item>  \n            </ion-col>\n            <ion-col width-10>\n                  <ion-icon name="mic" item-right (click)="listenFirstName()"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width-90>\n                <ion-item>\n                  <ion-label floating>{{ \'label.secondLastName\' | translate }}:</ion-label>\n                  <ion-input type="text" formControlName="secondname" ></ion-input>\n                </ion-item>  \n            </ion-col>\n            <ion-col width-10>\n                  <ion-icon name="mic" item-right (click)="secondFirstName()"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width-90>\n                <ion-item>\n                  <ion-label floating>{{ \'label.workPhone\' | translate }}:</ion-label>\n                  <ion-input type="text" formControlName="workPhone" ></ion-input>\n                </ion-item>  \n            </ion-col>\n            <ion-col width-10>\n                  <ion-icon name="mic" item-right (click)="secondFirstName()"></ion-icon>\n            </ion-col>\n          </ion-row>  \n         \n\n\n        </ion-grid>\n           <button margin-top ion-button type="submit" [disabled]="!profileData.valid">{{ \'button.register\' | translate  }}</button>        \n      </form>  \n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/afiliamedica/dev/jwt-ionic3/src/pages/profile-page/profile-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */]])
], ProfilePage);

//# sourceMappingURL=profile-page.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map