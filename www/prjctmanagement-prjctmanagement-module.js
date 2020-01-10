(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prjctmanagement-prjctmanagement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/prjctmanagement/prjctmanagement.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/prjctmanagement/prjctmanagement.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\" >\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n        <ion-title>\n            SMART JOBCARD\n        </ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-buttons>\n     </ion-toolbar>\n     \n  </ion-header>\n\n<ion-content>\n    <ion-toolbar>\n        <ion-segment [(ngModel)]=\"segment\" value=\"todolist\" > \n              <ion-segment-button value=\"todolist\">\n            <ion-select placeholder=\"TO-DO LIST\" interface=\"popover\">\n                  <ion-select-option  hidden>ACTIVATE ()</ion-select-option>\n                  <ion-select-option  hidden>APPROVE ()</ion-select-option>\n                </ion-select>\n            </ion-segment-button>\n            <ion-segment-button value=\"follow\">\n                <ion-select placeholder=\"FOLLOW-UP LIST\" interface=\"popover\">\n                    <ion-select-option hidden>NEW / PENDING ()</ion-select-option>\n                    <ion-select-option hidden>IN-PROGRESS ()</ion-select-option>\n                    <ion-select-option hidden>COMPLETED ()</ion-select-option>\n                    <ion-select-option hidden>VIEW ALL ()</ion-select-option>\n                  </ion-select>\n            </ion-segment-button>\n        \n          </ion-segment>\n        </ion-toolbar>\n    \n          <div [ngSwitch]=\"segment\">\n            <ion-card *ngSwitchCase=\"'todolist'\">\n              <ion-card-header>\n                Change Password\n              </ion-card-header>\n              <ion-card-content>\n                Your change password form here\n              </ion-card-content>\n            </ion-card>\n    \n            <ion-card *ngSwitchCase=\"'follow'\">\n              <ion-card-header>\n                Change Password\n              </ion-card-header>\n              <ion-card-content>\n              \n              </ion-card-content>\n            </ion-card>\n          </div>\n        \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/prjctmanagement/prjctmanagement-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/prjctmanagement/prjctmanagement-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PrjctmanagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrjctmanagementPageRoutingModule", function() { return PrjctmanagementPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prjctmanagement_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prjctmanagement.page */ "./src/app/pages/prjctmanagement/prjctmanagement.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _prjctmanagement_page__WEBPACK_IMPORTED_MODULE_2__["PrjctmanagementPage"]
    }
];
var PrjctmanagementPageRoutingModule = /** @class */ (function () {
    function PrjctmanagementPageRoutingModule() {
    }
    PrjctmanagementPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], PrjctmanagementPageRoutingModule);
    return PrjctmanagementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/prjctmanagement/prjctmanagement.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/prjctmanagement/prjctmanagement.module.ts ***!
  \*****************************************************************/
/*! exports provided: PrjctmanagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrjctmanagementPageModule", function() { return PrjctmanagementPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prjctmanagement_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prjctmanagement-routing.module */ "./src/app/pages/prjctmanagement/prjctmanagement-routing.module.ts");
/* harmony import */ var _prjctmanagement_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prjctmanagement.page */ "./src/app/pages/prjctmanagement/prjctmanagement.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PrjctmanagementPageModule = /** @class */ (function () {
    function PrjctmanagementPageModule() {
    }
    PrjctmanagementPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _prjctmanagement_routing_module__WEBPACK_IMPORTED_MODULE_4__["PrjctmanagementPageRoutingModule"]
            ],
            declarations: [_prjctmanagement_page__WEBPACK_IMPORTED_MODULE_5__["PrjctmanagementPage"]]
        })
    ], PrjctmanagementPageModule);
    return PrjctmanagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/prjctmanagement/prjctmanagement.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/prjctmanagement/prjctmanagement.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  width: calc(100% / 2);\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  border: 0px;\n  border-radius: 0px;\n  min-width: 200px; }\n\nion-select-option {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJqY3RtYW5hZ2VtZW50L0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xccHJqY3RtYW5hZ2VtZW50XFxwcmpjdG1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRyxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByamN0bWFuYWdlbWVudC9wcmpjdG1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuXHJcbn0gIFxyXG5cclxuaW9uLXNlbGVjdC1vcHRpb257XHJcbiAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/prjctmanagement/prjctmanagement.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/prjctmanagement/prjctmanagement.page.ts ***!
  \***************************************************************/
/*! exports provided: PrjctmanagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrjctmanagementPage", function() { return PrjctmanagementPage; });
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

var PrjctmanagementPage = /** @class */ (function () {
    function PrjctmanagementPage() {
        this.segment = "todolist";
    }
    PrjctmanagementPage.prototype.ngOnInit = function () {
    };
    PrjctmanagementPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prjctmanagement',
            template: __webpack_require__(/*! raw-loader!./prjctmanagement.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/prjctmanagement/prjctmanagement.page.html"),
            styles: [__webpack_require__(/*! ./prjctmanagement.page.scss */ "./src/app/pages/prjctmanagement/prjctmanagement.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrjctmanagementPage);
    return PrjctmanagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=prjctmanagement-prjctmanagement-module.js.map