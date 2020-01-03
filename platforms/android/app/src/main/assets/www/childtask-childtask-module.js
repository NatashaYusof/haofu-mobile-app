(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["childtask-childtask-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/childtask/childtask.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/childtask/childtask.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          JOBCARD\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-item>\n  <ion-label class=\"font\">Serial Number: {{serialNo.partrecordserialnumber}}</ion-label>\n\n  <ion-label class=\"expand\">Expand All</ion-label>\n  <ion-toggle slot=\"end\" name=\"expand\" mode=\"md\" class=\"toggle-small\" toggle-class=\"toggle-calm\" (click)=\"hide()\"></ion-toggle>\n  </ion-item>\n\n  <ion-card>\n    <ion-item> \n    <ion-label>{{jobcardDetail.jobcardtitle}}</ion-label>\n    <ion-badge color=\"danger\">{{jobcardDetail.jobcardtotaltaskcount-jobcardDetail.jobcardcompletedtaskcount-jobcardDetail.jobcardprogresstaskcount}}</ion-badge>\n    <ion-badge color=\"warning\">{{jobcardDetail.jobcardprogresstaskcount}}</ion-badge>\n    <ion-badge color=\"success\">{{jobcardDetail.jobcardcompletedtaskcount}}</ion-badge>\n  </ion-item>\n   \n   <ion-card-content class=\"font\" *ngIf=\"hideMe\"> \n      Complete Percentage\n      <ion-progress-bar  color=\"warning\" style=\"height:10px\" value=\"{{jcTitle.jobcardcompletedtaskcount * 1 / jcTitle.jobcardtotaltaskcount}}\"></ion-progress-bar> {{jobcardDetail.jobcardcompletedpercentage}}%</ion-card-content>\n    <ion-card-content class=\"font\" *ngIf=\"hideMe\"> \n      Short Time\n      <ion-progress-bar color=\"warning\" style=\"height:10px \" value=\"0.2\"></ion-progress-bar>\n    </ion-card-content>\n    <ion-card-content class=\"font\" *ngIf=\"hideMe\"> \n      Turn Around Time\n      <ion-progress-bar  color=\"warning\" style=\"height:10px \" value=\"0.1\"></ion-progress-bar>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item >\n    <ion-label class=\"ion-text-wrap\" ><b>{{taskTitle}}</b></ion-label>\n  </ion-item>\n\n  <ion-card  *ngFor=\"let task of taskdetail;let count=index\" class=\"font\">\n    <ion-item>\n      <ion-label class=\"font\"><b>SAE TASK {{count + 1}} </b></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">{{task.tasktitle}}</ion-label>\n    </ion-item>\n        <ion-grid> \n           <ion-row>\n             <ion-col width-50><button style=\"width:100%\" class=\"button\" (click)=\"goToManual()\">MANUAL</button></ion-col>\n             <ion-col width-50><button style=\"width:100%\" class=\"button1\" (click)=\"goToFinding(jobcardId,task.taskid)\">FINDING</button></ion-col>\n           </ion-row>\n        </ion-grid>\n    </ion-card>\n\n</ion-content>\n<ion-toolbar>\n  <ion-tabs>\n  <ion-tab-bar slot=\"bottom\" fixed >\n    <ion-tab-button tab=\"pause\" >\n      <ion-label class=\"button3\"  (click)=\"goPause()\" >{{btn_txt}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"finish\">\n      <ion-label class=\"button3\"  (click)=\"goFinish()\" >FINISH</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs></ion-toolbar>"

/***/ }),

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

