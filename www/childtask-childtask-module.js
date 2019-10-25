(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childtask-childtask-module"],{

/***/ "./src/app/pages/childtask/childtask.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/childtask/childtask.module.ts ***!
  \*****************************************************/
/*! exports provided: ChildtaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildtaskPageModule", function() { return ChildtaskPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _childtask_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childtask.page */ "./src/app/pages/childtask/childtask.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _childtask_page__WEBPACK_IMPORTED_MODULE_5__["ChildtaskPage"]
    }
];
var ChildtaskPageModule = /** @class */ (function () {
    function ChildtaskPageModule() {
    }
    ChildtaskPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_childtask_page__WEBPACK_IMPORTED_MODULE_5__["ChildtaskPage"]]
        })
    ], ChildtaskPageModule);
    return ChildtaskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/childtask/childtask.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/childtask/childtask.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          JOBCARD\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n  <ion-label class=\"font\">Serial Number: {{serialNo.partrecordserialnumber}}</ion-label>\n\n  <ion-label class=\"expand\">Expand All</ion-label>\n  <ion-toggle slot=\"end\" name=\"expand\" checked mode=\"md\" class=\"toggle-small\" toggle-class=\"toggle-calm\"></ion-toggle>\n  </ion-item>\n\n  <ion-card>\n      <ion-item>\n          <ion-label >{{jcTitle.jobcardtitle}}</ion-label>\n          <ion-badge color=\"danger\">{{jcTitle.jobcardtotaltaskcount-jcTitle.jobcardcompletedtaskcount-jcTitle.jobcardprogresstaskcount}}</ion-badge>\n          <ion-badge color=\"warning\">{{jcTitle.jobcardprogresstaskcount}}</ion-badge>\n          <ion-badge color=\"success\">{{jcTitle.jobcardcompletedtaskcount}}</ion-badge>\n      </ion-item>\n                   \n  <ion-card-content class=\"font\"> \n    Complete Percentage\n    <ion-progress-bar  color=\"warning\" style=\"height:10px\" value=\"{{jcTitle.jobcardcompletedtaskcount * 1 / jcTitle.jobcardtotaltaskcount}}\"></ion-progress-bar> {{jcTitle.jobcardcompletedtaskcount * 100 / jcTitle.jobcardtotaltaskcount}}%</ion-card-content>\n  <ion-card-content class=\"font\"> \n    Short Time\n    <ion-progress-bar color=\"warning\" style=\"height:10px \" value=\"0.2\"></ion-progress-bar>\n  </ion-card-content>\n  <ion-card-content class=\"font\"> \n    Turn Around Time\n    <ion-progress-bar  color=\"warning\" style=\"height:10px \" value=\"0.1\"></ion-progress-bar>\n  </ion-card-content>\n  </ion-card>\n\n  <ion-item >\n    <ion-label class=\"ion-text-wrap\" ><b>{{taskTitle}}</b></ion-label>\n  </ion-item>\n\n  <ion-card  *ngFor=\"let task of taskdetail\" class=\"font\">\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">{{task.tasktitle}}</ion-label>\n    </ion-item>\n        <ion-grid> \n           <ion-row>\n             <ion-col width-50><button style=\"width:100%\" class=\"button\" (click)=\"goToManual()\">MANUAL</button></ion-col>\n             <ion-col width-50><button style=\"width:100%\" class=\"button1\" (click)=\"goToFinding(jobcardId,task.taskid)\">FINDING</button></ion-col>\n           </ion-row>\n        </ion-grid>\n    </ion-card>\n\n</ion-content>\n<ion-toolbar>\n  <ion-tabs>\n  <ion-tab-bar slot=\"bottom\" fixed>\n    <ion-tab-button tab=\"pause\" >\n      <ion-label class=\"button3\"  (click)=\"goPause()\" >{{btn_txt}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"finish\">\n      <ion-label class=\"button3\">FINISH</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs></ion-toolbar>"

