(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-worksheet-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/worksheet/worksheet.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/worksheet/worksheet.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n      <ion-title>\n          SMART JOBCARD\n      </ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n    </ion-buttons>\n   </ion-toolbar>\n   \n</ion-header>\n\n<ion-content>\n  <ion-toolbar>\n      <ion-segment value=\"todolist\" > \n            <ion-segment-button value=\"todolist\">TO-DO LIST\n                <!-- <ion-label stacked>TO-DO LIST</ion-label> -->\n          <ion-select interface=\"popover\" mode=\"ios\" [(ngModel)]=\"segment\" >\n                <ion-select-option   value=\"activate\" [selected]=\"true\">ACTIVATE ({{activate.length}})</ion-select-option>\n                <ion-select-option   value=\"conclude\">CONCLUDE ({{concludeWW.length}})</ion-select-option>\n              </ion-select>\n          </ion-segment-button>\n          <ion-segment-button value=\"follow\">FOLLOW-UP LIST\n              <!-- <ion-label stacked>FOLLOW-UP LIST</ion-label> -->\n              <ion-select interface=\"popover\"   [(ngModel)]=\"segment\" >\n                  <ion-select-option value=\"pending\">PENDING ({{pendingWW.length}})</ion-select-option>\n                  <ion-select-option value=\"progress\">IN-PROGRESS ({{inProgressWW.length}})</ion-select-option>\n                  <ion-select-option value=\"completed\">COMPLETED ({{completedWW.length}})</ion-select-option>\n                  <ion-select-option value=\"view\">VIEW ALL ()</ion-select-option>\n                </ion-select>\n          </ion-segment-button>\n      \n        </ion-segment>\n      </ion-toolbar>\n\n        <div [ngSwitch]=\"segment\">\n          <div *ngSwitchCase=\"'activate'\">\n            <ion-item  class=\"show\"  >\n                <ion-label >Show</ion-label>\n                <ion-select  interface=\"popover\">\n                  <ion-select-option value=\"10\">10</ion-select-option>\n                  <ion-select-option value=\"25\">25</ion-select-option>\n                  <ion-select-option value=\"50\">50</ion-select-option>\n                  <ion-select-option value=\"100\">100</ion-select-option>\n                </ion-select>\n                </ion-item> \n\n          <ion-card >        \n            <ion-card-content>\n                <ion-row>\n                    <ion-col  >\n                      <div class=\"head\">CRO</div>\n                    </ion-col>\n                    <ion-col size=\"1.5\">\n                      <div  class=\"head\">WW</div>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row  *ngFor=\"let cro of activate\">\n                      <ion-col  >\n                        <div class=\"body\">{{cro.workordernumber}}</div>\n                      </ion-col>\n                      <ion-col size=\"1.5\">\n                        <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                      </ion-col>\n                    </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n            <div *ngSwitchCase=\"'conclude'\">\n              <ion-item  class=\"show\"  >\n                  <ion-label >Show</ion-label>\n                  <ion-select  interface=\"popover\">\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"25\">25</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                  </ion-select>\n                  </ion-item> \n\n            <ion-card >        \n              <ion-card-content>\n                  <ion-row>\n                      <ion-col >\n                        <div class=\"head\">CRO</div>\n                      </ion-col>\n                      <ion-col size=\"1.5\">\n                        <div  class=\"head\">WW</div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row  *ngFor=\"let cro of concludeWW\">\n                        <ion-col >\n                          <div class=\"body\">{{cro.workordernumber}}</div>\n                        </ion-col>\n                        <ion-col size=\"1.5\">\n                          <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                        </ion-col>\n                      </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n          <div *ngSwitchCase=\"'pending'\">\n              <ion-item  class=\"show\"  >\n                  <ion-label >Show</ion-label>\n                  <ion-select  interface=\"popover\">\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"25\">25</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                  </ion-select>\n                  </ion-item> \n\n            <ion-card >        \n              <ion-card-content>\n                  <ion-row>\n                      <ion-col >\n                        <div class=\"head\">CRO</div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row  *ngFor=\"let cro of pendingWW\">\n                        <ion-col  >\n                          <div class=\"body\">{{cro.workordernumber}}</div>\n                        </ion-col>\n                      </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </div>\n  \n              \n          <div *ngSwitchCase=\"'progress'\">\n              <ion-item  class=\"show\"  >\n                  <ion-label >Show</ion-label>\n                  <ion-select  interface=\"popover\">\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"25\">25</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                  </ion-select>\n                  </ion-item> \n\n            <ion-card >        \n              <ion-card-content>\n                  <ion-row>\n                      <ion-col >\n                        <div class=\"head\">CRO</div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row  *ngFor=\"let cro of inProgressWW\">\n                        <ion-col >\n                          <div class=\"body\">{{cro.workordernumber}}</div>\n                        </ion-col>\n                      </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n\n          <div *ngSwitchCase=\"'completed'\">\n              <ion-item  class=\"show\"  >\n                  <ion-label >Show</ion-label>\n                  <ion-select  interface=\"popover\">\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"25\">25</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                  </ion-select>\n                  </ion-item> \n\n            <ion-card >        \n              <ion-card-content>\n                  <ion-row>\n                      <ion-col  size=\"4\">\n                        <div class=\"head\" >#</div>\n                      </ion-col>\n                      <ion-col >\n                        <div  class=\"head\">CRO</div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row  *ngFor=\"let cro of completedWW\">\n                        <ion-col  size=\"4\" >\n                          <div class=\"body\">{{cro.workorderid}}</div>\n                        </ion-col>\n                        <ion-col>\n                          <div class=\"body\">{{cro.workordernumber}}</div>\n                        </ion-col>\n                      </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </div>\n  \n          <div *ngSwitchCase=\"'view'\">\n              <ion-item  class=\"show\"  >\n                  <ion-label >Show</ion-label>\n                  <ion-select  interface=\"popover\">\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"25\">25</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                  </ion-select>\n                  </ion-item> \n\n            <ion-card >        \n              <ion-card-content>\n                  <ion-row>\n                      <ion-col >\n                        <div class=\"head\">CRO</div>\n                      </ion-col>\n                      <ion-col size=\"1.5\">\n                        <div  class=\"head\">WW</div>\n                      </ion-col>\n                    \n                    </ion-row>\n                    <ion-row  *ngFor=\"let cro of wWorksheet\">\n                        <ion-col >\n                          <div class=\"body\">{{cro.workordernumber}}</div>\n                        </ion-col>\n                        <ion-col size=\"1.5\">\n                          <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                        </ion-col>\n                      </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n        </div>\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/worksheet/worksheet-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/worksheet/worksheet-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WorksheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetPageRoutingModule", function() { return WorksheetPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _worksheet_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worksheet.page */ "./src/app/pages/worksheet/worksheet.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _worksheet_page__WEBPACK_IMPORTED_MODULE_2__["WorksheetPage"]
    }
];
var WorksheetPageRoutingModule = /** @class */ (function () {
    function WorksheetPageRoutingModule() {
    }
    WorksheetPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], WorksheetPageRoutingModule);
    return WorksheetPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/worksheet/worksheet.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/worksheet/worksheet.module.ts ***!
  \*****************************************************/
