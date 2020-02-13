(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sv-tab1-sv-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sv-tab1/sv-tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sv-tab1/sv-tab1.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" >\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n      <ion-title>\n          SMART WORKSHOP\n      </ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n    </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"item\" (click)=\"dashboard()\"><img src=\"assets/icon/dashboard.png\" width=\"50\" height=\"50\"/><br>DASHBOARD</div>\n    <div class=\"item\" (click)=\"projectmanagement()\"><img src=\"assets/icon/briefcase.png\" width=\"50\" height=\"50\"/><br>PROJECT MANAGEMNET</div>\n    <div class=\"item\"><img src=\"assets/icon/WW.png\" width=\"70\" height=\"50\"/><br>WORKSHOP WORKSHEET</div>\n    <div class=\"item\" (click)=\"smartjobcard()\"><img src=\"assets/icon/smart_job.png\" width=\"50\" height=\"50\"/><br>SMART JOBCARD</div>\n    <div class=\"item\"><img src=\"assets/icon/report.png\" width=\"50\" height=\"50\"/><br>REPORT VIEW</div>\n    <div class=\"item\"><img src=\"assets/icon/work.png\" width=\"50\" height=\"50\"/><br>SMART WORKPLACE</div>\n    <div class=\"item\"><img src=\"assets/icon/calendar.png\" width=\"50\" height=\"50\"/><br>SMART SCHEDULE</div>\n    <div class=\"item\"><img src=\"assets/icon/employee.png\" width=\"60\" height=\"50\"/><br>EMPLOYEE MANAGEMENT</div>\n    <div class=\"item\"><img src=\"assets/icon/slider.png\" width=\"50\" height=\"50\"/><br>WORKSHOP ENVIRONEMENT</div>\n    <div class=\"item\"><img src=\"assets/icon/chat.png\" width=\"50\" height=\"50\"/><br>MESSAGE</div>\n</div>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sv-tab1/sv-tab1-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sv-tab1/sv-tab1-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SvTab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvTab1PageRoutingModule", function() { return SvTab1PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sv_tab1_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sv-tab1.page */ "./src/app/pages/sv-tab1/sv-tab1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _sv_tab1_page__WEBPACK_IMPORTED_MODULE_2__["SvTab1Page"]
    }
];
var SvTab1PageRoutingModule = /** @class */ (function () {
    function SvTab1PageRoutingModule() {
    }
    SvTab1PageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], SvTab1PageRoutingModule);
    return SvTab1PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sv-tab1/sv-tab1.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sv-tab1/sv-tab1.module.ts ***!
  \*************************************************/
/*! exports provided: SvTab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvTab1PageModule", function() { return SvTab1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sv_tab1_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sv-tab1-routing.module */ "./src/app/pages/sv-tab1/sv-tab1-routing.module.ts");
/* harmony import */ var _sv_tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sv-tab1.page */ "./src/app/pages/sv-tab1/sv-tab1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SvTab1PageModule = /** @class */ (function () {
    function SvTab1PageModule() {
    }
    SvTab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _sv_tab1_routing_module__WEBPACK_IMPORTED_MODULE_4__["SvTab1PageRoutingModule"]
            ],
            declarations: [_sv_tab1_page__WEBPACK_IMPORTED_MODULE_5__["SvTab1Page"]]
        })
    ], SvTab1PageModule);
    return SvTab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/sv-tab1/sv-tab1.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sv-tab1/sv-tab1.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: grid;\n  grid-template-columns: auto auto; }\n\n.item {\n  background-color: #9BACD9;\n  border: 0.5px solid #fff;\n  padding: 27px;\n  font-size: 10px;\n  text-align: center;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3YtdGFiMS9DOlxccHJvamVjdFxcbmF0YXNoYS9zcmNcXGFwcFxccGFnZXNcXHN2LXRhYjFcXHN2LXRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGdDQUFnQyxFQUFBOztBQUtsQztFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3YtdGFiMS9zdi10YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICAuaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5QkFDRDkgO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMjdweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/sv-tab1/sv-tab1.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sv-tab1/sv-tab1.page.ts ***!
  \***********************************************/
/*! exports provided: SvTab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvTab1Page", function() { return SvTab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SvTab1Page = /** @class */ (function () {
    function SvTab1Page(router, alertController, loadingCtrl) {
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
    }
    SvTab1Page.prototype.ngOnInit = function () {
    };
    SvTab1Page.prototype.dashboard = function () {
        this.router.navigateByUrl('/second/tabs/sv-tab1/dashboard');
    };
    SvTab1Page.prototype.projectmanagement = function () {
        this.router.navigateByUrl('/second/tabs/sv-tab1/prjctmanagement');
    };
    SvTab1Page.prototype.smartjobcard = function () {
        this.router.navigateByUrl('/second/tabs/sv-tab1/smartjobcard');
    };
    SvTab1Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    SvTab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sv-tab1',
            template: __webpack_require__(/*! raw-loader!./sv-tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sv-tab1/sv-tab1.page.html"),
            styles: [__webpack_require__(/*! ./sv-tab1.page.scss */ "./src/app/pages/sv-tab1/sv-tab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SvTab1Page);
    return SvTab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=sv-tab1-sv-tab1-module.js.map