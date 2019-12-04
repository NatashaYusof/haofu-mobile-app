(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finding-finding-module"],{

/***/ "./src/app/pages/finding/finding.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/finding/finding.module.ts ***!
  \*************************************************/
/*! exports provided: FindingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindingPageModule", function() { return FindingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _finding_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finding.page */ "./src/app/pages/finding/finding.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _finding_page__WEBPACK_IMPORTED_MODULE_5__["FindingPage"]
    }
];
var FindingPageModule = /** @class */ (function () {
    function FindingPageModule() {
    }
    FindingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_finding_page__WEBPACK_IMPORTED_MODULE_5__["FindingPage"]]
        })
    ], FindingPageModule);
    return FindingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/finding/finding.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/finding/finding.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          JOBCARD\n      </ion-title>\n     \n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n  <ion-label class=\"font\"><b>Serial Number: {{serialNo.partrecordserialnumber}}</b></ion-label>\n</ion-item>\n\n  <ion-card>\n  <ion-item>\n    <ion-label>{{jobcardDetail.jobcardtitle}}</ion-label>\n    <ion-badge color=\"danger\">{{jobcardDetail.jobcardtotaltaskcount-jobcardDetail.jobcardcompletedtaskcount-jobcardDetail.jobcardprogresstaskcount}}</ion-badge>\n    <ion-badge color=\"warning\">{{jobcardDetail.jobcardprogresstaskcount}}</ion-badge>\n    <ion-badge color=\"success\">{{jobcardDetail.jobcardcompletedtaskcount}}</ion-badge>\n  </ion-item>\n  <ion-item>\n  <ion-label class=\"font\"><b>FINDING</b><br><br><br>Date<br><br>{{currentDate}}\n    <br><br><br>Task References<br><br>{{childtaskId}}\n    <br><br><br>Title<ion-item><ion-textarea placeholder=\"Enter title here...\"></ion-textarea></ion-item>\n    <br><br>Description<ion-item><ion-textarea placeholder=\"Enter description here...\"></ion-textarea></ion-item>\n  </ion-label>\n</ion-item>\n  <ion-item>  \n    <ion-icon name=\"attach\" ></ion-icon><ion-label (click)=\"pickImage()\" class=\"font2\" tappable >Attach Image</ion-label>\n  </ion-item>\n     \n    \n    <!-- <img src= \"assets/icon/profile.png\" alt=\"\" /> -->\n    <!-- <ion-item> -->\n     <!-- <ion-scroll scrollX=\"true\">androi\n       <div class=\"scroll-item\">\n       <ion-col col-33 >\n    \n      <img src= \"{{ imageSrc  }}\" alt=\"\" />\n      <img src= \"../../../assets/icon/i1.PNG\" id=\"1\" tappable (click)=\"goToCanvas\">\n      <img src= \"../../../assets/icon/i1.PNG\" id=\"1\" tappable (click)=\"goToCanvas\">\n    </ion-col>\n     </div>\n  </ion-scroll> -->\n  <div scrollX=\"true\" class=\"scroll\" id=\"myFixZone\">\n      <ion-card>\n          <ion-item>\n              <img src= \"../../../assets/icon/i1.PNG\" id=\"1\" tappable (click)=\"goToCanvas\">\n              <img src= \"../../../assets/icon/profile.png\" id=\"1\" tappable (click)=\"goToCanvas\">\n              <!-- <ion-icon *ngFor=\"let avatar of avatars\" name=\"radio-button-on\" class=\"scroll-item selectable-icon\"></ion-icon> -->\n          </ion-item>\n        </ion-card>\n  </div>\n\n\n    <!-- </ion-item> -->\n    <!-- <ion-button expand=\"block\" color=\"primary\" height=\"10px\"><ion-icon name=\"create\" ></ion-icon>Edit Image</ion-button> -->\n  </ion-card>\n\n  <ion-button expand=\"full\" color=\"primary\">Save</ion-button>\n</ion-content>\n\n<ion-toolbar>\n    <ion-tabs>\n    <ion-tab-bar slot=\"bottom\" fixed>\n      <ion-tab-button tab=\"pause\" >\n        <ion-label class=\"button3\"  (click)=\"goPause()\" >{{btn_txt}}</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"finish\">\n        <ion-label class=\"button3\" (click)=\"goFinish()\">FINISH</ion-label>\n      </ion-tab-button>\n  \n    </ion-tab-bar>\n  </ion-tabs></ion-toolbar>\n"

/***/ }),

