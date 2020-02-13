(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["smartjobcard-smartjobcard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/smartjobcard/smartjobcard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/smartjobcard/smartjobcard.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n      <ion-title>\n          SMART JOBCARD\n      </ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n    </ion-buttons>\n   </ion-toolbar>\n   \n</ion-header>\n<ion-content>\n<ion-toolbar>\n    <!-- (ionChange)=\"segmentChanged(segment)\" -->\n  <ion-segment  [(ngModel)]=\"segment\" > \n  \n      <ion-segment-button id=\"0\" value=\"0\" >\n        COMPLETED\n      </ion-segment-button>\n      <ion-segment-button id=\"1\" value=\"1\">\n        ON-GOING\n      </ion-segment-button>\n      <ion-segment-button id=\"2\" value=\"2\">\n        NOT STARTED\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n\n  <div [ngSwitch]=\"segment\">\n    <ion-card *ngSwitchCase=\"'0'\">\n      <ion-card-header>\n        User Info\n      </ion-card-header>\n      <ion-card-content>\n        Your user info content here\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card *ngSwitchCase=\"'1'\">\n      <ion-card-header>\n        Card Info\n      </ion-card-header>\n      <ion-card-content>\n        Your card info content here\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngSwitchCase=\"'2'\">\n      <ion-card-header>\n        Change Password\n      </ion-card-header>\n      <ion-card-content>\n        Your change password form here\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/smartjobcard/smartjobcard-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/smartjobcard/smartjobcard-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SmartjobcardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartjobcardPageRoutingModule", function() { return SmartjobcardPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smartjobcard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smartjobcard.page */ "./src/app/pages/smartjobcard/smartjobcard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _smartjobcard_page__WEBPACK_IMPORTED_MODULE_2__["SmartjobcardPage"]
    }
];
var SmartjobcardPageRoutingModule = /** @class */ (function () {
    function SmartjobcardPageRoutingModule() {
    }
    SmartjobcardPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], SmartjobcardPageRoutingModule);
    return SmartjobcardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/smartjobcard/smartjobcard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/smartjobcard/smartjobcard.module.ts ***!
  \***********************************************************/
/*! exports provided: SmartjobcardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartjobcardPageModule", function() { return SmartjobcardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _smartjobcard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smartjobcard-routing.module */ "./src/app/pages/smartjobcard/smartjobcard-routing.module.ts");
/* harmony import */ var _smartjobcard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smartjobcard.page */ "./src/app/pages/smartjobcard/smartjobcard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SmartjobcardPageModule = /** @class */ (function () {
    function SmartjobcardPageModule() {
    }
    SmartjobcardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _smartjobcard_routing_module__WEBPACK_IMPORTED_MODULE_4__["SmartjobcardPageRoutingModule"]
            ],
            declarations: [_smartjobcard_page__WEBPACK_IMPORTED_MODULE_5__["SmartjobcardPage"]]
        })
    ], SmartjobcardPageModule);
    return SmartjobcardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/smartjobcard/smartjobcard.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/smartjobcard/smartjobcard.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  border: 0px;\n  border-radius: 0px; }\n  ion-segment-button ion-label {\n    max-width: calc(100vw / 3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc21hcnRqb2JjYXJkL0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcc21hcnRqb2JjYXJkXFxzbWFydGpvYmNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFMdEI7SUFRUSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NtYXJ0am9iY2FyZC9zbWFydGpvYmNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC8gMyk7XHJcbiAgICB9XHJcblxyXG59ICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/smartjobcard/smartjobcard.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/smartjobcard/smartjobcard.page.ts ***!
  \*********************************************************/
/*! exports provided: SmartjobcardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartjobcardPage", function() { return SmartjobcardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartjobcardPage = /** @class */ (function () {
    function SmartjobcardPage() {
        this.segment = 0;
    }
    SmartjobcardPage.prototype.ngOnInit = function () {
    };
    SmartjobcardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smartjobcard',
            template: __webpack_require__(/*! raw-loader!./smartjobcard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/smartjobcard/smartjobcard.page.html"),
            styles: [__webpack_require__(/*! ./smartjobcard.page.scss */ "./src/app/pages/smartjobcard/smartjobcard.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartjobcardPage);
    return SmartjobcardPage;
}());



/***/ })

}]);
//# sourceMappingURL=smartjobcard-smartjobcard-module.js.map