(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-task-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/task/task.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/task/task.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          JOBCARD\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-item>\n  <ion-label class=\"font\">Serial Number: {{serialNo.partrecordserialnumber}}</ion-label>\n\n  <ion-label class=\"expand\">Expand All</ion-label>\n  <ion-toggle slot=\"end\" name=\"expand\" mode=\"md\" class=\"toggle-small\" toggle-class=\"toggle-calm\" (click)=\"hide()\"></ion-toggle>\n</ion-item>\n\n\n  <ion-card>\n  <ion-item *ngFor=\"let jobcardDetail of id2\"> \n  <ion-label>{{jobcardDetail.jobcardtitle}}</ion-label>\n  <ion-badge color=\"danger\">{{jobcardDetail.jobcardtotaltaskcount-jobcardDetail.jobcardcompletedtaskcount-jobcardDetail.jobcardprogresstaskcount}}</ion-badge>\n  <ion-badge color=\"warning\">{{jobcardDetail.jobcardprogresstaskcount}}</ion-badge>\n  <ion-badge color=\"success\">{{jobcardDetail.jobcardcompletedtaskcount}}</ion-badge>\n</ion-item>\n \n <ion-label *ngFor=\"let jobcardDetail of id2\">\n  <ion-card-content class=\"font\" *ngIf=\"hideMe\"> \n    Complete Percentage\n    <ion-progress-bar  color=\"warning\" style=\"height:10px\" value=\"{{jcTitle.jobcardcompletedtaskcount * 1 / jcTitle.jobcardtotaltaskcount}}\"></ion-progress-bar> {{jobcardDetail.jobcardcompletedpercentage}}%</ion-card-content>\n  <ion-card-content class=\"font\" *ngIf=\"hideMe\"> \n    Short Time\n    <ion-progress-bar color=\"warning\" style=\"height:10px \" value=\"0.2\"></ion-progress-bar>\n  </ion-card-content>\n  <ion-card-content class=\"font\" *ngIf=\"hideMe\"> \n    Turn Around Time\n    <ion-progress-bar  color=\"warning\" style=\"height:10px \" value=\"0.1\"></ion-progress-bar>\n  </ion-card-content>\n</ion-label>\n</ion-card>\n\n<ion-label *ngFor=\"let jobcardDetail of id2\">\n<ion-label  *ngFor=\"let jobcardid of id\">\n<ion-item  class=\"font\">\n<ion-label class=\"ion-text-wrap\" ><b>{{jobcardid.tasktitle}}</b></ion-label>\n<img *ngIf=\"jobcardid.taskstatus[0].taskstatus == 'Resumed'\" src=\"assets/icon/start.jpg\" tappable width=\"30\" height=\"30\" slot=\"end\"  (click)=\"gotoChildTask(jobcardid.jobcardid,jobcardid.taskid,jobcardid.tasktitle,jobcardDetail)\"/>\n<img *ngIf=\"jobcardid.taskstatus[0].taskstatus == 'Started'\" src=\"assets/icon/start.jpg\" tappable width=\"30\" height=\"30\" slot=\"end\"  (click)=\"gotoChildTask(jobcardid.jobcardid,jobcardid.taskid,jobcardid.tasktitle,jobcardDetail)\"/>\n<img *ngIf=\"jobcardid.taskstatus[0].taskstatus == 'Not Started'\" src=\"assets/icon/start.jpg\" tappable width=\"30\" height=\"30\" slot=\"end\"  (click)=\"gotoChildTask(jobcardid.jobcardid,jobcardid.taskid,jobcardid.tasktitle,jobcardDetail)\"/>\n<img *ngIf=\"jobcardid.taskstatus[0].taskstatus == 'Paused'\" src=\"assets/icon/start.jpg\" tappable width=\"30\" height=\"30\" slot=\"end\"  (click)=\"gotoChildTask(jobcardid.jobcardid,jobcardid.taskid,jobcardid.tasktitle,jobcardDetail)\"/>\n<img *ngIf=\"jobcardid.taskstatus[0].taskstatus == 'Re-Open'\" src=\"assets/icon/start.jpg\" tappable width=\"30\" height=\"30\" slot=\"end\"  (click)=\"gotoChildTask(jobcardid.jobcardid,jobcardid.taskid,jobcardid.tasktitle,jobcardDetail)\"/>\n<img *ngIf=\"jobcardid.taskstatus[0].taskstatus == 'Completed'\" src=\"assets/icon/tick.png\" width=\"18\" height=\"18\" slot=\"end\"/>\n</ion-item>\n<ion-grid> \n    <ion-row>\n      <ion-col width-50><button *ngIf=\"jobcardid.taskstatus[0].taskstatus == 'Completed'\" style=\"width:100%\" class=\"button\" (click)=\"goTime(jobcardid.taskid)\">TIME DURATION</button></ion-col>\n    </ion-row>\n </ion-grid>\n</ion-label>\n</ion-label>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/task/task.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/task/task.module.ts ***!
  \*******************************************/
/*! exports provided: TaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.page */ "./src/app/pages/task/task.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _task_page__WEBPACK_IMPORTED_MODULE_5__["TaskPage"]
    }
];
var TaskPageModule = /** @class */ (function () {
    function TaskPageModule() {
    }
    TaskPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_page__WEBPACK_IMPORTED_MODULE_5__["TaskPage"]]
        })
    ], TaskPageModule);
    return TaskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/task/task.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/task/task.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font {\n  font-size: 11.5px; }\n\n.font2 {\n  font-size: 11.5px;\n  color: darkcyan; }\n\n.expand {\n  font-size: 11.5px;\n  max-width: 60px; }\n\n.button {\n  font-size: 11px;\n  color: darkcyan;\n  background-color: transparent;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay9DOlxccHJvamVjdFxcbmF0YXNoYS9zcmNcXGFwcFxccGFnZXNcXHRhc2tcXHRhc2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFzay90YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250e1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbn1cclxuXHJcbi5mb250MntcclxuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG59XHJcblxyXG4uZXhwYW5ke1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/task/task.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/task/task.page.ts ***!
  \*****************************************/
/*! exports provided: TaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPage", function() { return TaskPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
/* harmony import */ var _src_app_services_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/app/services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _timedetail_timedetail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timedetail/timedetail.page */ "./src/app/pages/timedetail/timedetail.page.ts");
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








