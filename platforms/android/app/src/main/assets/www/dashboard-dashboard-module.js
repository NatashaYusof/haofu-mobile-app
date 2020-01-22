(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\" >\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n        <ion-title>\n            DASHBOARD\n        </ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-buttons>\n     </ion-toolbar>\n     \n  </ion-header>\n\n<ion-content>\n \n  <ion-toolbar>\n    <ion-segment  (ionChange)=\"segmentChanged(segment)\" [(ngModel)]=\"segment\"  scrollable=\"true\"> \n    \n        <ion-segment-button id=\"0\" value=\"0\" >\n          TO DO LIST\n        </ion-segment-button>\n        <ion-segment-button id=\"1\" value=\"1\">\n          STATUS\n        </ion-segment-button>\n        <ion-segment-button id=\"2\" value=\"2\">\n          MAN HOURS\n        </ion-segment-button>\n        <ion-segment-button id=\"3\" value=\"3\">\n         EMPLOYEE\n          </ion-segment-button>\n          <ion-segment-button id=\"4\" value=\"4\">\n          FAST-TRACK        \n        </ion-segment-button>\n        <ion-segment-button id=\"5\" value=\"5\">\n          STATISTIC\n        </ion-segment-button>\n    \n      </ion-segment>\n    </ion-toolbar>\n\n    <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"true\" >\n\n        <ion-slide>\n          <ion-grid class=\"text\" >\n           \n              <div class=\"head1\"><br><br>PROJECT<BR>MANAGEMENT</div>  \n                <div class=\"item1\"> <ion-label class=\"font\">{{approve.length}}</ion-label><br>APPROVE</div>        \n             <div class=\"item1\"> <ion-label class=\"font\">{{activate.length}}</ion-label><br>ACTIVATE</div> \n                    \n          \n              <div class=\"head1\"><br><br>WORKSHOP<br>WORKSHEET</div>\n              <div class=\"item1\"> <ion-label class=\"font\"></ion-label><br>UNASSIGN</div> \n              <div class=\"item1\"> <ion-label class=\"font\">{{validateWW.length}}</ion-label><br>VALIDATE</div>  \n              <div class=\"item1\"> <ion-label class=\"font\">{{pendingWW.length}}</ion-label><br>PENDING</div>  \n              \n          \n              <div class=\"head1\"><br><br>SMART<br>JOBCARD</div>\n              <div class=\"item1\"> <ion-label class=\"font\"></ion-label><br>SIGN-OFF</div>      \n              \n              <div class=\"head1\"></div>\n              <div class=\"head1\"><br><br>EMPLOYEE<br>MANAGEMENT</div>\n              <div class=\"item1\"><br><br><br><br>ON LEAVE</div> \n              <div class=\"item1\"><br><br><br><br>ACTIVE</div>\n           \n         \n              <div class=\"head1\"><br><br>MESSAGE</div>\n              <div class=\"item1\"><br><br><br><br>UNREAD</div>\n        </ion-grid>\n      </ion-slide>\n\n      <ion-slide>\n          <div >\n            <div class=\"item2\"> <ion-label class=\"font\">{{total}}</ion-label><br>TOTAL IN WORKSHOP</div>\n            <div class=\"item3\"> <ion-label class=\"font\">{{newWO.length}}</ion-label><br>NEW</div>\n            <div class=\"item3\"><br><br><br><br>PAINT</div>\n            <div class=\"item2\"><br><br><br><br>IN-EXECUTION</div>\n            <div class=\"item3\"><br><br><br><br>PICK-UP LIST</div>\n            <div class=\"item2\"> <ion-label class=\"font\">{{completedWO.length}}</ion-label><br>COMPLETED</div>\n            <div class=\"item3\"><br><br><br><br>WAITING LIST</div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n        <ion-card >\n          <ion-card-content>\n              <canvas #hrzBarChart5></canvas>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide >\n          <div class=\"container\"  >\n           <div class=\"item\"> <ion-label class=\"font\">{{supervisor}}</ion-label><br>SUPERVISOR</div>\n           <div class=\"item\"> <ion-label class=\"font\">{{technician}}</ion-label><br>TECHNICIAN</div>\n           <div class=\"item\"> <ion-label class=\"font\">{{engineer}}</ion-label><br>ENGINEER</div>\n            <div class=\"item\"><br><br>COMPOSITE</div>\n            <div class=\"item\"><br><br>SHEET METAL</div>\n            <div class=\"item\"><br><br>PAINT</div>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n        <ion-card >\n          <ion-card-header>\n            Change Password\n          </ion-card-header>\n          <ion-card-content>\n            Your change password form here\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            Change Password\n          </ion-card-header>\n          <ion-card-content>\n            Your change password form here\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      \n </ion-slides>\n    \n    \n</ion-content>\n"

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

module.exports = "ion-segment-button {\n  width: calc(100% / 3.5);\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  border: 0px;\n  border-radius: 0px; }\n  ion-segment-button ion-label {\n    max-width: calc(90vw / 3); }\n  .text {\n  font-size: 11.5px;\n  font-style: bold;\n  color: black; }\n  ion-button {\n  background-color: #ADD8E6;\n  width: 65px;\n  height: 65px;\n  color: black;\n  border-radius: 5px;\n  font-size: 11.5px; }\n  .head {\n  text-align: center;\n  float: left;\n  width: 95px;\n  height: 80px; }\n  .head1 {\n  text-align: center;\n  float: left;\n  width: 110px;\n  height: 80px; }\n  .head2 {\n  text-align: center;\n  float: left;\n  width: 130px;\n  height: 80px; }\n  .container {\n  display: grid;\n  grid-template-columns: auto auto; }\n  .item {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  padding: 50px;\n  height: 170px;\n  font-size: 12px;\n  text-align: center;\n  color: black; }\n  .item1 {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  padding: 10px;\n  width: 80px;\n  height: 80px;\n  font-size: 11px;\n  text-align: center;\n  color: black;\n  float: right; }\n  .item2 {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  padding: 50px;\n  border-radius: 10px;\n  width: 180px;\n  height: 170px;\n  font-size: 11px;\n  text-align: center;\n  color: black;\n  float: left; }\n  .item3 {\n  background-color: #FDD7E4;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  padding: 50px;\n  width: 180px;\n  height: 128px;\n  font-size: 11px;\n  text-align: center;\n  color: black;\n  float: right; }\n  .font {\n  font-size: 30px;\n  color: dodgerblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBTHRCO0lBU1EseUJBQXlCLEVBQUE7RUFJL0I7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFFaEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFFaEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLGFBQWE7RUFDYixnQ0FBZ0MsRUFBQTtFQUlsQztFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFXLEVBQUE7RUFHYjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGFBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBVztFQUNYLFlBQVksRUFBQTtFQUlkO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVyxFQUFBO0VBR2I7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxZQUFZLEVBQUE7RUFPZDtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzLjUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiBcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyg5MHZ3IC8gMyk7XHJcbiAgICB9XHJcblxyXG59ICBcclxuICAudGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojQUREOEU2O1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDk1cHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiAgLmhlYWQxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmhlYWQye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiBcclxuICB9XHJcbi8vZW1wbG95ZWVcclxuICAuaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDRkVDRUMgO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gIC8vdG9kb2xpc3RcclxuICAuaXRlbTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQ0ZFQ0VDIDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLy9pdGVtIDIgbiAzIHN0YXR1c1xyXG4gIC5pdGVtMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDRkVDRUMgO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZERDdFNCA7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLXNsaWRlIHtcclxuICAvLyAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcclxuICAvLyB9XHJcblxyXG4gIC5mb250e1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcblxyXG4gIH0iXX0= */"

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
    //  ionViewDidEnter() {
    //   this.generateColorArray(8);
    //   this.createHrzBarChart5()
    // }
    DashboardPage.prototype.ngOnInit = function () {
        this.getSupervisor();
        this.getTechnician();
        this.getEngineer();
        this.getTotal();
        this.getWorkOrder();
        this.getWorkSheet();
    };
    DashboardPage.prototype.segmentChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.focusSegment(event['srcElement']['children'][this.segment]['id']);
                        return [4 /*yield*/, this.slider.slideTo(this.segment)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.slideChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.slider.getActiveIndex()];
                    case 1:
                        _a.segment = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.focusSegment = function (segmentId) {
        document.getElementById(segmentId).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    };
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
    DashboardPage.ctorParameters = function () { return [
        { type: _src_app_services_workorder_service__WEBPACK_IMPORTED_MODULE_2__["WorkorderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slides', { static: true }),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], DashboardPage.prototype, "slider", void 0);
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