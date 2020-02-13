(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\" >\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n        <ion-title>\n            DASHBOARD\n        </ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-buttons>\n     </ion-toolbar>\n     \n  </ion-header>\n\n<ion-content>\n \n  <ion-toolbar>\n      <!-- (ionChange)=\"segmentChanged(segment)\" -->\n    <ion-segment  [(ngModel)]=\"segment\"  scrollable=\"true\"> \n    \n        <ion-segment-button id=\"0\" value=\"0\" >\n          TO DO LIST\n        </ion-segment-button>\n        <ion-segment-button id=\"1\" value=\"1\">\n          STATUS\n        </ion-segment-button>\n        <ion-segment-button id=\"2\" value=\"2\">\n          MAN HOURS\n        </ion-segment-button>\n        <ion-segment-button id=\"3\" value=\"3\">\n         EMPLOYEE\n          </ion-segment-button>\n          <ion-segment-button id=\"4\" value=\"4\">\n          FAST-TRACK        \n        </ion-segment-button>\n        <ion-segment-button id=\"5\" value=\"5\">\n          STATISTIC\n        </ion-segment-button>\n    \n      </ion-segment>\n    </ion-toolbar>\n\n    <!-- <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"true\" >\n\n        <ion-slide> -->\n        <div [ngSwitch]=\"segment\">\n          <ion-grid class=\"text\"  *ngSwitchCase=\"'0'\">\n           \n              <div class=\"head1\"><br><br>PROJECT<BR>MANAGEMENT</div>  \n                <div class=\"item1\"> <ion-label class=\"font\">{{approve.length}}</ion-label><br>APPROVE</div>        \n             <div class=\"item1\"> <ion-label class=\"font\">{{activate.length}}</ion-label><br>ACTIVATE</div> \n                    \n          \n              <div class=\"head1\"><br><br>WORKSHOP<br>WORKSHEET</div>\n             \n              <div class=\"item1\"> <ion-label class=\"font\">{{validateWW.length}}</ion-label><br>VALIDATE</div>  \n              <div class=\"item1\"> <ion-label class=\"font\">{{pendingWW.length}}</ion-label><br>PENDING</div>  \n              \n          \n              <div class=\"head1\"><br><br>SMART<br>JOBCARD</div>\n              <div class=\"item1\"> <ion-label class=\"font1\">0</ion-label><br>SIGN-OFF</div>  \n              \n              \n              <div class=\"head1\"></div>\n              <div class=\"head1\"><br><br>EMPLOYEE<br>MANAGEMENT</div>\n              <div class=\"item1\"> <ion-label class=\"font1\">0</ion-label><br>ON LEAVE</div> \n              <div class=\"item1\"> <ion-label class=\"font1\">0</ion-label><br>ACTIVE</div> \n             \n                  \n              <div class=\"head1\"><br><br>MESSAGE</div>\n              <div class=\"item1\"> <ion-label class=\"font1\">0</ion-label><br>UNREAD</div> \n        </ion-grid>\n      <!-- </ion-slide>\n\n      <ion-slide> -->\n          <div class=\"container\"  *ngSwitchCase=\"'1'\" >\n            <div class=\"item\"> <ion-label class=\"font\">{{total}}</ion-label><br>TOTAL IN WORKSHOP</div>\n            <div class=\"item2\"> <ion-label class=\"font\">{{newWO.length}}</ion-label><br>NEW</div>\n            <div class=\"item\"> <ion-label class=\"font\">{{inProgressWO.length}}</ion-label><br>IN-PROGRESS</div>\n            <div class=\"item2\"> <ion-label class=\"font\">{{closed}}</ion-label><br>CLOSED</div>\n            <div class=\"item\"> <ion-label class=\"font\">{{completedWO.length}}</ion-label><br>COMPLETED</div>\n            <div class=\"item2\"> <ion-label class=\"font\">{{delayed}}</ion-label><br>DELAYED</div>\n            </div>\n          <!-- </ion-slide>\n         \n          <ion-slide> --><div  *ngSwitchCase=\"'2'\">\n              <ion-card >\n                  <!-- <figure class=\"highcharts-figure\">\n                      <div id=\"highcharts\"></div>\n                    </div>\n\n\n                      \n                  </figure> -->\n                  </ion-card>\n                </div>\n      <!-- </ion-slide>\n\n      <ion-slide > -->\n          <div class=\"container\"  *ngSwitchCase=\"'3'\" >\n           <div class=\"item\"> <ion-label class=\"font\">{{supervisor}}</ion-label><br>SUPERVISOR</div>\n           <div class=\"item\"> <ion-label class=\"font\">{{technician}}</ion-label><br>TECHNICIAN</div>\n           <div class=\"item\"> <ion-label class=\"font\">{{engineer}}</ion-label><br>ENGINEER</div>\n           <div class=\"item\"> <ion-label class=\"font1\">0</ion-label><br>COMPOSITE</div>\n           <div class=\"item\"> <ion-label class=\"font1\">0</ion-label><br>SHEET METAL</div>\n           <div class=\"item\"> <ion-label class=\"font1\">0</ion-label><br>PAINT</div>\n          </div>\n        <!-- </ion-slide>\n\n        <ion-slide> -->\n        <ion-card  *ngSwitchCase=\"'4'\">\n          <ion-card-header>\n            Change Password\n          </ion-card-header>\n          <ion-card-content>\n            Your change password form here\n          </ion-card-content>\n        </ion-card>\n      <!-- </ion-slide>\n\n      <ion-slide> -->\n    \n      <!-- <ion-card  > -->\n        <!-- <div *ngSwitchCase=\"'5'\" > -->\n         \n       <!-- <ion-toolbar > -->\n          <!-- <ion-tabs>\n          <ion-tab-bar slot=\"bottom\" fixed>\n            <ion-tab-button tab=\"sales\" >\n              <ion-label class=\"button3\"  >SALES</ion-label>\n            </ion-tab-button>\n        \n            <ion-tab-button tab=\"revenue\">\n              <ion-label class=\"button3\" >REVENUE</ion-label>\n            </ion-tab-button>\n        \n            <ion-tab-button tab=\"profit\">\n              <ion-label class=\"button3\" >PROFIT</ion-label>\n            </ion-tab-button>\n          </ion-tab-bar>\n        </ion-tabs> -->\n           <!-- </ion-toolbar> -->\n\n      <div *ngSwitchCase=\"'5'\">\n        <ion-toolbar  [(ngModel)]=\"segment\"  slot=\"bottom\">\n          <!-- (ionChange)=\"segmentChanged(segment)\" -->\n          \n        <ion-segment > \n            <ion-segment-button id=\"11\" value=\"0\" >\n              <ion-label class=\"button3\">SALES</ion-label>\n            </ion-segment-button>\n            <ion-segment-button id=\"12\" value=\"1\">\n              <ion-label class=\"button3\">REVENUE</ion-label>\n            </ion-segment-button>\n            <ion-segment-button id=\"13\" value=\"2\">\n              <ion-label class=\"button3\">PROFIT</ion-label>\n            </ion-segment-button>        \n          </ion-segment>\n        </ion-toolbar>\n\n\n        <div [ngSwitch]=\"segment\">\n            <ion-card  class=\"tabbar\" *ngSwitchCase=\"'0'\" >\n                <ion-card-header>\n                  sales\n                </ion-card-header>\n              </ion-card>\n\n              <ion-card  class=\"tabbar\" *ngSwitchCase=\"'1'\" >\n                <ion-card-header>\n                  REVENUE\n                </ion-card-header>\n              </ion-card>\n\n              <ion-card  class=\"tabbar\" *ngSwitchCase=\"'2'\" >\n                <ion-card-header>\n                  PROFIT\n                </ion-card-header>\n              </ion-card>\n            </div>\n\n   \n</div>\n      <!-- </ion-card> -->\n      <!-- </ion-slide>\n      \n </ion-slides> -->\n    \n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_2__["DashboardPage"]
    }
];
var DashboardPageRoutingModule = /** @class */ (function () {
    function DashboardPageRoutingModule() {
    }
    DashboardPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], DashboardPageRoutingModule);
    return DashboardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardPageRoutingModule"]
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  width: calc(100% / 3.5);\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  border: 0px;\n  border-radius: 0px; }\n  ion-segment-button ion-label {\n    max-width: calc(90vw / 3); }\n  .text {\n  font-size: 11.5px;\n  font-style: bold;\n  color: black; }\n  ion-button {\n  background-color: #ADD8E6;\n  width: 65px;\n  height: 65px;\n  color: black;\n  border-radius: 5px;\n  font-size: 11.5px; }\n  .head {\n  text-align: center;\n  float: left;\n  width: 95px;\n  height: 80px; }\n  .head1 {\n  text-align: center;\n  float: left;\n  width: 110px;\n  height: 80px; }\n  .head2 {\n  text-align: center;\n  float: left;\n  width: 130px;\n  height: 80px; }\n  .container {\n  display: grid;\n  grid-template-columns: auto auto; }\n  .item {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  padding: 50px;\n  width: 180px;\n  height: 170px;\n  font-size: 11px;\n  text-align: center;\n  color: black; }\n  .item1 {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  padding: 10px;\n  width: 80px;\n  height: 80px;\n  font-size: 11px;\n  text-align: center;\n  color: black;\n  float: right; }\n  .item2 {\n  background-color: #FDD7E4;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  padding: 50px;\n  width: 180px;\n  height: 170px;\n  font-size: 11px;\n  text-align: center;\n  color: black; }\n  .font {\n  font-size: 30px;\n  color: dodgerblue; }\n  .font1 {\n  font-size: 30px;\n  color: gray; }\n  #highcharts {\n  margin: 0 auto; }\n  .highcharts-figure, .highcharts-data-table table {\n  min-width: 310px;\n  margin: 0 auto; }\n  .button3 {\n  font-size: 11.5px;\n  color: darkcyan;\n  text-align: center; }\n  .tabbar {\n  min-height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBTHRCO0lBU1EseUJBQXlCLEVBQUE7RUFJL0I7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFFaEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFFaEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLGFBQWE7RUFDYixnQ0FBZ0MsRUFBQTtFQUlsQztFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBVyxFQUFBO0VBR2I7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixhQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxZQUFZLEVBQUE7RUFJZDtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBVyxFQUFBO0VBb0JiO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0VBSW5CO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTtFQUliO0VBR0UsY0FBYyxFQUFBO0VBTWxCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtFQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFFcEI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzLjUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiBcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyg5MHZ3IC8gMyk7XHJcbiAgICB9XHJcblxyXG59ICBcclxuICAudGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojQUREOEU2O1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDk1cHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiAgLmhlYWQxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmhlYWQye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiBcclxuICB9XHJcbi8vZW1wbG95ZWVcclxuICAuaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDRkVDRUMgO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gIC8vdG9kb2xpc3RcclxuICAuaXRlbTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQ0ZFQ0VDIDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLy9pdGVtIDIgbiAzIHN0YXR1c1xyXG4gIC5pdGVtMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGREQ3RTQgO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5pdGVtMyB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiNGREQ3RTQgO1xyXG4gIC8vICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvLyAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgLy8gICB3aWR0aDogMTgwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDEyOHB4O1xyXG4gIC8vICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgY29sb3I6YmxhY2s7XHJcbiAgLy8gICBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIGlvbi1zbGlkZSB7XHJcbiAgLy8gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgLy8gfVxyXG5cclxuICAuZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG5cclxuICB9XHJcblxyXG4gIC5mb250MXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG5cclxuICB9XHJcblxyXG4gICNoaWdoY2hhcnRzIHtcclxuICAgIC8vIHdpZHRoOiAzNTBweDsgXHJcbiAgICAvLyBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvLyBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy8gcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAvLyB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbi5oaWdoY2hhcnRzLWZpZ3VyZSwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0YWJsZSB7XHJcbiAgICBtaW4td2lkdGg6IDMxMHB4OyBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uM3tcclxuICBmb250LXNpemU6IDExLjVweDtcclxuICBjb2xvcjogZGFya2N5YW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YWJiYXJ7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/app/services/workorder.service */ "./src/app/services/workorder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = /** @class */ (function () {
    function DashboardPage(
    // private http: HttpClient, 
    http) {
        this.http = http;
        this.segment = 0;
        this.new = [];
        this.approve = [];
        this.activate = [];
        this.completedWO = [];
        this.inProgressWO = [];
        this.newWO = [];
        this.validateWW = [];
        this.pendingWW = [];
    }
    DashboardPage.prototype.ngOnInit = function () {
        this.getSupervisor();
        this.getTechnician();
        this.getEngineer();
        this.getTotal();
        this.getWorkOrder();
        this.getWorkSheet();
        this.getClosed();
        this.getDelayed();
        // this.plotSimpleBarChart();
    };
    // async segmentChanged() {
    //   this.focusSegment(event['srcElement']['children'][this.segment]['id']);
    //   await this.slider.slideTo(this.segment);
    // }
    //   async slideChanged() {
    //     this.segment = await this.slider.getActiveIndex();
    //   }
    //   focusSegment(segmentId) {
    //     document.getElementById(segmentId).scrollIntoView({ 
    //       behavior: 'smooth',
    //       block: 'center',
    //       inline: 'center'
    //     });
    // }
    DashboardPage.prototype.getSupervisor = function () {
        var _this = this;
        this.http.getSupervisor().subscribe(function (response) {
            _this.supervisor = response.Actual_Total_Records_Found;
            console.log(_this.supervisor);
        }, function (error) {
            console.log("error");
        });
    };
    DashboardPage.prototype.getTechnician = function () {
        var _this = this;
        this.http.getTechnician().subscribe(function (response) {
            _this.technician = response.Actual_Total_Records_Found;
            console.log(_this.technician);
        }, function (error) {
            console.log("error");
        });
    };
    DashboardPage.prototype.getEngineer = function () {
        var _this = this;
        this.http.getEngineer().subscribe(function (response) {
            _this.engineer = response.Actual_Total_Records_Found;
            console.log(_this.engineer);
        }, function (error) {
            console.log("error");
        });
    };
    DashboardPage.prototype.getTotal = function () {
        var _this = this;
        this.http.getTotal().subscribe(function (response) {
            _this.total = response.Actual_Total_Records_Found;
            console.log(_this.total);
        }, function (error) {
            console.log("error");
        });
    };
    DashboardPage.prototype.getWorkOrder = function () {
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
    DashboardPage.prototype.getWorkSheet = function () {
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
    DashboardPage.prototype.getClosed = function () {
        var _this = this;
        this.http.getClosed().subscribe(function (response) {
            _this.closed = response.total_closed_radomes;
            console.log(_this.closed);
        }, function (error) {
            console.log("error");
        });
    };
    DashboardPage.prototype.getDelayed = function () {
        var _this = this;
        this.http.getDelayed().subscribe(function (response) {
            _this.delayed = response.total_delayed_radomes;
            console.log(_this.delayed);
        }, function (error) {
            console.log("error");
        });
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_2__["WorkorderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slides', { static: true }),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], DashboardPage.prototype, "slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('barChart', { static: true }),
        __metadata("design:type", Element)
    ], DashboardPage.prototype, "barChart", void 0);
    DashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_2__["WorkorderService"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map