var TaskPage = /** @class */ (function () {
    function TaskPage(http, router, alertController, loadingCtrl, JobcardService, TimeService, modalController) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.JobcardService = JobcardService;
        this.TimeService = TimeService;
        this.modalController = modalController;
        this.hideMe = false;
        this.success = 0;
        this.imej = 'assets/icon/start.png';
        this.imej1 = 'assets/icon/tick.png';
    }
    TaskPage.prototype.ngOnInit = function () {
        this.serialNo = this.JobcardService.serialNo;
        this.jcTitle = this.JobcardService.jcTitle;
        console.log(this.JobcardService);
        console.log(this.jcTitle);
        // console.log(this.jcTitle.jobcardprogresstaskcount)
        this.jobcardId = this.JobcardService.jobcardId;
        console.log(this.jobcardId);
        this.getToTask(this.jobcardId);
        this.userDetail = window.localStorage.getItem('userDetail');
        this.details = JSON.parse(this.userDetail);
        console.log(this.details);
        this.getJobcardByEmployeeId(this.details.employee.employeeid);
    };
    TaskPage.prototype.getJobcardByEmployeeId = function (employeeid) {
        //  throw new Error("Method not implemented.");
    };
    TaskPage.prototype.presentLoadingWithOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please Wait..',
                                translucent: true,
                                cssClass: 'custom-class custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    // async presentLoadingWithOptions1() {
    //   this.loading = await this.loadingCtrl.create({
    //     message: 'Start..',
    //     translucent: true,
    //     cssClass: 'custom-class custom-loading'
    //   });
    //  return await this.loading.present();
    // }
    TaskPage.prototype.getToTask = function (id) {
        var _this = this;
        this.presentLoadingWithOptions();
        this.http.getToTask(id).subscribe(function (response) {
            _this.loading.dismiss();
            _this.id = response.Result[0].task;
            _this.id2 = response.Result;
            console.log(_this.id);
            console.log(_this.id2);
        }, function (error) {
            console.log("error");
        });
    };
    TaskPage.prototype.hide = function () {
        this.hideMe = !this.hideMe;
    };
    TaskPage.prototype.gotoChildTask = function (id, taskid, tasktitle, jobcardDetail) {
        // this.presentLoadingWithOptions1();
        this.imej;
        this.JobcardService.taskTitle = tasktitle;
        console.log(this.JobcardService.taskTitle);
        this.JobcardService.jobcardId = id;
        console.log(this.JobcardService.jobcardId);
        this.JobcardService.taskId = taskid;
        console.log(this.JobcardService.taskId);
        this.JobcardService.jobcardDetails = jobcardDetail;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm:ss');
        // //postApi
        // let data =[{
        //   taskid :this.JobcardService.taskId,
        //   employeeid :this.details.employee.employeeid,
        //   tasktimemanagementstartdatetime: this.currentDate,
        //   tasktimemanagementstartstate:1
        // }
        // ]
        // let data1 =[{
        //   taskstatus:[{"taskstatusid":1}],
        //   employeeid :this.details.employee.employeeid,
        //   taskid :this.JobcardService.taskId,
        // }
        // ]
        // console.log(data)
        // console.log(data1)
        // this.TimeService.postStart(data).subscribe((response) => {
        //   console.log(response)
        //   this.TimeService.postStart1(data1).subscribe((response) => {
        //     this.loading.dismiss(); 
        //     console.log(response)
        this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid);
        //   });
        // });
    };
    TaskPage.prototype.goTime = function (taskid) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.JobcardService.taskId = taskid;
                        return [4 /*yield*/, this.modalController.create({
                                component: _timedetail_timedetail_page__WEBPACK_IMPORTED_MODULE_7__["TimedetailPage"],
                                componentProps: {
                                    "paramTaskId": taskid,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dataReturned = dataReturned.data;
                                //alert('Modal Sent Data :'+ dataReturned);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaskPage.ctorParameters = function () { return [
        { type: _src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"] },
        { type: _src_app_services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    TaskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! raw-loader!./task.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/task/task.page.html"),
            styles: [__webpack_require__(/*! ./task.page.scss */ "./src/app/pages/task/task.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"],
            _src_app_services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], TaskPage);
    return TaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-task-module.js.map