(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manual-manual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manual/manual.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manual/manual.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>manual</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/manual/manual.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/manual/manual.module.ts ***!
  \***********************************************/
/*! exports provided: ManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageModule", function() { return ManualPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manual_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manual.page */ "./src/app/pages/manual/manual.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _manual_page__WEBPACK_IMPORTED_MODULE_5__["ManualPage"]
    }
];
var ManualPageModule = /** @class */ (function () {
    function ManualPageModule() {
    }
    ManualPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_manual_page__WEBPACK_IMPORTED_MODULE_5__["ManualPage"]]
        })
    ], ManualPageModule);
    return ManualPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manual/manual.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/manual/manual.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbnVhbC9tYW51YWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/manual/manual.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/manual/manual.page.ts ***!
  \*********************************************/
/*! exports provided: ManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPage", function() { return ManualPage; });
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

var ManualPage = /** @class */ (function () {
    function ManualPage() {
    }
    ManualPage.prototype.ngOnInit = function () {
    };
    ManualPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual',
            template: __webpack_require__(/*! raw-loader!./manual.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manual/manual.page.html"),
            styles: [__webpack_require__(/*! ./manual.page.scss */ "./src/app/pages/manual/manual.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManualPage);
    return ManualPage;
}());



/***/ })

}]);
//# sourceMappingURL=manual-manual-module.js.map