/***/ "./src/app/pages/childtask/childtask.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/childtask/childtask.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font {\n  font-size: 11.5px; }\n\n.font2 {\n  font-size: 11.5px;\n  color: darkcyan; }\n\n.expand {\n  font-size: 11.5px;\n  max-width: 60px; }\n\n.button {\n  font-size: 11px;\n  color: darkcyan;\n  background-color: transparent;\n  text-align: left; }\n\n.button1 {\n  font-size: 11px;\n  color: darkcyan;\n  background-color: transparent;\n  text-align: right; }\n\n.button3 {\n  font-size: 11.5px;\n  color: darkcyan;\n  text-align: center; }\n\nmy-component {\n  background: #55acee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hpbGR0YXNrL0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcY2hpbGR0YXNrXFxjaGlsZHRhc2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGlsZHRhc2svY2hpbGR0YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250e1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbn1cclxuXHJcblxyXG4uZm9udDJ7XHJcbiAgICBmb250LXNpemU6IDExLjVweDtcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxufVxyXG5cclxuLmV4cGFuZHtcclxuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5idXR0b24xe1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJ1dHRvbjN7XHJcbiAgICBmb250LXNpemU6IDExLjVweDtcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubXktY29tcG9uZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICM1NWFjZWU7XHJcbiAgfVxyXG4vLyBpb24tY29udGVudHtcclxuLy8gICAgLS1iYWNrZ3JvdW5kOiBhcXVhO1xyXG4vLyB9XHJcbiJdfQ== */"

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
/* harmony import */ var _src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
/* harmony import */ var _src_app_services_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/app/services/time.service */ "./src/app/services/time.service.ts");
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






