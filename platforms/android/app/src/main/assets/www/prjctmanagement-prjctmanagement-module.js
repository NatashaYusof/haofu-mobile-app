(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prjctmanagement-prjctmanagement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/prjctmanagement/prjctmanagement.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/prjctmanagement/prjctmanagement.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\" >\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n        <ion-title>\n            SMART JOBCARD\n        </ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-buttons>\n     </ion-toolbar>\n     \n  </ion-header>\n\n<ion-content>\n    <ion-toolbar>\n        <ion-segment value=\"todolist\" > \n              <ion-segment-button value=\"todolist\">TO-DO LIST\n                  <!-- <ion-label stacked>TO-DO LIST</ion-label> -->\n            <ion-select interface=\"popover\" mode=\"ios\" [(ngModel)]=\"segment\" >\n                  <ion-select-option   value=\"activate\" [selected]=\"true\">ACTIVATE ({{activate.length}})</ion-select-option>\n                  <ion-select-option   value=\"approve\">APPROVE ({{approve.length}})</ion-select-option>\n                </ion-select>\n            </ion-segment-button>\n            <ion-segment-button value=\"follow\">FOLLOW-UP LIST\n                <!-- <ion-label stacked>FOLLOW-UP LIST</ion-label> -->\n                <ion-select interface=\"popover\"   [(ngModel)]=\"segment\" >\n                    <ion-select-option value=\"new\">NEW / PENDING ({{newWO.length}})</ion-select-option>\n                    <ion-select-option value=\"progress\">IN-PROGRESS ({{inProgressWO.length}})</ion-select-option>\n                    <ion-select-option value=\"completed\">COMPLETED ({{completedWO.length}})</ion-select-option>\n                    <ion-select-option value=\"view\">VIEW ALL ()</ion-select-option>\n                  </ion-select>\n            </ion-segment-button>\n        \n          </ion-segment>\n        </ion-toolbar>\n  \n          <div [ngSwitch]=\"segment\">\n            <div *ngSwitchCase=\"'activate'\">\n              <ion-item  class=\"show\"  >\n                  <ion-label >Show</ion-label>\n                  <ion-select  interface=\"popover\">\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"25\">25</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                  </ion-select>\n                  </ion-item> \n\n            <ion-card >        \n              <ion-card-content>\n                  <ion-row>\n                      <ion-col  size=\"4\">\n                        <div class=\"head\">CRO</div>\n                      </ion-col>\n                      <ion-col>\n                        <div  class=\"head\">EDD</div>\n                      </ion-col>\n                      <ion-col size=\"1.5\">\n                        <div  class=\"head\">WW</div>\n                      </ion-col>\n                      <ion-col size=\"1\">\n                        <div  class=\"head\"></div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row  *ngFor=\"let cro of activate\">\n                        <ion-col  size=\"4\" >\n                          <div class=\"body\" (click)=\" goView(cro.workorderid)\">{{cro.workorderno}}</div>\n                        </ion-col>\n                        <ion-col>\n                          <div class=\"body1\">{{cro.workorderestimateddeliverydatetime | date:\"MMM dd, yyyy\"}}</div>\n                        </ion-col>\n                        <ion-col size=\"1.5\">\n                          <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                        </ion-col>\n                        <ion-col size=\"1\">\n                          <div class=\"body\" (click)=\" goEdit(cro.workorderid)\"><img src=\"assets/icon/edit2.png\" tappable /></div>\n                        </ion-col>\n                      </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n              <div *ngSwitchCase=\"'approve'\">\n                <ion-item  class=\"show\"  >\n                    <ion-label >Show</ion-label>\n                    <ion-select  interface=\"popover\">\n                      <ion-select-option value=\"10\">10</ion-select-option>\n                      <ion-select-option value=\"25\">25</ion-select-option>\n                      <ion-select-option value=\"50\">50</ion-select-option>\n                      <ion-select-option value=\"100\">100</ion-select-option>\n                    </ion-select>\n                    </ion-item> \n  \n              <ion-card >        \n                <ion-card-content>\n                    <ion-row>\n                        <ion-col  size=\"4\">\n                          <div class=\"head\">CRO</div>\n                        </ion-col>\n                        <ion-col  size=\"4\">\n                          <div  class=\"head\">EDD</div>\n                        </ion-col>\n                        <ion-col size=\"1.5\">\n                          <div  class=\"head\">WW</div>\n                        </ion-col>\n                        <ion-col size=\"1.3\">\n                            <div  class=\"head\">SJ</div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div  class=\"head\"></div>\n                          </ion-col>\n                      </ion-row>\n                      <ion-row  *ngFor=\"let cro of approve\">\n                          <ion-col  size=\"4\" >\n                            <div class=\"body\"(click)=\" goView(cro.workorderid)\">{{cro.workorderno}}</div>\n                          </ion-col>\n                          <ion-col  size=\"4\">\n                            <div class=\"body1\">{{cro.workorderestimateddeliverydatetime | date:\"MMM dd, yyyy\"}}</div>\n                          </ion-col>\n                          <ion-col size=\"1.5\">\n                            <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div class=\"body\"><img src=\"assets/icon/file.png\" tappable width=\"10px\" height=\"20px\"/></div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div class=\"body\" (click)=\" goEdit(cro.workorderid)\"><img src=\"assets/icon/edit2.png\" tappable /></div>\n                          </ion-col>\n                        </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </div>\n  \n            <div *ngSwitchCase=\"'new'\">\n                <ion-item  class=\"show\"  >\n                    <ion-label >Show</ion-label>\n                    <ion-select  interface=\"popover\">\n                      <ion-select-option value=\"10\">10</ion-select-option>\n                      <ion-select-option value=\"25\">25</ion-select-option>\n                      <ion-select-option value=\"50\">50</ion-select-option>\n                      <ion-select-option value=\"100\">100</ion-select-option>\n                    </ion-select>\n                    </ion-item> \n  \n              <ion-card >        \n                <ion-card-content>\n                    <ion-row>\n                        <ion-col  size=\"4\">\n                          <div class=\"head\">CRO</div>\n                        </ion-col>\n                        <ion-col>\n                          <div  class=\"head\">EDD</div>\n                        </ion-col>\n                        <ion-col size=\"1.5\">\n                          <div  class=\"head\">WW</div>\n                        </ion-col>\n                        <ion-col size=\"1\">\n                          <div  class=\"head\"></div>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row  *ngFor=\"let cro of newWO\">\n                          <ion-col  size=\"4\" >\n                            <div class=\"body\" (click)=\" goView(cro.workorderid)\">{{cro.workorderno}}</div>\n                          </ion-col>\n                          <ion-col>\n                            <div class=\"body1\">{{cro.workorderestimateddeliverydatetime | date:\"MMM dd, yyyy\"}}</div>\n                          </ion-col>\n                          <ion-col size=\"1.5\">\n                            <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div class=\"body\" (click)=\" goEdit(cro.workorderid)\"><img src=\"assets/icon/edit2.png\" tappable /></div>\n                          </ion-col>\n                        </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </div>\n    \n                \n            <div *ngSwitchCase=\"'progress'\">\n                <ion-item  class=\"show\"  >\n                    <ion-label >Show</ion-label>\n                    <ion-select  interface=\"popover\">\n                      <ion-select-option value=\"10\">10</ion-select-option>\n                      <ion-select-option value=\"25\">25</ion-select-option>\n                      <ion-select-option value=\"50\">50</ion-select-option>\n                      <ion-select-option value=\"100\">100</ion-select-option>\n                    </ion-select>\n                    </ion-item> \n  \n              <ion-card >        \n                <ion-card-content>\n                    <ion-row>\n                        <ion-col  size=\"4\">\n                          <div class=\"head\">CRO</div>\n                        </ion-col>\n                        <ion-col  size=\"4\">\n                          <div  class=\"head\">EDD</div>\n                        </ion-col>\n                        <ion-col size=\"1.5\">\n                          <div  class=\"head\">WW</div>\n                        </ion-col>\n                        <ion-col size=\"1.3\">\n                            <div  class=\"head\">SJ</div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div  class=\"head\"></div>\n                          </ion-col>\n                      </ion-row>\n                      <ion-row  *ngFor=\"let cro of inProgressWO\">\n                          <ion-col  size=\"4\" >\n                            <div class=\"body\"(click)=\" goView(cro.workorderid)\">{{cro.workorderno}}</div>\n                          </ion-col>\n                          <ion-col  size=\"4\">\n                            <div class=\"body1\">{{cro.workorderestimateddeliverydatetime | date:\"MMM dd, yyyy\"}}</div>\n                          </ion-col>\n                          <ion-col size=\"1.5\">\n                            <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div class=\"body\"><img src=\"assets/icon/file.png\" tappable width=\"10px\" height=\"20px\"/></div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div class=\"body\" (click)=\" goEdit(cro.workorderid)\"><img src=\"assets/icon/edit2.png\" tappable /></div>\n                          </ion-col>\n                        </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </div>\n\n\n            <div *ngSwitchCase=\"'completed'\">\n                <ion-item  class=\"show\"  >\n                    <ion-label >Show</ion-label>\n                    <ion-select  interface=\"popover\">\n                      <ion-select-option value=\"10\">10</ion-select-option>\n                      <ion-select-option value=\"25\">25</ion-select-option>\n                      <ion-select-option value=\"50\">50</ion-select-option>\n                      <ion-select-option value=\"100\">100</ion-select-option>\n                    </ion-select>\n                    </ion-item> \n  \n              <ion-card >        \n                <ion-card-content>\n                    <ion-row>\n                        <ion-col  col-13>\n                          <div class=\"head\">CRO</div>\n                        </ion-col>\n                        <ion-col col-6>\n                          <div  class=\"head\">EDD</div>\n                        </ion-col>\n                        <ion-col col-6>\n                          <div  class=\"head\">WW</div>\n                        </ion-col>\n                        <ion-col col-6>\n                            <div  class=\"head\">SJ</div>\n                          </ion-col>\n                          <ion-col col-6>\n                            <div  class=\"head\"></div>\n                          </ion-col>\n                          <ion-col col-6>\n                              <div  class=\"head\">APPROVAL</div>\n                            </ion-col>\n                            <ion-col col-6>\n                                <div  class=\"head\">REPORT</div>\n                              </ion-col>\n                      </ion-row>\n                      <ion-row  *ngFor=\"let cro of completedWO\">\n                          <ion-col col-13 >\n                            <div class=\"body\"(click)=\" goView(cro.workorderid)\">{{cro.workorderno}}</div>\n                          </ion-col>\n                          <ion-col col-6>\n                            <div class=\"body1\">{{cro.workorderestimateddeliverydatetime | date:\"MMM dd, yyyy\"}}</div>\n                          </ion-col>\n                          <ion-col col-6>\n                            <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                          </ion-col>\n                          <ion-col col-6>\n                            <div class=\"body\"><img src=\"assets/icon/file.png\" tappable width=\"10px\" height=\"20px\"/></div>\n                          </ion-col>\n                          <ion-col col-6>\n                            <div class=\"body\" (click)=\" goEdit(cro.workorderid)\"><img src=\"assets/icon/edit2.png\" tappable /></div>\n                          </ion-col>\n                          <ion-col col-6>\n                            <div  class=\"body\"></div>\n                          </ion-col>\n                          <ion-col col-6>\n                            <div  class=\"body\"></div>\n                          </ion-col>\n                        </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </div>\n    \n            <div *ngSwitchCase=\"'view'\">\n                <ion-item  class=\"show\"  >\n                    <ion-label >Show</ion-label>\n                    <ion-select  interface=\"popover\">\n                      <ion-select-option value=\"10\">10</ion-select-option>\n                      <ion-select-option value=\"25\">25</ion-select-option>\n                      <ion-select-option value=\"50\">50</ion-select-option>\n                      <ion-select-option value=\"100\">100</ion-select-option>\n                    </ion-select>\n                    </ion-item> \n  \n              <ion-card >        \n                <ion-card-content>\n                    <ion-row>\n                        <ion-col  size=\"4\">\n                          <div class=\"head\">CRO</div>\n                        </ion-col>\n                        <ion-col  size=\"4\">\n                          <div  class=\"head\">EDD</div>\n                        </ion-col>\n                        <ion-col size=\"1.5\">\n                          <div  class=\"head\">WW</div>\n                        </ion-col>\n                        <ion-col size=\"1.3\">\n                            <div  class=\"head\">SJ</div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div  class=\"head\"></div>\n                          </ion-col>\n                      </ion-row>\n                      <ion-row  *ngFor=\"let cro of workOrders\">\n                          <ion-col  size=\"4\" >\n                            <div class=\"body\"(click)=\" goView(cro.workorderid)\">{{cro.workorderno}}</div>\n                          </ion-col>\n                          <ion-col  size=\"4\">\n                            <div class=\"body1\">{{cro.workorderestimateddeliverydatetime | date:\"MMM dd, yyyy\"}}</div>\n                          </ion-col>\n                          <ion-col size=\"1.5\">\n                            <div class=\"body\"><img src=\"assets/icon/folder.png\" tappable /></div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div class=\"body\"><img src=\"assets/icon/file.png\" tappable width=\"10px\" height=\"20px\"/></div>\n                          </ion-col>\n                          <ion-col size=\"1\">\n                            <div class=\"body\" (click)=\" goEdit(cro.workorderid)\"><img src=\"assets/icon/edit2.png\" tappable /></div>\n                          </ion-col>\n                        </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </div>\n\n    \n    \n          </div>\n        \n</ion-content>\n"

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

module.exports = "ion-segment-button {\n  width: calc(100% / 2);\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  border: 0px;\n  border-radius: 0px;\n  min-width: 200px; }\n\n.radio .radio-icon {\n  display: none;\n  --color: transparent;\n  --color-checked: transparent; }\n\nion-select-popover ion-list ion-item {\n  --border-width: 0;\n  --inner-border-width: 0; }\n\nion-select-popover ion-list ion-item ion-radio {\n  --color: transparent;\n  --color-checked: transparent; }\n\n.show {\n  text-align: right; }\n\n.head {\n  text-align: center;\n  font-weight: bold;\n  color: black;\n  font-size: 13px; }\n\n.body {\n  color: darkcyan;\n  font-size: 13px; }\n\n.body1 {\n  color: black;\n  font-size: 13px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJqY3RtYW5hZ2VtZW50L0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xccHJqY3RtYW5hZ2VtZW50XFxwcmpjdG1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFPcEI7RUFDSSxhQUFhO0VBQ2Isb0JBQVE7RUFDUiw0QkFBZ0IsRUFBQTs7QUFFaEI7RUFDSSxpQkFBZTtFQUNmLHVCQUFxQixFQUFBOztBQUd2QjtFQUNFLG9CQUFRO0VBQ1IsNEJBQWdCLEVBQUE7O0FBSXhCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByamN0bWFuYWdlbWVudC9wcmpjdG1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLXNlZ21lbnR7XHJcbiAgLy8gICBoZWlnaHQ6MTUwcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4ucmFkaW8gLnJhZGlvLWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3QtcG9wb3ZlciBpb24tbGlzdCBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1zZWxlY3QtcG9wb3ZlciBpb24tbGlzdCBpb24taXRlbSBpb24tcmFkaW8ge1xyXG4gICAgICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuXHJcblxyXG4uc2hvd3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gIGNvbG9yOiBkYXJrY3lhbjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5ib2R5MXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

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
/* harmony import */ var _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/services/workorder.service */ "./src/app/services/workorder.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/view.page */ "./src/app/pages/view/view.page.ts");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
/* harmony import */ var _edit_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit/edit.page */ "./src/app/pages/edit/edit.page.ts");
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






