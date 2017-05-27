webpackJsonp([1,4],{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_stackApp_module__ = __webpack_require__(78);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_stackApp_module__["a" /* StackAppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StackAppComponent = (function () {
    function StackAppComponent(http) {
        this.http = http;
        this.traverseInputs = {
            stackDiameter: null,
            portDepth: 0,
            numberOfPoints: null,
        };
        this.serviceError = '';
        this.traversePoints = [];
        this.traverseApiUrl = 'api/pointCalcs';
    }
    StackAppComponent.prototype.onChanges = function () {
        var _this = this;
        if (this.traverseInputs.stackDiameter > 0
            && this.traverseInputs.portDepth >= 0
            && this.traverseInputs.numberOfPoints > 0) {
            this.completeInput = true;
            this.getPoints(this.traverseInputs).subscribe(function (points) { _this.traversePoints = points; _this.serviceError = ''; }, function (error) { return _this.serviceError = error; });
        }
        else {
            this.completeInput = false;
        }
    };
    // .then((response) => response.json().data as number[])
    StackAppComponent.prototype.getPoints = function (traverseInputs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.traversePoints = [];
        return this.http.post(this.traverseApiUrl, traverseInputs, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    StackAppComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    StackAppComponent.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return StackAppComponent;
}());
StackAppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'stack-app',
        template: "\n        <nav class=\"navbar navbar-inverse bg-inverse\">\n            <h1 class=\"navbar-brand mb-0\">Stacktool</h1>\n        </nav>\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title\">Traverse Point Finder</h4>\n                <div class=\"card-block\">\n                    <div class=\"form-group\">\n                        <label>Stack Diameter (inches)</label>\n                        <input class=\"form-control form-control-lg\" [(ngModel)]=\"traverseInputs.stackDiameter\" (keyup)=\"onChanges()\" placeholder=\"Stack Diameter\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Port Depth (inches)</label>\n                        <input class=\"form-control form-control-lg\" [(ngModel)]=\"traverseInputs.portDepth\" (keyup)=\"onChanges()\" placeholder=\"Port Depth\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Total Traverse Points</label>\n                        <input class=\"form-control form-control-lg\" [(ngModel)]=\"traverseInputs.numberOfPoints\" (keyup)=\"onChanges()\" placeholder=\"Traverse Points\"/>\n                    </div>\n                </div>\n                <div class=\"card-block\" *ngIf=\"!serviceError  && traversePoints.length > 0\">\n                        <h5>Probe Markings (inches):</h5>\n                        <div *ngIf=\"traversePoints\">\n                            <ul class=\"list-group\" *ngFor=\"let point of traversePoints\">\n                                <li class=\"list-group-item\">{{point}}</li>\n                            </ul>\n                        </div>\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"serviceError\">\n                    Valid Traverse Points are: 4,8,12,16,20,24.\n                    <p *ngIf=\"debugMode\">{{serviceError}}</p>\n                </div>\n                \n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], StackAppComponent);

var _a;
//# sourceMappingURL=stackApp.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stackApp_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackAppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StackAppModule = (function () {
    function StackAppModule() {
    }
    return StackAppModule;
}());
StackAppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__stackApp_component__["a" /* StackAppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__stackApp_component__["a" /* StackAppComponent */]]
    })
], StackAppModule);

//# sourceMappingURL=stackApp.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[163]);
//# sourceMappingURL=main.bundle.js.map