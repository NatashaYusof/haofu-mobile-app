(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobcardlist-jobcardlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/jobcardlist/jobcardlist.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/jobcardlist/jobcardlist.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          SMART JOBCARD\n      </ion-title>\n     \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-card >        \n        <ion-row>\n            <ion-col size=\"3\" >\n              <div class=\"head\">TITLE</div>\n            </ion-col>\n            <ion-col size=\"3\">\n              <div  class=\"head\">START DATE</div>\n            </ion-col>\n            <ion-col size=\"3\">\n              <div  class=\"head\">END DATE</div>\n            </ion-col>\n            <ion-col size=\"3\">\n                <div  class=\"head\">TECHNICIAN ASSIGNED</div>\n              </ion-col>\n              <ion-col size=\"1\">\n                <div  class=\"head\"></div>\n              </ion-col>\n          </ion-row>\n          <ion-label  *ngFor=\"let cro of Wo1\">\n          <ion-row >\n              <ion-col  size=\"3\" >\n                <div class=\"head1\">{{cro.jobcardtitle}}</div>\n              </ion-col>\n              <ion-col size=\"3\" >\n                <div class=\"body1\">{{cro.jobcardstartdatetime | date:\"dd-MMM-yyyy\"}}</div>\n              </ion-col>\n              <ion-col size=\"3\">\n                <div class=\"body1\">{{cro.jobcardenddatetime | date:\"dd-MMM-yyyy\"}}</div>\n              </ion-col>\n              <ion-col size=\"3\">\n                <div class=\"body\"></div>\n              </ion-col>\n              <ion-col size=\"1\">\n                <div class=\"body\" ></div>\n              </ion-col>\n            </ion-row>\n\n            <ion-row  *ngFor=\"let cro of Wo2\" >\n                <ion-col  size=\"3\" >\n                  <div class=\"body1\">{{cro.tasktitle}}</div>\n                </ion-col>\n                <ion-col size=\"3\" >\n                  <div class=\"body1\">{{cro.taskstartdate | date:\"dd-MMM-yyyy\"}}</div>\n                </ion-col>\n                <ion-col size=\"3\">\n                  <div class=\"body1\">{{cro.taskenddate | date:\"dd-MMM-yyyy\"}}</div>\n                </ion-col>\n                <ion-col size=\"3\">\n                  <div class=\"body\">{{cro.employeefirstname}}</div>\n                </ion-col>\n                <ion-col size=\"1\">\n                  <div class=\"body\" ></div>\n                </ion-col>\n              </ion-row>\n              </ion-label>\n\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/jobcardlist/jobcardlist-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/jobcardlist/jobcardlist-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: JobcardlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobcardlistPageRoutingModule", function() { return JobcardlistPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobcardlist_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobcardlist.page */ "./src/app/pages/jobcardlist/jobcardlist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _jobcardlist_page__WEBPACK_IMPORTED_MODULE_2__["JobcardlistPage"]
    }
];
var JobcardlistPageRoutingModule = /** @class */ (function () {
    function JobcardlistPageRoutingModule() {
    }
    JobcardlistPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], JobcardlistPageRoutingModule);
    return JobcardlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/jobcardlist/jobcardlist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/jobcardlist/jobcardlist.module.ts ***!
  \*********************************************************/
/*! exports provided: JobcardlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobcardlistPageModule", function() { return JobcardlistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobcardlist_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobcardlist-routing.module */ "./src/app/pages/jobcardlist/jobcardlist-routing.module.ts");
/* harmony import */ var _jobcardlist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobcardlist.page */ "./src/app/pages/jobcardlist/jobcardlist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var JobcardlistPageModule = /** @class */ (function () {
    function JobcardlistPageModule() {
    }
    JobcardlistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _jobcardlist_routing_module__WEBPACK_IMPORTED_MODULE_4__["JobcardlistPageRoutingModule"]
            ],
            declarations: [_jobcardlist_page__WEBPACK_IMPORTED_MODULE_5__["JobcardlistPage"]]
        })
    ], JobcardlistPageModule);
    return JobcardlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/jobcardlist/jobcardlist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/jobcardlist/jobcardlist.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  text-align: center;\n  font-weight: bold;\n  color: black;\n  font-size: 12px; }\n\n.body {\n  color: darkcyan;\n  font-size: 13px; }\n\n.body1 {\n  color: black;\n  font-size: 12px; }\n\n.head1 {\n  color: black;\n  font-size: 13px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9iY2FyZGxpc3QvQzpcXHByb2plY3RcXG5hdGFzaGEvc3JjXFxhcHBcXHBhZ2VzXFxqb2JjYXJkbGlzdFxcam9iY2FyZGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9iY2FyZGxpc3Qvam9iY2FyZGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvZHl7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2R5MXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWQxe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/jobcardlist/jobcardlist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/jobcardlist/jobcardlist.page.ts ***!
  \*******************************************************/
/*! exports provided: JobcardlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobcardlistPage", function() { return JobcardlistPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/services/workorder.service */ "./src/app/services/workorder.service.ts");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobcardlistPage = /** @class */ (function () {
    function JobcardlistPage(http, JobcardService) {
        this.http = http;
        this.JobcardService = JobcardService;
        this.Wo1 = [];
        this.Wo2 = [];
    }
    JobcardlistPage.prototype.ngOnInit = function () {
        this.workorderid = this.JobcardService.workorderId;
        this.getViewWorkSheet(this.workorderid);
    };
    JobcardlistPage.prototype.getViewWorkSheet = function (workorderid) {
        var _this = this;
        this.http.getViewWorkSheet(workorderid).subscribe(function (response) {
            _this.Wo = response.Result;
            console.log(_this.Wo);
            _this.Wo.forEach(function (jobcard) {
                console.log(jobcard);
                _this.task = jobcard;
                _this.task.jobcard.forEach(function (listJobcard) {
                    //  console.log(listJobcard);
                    //  this.Wo1=listJobcard;
                    _this.Wo1.push(listJobcard);
                    //  console.log(this.Wo1)
                    _this.Wo2 = listJobcard.task;
                    console.log(_this.Wo2);
                });
                console.log("sini", _this.Wo1);
            }, function (error) {
                console.log("error");
            });
        }, function (error) {
            console.log("error");
        });
    };
    JobcardlistPage.ctorParameters = function () { return [
        { type: _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__["WorkorderService"] },
        { type: _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_2__["JobcardService"] }
    ]; };
    JobcardlistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobcardlist',
            template: __webpack_require__(/*! raw-loader!./jobcardlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/jobcardlist/jobcardlist.page.html"),
            styles: [__webpack_require__(/*! ./jobcardlist.page.scss */ "./src/app/pages/jobcardlist/jobcardlist.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__["WorkorderService"],
            _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_2__["JobcardService"]])
    ], JobcardlistPage);
    return JobcardlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=jobcardlist-jobcardlist-module.js.map