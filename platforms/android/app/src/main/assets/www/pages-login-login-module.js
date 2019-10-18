(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n\t<ion-row justify-content-center>\n\n\t    \n     \t\t<ion-col align-self-center size-md=\"10\" size-lg=\"5\" size-xs=\"12\">\n\n\t  \t\t<div  class=\"logo\">\n\t\t\t\t <img src=\"assets/icon/logo-login.jpg\" width=\"120\" height=\"100\" />\n\t\t\t</div>\n\n\t\t\t<div padding>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input  required type=\"text\" name=\"username\" placeholder=\"Username\" type=\"text\" [(ngModel)]=\"username\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input required type=\"password\"  placeholder=\"Password\" type=\"password\" [(ngModel)]=\"userpassword\"></ion-input>\n\t\t\t\t</ion-item>\n\n  <ion-button expand=\"block\"  (click)=login()>Login</ion-button>\n  <ion-button expand=\"block\" routerLink=\"\">forgot password</ion-button>\n  </div>\n\t</ion-col>\n\t</ion-row>\n\t</ion-grid>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff; }\n\n.logo {\n  width: 40%;\n  height: auto;\n  margin: 0 auto;\n  padding-bottom: 50px;\n  align-items: center; }\n\n.no-border {\n  border-bottom: 0 !important;\n  box-shadow: none !important; }\n\nion-button {\n  font-weight: 300; }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #fff; }\n  ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHByb2plY3RcXG5hdGFzaGEvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBVTtFQUNWLFlBSlk7RUFLWixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQVRZLEVBQUE7O0FBWWhCO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQWZjLEVBQUE7O0FBaUJkO0VBQ0csVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3ZCLG1CQUFvQixFQUFBOztBQUVuQjtFQUNFLDJCQUEyQjtFQUMzQiwyQkFBMkIsRUFBQTs7QUFHbEM7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLGdCQW5DVSxFQUFBO0VBcUNkO0lBQ0ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRoZWlnaHQxMDA6IDEwMCU7XG5cbmlvbi1ncmlkIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogJGhlaWdodDEwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG5pb24tcm93IHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG5cbmlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ODhhZmY7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xufVxuICAgIC5sb2dvIHtcbiAgICAgICB3aWR0aDogNDAlO1xuICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblx0ICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XG4gICAgIH1cbiAgICAgLm5vLWJvcmRlciB7XG4gICAgICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgfVxuXG5pb24tYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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





var LoginPage = /** @class */ (function () {
    function LoginPage(http, router, alertController, loadingController) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.username = "test@amic.com";
        this.userpassword = "password";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('test@amic.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            userpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('password', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    LoginPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Access denied',
                            message: 'Wrong username or password.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //  console.log('masuk');
        console.log(this.username);
        console.log(this.userpassword);
        this.http.getUser(this.username, this.userpassword).subscribe(function (response) {
            _this.user = response;
            console.log(_this.user);
            window.localStorage.setItem('userDetail', JSON.stringify(_this.user));
            if (_this.user.employee.employeejobtitle == 'Technician') {
                _this.router.navigateByUrl('/menu/first');
            }
            else {
                _this.router.navigateByUrl('/supervisor');
            }
        }, function (error) {
            // tslint:disable-next-line: indent
            // if error it goes here
            _this.presentAlert();
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());

// showloader(){
//   this.loading=this.loadingCtrl.create({
//     content : 'Loading....'
//   })
//   this.loading.present();
// }


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map