/***/ }),

/***/ "./src/app/pages/childtask/childtask.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/childtask/childtask.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font {\n  font-size: 11.5px; }\n\n.font2 {\n  font-size: 11.5px;\n  color: darkcyan; }\n\n.expand {\n  font-size: 11.5px;\n  max-width: 60px; }\n\n.button {\n  font-size: 11px;\n  color: darkcyan;\n  background-color: transparent;\n  text-align: left; }\n\n.button1 {\n  font-size: 11px;\n  color: darkcyan;\n  background-color: transparent;\n  text-align: right; }\n\n.button3 {\n  font-size: 11.5px;\n  color: darkcyan;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hpbGR0YXNrL0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcY2hpbGR0YXNrXFxjaGlsZHRhc2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBS3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGlsZHRhc2svY2hpbGR0YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250e1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcblxyXG5cclxufVxyXG5cclxuLmZvbnQye1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbn1cclxuXHJcbi5leHBhbmR7XHJcbiAgICBmb250LXNpemU6IDExLjVweDtcclxuICAgIG1heC13aWR0aDogNjBweDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYnV0dG9uMXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5idXR0b24ze1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/childtask/childtask.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/childtask/childtask.page.ts ***!
  \***************************************************/
/*! exports provided: ChildtaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildtaskPage", function() { return ChildtaskPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChildtaskPage = /** @class */ (function () {
    function ChildtaskPage(http, router, alertController, loadingCtrl, JobcardService) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.JobcardService = JobcardService;
        // test: String = ''; 
        this.btn_txt = 'PAUSE';
    }
    ChildtaskPage.prototype.ngOnInit = function () {
        this.serialNo = this.JobcardService.serialNo;
        this.jcTitle = this.JobcardService.jcTitle;
        this.jobcardId = this.JobcardService.jobcardId;
        this.taskTitle = this.JobcardService.taskTitle;
        this.taskId = this.JobcardService.taskId;
        console.log(this.taskId);
        this.getChildTask(this.taskId);
        // console.log(this.taskId);
    };
    // async presentLoadingWithOptions() {
    //   this.loading = await this.loadingCtrl.create({
    //     message: 'Please wait...',
    //     translucent: true,
    //     cssClass: 'custom-class custom-loading'
    //   });
    //   return await this.loading.present();
    // }
    ChildtaskPage.prototype.getChildTask = function (taskid) {
        var _this = this;
        // this.presentLoadingWithOptions();
        this.http.getChildTask(taskid).subscribe(function (response) {
            // this.loading.dismiss();
            _this.taskdetail = response.Result[0].childtask;
            console.log(_this.taskdetail);
        }, function (error) {
            console.log("error");
        });
    };
    ChildtaskPage.prototype.goToFinding = function (id, taskid) {
        // this.JobcardService.taskTitle=tasktitle;
        // console.log(this.JobcardService.taskTitle);
        // this.JobcardService.jobcardId=id;
        // console.log(this.JobcardService.jobcardId);
        this.JobcardService.childtaskId = taskid;
        console.log(this.JobcardService.childtaskId);
        this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/finding');
    };
    ChildtaskPage.prototype.goToManual = function (id, taskid) {
        this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/manual');
    };
    ChildtaskPage.prototype.goPause = function () {
        if (this.btn_txt == "PAUSE") {
            this.btn_txt = "RESUME";
            document.body.style.backgroundColor = "red";
        }
        else {
            this.btn_txt = "PAUSE";
        }
    };
    ChildtaskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-childtask',
            template: __webpack_require__(/*! ./childtask.page.html */ "./src/app/pages/childtask/childtask.page.html"),
            styles: [__webpack_require__(/*! ./childtask.page.scss */ "./src/app/pages/childtask/childtask.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"]])
    ], ChildtaskPage);
    return ChildtaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=childtask-childtask-module.js.map