/***/ "./src/app/pages/finding/finding.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/finding/finding.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand {\n  font-size: 11.5px;\n  max-width: 60px; }\n\n.font2 {\n  font-size: 11.5px;\n  color: darkcyan; }\n\n.button3 {\n  font-size: 11.5px;\n  color: darkcyan;\n  text-align: center; }\n\ndiv[scrollx=true] .scroll, div[scrolly=true] .scroll {\n  overflow: auto;\n  position: relative;\n  overflow: hidden; }\n\ndiv[scrollx=true] .scroll ::-webkit-scrollbar, div[scrolly=true] .scroll ::-webkit-scrollbar {\n    display: none; }\n\ndiv[scrollx=true] div[scrollx=true], div[scrolly=true] div[scrollx=true] {\n  overflow-x: auto; }\n\ndiv[scrollx=true] div[scrolly=true], div[scrolly=true] div[scrolly=true] {\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmluZGluZy9DOlxccHJvamVjdFxcbmF0YXNoYS9zcmNcXGFwcFxccGFnZXNcXGZpbmRpbmdcXGZpbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBb0JsQjtFQUlJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBTnBCO0lBU00sYUFBYSxFQUFBOztBQVRuQjtFQWNJLGdCQUFnQixFQUFBOztBQWRwQjtFQWtCSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbmRpbmcvZmluZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5ke1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5mb250MntcclxuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG59XHJcbi5idXR0b24ze1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgICAvLyAuc2Nyb2xsLWl0ZW0ge1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBkaXZbc2Nyb2xseD10cnVlXSxkaXZbc2Nyb2xseT10cnVlXSB7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAvLyAgIGRpdltzY3JvbGx4PXRydWVdIHtcclxuICAgIC8vICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLy8gICB9XHJcbiAgICAgIFxyXG4gICAgLy8gICBkaXZbc2Nyb2xseT10cnVlXSB7XHJcbiAgICAvLyAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8vICAgfVxyXG5cclxuICAgIGRpdltzY3JvbGx4PXRydWVdLCBkaXZbc2Nyb2xseT10cnVlXSB7XHJcbiAgICAgIFxyXG5cclxuICAgICAgLnNjcm9sbCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIFxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRpdltzY3JvbGx4PXRydWVdIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkaXZbc2Nyb2xseT10cnVlXSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgfVxyXG4gICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/finding/finding.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/finding/finding.page.ts ***!
  \***********************************************/
/*! exports provided: FindingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindingPage", function() { return FindingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
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








var FindingPage = /** @class */ (function () {
    // imageSrc: any;
    function FindingPage(http, router, alertController, loadingCtrl, JobcardService, camera, actionSheetController, file) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.JobcardService = JobcardService;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.btn_txt = 'PAUSE';
        this.photos = [];
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
    }
    FindingPage.prototype.ngOnInit = function () {
        this.serialNo = this.JobcardService.serialNo;
        this.jcTitle = this.JobcardService.jcTitle;
        this.jobcardId = this.JobcardService.jobcardId;
        this.taskTitle = this.JobcardService.taskTitle;
        this.taskId = this.JobcardService.taskId;
        this.childtaskId = this.JobcardService.childtaskId;
        console.log(this.JobcardService.childtaskId);
        this.jobcardDetail = this.JobcardService.jobcardDetails;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm:ss');
        console.log(this.currentDate);
        this.userDetail = window.localStorage.getItem('userDetail');
        this.details = JSON.parse(this.userDetail);
        console.log(this.details);
        this.getJobcardByEmployeeId(this.details.employee.employeeid);
    };
    FindingPage.prototype.getJobcardByEmployeeId = function (employeeid) {
        //  throw new Error("Method not implemented.");
    };
    // goPause() {
    //   // console.log(taskid)
    //   if (this.btn_txt == "PAUSE") {
    //     this.btn_txt = "RESUME";
    //     // this.JobcardService.taskId=taskid;
    //     // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
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
    //    // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
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
    //   // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    //       //postApi
    //       let data =[{
    //         taskid :this.JobcardService.taskId,
    //         employeeid :this.details.employee.employeeid,
    //         tasktimemanagementenddatetime: this.currentDate,
    //         tasktimemanagementendstate:5
    //       }
    //       ]
    //       let data1 =[{
    //         taskstatus:[{"taskstatusid":5}],
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
    // }
    FindingPage.prototype.pickImage1 = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            // destinationType: this.camera.DestinationType.FILE_URI,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
            // quality: 100,
            // destinationType: this.camera.DestinationType.FILE_URI,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.imageSrc = 'data:image/jpeg;base64,' + imageData;
            // this.photos.push(this.imageSrc);
            // this.photos.reverse();
            // this.picture = imageSrc.replace('file://', '');
            // console.log(this.picture);
            // this.picture=imageData.replace('file://', '');
        }, function (err) {
            // Handle error
        });
    };
    FindingPage.prototype.pickImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.pickImage1(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.pickImage1(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FindingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finding',
            template: __webpack_require__(/*! ./finding.page.html */ "./src/app/pages/finding/finding.page.html"),
            styles: [__webpack_require__(/*! ./finding.page.scss */ "./src/app/pages/finding/finding.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]])
    ], FindingPage);
    return FindingPage;
}());



/***/ })

}]);
//# sourceMappingURL=finding-finding-module.js.map