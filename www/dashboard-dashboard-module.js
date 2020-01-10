(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\" >\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n        <ion-title>\n            DASHBOARD\n        </ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-buttons>\n     </ion-toolbar>\n     \n  </ion-header>\n\n<ion-content>\n \n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"segment\" scrollable=\"true\" value=\"todolist\" > \n    \n        <ion-segment-button value=\"todolist\" >\n          TO DO LIST\n        </ion-segment-button>\n        <ion-segment-button value=\"status\">\n          STATUS\n        </ion-segment-button>\n        <ion-segment-button value=\"manhours\">\n          MAN HOURS\n        </ion-segment-button>\n        <ion-segment-button value=\"employee\">\n         EMPLOYEE\n          </ion-segment-button>\n          <ion-segment-button value=\"fasttrack\">\n          FAST-TRACK        \n        </ion-segment-button>\n        <ion-segment-button value=\"statistic\">\n          STATISTIC\n        </ion-segment-button>\n    \n      </ion-segment>\n    </ion-toolbar>\n\n      <div [ngSwitch]=\"segment\">\n          <ion-grid class=\"text\" *ngSwitchCase=\"'todolist'\">\n           \n              <div class=\"head1\"><br><br>PROJECT<BR>MANAGEMENT</div>        \n              <div class=\"item1\"><br><br><br><br>ACTIVATE</div>              \n              <div class=\"item1\"><br><br><br><br>APPROVE</div>\n          \n              <div class=\"head1\"><br><br>WORKSHOP<br>WORKSHEET</div>\n              <div class=\"item1\"><br><br><br><br>PENDING</div>\n              <div class=\"item1\"><br><br><br><br>VALIDATE</div>\n              <div class=\"item1\"><br><br><br><br>UNASSIGN</div>\n          \n              <div class=\"head1\"><br><br>SMART<br>JOBCARD</div>\n              <div class=\"item1\"><br><br><br><br>SIGN-OFF</div>\n              <div class=\"head1\"></div>\n              <div class=\"head1\"><br><br>EMPLOYEE<br>MANAGEMENT</div>\n              <div class=\"item1\"><br><br><br><br>ACTIVE</div>\n              <div class=\"item1\"><br><br><br><br>ON LEAVE</div> \n         \n              <div class=\"head1\"><br><br>MESSAGE</div>\n              <div class=\"item1\"><br><br><br><br>UNREAD</div>\n         \n\n        </ion-grid>\n          \n      \n          <div *ngSwitchCase=\"'status'\">\n            <div class=\"item2\"><br><br><br><br>TOTAL IN WORKSHOP</div>\n            <div class=\"item3\"><br><br><br><br>NEW</div>\n            <div class=\"item3\"><br><br><br><br>PAINT</div>\n            <div class=\"item2\"><br><br><br><br>IN-EXECUTION</div>\n            <div class=\"item3\"><br><br><br><br>PICK-UP LIST</div>\n            <div class=\"item2\"><br><br><br><br>COMPLETED</div>\n            <div class=\"item3\"><br><br><br><br>WAITING LIST</div>\n       \n         \n         \n          </div>\n    \n        <ion-card *ngSwitchCase=\"'manhours'\">\n          <ion-card-content>\n              <canvas #hrzBarChart5></canvas>\n          </ion-card-content>\n        </ion-card>\n\n          <div class=\"container\"  *ngSwitchCase=\"'employee'\">\n            <div class=\"item\"><br><br><br><br>SUPERVISOR</div>\n            <div class=\"item\"><br><br><br><br>TECHNICIAN</div>\n            <div class=\"item\"><br><br><br><br>ENGINEER</div>\n            <div class=\"item\"><br><br><br><br>COMPOSITE</div>\n            <div class=\"item\"><br><br><br><br>SHEET METAL</div>\n            <div class=\"item\"><br><br><br><br>PAINT</div>\n          </div>\n        \n        <ion-card *ngSwitchCase=\"'fasttrack'\">\n          <ion-card-header>\n            Change Password\n          </ion-card-header>\n          <ion-card-content>\n            Your change password form here\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card *ngSwitchCase=\"'statistic'\">\n          <ion-card-header>\n            Change Password\n          </ion-card-header>\n          <ion-card-content>\n            Your change password form here\n          </ion-card-content>\n        </ion-card>\n      </div>\n    \n    \n</ion-content>\n"

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

module.exports = "ion-segment-button {\n  width: calc(100% / 3.5);\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  border: 0px;\n  border-radius: 0px; }\n  ion-segment-button ion-label {\n    max-width: calc(90vw / 3); }\n  .text {\n  font-size: 11.5px;\n  font-style: bold;\n  color: black; }\n  ion-button {\n  background-color: #ADD8E6;\n  width: 65px;\n  height: 65px;\n  color: black;\n  border-radius: 5px;\n  font-size: 11.5px; }\n  .head {\n  text-align: center;\n  float: left;\n  width: 95px;\n  height: 80px; }\n  .head1 {\n  text-align: center;\n  float: left;\n  width: 110px;\n  height: 80px; }\n  .head2 {\n  text-align: center;\n  float: left;\n  width: 130px;\n  height: 80px; }\n  .container {\n  display: grid;\n  grid-template-columns: auto auto; }\n  .item {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  padding: 50px;\n  height: 170px;\n  font-size: 12px;\n  text-align: center;\n  color: black; }\n  .item1 {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  width: 80px;\n  height: 80px;\n  font-size: 11px;\n  text-align: center;\n  color: black;\n  float: right; }\n  .item2 {\n  background-color: #CFECEC;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  width: 180px;\n  height: 170px;\n  font-size: 11px;\n  text-align: center;\n  color: black;\n  float: left; }\n  .item3 {\n  background-color: #FDD7E4;\n  border: 0.5px solid #fff;\n  border-radius: 10px;\n  width: 180px;\n  height: 128px;\n  font-size: 11px;\n  text-align: center;\n  color: black;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBTHRCO0lBUVEseUJBQXlCLEVBQUE7RUFJL0I7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFFaEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFFaEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLGFBQWE7RUFDYixnQ0FBZ0MsRUFBQTtFQUlsQztFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFXLEVBQUE7RUFHYjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsWUFBWSxFQUFBO0VBSWQ7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBVztFQUNYLFdBQVcsRUFBQTtFQUdiO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMy41KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDkwdncgLyAzKTtcclxuICAgIH1cclxuXHJcbn0gIFxyXG4gIC50ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDExLjVweDtcclxuICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNBREQ4RTY7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDExLjVweDtcclxuICB9XHJcblxyXG4gIC5oZWFke1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogOTVweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAuaGVhZDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG4uaGVhZDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuIFxyXG4gIH1cclxuLy9lbXBsb3llZVxyXG4gIC5pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0NGRUNFQyA7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9XHJcbiAgLy90b2RvbGlzdFxyXG4gIC5pdGVtMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDRkVDRUMgO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAvL2l0ZW0gMiBuIDMgc3RhdHVzXHJcbiAgLml0ZW0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0NGRUNFQyA7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGREQ3RTQgO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgIl19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function DashboardPage(http) {
        this.http = http;
        this.segment = "todolist";
    }
    //  ionViewDidEnter() {
    //   this.generateColorArray(8);
    //   this.createHrzBarChart5()
    // }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map