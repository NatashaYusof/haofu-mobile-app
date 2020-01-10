(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-second-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/second/second.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/second/second.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n \n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n \n    <ion-tab-button tab=\"sv-tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n \n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-tab-button>\n\n\t  <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"notifications\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person\"></ion-icon>\n     </ion-tab-button>\n  </ion-tab-bar>\n \n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/second/second.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/second/second.module.ts ***!
  \***********************************************/
/*! exports provided: SecondPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageModule", function() { return SecondPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second.page */ "./src/app/pages/second/second.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'tabs',
        component: _second_page__WEBPACK_IMPORTED_MODULE_5__["SecondPage"],
        children: [
            {
                path: 'sv-tab1',
                loadChildren: '../sv-tab1/sv-tab1.module#SvTab1PageModule'
            },
            {
                path: 'sv-tab1/dashboard',
                loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
            },
            {
                path: 'sv-tab1/prjctmanagement',
                loadChildren: '../prjctmanagement/prjctmanagement.module#PrjctmanagementPageModule'
            },
            {
                path: 'tab2',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
            },
            {
                path: 'tab3',
                loadChildren: '../tab3/tab3.module#Tab3PageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/sv-tab1',
        pathMatch: 'full'
    }
];
var SecondPageModule = /** @class */ (function () {
    function SecondPageModule() {
    }
    SecondPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_second_page__WEBPACK_IMPORTED_MODULE_5__["SecondPage"]]
        })
    ], SecondPageModule);
    return SecondPageModule;
}());



/***/ }),

/***/ "./src/app/pages/second/second.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/second/second.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY29uZC9zZWNvbmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/second/second.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/second/second.page.ts ***!
  \*********************************************/
/*! exports provided: SecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPage", function() { return SecondPage; });
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

var SecondPage = /** @class */ (function () {
    function SecondPage() {
    }
    SecondPage.prototype.ngOnInit = function () {
    };
    SecondPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! raw-loader!./second.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/second/second.page.html"),
            styles: [__webpack_require__(/*! ./second.page.scss */ "./src/app/pages/second/second.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondPage);
    return SecondPage;
}());



/***/ })

}]);
//# sourceMappingURL=second-second-module.js.map