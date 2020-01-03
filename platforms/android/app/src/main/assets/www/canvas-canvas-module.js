(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["canvas-canvas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/canvas/canvas.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/canvas/canvas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button  defaulthref=\"\"></ion-back-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n      <ion-icon (click)=\"clearCanvasImage()\" slot=\"icon-only\" style=\"font-size: 2em;\" name=\"refresh\"></ion-icon>\n      </ion-buttons>\n      <ion-title>JOBCARD</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding no-bounce>\n    <div #fixedContainer>\n      <ion-row>\n        <ion-col *ngFor=\"let color of colors\"  [style.background]=\"color\" class=\"color-block\" tappable\n          (click)=\"selectColor(color)\">\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-radio-group ngDefaultControl [(ngModel)]=\"selectedColor\" style=\"display: contents;\">\n          <ion-col *ngFor=\"let color of colors\" text-center>\n            <ion-radio mode=\"ios\" [value]=\"color\"></ion-radio>\n          </ion-col>\n        </ion-radio-group>\n      </ion-row>\n\n      <ion-card>\n      <div class=\"container\">\n        <canvas #imageCanvas id=\"layer0\" class=\"canvas\" ></canvas>\n        <canvas #final id=\"layer3\" class=\"canvas\" ></canvas>\n        <canvas #Canvas id=\"layer1\" class=\"canvas\" (touchstart)=\"startDrawing($event)\" (touchmove)=\"moved($event)\" (touchend)=\"touchend($event)\"></canvas>\n        <canvas #Shape id=\"layer2\" class=\"canvas\" (touchstart)=\"startDrawing($event)\" (touchmove)=\"moved($event)\" (touchend)=\"touchend($event)\"></canvas>\n        \n      </div>\n    </ion-card>\n      \n        <!-- <ion-input [(ngModel)]='htmlText' placeholder=\"Task .. \"></ion-input> -->\n        <!-- <ion-input #input></ion-input> -->\n\n      <ion-toolbar>\n           <ion-buttons slot=\"end\">\n              <ion-icon style=\"font-size: 1em;\"  color=\"dark\"  (click)=\"changeSize(5)\" name=\"radio-button-on\"></ion-icon>\n              <ion-icon style=\"font-size: 1.2em;\" color=\"dark\"  (click)=\"changeSize(10)\" name=\"radio-button-on\"></ion-icon>\n              <ion-icon style=\"font-size: 1.6em;\" color=\"dark\"  (click)=\"changeSize(15)\" name=\"radio-button-on\"></ion-icon>\n              <ion-icon style=\"font-size: 2em;\" color=\"dark\"  (click)=\"changeSize(20)\" name=\"radio-button-on\"></ion-icon>\n              <ion-icon style=\"font-size: 2.28em;\" color=\"dark\"  (click)=\"changeSize(30)\" name=\"radio-button-on\"></ion-icon>\n          </ion-buttons>\n      </ion-toolbar>\n       \n      <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\n          <ion-fab-button color=\"primary\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-list side=\"top\">\n              <ion-fab-button color=\"light\">\n                  <img src = \"../assets/icon/free.png\"  (click)=\"changeAction('handdraw')\">\n                </ion-fab-button>\n                <ion-fab-button color=\"light\">\n                  <img src = \"../assets/icon/line.png\" width=\"25px\" height=\"25px\"  (click)=\"changeAction('drawline')\">\n                </ion-fab-button>\n            <ion-fab-button color=\"light\">\n              <ion-icon name=\"square\" (click)=\"changeAction('drawsquare')\" ></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button color=\"light\">\n              <ion-icon name=\"radio-button-off\" (click)=\"changeAction('drawcircle')\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button color=\"light\">\n                <ion-icon name=\"arrow-forward\" (click)=\"changeAction('drawarrow')\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab-list>\n          <ion-fab-list side=\"end\">\n              <ion-fab-button color=\"light\">\n                  <img src = \"../assets/icon/txt.png\" width=\"20px\" height=\"20px\" (click)=\"changeAction('addtext')\">\n              </ion-fab-button>\n              <ion-fab-button color=\"light\">\n                  <img src = \"../assets/icon/eraser.png\" width=\"25px\" height=\"25px\" (click)=\"changeAction('eraser')\"> \n              </ion-fab-button>\n              </ion-fab-list>\n        </ion-fab>\n       \n\n      <ion-button class=\"button\" expand=\"block\" (click)=\"saveCanvasImage()\">Done Edit</ion-button>\n    </div>\n    \n  \n    <ion-list *ngIf=\"storedImages.length > 0\">\n      <ion-list-header>Previous Drawings</ion-list-header>\n      <ion-card *ngFor=\"let obj of storedImages; let i = index\">\n        <ion-card-content>\n          <img [src]=\"getImagePath(obj.img)\">\n        </ion-card-content>\n        <ion-button expand=\"block\" icon-only color=\"danger\" (click)=\"removeImageAtIndex(i)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n      </ion-card>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/canvas/canvas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/canvas/canvas.module.ts ***!
  \***********************************************/
/*! exports provided: CanvasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPageModule", function() { return CanvasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _canvas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas.page */ "./src/app/pages/canvas/canvas.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _canvas_page__WEBPACK_IMPORTED_MODULE_5__["CanvasPage"]
    }
];
var CanvasPageModule = /** @class */ (function () {
    function CanvasPageModule() {
    }
    CanvasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_canvas_page__WEBPACK_IMPORTED_MODULE_5__["CanvasPage"]]
        })
    ], CanvasPageModule);
    return CanvasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/canvas/canvas.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/canvas/canvas.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".canvas {\n  position: absolute;\n  display: inline-block; }\n\n.container {\n  min-height: 460px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FudmFzL0M6XFxwcm9qZWN0XFxuYXRhc2hhL3NyY1xcYXBwXFxwYWdlc1xcY2FudmFzXFxjYW52YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FudmFzL2NhbnZhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYm90dG9tLXRvb2xiYXIge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyB9XHJcblxyXG4uY2FudmFze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogNDYwcHg7XHJcbiAgICBcclxuICAgIC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLmJ1dHRvbntcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/canvas/canvas.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/canvas/canvas.page.ts ***!
  \*********************************************/
