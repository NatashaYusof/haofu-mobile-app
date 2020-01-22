(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobcard-jobcard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/jobcard/jobcard.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/jobcard/jobcard.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          JOBCARD\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n   \n\n<ion-content padding>\n  \n    <ion-label class=\"font\">Serial Number: {{serialNo.partrecordserialnumber}}</ion-label>\n\n<ion-card>\n<ion-item *ngFor=\"let jctitle of serialNo.jobcards\">\n  <ion-label><b>{{jctitle.jobcardtitle}}</b></ion-label>\n  <ion-label tappable class=\"ocr\" (click)=\"goToTaks(jctitle.jobcardid,jctitle)\" >OCR</ion-label>\n</ion-item>\n</ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/jobcard/jobcard.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/jobcard/jobcard.module.ts ***!
  \*************************************************/
/*! exports provided: JobcardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobcardPageModule", function() { return JobcardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobcard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobcard.page */ "./src/app/pages/jobcard/jobcard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _jobcard_page__WEBPACK_IMPORTED_MODULE_5__["JobcardPage"]
    }
];
var JobcardPageModule = /** @class */ (function () {
    function JobcardPageModule() {
    }
    JobcardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_jobcard_page__WEBPACK_IMPORTED_MODULE_5__["JobcardPage"]]
        })
    ], JobcardPageModule);
    return JobcardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/jobcard/jobcard.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/jobcard/jobcard.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font {\n  font-size: 11.5px; }\n\n.ocr {\n  color: darkcyan;\n  max-width: 40px; }\n\n.button {\n  font-size: 11px;\n  color: darkcyan;\n  background-color: transparent;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9iY2FyZC9DOlxccHJvamVjdFxcbmF0YXNoYS9zcmNcXGFwcFxccGFnZXNcXGpvYmNhcmRcXGpvYmNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYmNhcmQvam9iY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG59XHJcblxyXG4ub2Nye1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG59XHJcbi5idXR0b257XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/jobcard/jobcard.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/jobcard/jobcard.page.ts ***!
  \***********************************************/
/*! exports provided: JobcardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobcardPage", function() { return JobcardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobcardPage = /** @class */ (function () {
    function JobcardPage(http, router, alertController, JobcardService) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.JobcardService = JobcardService;
    }
    JobcardPage.prototype.ngOnInit = function () {
        // console.log( window.localStorage.getItem('serialno'))
        // this.serialno = window.localStorage.getItem('serialno')
        // this.serialno = JSON.parse(this.serialno)
        // console.log(this.serialno)
        this.userDetail = JSON.parse(window.localStorage.getItem('userDetail'));
        console.log(this.userDetail.employeeid);
        // this.getJobcardByEmployeeId(this.userDetail.employeeid)
        this.serialNo = this.JobcardService.serialNo;
        console.log(this.serialNo);
    };
    JobcardPage.prototype.goToTaks = function (id, jctitle) {
        this.JobcardService.jcTitle = jctitle;
        console.log(this.JobcardService.jcTitle);
        this.JobcardService.jobcardId = id;
        console.log(this.JobcardService.jobcardId);
        this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id);
    };
    JobcardPage.ctorParameters = function () { return [
        { type: _src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"] }
    ]; };
    JobcardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobcard',
            template: __webpack_require__(/*! raw-loader!./jobcard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/jobcard/jobcard.page.html"),
            styles: [__webpack_require__(/*! ./jobcard.page.scss */ "./src/app/pages/jobcard/jobcard.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"]])
    ], JobcardPage);
    return JobcardPage;
}());



/***/ })

}]);
//# sourceMappingURL=jobcard-jobcard-module.js.map