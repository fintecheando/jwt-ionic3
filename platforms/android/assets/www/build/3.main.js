webpackJsonp([3],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_page__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register-page.module.js.map

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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, menuCtrl, storage, formBuilder, speech, tts, zone, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.speech = speech;
        this.tts = tts;
        this.zone = zone;
        this.authService = authService;
        this.isListening = false;
        this.regData = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        //hide menu when on the login page, regardless of the screen resolution
        this.menuCtrl.enable(false);
        this.tts.speak({
            locale: 'es-US',
            rate: 0.9,
            text: 'Afíliate como Médico'
        })
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.regData.value)
            .then(function () { return _this.navCtrl.setRoot('ProfilePage'); })
            .catch(function (e) { return console.log("reg error", e); });
    };
    RegisterPage.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech.hasPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.speech.requestPermission();
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.listenUserName = function () {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }
        this.toggleListenMode();
        var _this = this;
        this.speech.startListening()
            .subscribe(function (matches) {
            _this.zone.run(function () {
                _this.matches = matches;
                _this.regData.controls['username'].setValue(matches[0]);
            });
        }, function (error) { return console.error(error); });
    };
    RegisterPage.prototype.listenEmail = function () {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }
        this.toggleListenMode();
        var _this = this;
        this.speech.startListening()
            .subscribe(function (matches) {
            _this.zone.run(function () {
                _this.matches = matches;
                _this.regData.controls['email'].setValue(matches[0]);
            });
        }, function (error) { return console.error(error); });
    };
    RegisterPage.prototype.toggleListenMode = function () {
        this.isListening = this.isListening ? false : true;
        console.log('listening mode is now : ' + this.isListening);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register-page',template:/*ion-inline-start:"/home/afiliamedica/dev/jwt-ionic3/src/pages/register-page/register-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>       \n    <ion-title>{{ \'page.register\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <!--<ion-card>    \n  <p>Is listening ? : {{ isListening }}</p>\n  <button ion-button (click)="getPermission()">Permisos</button>\n   <button ion-button (click)="listen()">\n                <div>\n                  <ion-icon name="mic">\n                    <label>Dictame</label>\n                  </ion-icon>\n                </div>\n              </button> \n          \n      <ion-card-content *ngFor="let match of matches">\n        <p>{{ match }}</p>\n      </ion-card-content>\n    </ion-card>  \n-->\n <form [formGroup]="regData" (ngSubmit)="register()" >\n  <ion-grid>\n    <ion-row>\n      <ion-col width-90>\n          <ion-item>\n            <ion-label floating>{{ \'label.username\' | translate }}:</ion-label>\n            <ion-input type="text" formControlName="username" ></ion-input>\n          </ion-item>  \n      </ion-col>\n      <ion-col width-10>\n            <ion-icon name="mic" item-right (click)="listenUserName()"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col width-90>    \n          <ion-item>\n            <ion-label floating>{{ \'label.email\' | translate }}:</ion-label>\n            <ion-input type="email" formControlName="email"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col width-10>\n            <ion-icon name="mic" item-right (click)="listenEmail()"></ion-icon>\n        </ion-col>\n    </ion-row>\n      \n    <ion-row>\n        <ion-col width-100>   \n          <ion-item>\n            <ion-label floating>{{ \'label.password\' | translate }}:</ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n    </ion-row>\n    \n    <ion-row>\n        <ion-col width-100>   \n      \n          <ion-item>\n            <ion-label floating>{{ \'label.confirmPassword\' | translate }}:</ion-label>\n            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n    </ion-row>\n    \n    \n  </ion-grid>\n     <button margin-top ion-button type="submit" [disabled]="!regData.valid">{{ \'button.register\' | translate  }}</button>        \n</form>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/afiliamedica/dev/jwt-ionic3/src/pages/register-page/register-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */]])
], RegisterPage);

//# sourceMappingURL=register-page.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map