/*! exports provided: CanvasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPage", function() { return CanvasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/app/services/jobcard.service */ "./src/app/services/jobcard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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








var STORAGE_KEY = 'IMAGE_LIST';
var CanvasPage = /** @class */ (function () {
    function CanvasPage(webview, file, storage, renderer, plt, toastController, navCtrl, JobcardService, alertController, router) {
        var _this = this;
        this.webview = webview;
        this.file = file;
        this.storage = storage;
        this.renderer = renderer;
        this.plt = plt;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.JobcardService = JobcardService;
        this.alertController = alertController;
        this.router = router;
        this.storedImages = [];
        // Color Stuff
        this.selectedColor = '#222428';
        this.colors = ['#222428', '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.brushSize = 5;
        this.moveCoordinate = [];
        this.storage.ready().then(function () {
            _this.storage.get(STORAGE_KEY).then(function (data) {
                if (data != undefined) {
                    _this.storedImages = data;
                }
            });
        });
    }
    // async ionViewDidEnter() {
    //   // https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
    //   // Get the height of the fixed item
    //   let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
    //   let scroll = this.content.getScrollElement();
    //   // Add preexisting scroll margin to fixed container size
    //   itemHeight = Number.parseFloat((await (scroll)).style.marginTop.replace("px", "")) + itemHeight;
    //   (await (scroll)).style.marginTop = itemHeight + 'px';
    // }
    CanvasPage.prototype.ngOnInit = function () {
        // Set the Canvas Element and its size
        var _this = this;
        this.canvasElement = this.canvas.nativeElement;
        this.canvasElement1 = this.canvas1.nativeElement;
        this.canvasElement2 = this.canvas2.nativeElement;
        this.canvasElement3 = this.canvas3.nativeElement;
        var ctx = this.canvasElement.getContext('2d');
        var ctx1 = this.canvasElement1.getContext('2d');
        var ctx2 = this.canvasElement2.getContext('2d');
        var ctx3 = this.canvasElement3.getContext('2d');
        // this.canvasElement.width = this.plt.width() + '';
        // this.canvasElement.height = 460;   
        // this.canvasElement1.width = this.plt.width() + '';
        // this.canvasElement1.height = 460;   
        // this.canvasElement2.width = this.plt.width() + '';
        // this.canvasElement2.height = 460;   
        this.img = new Image();
        // this.img=this.JobcardService.imageLists;
        this.img.onload = function () {
            var ctx = _this.canvasElement.getContext('2d');
            ctx.canvas.width = _this.img.width;
            ctx.canvas.height = _this.img.height;
            ctx.drawImage(_this.img, 0, 0, ctx.canvas.width, ctx.canvas.height);
        };
        this.img.src = this.JobcardService.imageLists;
        setInterval(function () {
            _this.onPaint();
        }, 17);
    };
    CanvasPage.prototype.selectColor = function (color) {
        this.selectedColor = color;
    };
    CanvasPage.prototype.changeSize = function (size) {
        this.brushSize = size;
    };
    CanvasPage.prototype.startDrawing = function (ev) {
        // var canvasPosition = this.canvasElement.getBoundingClientRect();
        var canvasPosition1 = this.canvasElement1.getBoundingClientRect();
        var canvasPosition2 = this.canvasElement2.getBoundingClientRect();
        this.saveX1 = ev.touches[0].pageX - canvasPosition1.x;
        this.saveY1 = ev.touches[0].pageY - canvasPosition1.y;
        this.startX1 = ev.touches[0].pageX - canvasPosition1.x;
        this.startY1 = ev.touches[0].pageY - canvasPosition1.y;
        this.saveX2 = ev.touches[0].pageX - canvasPosition2.x;
        this.saveY2 = ev.touches[0].pageY - canvasPosition2.y;
        this.startX2 = ev.touches[0].pageX - canvasPosition2.x;
        this.startY2 = ev.touches[0].pageY - canvasPosition2.y;
        console.log('lalu');
    };
    CanvasPage.prototype.moved = function (ev) {
        // var canvasPosition = this.canvasElement.getBoundingClientRect();
        var canvasPosition1 = this.canvasElement1.getBoundingClientRect();
        var canvasPosition2 = this.canvasElement2.getBoundingClientRect();
        // let ctx = this.canvasElement.getContext('2d');
        var ctx1 = this.canvasElement1.getContext('2d');
        var currentX1 = ev.touches[0].pageX - canvasPosition1.x;
        var currentY1 = ev.touches[0].pageY - canvasPosition1.y;
        var currentX2 = ev.touches[0].pageX - canvasPosition2.x;
        var currentY2 = ev.touches[0].pageY - canvasPosition2.y;
        if (this.action == "handdraw") {
            this.handDraw(ctx1, currentX1, currentY1);
        }
        else if (this.action == "drawline") {
            // this.drawLine(ctx,currentX,currentY);
            this.moveCoordinate.push({
                x: currentX2, y: currentY2
            });
        }
        else if (this.action == "drawsquare") {
            // this.drawSquare(ctx,currentX,currentY);
            this.moveCoordinate.push({
                x: currentX2, y: currentY2
            });
        }
        else if (this.action == "drawarrow") {
            // this.drawSquare(ctx,currentX,currentY);
            this.moveCoordinate.push({
                x: currentX2, y: currentY2
            });
        }
        else if (this.action == "addtext") {
            this.addText(ctx1, currentX1, currentY1);
            // this.moveCoordinate.push({
            //   x: currentX1 ,y:currentY1
            // })
        }
        else if (this.action == "drawcircle") {
            // this.drawCircle(ctx,currentX,currentY);
            this.moveCoordinate.push({
                x: currentX2, y: currentY2
            });
        }
        else if (this.action == "eraser") {
            this.eraser(ctx1, currentX1, currentY1);
        }
        this.saveX1 = currentX1;
        this.saveY1 = currentY1;
        this.saveX2 = currentX2;
        this.saveY2 = currentY2;
    };
    CanvasPage.prototype.touchend = function (ev) {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var canvasPosition1 = this.canvasElement1.getBoundingClientRect();
        var canvasPosition2 = this.canvasElement2.getBoundingClientRect();
        var ctx = this.canvasElement.getContext('2d');
        var ctx1 = this.canvasElement1.getContext('2d');
        var ctx2 = this.canvasElement2.getContext('2d');
        console.log(ev);
        console.log(this.moveCoordinate.length - 1);
        console.log(this.moveCoordinate);
        var currentX1 = this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length - 1].x : 0;
        var currentY1 = this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length - 1].y : 0;
        var currentX2 = this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length - 1].x : 0;
        var currentY2 = this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length - 1].y : 0;
        if (this.action == "drawline") {
            this.drawLine(ctx2, currentX2, currentY2);
        }
        else if (this.action == "drawcircle") {
            this.drawCircle(ctx2, currentX2, currentY2);
        }
        else if (this.action == "drawsquare") {
            this.drawSquare(ctx2, currentX2, currentY2);
        }
        else if (this.action == "drawarrow") {
            this.drawArrow(ctx2, currentX2, currentY2);
        }
        // else if(this.action=="addtext"){
        //   this.addText(ctx1,currentX1,currentY1)
        // }
        this.moveCoordinate = [];
    };
    CanvasPage.prototype.touchmove = function () {
    };
    CanvasPage.prototype.handDraw = function (ctx1, currentX1, currentY1) {
        ctx1.lineJoin = 'round';
        ctx1.strokeStyle = this.selectedColor;
        ctx1.lineWidth = 5;
        console.log('lalu');
        ctx1.beginPath();
        ctx1.moveTo(this.saveX1, this.saveY1);
        ctx1.lineTo(currentX1, currentY1);
        ctx1.closePath();
        ctx1.lineWidth = this.brushSize;
        ctx1.stroke();
    };
    CanvasPage.prototype.drawLine = function (ctx1, currentX1, currentY1) {
        ctx1.lineJoin = 'round';
        ctx1.strokeStyle = this.selectedColor;
        ctx1.lineWidth = 5;
        ctx1.beginPath();
        console.log(this.startX1, this.startY1);
        ctx1.moveTo(this.startX1, this.startY1);
        ctx1.lineTo(currentX1, currentY1);
        ctx1.closePath();
        ctx1.lineWidth = this.brushSize;
        ctx1.stroke();
    };
    CanvasPage.prototype.drawSquare = function (ctx2, currentX2, currentY2) {
        // const img1 = new Image()
        // img1.src = "../assets/icon/line2.png"  ;
        this.dx = currentX2 - this.startX2;
        this.dy = currentY2 - this.startY2;
        this.scale = 5;
        this.x = this.startX2 + this.dx * 0.5;
        this.y = this.startY2 + this.dy * 0.5;
        this.width = this.dx;
        this.height = this.dy;
        ctx2.lineWidth = 5;
        ctx2.lineJoin = 'round';
        ctx2.strokeStyle = this.selectedColor;
        ctx2.lineWidth = this.brushSize;
        ctx2.beginPath();
        ctx2.rect(this.startX2, this.startY2, this.width, this.height);
        // ctx2.fillStyle='green';
        // this.pattern= ctx2.createPattern(img1,"repeat");
        // console.log("lorek")
        // ctx2.fillStyle=this.pattern;
        ctx2.closePath();
        ctx2.stroke();
    };
    CanvasPage.prototype.drawCircle = function (ctx2, currentX2, currentY2) {
        this.dx = currentX2 - this.startX2;
        this.dy = currentY2 - this.startY2;
        this.radius = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        // this.scale=5;
        ctx2.lineJoin = 'round';
        ctx2.strokeStyle = this.selectedColor;
        ctx2.lineWidth = 5;
        ctx2.lineWidth = this.brushSize;
        ctx2.beginPath();
        ctx2.save();
        console.log(this.startX2, this.startY2);
        ctx2.arc(this.startX2, this.startY2, this.radius, 0, Math.PI * 2);
        ctx2.closePath();
        ctx2.stroke();
    };
    CanvasPage.prototype.drawArrow = function (ctx2, currentX2, currentY2) {
        this.headlen = 20; // length of head in pixels
        this.dx = currentX2 - this.startX2;
        this.dy = currentY2 - this.startY2;
        this.angle = Math.atan2(this.dy, this.dx);
        ctx2.strokeStyle = this.selectedColor;
        ctx2.lineWidth = 3;
        // ctx2.lineWidth = this.brushSize;
        ctx2.beginPath();
        ctx2.moveTo(this.startX2, this.startY2);
        ctx2.lineTo(currentX2, currentY2);
        ctx2.lineTo(currentX2 - this.headlen * Math.cos(this.angle - Math.PI / 6), currentY2 - this.headlen * Math.sin(this.angle - Math.PI / 6));
        ctx2.moveTo(currentX2, currentY2);
        ctx2.lineTo(currentX2 - this.headlen * Math.cos(this.angle + Math.PI / 6), currentY2 - this.headlen * Math.sin(this.angle + Math.PI / 6));
        ctx2.closePath();
        ctx2.stroke();
        // ctx2.beginPath();
        // this.PI=Math.PI;
        // this.degreesInRadians225=225*this.PI/180;
        // this.degreesInRadians135=135*this.PI/180;
        // this.headlen = 30;
        // this.dx = currentX2 - this.startX2;
        // this.dy = currentY2 - this.startY2;
        // this.angle=Math.atan2(this.dx,this.dy);
        // this.x225=currentX2+this.headlen*Math.cos(this.angle+this.degreesInRadians225);
        // this.y225=currentY2+this.headlen*Math.sin(this.angle+this.degreesInRadians225);
        // this.x135=currentX2+this.headlen*Math.cos(this.angle+this.degreesInRadians135);
        // this.y135=currentY2+this.headlen*Math.sin(this.angle+this.degreesInRadians135);
        // ctx2.moveTo(this.startX2,this.startY2);
        // ctx2.lineTo(currentX2,currentY2);
        // ctx2.lineWidth = 5;
        // ctx2.lineWidth = this.brushSize;
        // ctx2.moveTo(currentX2,currentY2);
        // ctx2.lineTo(this.x225,this.y225);
        // ctx2.moveTo(currentX2,currentY2);
        // ctx2.lineTo(this.x135,this.y135);
        // ctx2.closePath();
        // ctx2.stroke();
    };
    CanvasPage.prototype.addText = function (ctx1, currentX1, currentY1) {
        ctx1.beginPath();
        ctx1.this.myInput.setFocus();
        console.log(ctx1.this.myInput);
        console.log('tulis');
        ctx1.font = "14px Times New Roman";
        ctx1.textAlign = 'center';
        ctx1.fillStyle = 'black';
        ctx1.fillText('htmlText');
        ctx1.stroke();
    };
    CanvasPage.prototype.eraser = function (ctx1, currentX1, currentY1) {
        ctx1.lineJoin = 'round';
        ctx1.beginPath();
        ctx1.globalCompositeOperation = "destination-out";
        ctx1.strokeStyle = "rgba(0,0,0,1)";
        ctx1.moveTo(this.saveX1, this.saveY1);
        ctx1.lineTo(currentX1, currentY1);
        ctx1.closePath();
        ctx1.lineWidth = this.brushSize;
        ctx1.stroke();
        console.log('padam');
        // draw it
    };
    CanvasPage.prototype.changeAction = function (action) {
        this.action = action;
        console.log(this.action);
    };
    CanvasPage.prototype.saveCanvasImage = function () {
        var _this = this;
        // var test = this.canvasElement1.toDataURL('image/png');
        // var test1 = this.canvasElement2.toDataURL('image/png');
        var ctx = this.canvasElement.getContext('2d');
        var ctx3 = this.canvasElement3.getContext('2d');
        var ctx1 = this.canvasElement1.getContext('2d');
        ctx3.drawImage(this.canvasElement, 0, 0);
        ctx3.drawImage(this.canvasElement1, 0, 0);
        ctx3.drawImage(this.canvasElement2, 0, 0);
        ctx1.drawImage(this.canvasElement3, 0, 0);
        var dataUrl = this.canvasElement3.toDataURL();
        var name = new Date().getTime() + '.png';
        var path = this.file.dataDirectory;
        var options = { replace: true };
        var data = dataUrl.split(',')[1];
        var blob = this.b64toBlob(data, 'image/png');
        this.file.writeFile(path, name, blob, options).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storeImage(name);
                        return [4 /*yield*/, this.toastController.create({ message: "Image saved", duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log('error: ', err);
        });
    };
    CanvasPage.prototype.clearCanvasImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ctx1, ctx2, ctx3, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx1 = this.canvasElement1.getContext('2d');
                        ctx2 = this.canvasElement2.getContext('2d');
                        ctx3 = this.canvasElement3.getContext('2d');
                        // ctx.clearRect(0, 0, ctx1.canvas.width, ctx1.canvas.height);
                        ctx1.clearRect(0, 0, ctx1.canvas.width, ctx1.canvas.height);
                        ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
                        ctx3.clearRect(0, 0, ctx3.canvas.width, ctx3.canvas.height);
                        return [4 /*yield*/, this.toastController.create({ message: "Clear image", duration: 1500 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CanvasPage.prototype.onPaint = function () {
        if (this.action != "handdraw") {
            // this.clearCanvasImage();
        }
    };
    CanvasPage.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    CanvasPage.prototype.storeImage = function (imageName) {
        var _this = this;
        var saveObj = { img: imageName };
        this.storedImages.push(saveObj);
        this.storage.set(STORAGE_KEY, this.storedImages).then(function () {
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 500);
        });
    };
    CanvasPage.prototype.removeImageAtIndex = function (index) {
        var _this = this;
        var removed = this.storedImages.splice(index, 1);
        this.file.removeFile(this.file.dataDirectory, removed[0].img).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({ message: "Image deleted", duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log('remove err; ', err);
        });
        this.storage.set(STORAGE_KEY, this.storedImages);
    };
    CanvasPage.prototype.getImagePath = function (imageName) {
        var path = this.file.dataDirectory + imageName;
        // https://ionicframework.com/docs/wkwebview/#my-local-resources-do-not-load
        path = this.webview.convertFileSrc(path);
        return path;
    };
    CanvasPage.ctorParameters = function () { return [
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
        { type: _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_5__["JobcardService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageCanvas', { static: true }),
        __metadata("design:type", Object)
    ], CanvasPage.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Canvas', { static: true }),
        __metadata("design:type", Object)
    ], CanvasPage.prototype, "canvas1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Shape', { static: true }),
        __metadata("design:type", Object)
    ], CanvasPage.prototype, "canvas2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('final', { static: true }),
        __metadata("design:type", Object)
    ], CanvasPage.prototype, "canvas3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], { static: true }),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"])
    ], CanvasPage.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fixedContainer', { static: true }),
        __metadata("design:type", Object)
    ], CanvasPage.prototype, "fixedContainer", void 0);
    CanvasPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! raw-loader!./canvas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/canvas/canvas.page.html"),
            styles: [__webpack_require__(/*! ./canvas.page.scss */ "./src/app/pages/canvas/canvas.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _src_app_services_jobcard_service__WEBPACK_IMPORTED_MODULE_5__["JobcardService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CanvasPage);
    return CanvasPage;
}());



/***/ })

}]);
//# sourceMappingURL=canvas-canvas-module.js.map