var ChildtaskPage = /** @class */ (function () {
    function ChildtaskPage(http, router, alertController, loadingCtrl, JobcardService, TimeService) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.JobcardService = JobcardService;
        this.TimeService = TimeService;
        // test: String = ''; 
        this.btn_txt = 'PAUSE';
        this.hideMe = false;
        this.count = 1;
        this.count = +1;
        this.count++;
    }
    ChildtaskPage.prototype.ngOnInit = function () {
        this.serialNo = this.JobcardService.serialNo;
        this.jcTitle = this.JobcardService.jcTitle;
        this.jobcardId = this.JobcardService.jobcardId;
        this.taskTitle = this.JobcardService.taskTitle;
        this.taskId = this.JobcardService.taskId;
        this.jobcardDetail = this.JobcardService.jobcardDetails;
        console.log(this.jobcardDetail);
        this.getChildTask(this.taskId);
        // console.log(this.taskId);
        this.userDetail = window.localStorage.getItem('userDetail');
        this.details = JSON.parse(this.userDetail);
        console.log(this.details);
        this.getJobcardByEmployeeId(this.details.employee.employeeid);
    };
    ChildtaskPage.prototype.getJobcardByEmployeeId = function (employeeid) {
        //  throw new Error("Method not implemented.");
    };
    ChildtaskPage.prototype.getToTask = function (id) {
        var _this = this;
        this.http.getToTask(id).subscribe(function (response) {
            _this.loading.dismiss();
            _this.id2 = response.Result;
            console.log(_this.id2);
        }, function (error) {
            console.log("error");
        });
    };
    ChildtaskPage.prototype.presentLoadingWithOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait...',
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
    ChildtaskPage.prototype.getChildTask = function (taskid) {
        var _this = this;
        this.presentLoadingWithOptions();
        this.http.getChildTask(taskid).subscribe(function (response) {
            _this.loading.dismiss();
            _this.taskdetail = response.Result[0].childtask;
            console.log(_this.taskdetail);
        }, function (error) {
            console.log("error");
        });
    };
    ChildtaskPage.prototype.goToFinding = function (id, taskid) {
        this.JobcardService.childtaskId = taskid;
        console.log(this.JobcardService.childtaskId);
        this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/finding');
    };
    ChildtaskPage.prototype.goToManual = function (id, taskid) {
        this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/manual');
    };
    // goPause() {
    //   // console.log(taskid)
    //   if (this.btn_txt == "PAUSE") {
    //     this.btn_txt = "RESUME";
    //     // this.JobcardService.taskId=taskid;
    //     this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    //       //postApi
    //       let data =[{
    //         taskid :this.JobcardService.taskId,
    //         employeeid :this.details.employee.employeeid,
    //         tasktimemanagementenddatetime: this.currentDate,
    //         tasktimemanagementendstate:2
    //       }
    //       ]
    //       let data1 =[{
    //         taskstatus:[{"taskstatusid":2}],
    //         employeeid :this.details.employee.employeeid,
    //         taskid :this.JobcardService.taskId,
    //       }
    //       ]
    //       console.log(data)
    //       console.log(data1)
    //       this.TimeService.postStart(data).subscribe((response) => {
    //         console.log(response)
    //         this.TimeService.postStart1(data1).subscribe((response) => {
    //           this.loading.dismiss(); 
    //           console.log(response)
    //         });
    //       });
    //     // document.body.style.backgroundColor ='#b8bdc2';
    //   } else {
    //     this.btn_txt = "PAUSE";
    //     this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    //     //postApi
    //     let data =[{
    //       taskid :this.JobcardService.taskId,
    //       employeeid :this.details.employee.employeeid,
    //       tasktimemanagementstartdatetime: this.currentDate,
    //       tasktimemanagementstartstate:3
    //     }
    //     ]
    //     let data1 =[{
    //       taskstatus:[{"taskstatusid":3}],
    //       employeeid :this.details.employee.employeeid,
    //       taskid :this.JobcardService.taskId,
    //     }
    //     ]
    //     console.log(data)
    //     console.log(data1)
    //     this.TimeService.postStart(data).subscribe((response) => {
    //       console.log(response)
    //       this.TimeService.postStart1(data1).subscribe((response) => {
    //         this.loading.dismiss(); 
    //         console.log(response)
    //       });
    //     });
    //     // document.body.style.backgroundColor = 'transparent';
    //   }
    // }
    // goFinish(){
    //   this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    //       //postApi
    //       let data =[{
    //         taskid :this.JobcardService.taskId,
    //         employeeid :this.details.employee.employeeid,
    //         tasktimemanagementenddatetime: this.currentDate,
    //         tasktimemanagementendstate:4
    //       }
    //       ]
    //       let data1 =[{
    //         taskstatus:[{"taskstatusid":4}],
    //         employeeid :this.details.employee.employeeid,
    //         taskid :this.JobcardService.taskId,
    //       }
    //       ]
    //       console.log(data)
    //       console.log(data1)
    //       this.TimeService.postStart(data).subscribe((response) => {
    //         console.log(response)
    //         this.TimeService.postStart1(data1).subscribe((response) => {
    //           this.loading.dismiss(); 
    //           console.log(response)
    //         });
    //       });
    //       // this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/'+id+'/childtask/'+taskid);
    // }
    ChildtaskPage.prototype.hide = function () {
        this.hideMe = !this.hideMe;
    };
    ChildtaskPage.ctorParameters = function () { return [
        { type: _src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"] },
        { type: _src_app_services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"] }
    ]; };
    ChildtaskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-childtask',
            template: __webpack_require__(/*! raw-loader!./childtask.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/childtask/childtask.page.html"),
            styles: [__webpack_require__(/*! ./childtask.page.scss */ "./src/app/pages/childtask/childtask.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"], _src_app_services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"]])
    ], ChildtaskPage);
    return ChildtaskPage;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseURL = "https://haofu.airbusdigital.com/api/hof/mro";
        this.baseURL2 = "https://smartmob.haofu.airbusdigital.com/hof-pdf/public/api/";
    }
    // tslint:disable-next-line: variable-name
    LoginService.prototype.getUser = function (username, userpassword) {
        console.log(username + " " + userpassword);
        return this.http.get(this.baseURL + '/user/login?username=' + username + '&userpassword=' + userpassword)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    // getEmployee() : Observable<any> {
    //   return this.http.get(this.baseURL+'/user')
    //     .pipe(
    //       map( response => {
    //         console.log(response)
    //         return response;
    //       }),
    //       catchError((err, caught) => {
    //         console.log(err)
    //         return throwError(err);
    //       })
    //     )
    // }
    LoginService.prototype.getJobcard = function (employeeid) {
        return this.http.get(this.baseURL2 + 'get-jobcards/' + employeeid + '?remove=stopped,completed')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    LoginService.prototype.getToTask = function (jobcardid) {
        return this.http.get(this.baseURL + '/jobcard?jobcardid=' + jobcardid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    LoginService.prototype.getChildTask = function (taskid) {
        return this.http.get(this.baseURL + '/task?taskid=' + taskid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=childtask-childtask-module.js.map