/*! exports provided: WorksheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetPageModule", function() { return WorksheetPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _worksheet_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./worksheet-routing.module */ "./src/app/pages/worksheet/worksheet-routing.module.ts");
/* harmony import */ var _worksheet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worksheet.page */ "./src/app/pages/worksheet/worksheet.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WorksheetPageModule = /** @class */ (function () {
    function WorksheetPageModule() {
    }
    WorksheetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _worksheet_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorksheetPageRoutingModule"]
            ],
            declarations: [_worksheet_page__WEBPACK_IMPORTED_MODULE_5__["WorksheetPage"]]
        })
    ], WorksheetPageModule);
    return WorksheetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/worksheet/worksheet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/worksheet/worksheet.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  width: calc(100% / 2);\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  border: 0px;\n  border-radius: 0px;\n  min-width: 200px; }\n\n.radio .radio-icon {\n  display: none;\n  --color: transparent;\n  --color-checked: transparent; }\n\nion-select-popover ion-list ion-item {\n  --border-width: 0;\n  --inner-border-width: 0; }\n\nion-select-popover ion-list ion-item ion-radio {\n  --color: transparent;\n  --color-checked: transparent; }\n\n.show {\n  text-align: right; }\n\n.head {\n  text-align: center;\n  font-weight: bold;\n  color: black;\n  font-size: 13px; }\n\n.body {\n  color: darkcyan;\n  font-size: 13px; }\n\n.body1 {\n  color: black;\n  font-size: 13px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya3NoZWV0L0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcd29ya3NoZWV0XFx3b3Jrc2hlZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFPcEI7RUFDSSxhQUFhO0VBQ2Isb0JBQVE7RUFDUiw0QkFBZ0IsRUFBQTs7QUFFaEI7RUFDSSxpQkFBZTtFQUNmLHVCQUFxQixFQUFBOztBQUd2QjtFQUNFLG9CQUFRO0VBQ1IsNEJBQWdCLEVBQUE7O0FBSXhCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtzaGVldC93b3Jrc2hlZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLXNlZ21lbnR7XHJcbiAgLy8gICBoZWlnaHQ6MTUwcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4ucmFkaW8gLnJhZGlvLWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3QtcG9wb3ZlciBpb24tbGlzdCBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1zZWxlY3QtcG9wb3ZlciBpb24tbGlzdCBpb24taXRlbSBpb24tcmFkaW8ge1xyXG4gICAgICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuXHJcblxyXG4uc2hvd3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gIGNvbG9yOiBkYXJrY3lhbjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5ib2R5MXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/worksheet/worksheet.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/worksheet/worksheet.page.ts ***!
  \***************************************************/
/*! exports provided: WorksheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetPage", function() { return WorksheetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/services/workorder.service */ "./src/app/services/workorder.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorksheetPage = /** @class */ (function () {
    function WorksheetPage(http, modalController, JobcardService) {
        this.http = http;
        this.modalController = modalController;
        this.JobcardService = JobcardService;
        this.approve = [];
        this.activate = [];
        this.validateWW = [];
        this.pendingWW = [];
        this.concludeWW = [];
        this.inProgressWW = [];
        this.completedWW = [];
        this.segment = "todolist";
        this.segment = "activate";
    }
    WorksheetPage.prototype.ngOnInit = function () {
        this.getWorkSheet();
    };
    WorksheetPage.prototype.getWorkSheet = function () {
        var _this = this;
        this.http.getWorkSheet().subscribe(function (response) {
            _this.wWorksheet = response.Result;
            _this.wWorksheet.forEach(function (wwStatus) {
                // if(wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 4){
                //   this.validateWW.push(wwStatus);
                // }
                if (wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 2 || wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 8 || wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 16) {
                    _this.activate.push(wwStatus);
                    // sort by name
                    _this.activate.sort(function (a, b) {
                        var workordernumberA = a.workordernumber.toUpperCase(); // ignore upper and lowercase
                        var workordernumberB = b.workordernumber.toUpperCase(); // ignore upper and lowercase
                        if (workordernumberA < workordernumberB) {
                            return -1;
                        }
                        if (workordernumberA > workordernumberB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    });
                }
                // if(wwStatus.worksheetstatus[0].worksheetstatus == "Activate"){
                //   this.activate.push(wwStatus);
                // }
                if (wwStatus.worksheetstatus[0].worksheetstatus == "Modified") {
                    _this.pendingWW.push(wwStatus);
                }
                if (wwStatus.worksheetstatus[0].worksheetstatus == "Conclude") {
                    _this.concludeWW.push(wwStatus);
                }
                if (wwStatus.worksheetstatus[0].worksheetstatus == "In Progress") {
                    _this.inProgressWW.push(wwStatus);
                }
                if (wwStatus.worksheetstatus[0].worksheetstatus == "Completed") {
                    _this.completedWW.push(wwStatus);
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    WorksheetPage.ctorParameters = function () { return [
        { type: _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__["WorkorderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_3__["JobcardService"] }
    ]; };
    WorksheetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worksheet',
            template: __webpack_require__(/*! raw-loader!./worksheet.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/worksheet/worksheet.page.html"),
            styles: [__webpack_require__(/*! ./worksheet.page.scss */ "./src/app/pages/worksheet/worksheet.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__["WorkorderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_3__["JobcardService"]])
    ], WorksheetPage);
    return WorksheetPage;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-worksheet-module.js.map