var PrjctmanagementPage = /** @class */ (function () {
    function PrjctmanagementPage(http, modalController, JobcardService) {
        this.http = http;
        this.modalController = modalController;
        this.JobcardService = JobcardService;
        this.new = [];
        this.approve = [];
        this.activate = [];
        this.completedWO = [];
        this.inProgressWO = [];
        this.newWO = [];
        this.validateWW = [];
        this.pendingWW = [];
        this.segment = "todolist";
        this.segment = "activate";
    }
    PrjctmanagementPage.prototype.ngOnInit = function () {
        this.getWorkOrder();
        this.getWorkSheet();
    };
    PrjctmanagementPage.prototype.getWorkOrder = function () {
        var _this = this;
        this.http.getWorkOrder().subscribe(function (response) {
            _this.workOrders = response.Result;
            var workOrderidArr = [];
            console.log(_this.workOrders);
            _this.workOrders.forEach(function (workOrder) {
                workOrderidArr.push(workOrder.workorderid);
                // console.log(workOrder)
                if (Array.isArray(workOrder.workorderstatus)) {
                    workOrder.workorderstatus.forEach(function (wwstatus) {
                        if (wwstatus.workorderstatusintegervalue == 2 || wwstatus.workorderstatusintegervalue == 8 || wwstatus.workorderstatusintegervalue == 16) {
                            _this.activate.push(workOrder);
                            // sort by name
                            _this.activate.sort(function (a, b) {
                                var workordernoA = a.workorderno.toUpperCase(); // ignore upper and lowercase
                                var workordernoB = b.workorderno.toUpperCase(); // ignore upper and lowercase
                                if (workordernoA < workordernoB) {
                                    return -1;
                                }
                                if (workordernoA > workordernoB) {
                                    return 1;
                                }
                                // names must be equal
                                return 0;
                            });
                        }
                        if (wwstatus.workorderstatusintegervalue == 128) {
                            // this.inProgressWO.push(workOrder)
                        }
                        else if (wwstatus.workorderstatusintegervalue == 32) {
                            _this.completedWO.push(workOrder);
                        }
                        if (wwstatus.workorderstatus == "In Progress/Approve") {
                            _this.approve.push(workOrder);
                            _this.inProgressWO.push(workOrder);
                        }
                        else if (wwstatus.workorderstatus == "In Progress" || wwstatus.workorderstatus == "Modified") {
                            _this.inProgressWO.push(workOrder);
                        }
                        else if (wwstatus.workorderstatus == "Not Started") {
                            _this.newWO.push(workOrder);
                        }
                    });
                }
            });
        });
    };
    PrjctmanagementPage.prototype.getWorkSheet = function () {
        var _this = this;
        this.http.getWorkSheet().subscribe(function (response) {
            _this.wWorksheet = response.Result;
            _this.wWorksheet.forEach(function (wwStatus) {
                if (wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 4) {
                    _this.validateWW.push(wwStatus);
                }
                if (wwStatus.worksheetstatus[0].worksheetstatus == "Modified") {
                    _this.pendingWW.push(wwStatus);
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    PrjctmanagementPage.prototype.goView = function (workorderid) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(workorderid);
                        this.JobcardService.workorderId = workorderid;
                        return [4 /*yield*/, this.modalController.create({
                                component: _view_view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"],
                                componentProps: {
                                    "paramWorkOrderId": workorderid,
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
    PrjctmanagementPage.prototype.goEdit = function (workorderid) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(workorderid);
                        this.JobcardService.workorderId = workorderid;
                        return [4 /*yield*/, this.modalController.create({
                                component: _edit_edit_page__WEBPACK_IMPORTED_MODULE_5__["EditPage"],
                                componentProps: {
                                    "paramWorkOrderId": workorderid,
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
    PrjctmanagementPage.ctorParameters = function () { return [
        { type: _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__["WorkorderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"] }
    ]; };
    PrjctmanagementPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prjctmanagement',
            template: __webpack_require__(/*! raw-loader!./prjctmanagement.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/prjctmanagement/prjctmanagement.page.html"),
            styles: [__webpack_require__(/*! ./prjctmanagement.page.scss */ "./src/app/pages/prjctmanagement/prjctmanagement.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_1__["WorkorderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"]])
    ], PrjctmanagementPage);
    return PrjctmanagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=prjctmanagement-prjctmanagement-module.js.map