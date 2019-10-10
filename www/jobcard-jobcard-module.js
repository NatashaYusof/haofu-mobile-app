(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobcard-jobcard-module"],{

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

/***/ "./src/app/pages/jobcard/jobcard.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/jobcard/jobcard.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          JOBCARD\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n   \n\n<ion-content padding>\n  \n\n    <ion-label >Serial Number:</ion-label>\n<ion-item  *ngFor=\"let serialno of listJCard\">\n    <!-- <ion-label >Serial Number: {{serialno.partrecordserialnumber}}</ion-label> -->\n </ion-item>\n\n<ion-item *ngFor=\"let item of List\">\n  <ion-label>{{item.jobcardtitle}}</ion-label>\n</ion-item>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/jobcard/jobcard.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/jobcard/jobcard.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYmNhcmQvam9iY2FyZC5wYWdlLnNjc3MifQ== */"

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
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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
    function JobcardPage(http, router, alertController) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
    }
    JobcardPage.prototype.ngOnInit = function () {
        // console.log( window.localStorage.getItem('serialno'))
        // this.serialno = window.localStorage.getItem('serialno')
        // this.serialno = JSON.parse(this.serialno)
        // console.log(this.serialno)
        this.userDetail = JSON.parse(window.localStorage.getItem('userDetail'));
        console.log(this.userDetail.employeeid);
        this.getJobcardByEmployeeId(this.userDetail.employeeid);
    };
    JobcardPage.prototype.getJobcardByEmployeeId = function (id) {
        var _this = this;
        console.log("sini");
        this.http.getJobcard(id).subscribe(function (response) {
            _this.listJCard = response.data;
            console.log(_this.listJCard);
            _this.listJCard.forEach(function (jobcards) {
                console.log(jobcards);
                _this.JCard = jobcards;
                _this.JCard.jobcards.forEach(function (List) {
                    console.log(List.jobcardtitle);
                });
            }, function (error) {
                console.log("error");
            });
        }, function (error) {
            console.log("error");
        });
    };
    JobcardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobcard',
            template: __webpack_require__(/*! ./jobcard.page.html */ "./src/app/pages/jobcard/jobcard.page.html"),
            styles: [__webpack_require__(/*! ./jobcard.page.scss */ "./src/app/pages/jobcard/jobcard.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], JobcardPage);
    return JobcardPage;
}());



/***/ })

}]);
//# sourceMappingURL=jobcard-jobcard-module.js.map