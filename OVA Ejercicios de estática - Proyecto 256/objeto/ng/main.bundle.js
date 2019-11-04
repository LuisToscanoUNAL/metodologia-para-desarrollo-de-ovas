webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<lo-layout [LOCurrentState]=\"LOCurrentState\" [layoutConfig]=\"layoutConfig\"></lo-layout>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  font-family: 'montserrat', Arial, sans-serif; }\n  :host::ng-deep a {\n    text-decoration: none; }\n    :host::ng-deep a:hover {\n      text-decoration: underline; }\n\n@font-face {\n  font-family: 'montserrat';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/montserrat/Montserrat-Regular.eot")) + ");\n  /* IE9 Compat Modes */\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/montserrat/Montserrat-Regular.eot")) + "?#iefix) format(\"embedded-opentype\"), url(" + escape(__webpack_require__("../../../../../src/assets/fonts/montserrat/Montserrat-Regular.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__("../../../../../src/assets/fonts/montserrat/Montserrat-Regular.woff")) + ") format(\"woff\"), url(" + escape(__webpack_require__("../../../../../src/assets/fonts/montserrat/Montserrat-Regular.ttf")) + ") format(\"truetype\"), url(" + escape(__webpack_require__("../../../../../src/assets/fonts/montserrat/Montserrat-Regular.svg")) + "#svgFontName) format(\"svg\");\n  /* Legacy iOS */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_providers_state_provider__ = __webpack_require__("../../../../../src/app/core/providers/state.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(LOState) {
        this.LOState = LOState;
        this.checkObjectStateInterval = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__["interval"])(500);
        this.layoutConfig = {
            hide: {
                floatMenuBtn: ['cover', 'scenarios']
            },
            show: {
                helpBtns: ['scenarios']
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LOState.init();
        this.LOCurrentState = this.LOState.getCurrentState();
        this.subscription = this.checkObjectStateInterval.subscribe(function () {
            _this.LOCurrentState = Object.assign({}, _this.LOState.getCurrentState());
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_providers_state_provider__["a" /* StateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_providers_state_provider__["a" /* StateProvider */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lo_layout_layout_module__ = __webpack_require__("../../../../../src/app/lo/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__lo_layout_layout_module__["a" /* LayoutModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/classes/course-column.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseColumn; });
var CourseColumn = (function () {
    function CourseColumn(flex) {
        this.flex = flex === 0 ? 'none' : flex;
        this.columnContent = {
            component: null,
            data: {}
        };
        this.style = {};
        this.classes = [];
    }
    CourseColumn.prototype.setContent = function (component, data) {
        this.columnContent.component = component;
        this.columnContent.data = data;
    };
    CourseColumn.prototype.getContent = function () {
        return this.columnContent;
    };
    CourseColumn.prototype.getStyle = function () {
        return this.style;
    };
    CourseColumn.prototype.setStyle = function (style) {
        this.style = style;
    };
    CourseColumn.prototype.getClasses = function () {
        return this.classes;
    };
    CourseColumn.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    return CourseColumn;
}());

//# sourceMappingURL=course-column.class.js.map

/***/ }),

/***/ "../../../../../src/app/core/classes/course-row.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_column_class__ = __webpack_require__("../../../../../src/app/core/classes/course-column.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var CourseRow = (function () {
    function CourseRow(flex) {
        this.cols = [];
        this.flex = flex === 0 ? 'none' : flex;
        this.style = {};
        this.classes = [];
    }
    CourseRow.prototype.getCols = function () {
        return this.cols;
    };
    CourseRow.prototype.setCols = function (colsParam) {
        var _this = this;
        Array.isArray(colsParam) ?
            __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](colsParam, function (flexIdx) { return _this.cols.push(new __WEBPACK_IMPORTED_MODULE_0__course_column_class__["a" /* CourseColumn */](flexIdx)); }) :
            __WEBPACK_IMPORTED_MODULE_1_lodash__["times"](colsParam, function () { return _this.cols.push(new __WEBPACK_IMPORTED_MODULE_0__course_column_class__["a" /* CourseColumn */](1)); });
        return this;
    };
    CourseRow.prototype.setColArray = function (cols) {
        this.cols = cols;
    };
    CourseRow.prototype.col = function (idx) {
        return this.cols.length > idx ? this.cols[idx] : null;
    };
    CourseRow.prototype.getStyle = function () {
        return this.style;
    };
    CourseRow.prototype.setStyle = function (style) {
        this.style = style;
    };
    CourseRow.prototype.getClasses = function () {
        return this.classes;
    };
    CourseRow.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    return CourseRow;
}());

//# sourceMappingURL=course-row.class.js.map

/***/ }),

/***/ "../../../../../src/app/core/classes/course-section.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_slide_class__ = __webpack_require__("../../../../../src/app/core/classes/course-slide.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var CourseSection = (function () {
    function CourseSection(id, name, icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.slides = [];
    }
    CourseSection.prototype.getName = function () {
        return this.name;
    };
    CourseSection.prototype.getId = function () {
        return this.id;
    };
    CourseSection.prototype.getIcon = function () {
        return this.icon;
    };
    CourseSection.prototype.getSlides = function () {
        return this.slides;
    };
    CourseSection.prototype.slide = function (idx) {
        return this.slides.length > idx ? this.slides[idx] : null;
    };
    CourseSection.prototype.createSlides = function (amount) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](amount).forEach(function (idx) {
            _this.slides.push(new __WEBPACK_IMPORTED_MODULE_0__course_slide_class__["a" /* CourseSlide */]());
        });
        return this;
    };
    return CourseSection;
}());

//# sourceMappingURL=course-section.class.js.map

/***/ }),

/***/ "../../../../../src/app/core/classes/course-slide.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseSlide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_row_class__ = __webpack_require__("../../../../../src/app/core/classes/course-row.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var CourseSlide = (function () {
    function CourseSlide() {
        this.rows = [];
        this.classes = [];
    }
    CourseSlide.prototype.getName = function () {
        return this.name;
    };
    CourseSlide.prototype.getRows = function () {
        return this.rows;
    };
    CourseSlide.prototype.getStyle = function () {
        return this.style;
    };
    CourseSlide.prototype.getClasses = function () {
        return this.classes;
    };
    CourseSlide.prototype.setStyle = function (style) {
        this.style = style;
    };
    CourseSlide.prototype.setName = function (name) {
        this.name = name;
    };
    CourseSlide.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    CourseSlide.prototype.setRows = function (rowsParam) {
        var _this = this;
        Array.isArray(rowsParam) ?
            __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](rowsParam, function (flex) { return _this.rows.push(new __WEBPACK_IMPORTED_MODULE_0__course_row_class__["a" /* CourseRow */](flex)); }) :
            __WEBPACK_IMPORTED_MODULE_1_lodash__["times"](rowsParam, function () { return _this.rows.push(new __WEBPACK_IMPORTED_MODULE_0__course_row_class__["a" /* CourseRow */](1)); });
        return this;
    };
    CourseSlide.prototype.row = function (idx) {
        return this.rows.length > idx ? this.rows[idx] : null;
    };
    return CourseSlide;
}());

//# sourceMappingURL=course-slide.class.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-column/column-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColumnContentComponent = (function () {
    function ColumnContentComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ColumnContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'column-content',
            template: ''
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */]) === "function" && _a || Object])
    ], ColumnContentComponent);
    return ColumnContentComponent;
    var _a;
}());

//# sourceMappingURL=column-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-column/course-column.component.html":
/***/ (function(module, exports) {

module.exports = "<column-content></column-content>"

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-column/course-column.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex; }\n  :host::ng-deep > :not(column-content) {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex: 1;\n        flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-column/course-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_content_component__ = __webpack_require__("../../../../../src/app/core/components/base/course-column/column-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseColumnComponent = (function () {
    function CourseColumnComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    CourseColumnComponent.prototype.ngAfterViewInit = function () {
        this.loadComponent();
    };
    CourseColumnComponent.prototype.loadComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentInner.component);
        var viewContainerRef = this.columnContent.viewContainerRef;
        this.columnContent.LOState = this.LOCurrentState;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = __WEBPACK_IMPORTED_MODULE_2_lodash__["extend"](this.componentInner.data, {
            LOCurrentState: this.LOCurrentState
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CourseColumnComponent.prototype, "LOCurrentState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CourseColumnComponent.prototype, "componentInner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__column_content_component__["a" /* ColumnContentComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__column_content_component__["a" /* ColumnContentComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__column_content_component__["a" /* ColumnContentComponent */]) === "function" && _a || Object)
    ], CourseColumnComponent.prototype, "columnContent", void 0);
    CourseColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'course-column',
            template: __webpack_require__("../../../../../src/app/core/components/base/course-column/course-column.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/base/course-column/course-column.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]) === "function" && _b || Object])
    ], CourseColumnComponent);
    return CourseColumnComponent;
    var _a, _b;
}());

//# sourceMappingURL=course-column.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-content/course-content.component.html":
/***/ (function(module, exports) {

module.exports = "<course-row\n*ngFor='let row of getRows(); trackBy: index;'\n[style.flex]=\"row.flex\"\n[cols]=\"row.cols\"\n[LOCurrentState]=\"LOCurrentState\"\n[ngStyle]=\"row.getStyle()\"\n[ngClass]=\"row.getClasses()\"\n></course-row>"

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-content/course-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  overflow-y: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-content/course-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseContentComponent = (function () {
    function CourseContentComponent() {
    }
    CourseContentComponent.prototype.ngOnInit = function () { };
    CourseContentComponent.prototype.getRows = function () {
        return this.LOCurrentState.position.section.slide(this.LOCurrentState.position.slide).getRows();
    };
    CourseContentComponent.prototype.a = function () {
        console.log('opened');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CourseContentComponent.prototype, "LOCurrentState", void 0);
    CourseContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'course-content',
            template: __webpack_require__("../../../../../src/app/core/components/base/course-content/course-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/base/course-content/course-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseContentComponent);
    return CourseContentComponent;
}());

//# sourceMappingURL=course-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-row/course-row.component.html":
/***/ (function(module, exports) {

module.exports = "<course-column\n*ngFor='let col of cols; trackBy: index;'\n[componentInner]=\"col.getContent()\"\n[style.flex]=\"col.flex\"\n[LOCurrentState]=\"LOCurrentState\"\n[ngStyle]=\"col.getStyle()\"\n[ngClass]=\"col.getClasses()\"></course-column>"

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-row/course-row.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/base/course-row/course-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseRowComponent = (function () {
    function CourseRowComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CourseRowComponent.prototype, "LOCurrentState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], CourseRowComponent.prototype, "cols", void 0);
    CourseRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'course-row',
            template: __webpack_require__("../../../../../src/app/core/components/base/course-row/course-row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/base/course-row/course-row.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseRowComponent);
    return CourseRowComponent;
}());

//# sourceMappingURL=course-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"text\" \n    [ngStyle]=\"btnStyle\"\n    [ngClass]=\"{'is-active': isActive()}\"\n    (click)=\"onClick()\">{{text}}\n</button>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/button/button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/basic/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = (function () {
    function ButtonComponent() {
        this.btnStyle = {};
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.text = this.data.text ? this.data.text : this.text;
        this.btnStyle = this.data.style ? this.data.style : this.btnStyle;
        this.onClick = this.data.onClick ? this.data.onClick : this.onClick ? this.onClick : function () { return true; };
        this.isActive = this.data.isActive ? this.data.isActive : this.isActive ? this.isActive : function () { return true; };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], ButtonComponent.prototype, "onClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], ButtonComponent.prototype, "isActive", void 0);
    ButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-button',
            template: __webpack_require__("../../../../../src/app/core/components/basic/button/button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/basic/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/img/img.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"source\" [ngStyle]=\"style\" />"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/img/img.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/basic/img/img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgComponent = (function () {
    function ImgComponent() {
    }
    ImgComponent.prototype.ngOnInit = function () {
        this.source = this.data.source ? this.data.source : this.source;
        this.style = this.data.style ? this.data.style : this.style;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ImgComponent.prototype, "source", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImgComponent.prototype, "style", void 0);
    ImgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-img',
            template: __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/basic/img/img.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImgComponent);
    return ImgComponent;
}());

//# sourceMappingURL=img.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/paragraph/paragraph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"paragraph-container\">\n    <p *ngFor=\"let paragraph of paragraphs\" [innerHtml]=\"paragraph.innerHtml | safeHtml\"></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/paragraph/paragraph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host::ng-deep span.bold {\n  font-weight: bold; }\n\n:host::ng-deep span.italic {\n  font-style: italic; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParagraphComponent = (function () {
    function ParagraphComponent() {
        this.argRegex = /%\([A-z]*\)/;
        this.htmlTags = {
            paragraph: {
                start: '<p>',
                end: '</p>'
            }
        };
    }
    ParagraphComponent.prototype.processParagraphs = function (paragraph) {
        var _this = this;
        var modifiedText = paragraph.text;
        while (modifiedText.match(this.argRegex) !== null) {
            var matches = modifiedText.match(this.argRegex);
            __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](matches, function (match) {
                var key = match.substring(2, match.length - 1);
                modifiedText = modifiedText.replace(match, paragraph.args.hasOwnProperty(key) ?
                    _this.createHtmlSnippet(paragraph.args[key]) : '');
            });
        }
        paragraph.innerHtml = modifiedText;
    };
    ParagraphComponent.prototype.createHtmlSnippet = function (injectArgs) {
        var options = {
            link: function (match) {
                return '<a href=' + match.href + '>' + match.innerText + '</a>';
            },
            class: function (match) {
                var newClass = Array.isArray(match.class) ? match.class.join(' ') : match.class;
                return '<span class="' + newClass + '">' + match.innerText + '</span>';
            }
        };
        return options.hasOwnProperty(injectArgs.type) ?
            options[injectArgs.type](injectArgs.data) : '';
    };
    ParagraphComponent.prototype.ngOnInit = function () {
        this.paragraphs = this.attributeData ? this.attributeData : this.data;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](this.paragraphs, this.processParagraphs.bind(this));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParagraphComponent.prototype, "attributeData", void 0);
    ParagraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paragraph',
            template: __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParagraphComponent);
    return ParagraphComponent;
}());

//# sourceMappingURL=paragraph.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/paragraph/paragraph.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphArgumentType; });
/* unused harmony export ParagraphClass */
var ParagraphArgumentType;
(function (ParagraphArgumentType) {
    ParagraphArgumentType["Link"] = "link";
    ParagraphArgumentType["Class"] = "class";
})(ParagraphArgumentType || (ParagraphArgumentType = {}));
var ParagraphClass;
(function (ParagraphClass) {
    ParagraphClass["Italic"] = "italic";
    ParagraphClass["Bold"] = "bold";
})(ParagraphClass || (ParagraphClass = {}));
//# sourceMappingURL=paragraph.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHtml]=\"getInnerHtml()\"></div>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/title/title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  :host div {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center;\n    color: #6b8375; }\n    :host div::ng-deep svg ~ h1 {\n      margin-left: 10px; }\n    :host div i, :host div h1 {\n      -ms-flex: 1;\n          flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/basic/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
        this.title = this.data.title ? this.data.title : this.title;
        this.iconClass = this.data.iconClass ? this.data.iconClass : this.iconClass;
    };
    TitleComponent.prototype.getInnerHtml = function () {
        var title = '<h1>' + this.title + '</h1>';
        return this.iconClass ?
            '<i class="fas fa-2x ' + this.iconClass + '"></i>' + title : title;
    };
    TitleComponent.prototype.getIcon = function () {
        return this.iconClass;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TitleComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TitleComponent.prototype, "iconClass", void 0);
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'title',
            template: __webpack_require__("../../../../../src/app/core/components/basic/title/title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/basic/title/title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());

//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/void/void.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- this is a void element -->"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/void/void.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoidComponent = (function () {
    function VoidComponent() {
    }
    VoidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-void',
            template: __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], VoidComponent);
    return VoidComponent;
}());

//# sourceMappingURL=void.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu-item.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicOverlapMenuItemDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_interactions_provider__ = __webpack_require__("../../../../../src/app/core/providers/interactions.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicOverlapMenuItemDirective = (function () {
    function DynamicOverlapMenuItemDirective(el, navigation, interactions) {
        this.el = el;
        this.navigation = navigation;
        this.interactions = interactions;
        this.elementClass = 'overlap-menu-item';
        this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.assetsPrefix = 'assets/img/';
        this.isDisabled = false;
        this.imgElem = document.createElement("img");
        this.imgElem.className = 'overlap-menu-item-img';
        this.imgElem.style.objectFit = 'contain';
        this.imgElem.style.width = '100%';
        this.imgElem.style.height = '100%';
        el.nativeElement.appendChild(this.imgElem);
    }
    DynamicOverlapMenuItemDirective.prototype.ngOnInit = function () {
        this.shouldDisableOnInteractions = this.disableOnInteractions === 'true';
        this.shouldDisableOnVisit = this.disableOnVisit === 'true';
        this.el.nativeElement.style.width = this.widthPercentage + '%';
        this.el.nativeElement.style.top = this.topPercentage + '%';
        this.el.nativeElement.style.left = this.leftPercentage + '%';
        if (this.validateSection) {
            if (this.shouldDisableOnInteractions) {
                this.isDisabled = !this.interactions.areAllSectionInteractionsCorrect(this.validateSection);
            }
            else if (this.shouldDisableOnVisit) {
                this.isDisabled = !this.navigation.hasSectionBeenVisited(this.validateSection);
            }
        }
        this.imgElem.src = this.assetsPrefix + (this.isDisabled ? this.btnDisabledImg : this.btnImg);
    };
    DynamicOverlapMenuItemDirective.prototype.onMouseEnter = function () {
        if (!this.isDisabled) {
            this.imgElem.src = this.assetsPrefix + this.btnHoverImg;
        }
        this.hover.emit(this.btnTag);
    };
    DynamicOverlapMenuItemDirective.prototype.onMouseLeave = function () {
        if (!this.isDisabled) {
            this.imgElem.src = this.assetsPrefix + this.btnImg;
        }
        this.hover.emit('');
    };
    DynamicOverlapMenuItemDirective.prototype.onClick = function () {
        if (!this.isDisabled) {
            this.navigation.goToSectionSlide(this.redirectTo, 0);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], DynamicOverlapMenuItemDirective.prototype, "elementClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-width-perc'),
        __metadata("design:type", Number)
    ], DynamicOverlapMenuItemDirective.prototype, "widthPercentage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-left-perc'),
        __metadata("design:type", Number)
    ], DynamicOverlapMenuItemDirective.prototype, "leftPercentage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-top-perc'),
        __metadata("design:type", Number)
    ], DynamicOverlapMenuItemDirective.prototype, "topPercentage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-redirect'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "redirectTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-btn-img'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "btnImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-btn-img-hover'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "btnHoverImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-btn-img-disabled'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "btnDisabledImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-btn-tag'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "btnTag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-disable-on-interactions'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "disableOnInteractions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-disable-on-visit'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "disableOnVisit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('omi-validate-section'),
        __metadata("design:type", String)
    ], DynamicOverlapMenuItemDirective.prototype, "validateSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DynamicOverlapMenuItemDirective.prototype, "hover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DynamicOverlapMenuItemDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DynamicOverlapMenuItemDirective.prototype, "onMouseLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DynamicOverlapMenuItemDirective.prototype, "onClick", null);
    DynamicOverlapMenuItemDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[dynamicOverlapMenuItem]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_interactions_provider__["a" /* InteractionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_interactions_provider__["a" /* InteractionsProvider */]) === "function" && _c || Object])
    ], DynamicOverlapMenuItemDirective);
    return DynamicOverlapMenuItemDirective;
    var _a, _b, _c;
}());

//# sourceMappingURL=dynamic-overlap-menu-item.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dynamic-overlap-menu-container\">\n    <div class=\"dynamic-overlap-menu\">\n        <img class=\"overlap-menu-bg\" *ngIf=\"data.bgImage\" [src]=\"data.bgImage\">\n        <div *ngFor=\"let btn of data.btns\" dynamicOverlapMenuItem\n            (hover)=\"onItemHover($event)\"\n            (itemEnabled)=\"itemEnabledCallback($event)\"\n            omi-width-perc=\"{{btn.width}}\"\n            omi-left-perc=\"{{btn.left}}\"\n            omi-top-perc=\"{{btn.top}}\"\n            omi-redirect=\"{{btn.target}}\"\n            omi-validate-section=\"{{btn.validateSection}}\"\n            omi-disable-on-interactions=\"{{btn.disableOnInteractions}}\"\n            omi-disable-on-visit=\"{{btn.disableOnVisit}}\"\n            omi-btn-tag=\"{{btn.tag}}\"\n            omi-btn-img=\"{{btn.bgImages.normal}}\"\n            omi-btn-img-hover=\"{{btn.bgImages.hover}}\"\n            omi-btn-img-disabled=\"{{btn.bgImages.disabled}}\"\n        ></div>\n    </div>\n    <div class=\"dynamic-overlap-dashboard\">\n        <div class=\"overlap-menu-selection\">{{selectionTxt}}</div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .dynamic-overlap-menu {\n  position: relative;\n  max-width: 1200px;\n  width: 90%;\n  margin: 0 auto; }\n  :host .dynamic-overlap-menu img.overlap-menu-bg {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain; }\n  :host .dynamic-overlap-menu .overlap-menu-item {\n    position: absolute; }\n    :host .dynamic-overlap-menu .overlap-menu-item img.overlap-menu-item-img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: contain;\n         object-fit: contain; }\n    :host .dynamic-overlap-menu .overlap-menu-item:hover {\n      cursor: pointer; }\n\n:host .dynamic-overlap-dashboard {\n  width: 70%;\n  margin: 0 auto;\n  padding: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host .dynamic-overlap-dashboard .overlap-menu-selection {\n    width: 50%;\n    background: white;\n    margin: 0 auto;\n    padding: 10px;\n    text-align: center;\n    font-weight: bold;\n    color: #142325;\n    font-size: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicOverlapMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicOverlapMenuComponent = (function () {
    function DynamicOverlapMenuComponent() {
        this.enabledAmount = 0;
    }
    DynamicOverlapMenuComponent.prototype.ngOnInit = function () {
        this.data.btns = this.data.btns ? this.data.btns : [];
        this.data.defaultSelection = this.data.defaultSelection ? this.data.defaultSelection : '';
        this.data.btns = this.data.btns.map(function (btn) {
            return {
                tag: btn.tag ? btn.tag : '',
                width: btn.width ? btn.width : 10,
                top: btn.top ? btn.top : 0,
                left: btn.left ? btn.left : 0,
                target: btn.target ? btn.target : '',
                validateSection: btn.validateSection ? btn.validateSection : '',
                disableOnInteractions: btn.disableOnInteractions ? btn.disableOnInteractions : false,
                disableOnVisit: btn.disableOnVisit ? btn.disableOnVisit : false,
                bgImages: {
                    normal: btn.bgImages && btn.bgImages.normal ? btn.bgImages.normal : '',
                    hover: btn.bgImages && btn.bgImages.hover ? btn.bgImages.hover : (btn.bgImages && btn.bgImages.normal ? btn.bgImages.normal : ''),
                    disabled: btn.bgImages && btn.bgImages.disabled ? btn.bgImages.disabled : (btn.bgImages && btn.bgImages.normal ? btn.bgImages.normal : ''),
                }
            };
        });
        this.selectionTxt = this.data.defaultSelection;
    };
    DynamicOverlapMenuComponent.prototype.onItemHover = function (hoveredTag) {
        this.selectionTxt = hoveredTag ? hoveredTag : this.data.defaultSelection;
    };
    DynamicOverlapMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dinamyc-overlap-menu',
            template: __webpack_require__("../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicOverlapMenuComponent);
    return DynamicOverlapMenuComponent;
}());

//# sourceMappingURL=dynamic-overlap-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-slideshow\">\n    <div *ngIf=\"current\" class=\"intro-slideshow-content\">\n        <course-row\n        *ngFor='let row of current.rows'\n        [style.flex]=\"row.flex\"\n        [cols]=\"row.cols\"\n        ></course-row>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host > .intro-slideshow {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-direction: row !important;\n      flex-direction: row !important;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host > .intro-slideshow > div.intro-slideshow-content {\n    display: -ms-flexbox;\n    display: flex;\n    background: white;\n    margin: 0 auto;\n    width: 70%;\n    height: 50%;\n    border-radius: 20px;\n    overflow-y: auto;\n    /* Safari/Chrome, other WebKit */\n    /* Firefox, other Gecko */\n    box-sizing: border-box;\n    /* Opera/IE 8+ */ }\n    :host > .intro-slideshow > div.intro-slideshow-content course-row {\n      height: 100%; }\n      :host > .intro-slideshow > div.intro-slideshow-content course-row::ng-deep course-column.padding-top-small {\n        padding-top: 20px; }\n      :host > .intro-slideshow > div.intro-slideshow-content course-row::ng-deep course-column paragraph {\n        height: 100%;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center; }\n        :host > .intro-slideshow > div.intro-slideshow-content course-row::ng-deep course-column paragraph .paragraph-container {\n          max-height: 100%;\n          margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroSlideShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroSlideShowComponent = (function () {
    function IntroSlideShowComponent() {
    }
    IntroSlideShowComponent.prototype.ngOnInit = function () {
        this.prepareData();
    };
    IntroSlideShowComponent.prototype.prepareData = function () {
        this.sections = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.data, function (section) {
            return {
                name: section.name,
                rows: section.rows ? section.rows : []
            };
        });
        if (this.sections.length > 0) {
            this.current = __WEBPACK_IMPORTED_MODULE_1_lodash__["head"](this.sections);
        }
    };
    IntroSlideShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'intro-slideshow',
            template: __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroSlideShowComponent);
    return IntroSlideShowComponent;
}());

//# sourceMappingURL=intro-slideshow.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"simple-container\" *ngIf=\"current\">\n    <course-row *ngFor='let row of current.rows'\n        [style.flex]=\"row.flex\"\n        [cols]=\"row.cols\"\n        [ngStyle]=\"row.getStyle()\"\n        [ngClass]=\"row.getClasses()\"\n        ></course-row>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .simple-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_course_row_class__ = __webpack_require__("../../../../../src/app/core/classes/course-row.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_course_column_class__ = __webpack_require__("../../../../../src/app/core/classes/course-column.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SimpleContainerComponent = (function () {
    function SimpleContainerComponent() {
    }
    SimpleContainerComponent.prototype.ngOnInit = function () {
        this.prepareData();
    };
    SimpleContainerComponent.prototype.prepareData = function () {
        if (Array.isArray(this.data) && this.data.length > 0) {
            var areRowsFormatted = __WEBPACK_IMPORTED_MODULE_3_lodash__["every"](this.data, function (section) {
                return __WEBPACK_IMPORTED_MODULE_3_lodash__["every"](section.rows, function (row) {
                    return (row instanceof __WEBPACK_IMPORTED_MODULE_1__classes_course_row_class__["a" /* CourseRow */]);
                });
            });
            if (areRowsFormatted) {
                this.sections = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](this.data, function (section) {
                    return {
                        name: section.name,
                        rows: section.rows ? section.rows : []
                    };
                });
            }
            else {
                this.formatSections();
            }
            this.current = __WEBPACK_IMPORTED_MODULE_3_lodash__["head"](this.sections);
        }
    };
    SimpleContainerComponent.prototype.formatSections = function () {
        this.sections = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](this.data, function (section) {
            return {
                name: section.name,
                rows: section.rows ? __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](section.rows, function (row) {
                    var newRow = new __WEBPACK_IMPORTED_MODULE_1__classes_course_row_class__["a" /* CourseRow */](row.flex ? row.flex : 1);
                    newRow.setColArray(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"](row.cols, function (col) {
                        var mapcol = new __WEBPACK_IMPORTED_MODULE_2__classes_course_column_class__["a" /* CourseColumn */](col.flex ? col.flex : 1);
                        mapcol.setContent(col.component, col.data);
                        if (col.classes) {
                            mapcol.setClasses(col.classes);
                        }
                        if (col.style) {
                            mapcol.setStyle(col.style);
                        }
                        return mapcol;
                    }));
                    if (row.classes) {
                        newRow.setClasses(row.classes);
                    }
                    if (row.style) {
                        newRow.setStyle(row.style);
                    }
                    return newRow;
                }) : []
            };
        });
    };
    SimpleContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'simple-container',
            template: __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleContainerComponent);
    return SimpleContainerComponent;
}());

//# sourceMappingURL=simple-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/tab-organizer/tab-organizer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-organizer-menu\">\n    <ul>\n        <li *ngFor=\"let section of sections; let i = index;\"\n        [ngClass]=\"{'active': i === currentIdx}\"\n        (click)=\"goTo(i)\">\n            <span>{{section.name}}</span>\n        </li>\n    </ul>\n</div>\n<div class=\"tab-organizer-content\">\n    <div *ngIf=\"current\">\n        <course-row\n        *ngFor='let row of current.rows'\n        [style.flex]=\"row.flex\"\n        [cols]=\"row.cols\"\n        [ngStyle]=\"row.getStyle()\"\n        [ngClass]=\"row.getClasses()\"\n        ></course-row>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/tab-organizer/tab-organizer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 75%;\n  margin: 0 auto; }\n  :host .tab-organizer-menu {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-direction: row;\n        flex-direction: row; }\n    :host .tab-organizer-menu ul {\n      display: -ms-flexbox;\n      display: flex;\n      list-style: none;\n      -ms-flex: 1;\n          flex: 1;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      margin: 0;\n      padding: 0; }\n      :host .tab-organizer-menu ul li {\n        -ms-flex: 1;\n            flex: 1;\n        min-height: 50px;\n        background: #3B0D8D;\n        color: white;\n        font-weight: bold;\n        text-align: center;\n        border-bottom: 1px solid white;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center;\n        cursor: pointer; }\n        :host .tab-organizer-menu ul li span {\n          display: block;\n          margin: 0 auto; }\n        :host .tab-organizer-menu ul li:hover {\n          background: #643DBF; }\n        :host .tab-organizer-menu ul li.active {\n          background: #643DBF; }\n  :host .tab-organizer-content {\n    -ms-flex: 2;\n        flex: 2;\n    padding: 20px;\n    box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/tab-organizer/tab-organizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabOrganizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_course_row_class__ = __webpack_require__("../../../../../src/app/core/classes/course-row.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_course_column_class__ = __webpack_require__("../../../../../src/app/core/classes/course-column.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabOrganizerComponent = (function () {
    function TabOrganizerComponent() {
    }
    TabOrganizerComponent.prototype.ngOnInit = function () {
        this.prepareData();
    };
    TabOrganizerComponent.prototype.goTo = function (idx) {
        if (idx !== this.currentIdx) {
            this.current = this.sections[idx];
            this.currentIdx = idx;
        }
    };
    TabOrganizerComponent.prototype.prepareData = function () {
        this.sections = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](this.data, function (section) {
            return {
                name: section.name,
                rows: section.rows ? __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](section.rows, function (row) {
                    var newRow = new __WEBPACK_IMPORTED_MODULE_1__classes_course_row_class__["a" /* CourseRow */](1);
                    newRow.setColArray(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"](row.cols, function (col) {
                        var mapcol = new __WEBPACK_IMPORTED_MODULE_2__classes_course_column_class__["a" /* CourseColumn */](1);
                        mapcol.setContent(col.component, col.data);
                        if (col.classes) {
                            mapcol.setClasses(col.classes);
                        }
                        if (col.style) {
                            mapcol.setStyle(col.style);
                        }
                        return mapcol;
                    }));
                    if (row.classes) {
                        newRow.setClasses(row.classes);
                    }
                    if (row.style) {
                        newRow.setStyle(row.style);
                    }
                    return newRow;
                }) : []
            };
        });
        if (this.sections.length > 0) {
            this.current = __WEBPACK_IMPORTED_MODULE_3_lodash__["head"](this.sections);
            this.currentIdx = 0;
        }
    };
    TabOrganizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-organizer',
            template: __webpack_require__("../../../../../src/app/core/components/content-organizers/tab-organizer/tab-organizer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/content-organizers/tab-organizer/tab-organizer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabOrganizerComponent);
    return TabOrganizerComponent;
}());

//# sourceMappingURL=tab-organizer.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/test-organizer/test-organizer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"test-organizer-menu\">\n    <ul>\n        <li *ngFor=\"let section of sections; let i = index;\"\n        [ngClass]=\"{'active': i === currentIdx}\"\n        (click)=\"goTo(i)\">\n            {{section.name}}\n        </li>\n    </ul>\n</div>\n<div class=\"test-organizer-content\">\n    <div *ngIf=\"current\">\n        <course-row\n        *ngFor='let row of current.rows'\n        [style.flex]=\"row.flex\"\n        [cols]=\"row.cols\"\n        ></course-row>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/test-organizer/test-organizer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  width: 75%;\n  margin: 0 auto; }\n  :host .test-organizer-menu {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    :host .test-organizer-menu ul {\n      display: -ms-flexbox;\n      display: flex;\n      list-style: none;\n      -ms-flex: 1;\n          flex: 1;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      margin: 0;\n      padding: 0; }\n      :host .test-organizer-menu ul li {\n        -ms-flex: 1;\n            flex: 1;\n        min-height: 50px;\n        background: darkred;\n        color: white;\n        padding-top: 30px;\n        font-weight: bold;\n        text-align: center;\n        border-bottom: 1px solid white;\n        cursor: pointer; }\n        :host .test-organizer-menu ul li:hover {\n          background: red; }\n        :host .test-organizer-menu ul li.active {\n          background: red; }\n  :host .test-organizer-content {\n    -ms-flex: 2;\n        flex: 2;\n    padding: 20px;\n    border: 1px solid darkred;\n    box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/test-organizer/test-organizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestOrganizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_course_row_class__ = __webpack_require__("../../../../../src/app/core/classes/course-row.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_course_column_class__ = __webpack_require__("../../../../../src/app/core/classes/course-column.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestOrganizerComponent = (function () {
    function TestOrganizerComponent() {
    }
    TestOrganizerComponent.prototype.ngOnInit = function () {
        this.prepareData();
    };
    TestOrganizerComponent.prototype.goTo = function (idx) {
        if (idx !== this.currentIdx) {
            this.current = this.sections[idx];
            this.currentIdx = idx;
        }
    };
    TestOrganizerComponent.prototype.prepareData = function () {
        this.sections = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](this.data, function (section) {
            return {
                name: section.name,
                rows: section.rows ? __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](section.rows, function (row) {
                    var newRow = new __WEBPACK_IMPORTED_MODULE_1__classes_course_row_class__["a" /* CourseRow */](1);
                    newRow.setColArray(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"](row.cols, function (col) {
                        var mapcol = new __WEBPACK_IMPORTED_MODULE_2__classes_course_column_class__["a" /* CourseColumn */](1);
                        mapcol.setContent(col.component, col.data);
                        return mapcol;
                    }));
                    return newRow;
                }) : []
            };
        });
        if (this.sections.length > 0) {
            this.current = __WEBPACK_IMPORTED_MODULE_3_lodash__["head"](this.sections);
            this.currentIdx = 0;
        }
    };
    TestOrganizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'test-organizer',
            template: __webpack_require__("../../../../../src/app/core/components/content-organizers/test-organizer/test-organizer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/content-organizers/test-organizer/test-organizer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestOrganizerComponent);
    return TestOrganizerComponent;
}());

//# sourceMappingURL=test-organizer.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <course-content [LOCurrentState]=\"LOCurrentState\" [ngStyle]=\"getSlideStyle()\"></course-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCourseContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseCourseContainerComponent = (function () {
    function BaseCourseContainerComponent() {
    }
    BaseCourseContainerComponent.prototype.ngOnInit = function () {
    };
    BaseCourseContainerComponent.prototype.getSlideStyle = function () {
        return this.LOCurrentState.position.section.slide(this.LOCurrentState.position.slide).getStyle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseCourseContainerComponent.prototype, "LOCurrentState", void 0);
    BaseCourseContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'base-course-container',
            template: __webpack_require__("../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseCourseContainerComponent);
    return BaseCourseContainerComponent;
}());

//# sourceMappingURL=base-course-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/floating-btn-set/floating-btn-set.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"floating-btn-set\">\n    <ng-container *ngFor=\"let btn of floatingBtns\">\n        \n        <floating-btn *ngIf=\"!btn.action\"\n            [floatBtnTag]=\"btn.floatBtnTag\"\n            [floatBtnIconTxt]=\"btn.icon\">\n        </floating-btn>\n\n        <floating-btn *ngIf=\"btn.action === 'modal'\"\n            [displayModal]=\"btn.data\"\n            [floatBtnTag]=\"btn.tag\"\n            [floatBtnIconTxt]=\"btn.icon\">\n        </floating-btn>\n\n    </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/floating-btn-set/floating-btn-set.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host::ng-deep div.floating-btn-set {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  :host::ng-deep div.floating-btn-set floating-btn div.floating-btn {\n    position: static; }\n  :host::ng-deep div.floating-btn-set floating-btn:not(:last-child) div.floating-btn {\n    margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/floating-btn-set/floating-btn-set.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingBtnSetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FloatingBtnSetComponent = (function () {
    function FloatingBtnSetComponent() {
    }
    FloatingBtnSetComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FloatingBtnSetComponent.prototype, "floatingBtns", void 0);
    FloatingBtnSetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'floating-btn-set',
            template: __webpack_require__("../../../../../src/app/core/components/layout/floating-btn-set/floating-btn-set.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/floating-btn-set/floating-btn-set.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FloatingBtnSetComponent);
    return FloatingBtnSetComponent;
}());

//# sourceMappingURL=floating-btn-set.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/floating-btn/floating-btn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"floating-btn\">\n    <div class=\"floating-btn-inner\">\n        <i class=\"fas\" [ngClass]=\"iconClassObj\"></i>\n        <span *ngIf=\"floatBtnTag\">{{ floatBtnTag }}</span>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/floating-btn/floating-btn.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host div.floating-btn {\n  position: fixed;\n  border-radius: 100%;\n  background: #351C75;\n  bottom: 10px;\n  right: 10px;\n  width: 80px;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  border: solid 2px white; }\n  :host div.floating-btn .floating-btn-inner {\n    margin: 0 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    :host div.floating-btn .floating-btn-inner i {\n      margin: 0 auto;\n      font-size: 1.8rem; }\n      :host div.floating-btn .floating-btn-inner i:only-child {\n        font-size: 3.2rem; }\n    :host div.floating-btn .floating-btn-inner span {\n      display: block;\n      margin-top: 8px;\n      font-weight: bold;\n      font-size: 0.9rem; }\n    :host div.floating-btn .floating-btn-inner i, :host div.floating-btn .floating-btn-inner span {\n      color: white; }\n  :host div.floating-btn:hover {\n    background: white;\n    border: solid 2px #351C75; }\n    :host div.floating-btn:hover .floating-btn-inner i, :host div.floating-btn:hover .floating-btn-inner span {\n      color: #351C75; }\n  :host div.floating-btn:active {\n    background: #5e32cd;\n    border: solid 2px white; }\n    :host div.floating-btn:active .floating-btn-inner i, :host div.floating-btn:active .floating-btn-inner span {\n      color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/floating-btn/floating-btn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingBtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FloatingBtnComponent = (function () {
    function FloatingBtnComponent() {
        this.iconClassObj = {};
    }
    FloatingBtnComponent.prototype.ngOnInit = function () {
        var iconClassKey = this.floatBtnIconTxt ? 'fa-' + this.floatBtnIconTxt : 'fa-question';
        this.iconClassObj[iconClassKey] = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FloatingBtnComponent.prototype, "floatBtnIconTxt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FloatingBtnComponent.prototype, "floatBtnTag", void 0);
    FloatingBtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'floating-btn',
            template: __webpack_require__("../../../../../src/app/core/components/layout/floating-btn/floating-btn.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/floating-btn/floating-btn.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FloatingBtnComponent);
    return FloatingBtnComponent;
}());

//# sourceMappingURL=floating-btn.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lo-modal-container\" *ngIf=\"modal.getVisible()\">\n    <div class=\"lo-modal-content\">\n        <div (click)=\"close()\" class=\"lo-modal-close-icon\"><i class=\"fas fa-times-circle\"></i></div>\n        <div class=\"lo-modal-content-scroll\">\n            <course-column\n                [LOCurrentState]=\"LOCurrentState\"\n                [componentInner]=\"modal.getInnerComponent()\">\n            </course-column>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host .lo-modal-container {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host .lo-modal-container .lo-modal-content {\n    position: relative;\n    margin: 0 auto;\n    border-radius: 25px;\n    background: white;\n    width: 50%;\n    height: 50%;\n    padding: 20px;\n    display: -ms-flexbox;\n    display: flex; }\n    :host .lo-modal-container .lo-modal-content .lo-modal-close-icon {\n      position: absolute;\n      right: -40px;\n      top: -40px;\n      z-index: 1001;\n      color: #D2ECD6;\n      font-size: 2.3em; }\n      :host .lo-modal-container .lo-modal-content .lo-modal-close-icon:hover {\n        color: #D2ECD6; }\n      :host .lo-modal-container .lo-modal-content .lo-modal-close-icon:active {\n        color: #11434A; }\n    :host .lo-modal-container .lo-modal-content .lo-modal-content-scroll {\n      overflow-y: auto;\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__ = __webpack_require__("../../../../../src/app/core/providers/modal-provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LOModalComponent = (function () {
    function LOModalComponent(modal) {
        this.modal = modal;
    }
    LOModalComponent.prototype.ngOnInit = function () { };
    LOModalComponent.prototype.close = function () {
        this.modal.hideModal();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LOModalComponent.prototype, "LOCurrentState", void 0);
    LOModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-modal',
            template: __webpack_require__("../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__["a" /* ModalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__["a" /* ModalProvider */]) === "function" && _a || Object])
    ], LOModalComponent);
    return LOModalComponent;
    var _a;
}());

//# sourceMappingURL=lo-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-submit-modal\"\n    [ngClass]=\"{'error': !correct, 'success': correct}\"\n    *ngIf=\"data\">\n    <h1 class=\"activity-submit-modal-title\">\n        {{i18n.title}}\n    </h1>\n    <div class=\"result-icon-container\">\n        <i *ngIf=\"correct\" class=\"fas fa-check-circle result-icon\"></i>\n        <i *ngIf=\"!correct\" class=\"fas fa-times-circle result-icon\"></i>\n    </div>\n    <h2 class=\"activity-submit-modal-msg\">\n        {{i18n.msg}}\n    </h2>\n    <p class=\"activity-submit-modal-reminder\">\n        <span *ngIf=\"!correct && remainingAttempts > 0\">\n            {{i18n.reminder.attemptsRemainingBefore}} {{remainingAttempts}}\n            <span *ngIf=\"remainingAttempts > 1\">{{i18n.reminder.attemptsRemainingAfterPlural}}</span>\n            <span *ngIf=\"remainingAttempts === 1\">{{i18n.reminder.attemptsRemainingAfterSingular}}</span>\n        </span>\n        <span *ngIf=\"!correct && remainingAttempts === 0\">\n            {{i18n.reminder.noAttemptsRemaining}}\n        </span>\n    </p>\n    <div class=\"back-to-menu-container\">\n        <button class=\"back-to-menu\" *ngIf=\"correct\" (click)=\"backToMenu()\">Regresar al menú</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host .activity-submit-modal .activity-submit-modal-title {\n  font-weight: bolder;\n  text-align: center;\n  border-bottom: solid 5px;\n  padding-bottom: 20px;\n  margin-bottom: 0; }\n\n:host .activity-submit-modal .result-icon-container {\n  padding: 25px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host .activity-submit-modal .result-icon-container .result-icon {\n    font-size: 6rem; }\n\n:host .activity-submit-modal .activity-submit-modal-msg {\n  font-size: 1.2rem;\n  text-align: center;\n  margin-top: 0; }\n\n:host .activity-submit-modal .activity-submit-modal-reminder {\n  text-align: center;\n  font-size: 1.2rem; }\n\n:host .activity-submit-modal .back-to-menu-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host .activity-submit-modal .back-to-menu-container .back-to-menu {\n    border-radius: 10px;\n    height: 50px;\n    width: 250px;\n    font-size: 1.2rem;\n    border: 3px solid #11434A;\n    background: white;\n    color: #11434A; }\n    :host .activity-submit-modal .back-to-menu-container .back-to-menu:hover {\n      border-color: white;\n      background: #11434A;\n      color: white; }\n    :host .activity-submit-modal .back-to-menu-container .back-to-menu:disabled {\n      border-color: dimgray;\n      background: lightgray;\n      color: gray; }\n\n:host .activity-submit-modal.error .activity-submit-modal-title {\n  color: darkred;\n  border-color: darkred; }\n\n:host .activity-submit-modal.error .result-icon-container .result-icon {\n  color: darkred; }\n\n:host .activity-submit-modal.success .activity-submit-modal-title {\n  color: green;\n  border-color: green; }\n\n:host .activity-submit-modal.success .result-icon-container .result-icon {\n  color: green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitySubmitModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__ = __webpack_require__("../../../../../src/app/core/providers/modal-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_activity_submit_i18n__ = __webpack_require__("../../../../../src/app/core/components/layout/modals/i18n/activity-submit.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivitySubmitModal = (function () {
    function ActivitySubmitModal(modal, navigation) {
        this.modal = modal;
        this.navigation = navigation;
    }
    ActivitySubmitModal.prototype.ngOnInit = function () {
        this.currentInteraction = this.data.LOCurrentState.interactions[this.data.interactionId];
        this.correct = this.data.correct ? this.data.correct : false;
        this.i18n = this.correct ? __WEBPACK_IMPORTED_MODULE_3__i18n_activity_submit_i18n__["a" /* activitySubmitModali18n */].success : __WEBPACK_IMPORTED_MODULE_3__i18n_activity_submit_i18n__["a" /* activitySubmitModali18n */].error;
        this.remainingAttempts = __WEBPACK_IMPORTED_MODULE_4_lodash__["isNumber"](this.data.remainingAttempts) ? this.data.remainingAttempts : -1;
    };
    ActivitySubmitModal.prototype.close = function () {
        this.modal.hideModal();
    };
    ActivitySubmitModal.prototype.backToMenu = function () {
        this.modal.hideModal();
        this.navigation.goToSectionSlide('scenarios', 0);
    };
    ActivitySubmitModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'activity-submit-modal',
            template: __webpack_require__("../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__["a" /* ModalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__["a" /* ModalProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_navigation_provider__["a" /* NavigationProvider */]) === "function" && _b || Object])
    ], ActivitySubmitModal);
    return ActivitySubmitModal;
    var _a, _b;
}());

//# sourceMappingURL=activity-submit-modal.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/i18n/activity-submit.i18n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activitySubmitModali18n; });
var activitySubmitModali18n = {
    error: {
        title: 'Respuesta Incorrecta',
        msg: 'Alguna de las respuestas seleccionadas no es válida.',
        reminder: {
            attemptsRemainingBefore: 'No te desanimes, aun tienes',
            attemptsRemainingAfterPlural: 'intentos.',
            attemptsRemainingAfterSingular: 'intento.',
            noAttemptsRemaining: 'Has agotado todos tus intentos. Los valores del ejercicio cambiarán ahora.'
        }
    },
    success: {
        title: 'Respuesta Correcta',
        msg: 'La humanidad está un poco mas cerca de lograr su objetivo.',
        reminder: {}
    }
};
//# sourceMappingURL=activity-submit.i18n.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lo-completion-modal\">\n        <h1 class=\"lo-completion-modal-title\">\n            ¡Muchas Gracias!\n        </h1>\n        <div class=\"icon-container\">\n            <i class=\"fas fa-user-astronaut\"></i>\n        </div>\n\n        <h2 class=\"lo-completion-modal-msg\">\n            A través de tu ayuda, los seres humanos han logrado establecerse en el asteroide XXC1.\n        </h2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host .lo-completion-modal {\n  padding: 20px; }\n  :host .lo-completion-modal .lo-completion-modal-title {\n    font-weight: bolder;\n    text-align: center;\n    border-bottom: solid 5px;\n    padding-bottom: 20px;\n    margin-bottom: 0;\n    color: #3B0D8D; }\n  :host .lo-completion-modal .icon-container {\n    padding: 25px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    margin: 10px 0; }\n    :host .lo-completion-modal .icon-container i {\n      font-size: 6.5rem;\n      color: #643DBF; }\n  :host .lo-completion-modal .lo-completion-modal-msg {\n    text-align: center;\n    margin-top: 0;\n    font-size: 1.3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCompletionModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LOCompletionModal = (function () {
    function LOCompletionModal() {
    }
    LOCompletionModal.prototype.ngOnInit = function () { };
    LOCompletionModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-completion-modal',
            template: __webpack_require__("../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LOCompletionModal);
    return LOCompletionModal;
}());

//# sourceMappingURL=lo-completion-modal.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/modals.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_submit_activity_submit_modal__ = __webpack_require__("../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lo_completion_modal_lo_completion_modal__ = __webpack_require__("../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// imports



//BASE


// @NgModule decorator with its metadata
var ModalsModule = (function () {
    function ModalsModule() {
    }
    ModalsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__activity_submit_activity_submit_modal__["a" /* ActivitySubmitModal */],
                __WEBPACK_IMPORTED_MODULE_4__lo_completion_modal_lo_completion_modal__["a" /* LOCompletionModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__activity_submit_activity_submit_modal__["a" /* ActivitySubmitModal */],
                __WEBPACK_IMPORTED_MODULE_4__lo_completion_modal_lo_completion_modal__["a" /* LOCompletionModal */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__activity_submit_activity_submit_modal__["a" /* ActivitySubmitModal */],
                __WEBPACK_IMPORTED_MODULE_4__lo_completion_modal_lo_completion_modal__["a" /* LOCompletionModal */]
            ]
        })
    ], ModalsModule);
    return ModalsModule;
}());

//# sourceMappingURL=modals.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/navigations-side-btns/navigation-side-btns.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-btn-container left\" *ngIf=\"shouldDisplayLeftBtn\">\n    <div class=\"nav-side-btn\" (click)=\"previous()\">\n        <i class=\"fas fa-angle-left\"></i>\n    </div>\n</div>\n<div class=\"nav-side-btn-container right\" *ngIf=\"shouldDisplayRightBtn\">\n    <div class=\"nav-side-btn\" (click)=\"next()\">\n        <i class=\"fas fa-angle-right\"></i>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/navigations-side-btns/navigation-side-btns.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host div.nav-side-btn-container {\n  position: fixed;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  z-index: 1; }\n  :host div.nav-side-btn-container.left {\n    left: 0; }\n  :host div.nav-side-btn-container.right {\n    right: 0; }\n  :host div.nav-side-btn-container div.nav-side-btn {\n    height: 70px;\n    width: 35px;\n    background: white;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center;\n    font-size: 40px;\n    color: #351C75; }\n    :host div.nav-side-btn-container div.nav-side-btn i {\n      display: block;\n      margin: 0 auto; }\n    :host div.nav-side-btn-container div.nav-side-btn:hover {\n      background: #351C75;\n      color: white; }\n    :host div.nav-side-btn-container div.nav-side-btn:active {\n      background: #5e32cd; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/navigations-side-btns/navigation-side-btns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationSideBtnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationSideBtnsComponent = (function () {
    function NavigationSideBtnsComponent(navigation) {
        this.navigation = navigation;
    }
    NavigationSideBtnsComponent.prototype.ngOnInit = function () {
        this.updateDisplay();
        this.navigation.getSlideChangedObservable().subscribe(this.updateDisplay.bind(this));
    };
    NavigationSideBtnsComponent.prototype.next = function () {
        this.navigation.nextSlide();
    };
    NavigationSideBtnsComponent.prototype.previous = function () {
        this.navigation.previousSlide();
    };
    NavigationSideBtnsComponent.prototype.updateDisplay = function () {
        this.shouldDisplayLeftBtn = !this.navigation.isFirstSlide();
        this.shouldDisplayRightBtn = !this.navigation.isLastSlide();
    };
    NavigationSideBtnsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navigation-side-btns',
            template: __webpack_require__("../../../../../src/app/core/components/layout/navigations-side-btns/navigation-side-btns.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/navigations-side-btns/navigation-side-btns.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */]) === "function" && _a || Object])
    ], NavigationSideBtnsComponent);
    return NavigationSideBtnsComponent;
    var _a;
}());

//# sourceMappingURL=navigation-side-btns.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/learning-activities/form-question/form-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-question-container\" *ngIf=\"formQuestionData\">\n    <p class=\"form-question-statement\">\n        {{ formQuestionData.statement }}\n    </p>\n    <div class=\"form-question-answer-opts\" *ngIf=\"isResponseObjectReady\">\n        <div class=\"form-question-answer-opt\" *ngFor=\"let answerOpt of formQuestionData.answerOpts; let i = index\">\n            <!-- ONE CORRECT ANSWER -->\n            <div *ngIf=\"formQuestionData.correct.length === 1\">\n                <input type=\"radio\" name=\"interaction-{{ formQuestionData.interactionId }}\" [disabled]=\"attempted >= maxAttempts\" [value]=\"i\" [(ngModel)]=\"userResponse[formQuestionData.interactionId]\"/>\n                <span> {{ answerOpt }}</span>\n            </div>\n            <!-- MULTIPLE CORRECT ANSWERS -->\n            <div *ngIf=\"formQuestionData.correct.length > 1\">\n                <input type=\"checkbox\" name=\"interaction-{{ formQuestionData.interactionId }}-{{i}}\" [disabled]=\"attempted >= maxAttempts\" [value]=\"i\" [(ngModel)]=\"userResponse[i]\" />\n                <span> {{ answerOpt }}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-question-btn\" *ngIf=\"formQuestionData.submitBtn\">\n        <button [disabled]=\"attempted >= maxAttempts\" (click)=\"submitInteraction()\">{{ formQuestionData.submitBtn.tag }}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/learning-activities/form-question/form-question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .form-question-btn {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/learning-activities/form-question/form-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_noop_constant__ = __webpack_require__("../../../../../src/app/core/constants/noop.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormQuestionComponent = (function () {
    function FormQuestionComponent() {
        this.userResponse = {};
        this.isResponseObjectReady = false;
    }
    FormQuestionComponent.prototype.ngOnInit = function () {
        this.formQuestionData = this.attributeData ? this.attributeData : this.data;
        this.questionType = this.formQuestionData.correct.length === 1 ?
            QuestionType.OneAnswer : QuestionType.MultipleAnswers;
        this.currentInteraction =
            this.formQuestionData.LOCurrentState.interactions[this.formQuestionData.interactionId];
        this.attempted = this.currentInteraction.attempts;
        this.maxAttempts = this.formQuestionData.attempts ? this.formQuestionData.attempts : 1;
        this.submitAction =
            this.formQuestionData.submitAction ? this.formQuestionData.submitAction : __WEBPACK_IMPORTED_MODULE_1__constants_noop_constant__["a" /* noop */];
        this.prepareResponseObj();
        this.decryptResponseString();
    };
    FormQuestionComponent.prototype.submitInteraction = function () {
        var grade = this.questionType === QuestionType.OneAnswer ?
            this.gradeInteractionForOneAnswer() : this.gradeInteractionForMultipleAnswers();
        this.submitAction(this.formQuestionData.interactionId, grade.response, grade.isCorrect);
        this.attempted++;
    };
    FormQuestionComponent.prototype.gradeInteractionForOneAnswer = function () {
        return {
            response: this.formQuestionData
                .answerOpts[this.userResponse[this.formQuestionData.interactionId]],
            isCorrect: __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](__WEBPACK_IMPORTED_MODULE_2_lodash__["difference"](__WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](__WEBPACK_IMPORTED_MODULE_2_lodash__["values"](this.userResponse)), this.formQuestionData.correct))
        };
    };
    FormQuestionComponent.prototype.gradeInteractionForMultipleAnswers = function () {
        var checkedResponses = __WEBPACK_IMPORTED_MODULE_2_lodash__["pickBy"](this.userResponse, function (response) {
            return response === true;
        });
        return {
            response: __WEBPACK_IMPORTED_MODULE_2_lodash__["reduce"](checkedResponses, this.buildResponseString.bind(this), ''),
            isCorrect: __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](__WEBPACK_IMPORTED_MODULE_2_lodash__["difference"](__WEBPACK_IMPORTED_MODULE_2_lodash__["map"](__WEBPACK_IMPORTED_MODULE_2_lodash__["keys"](checkedResponses), __WEBPACK_IMPORTED_MODULE_2_lodash__["parseInt"]), this.formQuestionData.correct))
        };
    };
    FormQuestionComponent.prototype.buildResponseString = function (acum, answerOpt, answerKey) {
        var strAnswer = this.formQuestionData.answerOpts[answerKey];
        var separator = acum.length > 0 ? ' / ' : '';
        return acum + separator + strAnswer;
    };
    FormQuestionComponent.prototype.decryptResponseString = function () {
        this.questionType === QuestionType.OneAnswer ?
            this.decryptResponseStringForOneAnswer() :
            this.decryptResponseStringForMultipleAnswers();
    };
    FormQuestionComponent.prototype.decryptResponseStringForOneAnswer = function () {
        var idx = __WEBPACK_IMPORTED_MODULE_2_lodash__["indexOf"](this.formQuestionData.answerOpts, this.currentInteraction.response);
        if (idx > 0) {
            this.userResponse[this.formQuestionData.interactionId] = idx;
        }
    };
    FormQuestionComponent.prototype.decryptResponseStringForMultipleAnswers = function () {
        var _this = this;
        var responses = this.currentInteraction.response.split(' / ');
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](responses, function (resp) {
            var idx = __WEBPACK_IMPORTED_MODULE_2_lodash__["indexOf"](_this.formQuestionData.answerOpts, resp);
            if (idx >= 0) {
                _this.userResponse[idx] = true;
            }
        });
    };
    FormQuestionComponent.prototype.prepareResponseObj = function () {
        this.questionType === QuestionType.OneAnswer ?
            this.prepareResponseObjForOneAnswer() :
            this.prepareResponseObjForMultipleAnswers();
        this.isResponseObjectReady = true;
    };
    FormQuestionComponent.prototype.prepareResponseObjForOneAnswer = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](this.formQuestionData.answerOpts.length).forEach(function (i) {
            _this.userResponse[i] = null;
        });
    };
    FormQuestionComponent.prototype.prepareResponseObjForMultipleAnswers = function () {
        this.userResponse[this.formQuestionData.interactionId] = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FormQuestionComponent.prototype, "attributeData", void 0);
    FormQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-question',
            template: __webpack_require__("../../../../../src/app/core/components/learning-activities/form-question/form-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/learning-activities/form-question/form-question.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormQuestionComponent);
    return FormQuestionComponent;
}());

var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["OneAnswer"] = 0] = "OneAnswer";
    QuestionType[QuestionType["MultipleAnswers"] = 1] = "MultipleAnswers";
})(QuestionType || (QuestionType = {}));
//# sourceMappingURL=form-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"function-question-container\">\n    <div class=\"function-question-header \">\n        <div class=\"name\" *ngIf=\"exerciseName\">\n            <p>{{exerciseName}}</p>\n        </div>\n        <div class=\"change-values-container\" (click)=\"toggleChangeValues()\">\n            <div class=\"change-values\">\n                <div class=\"change-values-icon\">\n                    <i class=\"fas fa-brain\"></i>\n                </div>\n                <div class=\"change-values-statement\">\n                    <p class=\"statement\">¡Ejercita tu cerebro! Prueba con otros valores y verifica las respuestas</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"change-variables-modal\" *ngIf=\"changeValues\">\n        <div class=\"change-variables-container\">\n            <h2 class=\"change-variables-title\">Modificar Valores</h2>\n            <div class=\"variable\" *ngFor=\"let variable of variablesArray; let i = index\">\n                <label for=\"variable-{{i}}\">{{ variable.tag }} ({{ variable.ref }}): </label>\n                <input type=\"number\" id=\"variable-{{i}}\" [(ngModel)]=\"variable.value\">\n                <div class=\"unit\">{{ variable.unit }}</div>\n                <p class=\"invalid-value\" *ngIf=\"variablesErrArray[i]\"> El valor debe estar entre {{ variable.min }} y {{ variable.max }}. </p>\n            </div>\n            <button (click)=\"validateVariableValues()\"> Aceptar </button>\n        </div>\n    </div>\n    <p class=\"physics-fn-question-statement\">\n        <span class=\"inner-statement\" [innerHTML]=\"getStatement()\"></span>\n    </p>\n    <div class=\"question\" *ngFor=\"let question of questions; let i = index\">\n        <p class=\"question-statement\">\n            <span class=\"question-number\">{{i + 1}}.</span>\n            <span class=\"inner-statement\" [innerHTML]=\"question.getStatement()\"></span>\n        </p>\n        <div class=\"input-container\">\n            <input type=\"{{question.options.type}}\"\n                [(ngModel)]=\"answers[i]\"\n                placeholder=\"{{question.options.placeholder}}\"\n            />\n        </div>\n    </div>\n    <br>\n    <div class=\"function-question-btn\" *ngIf=\"physicsFnQuestionData.submitBtn\">\n        <button class=\"submit-btn\" [disabled]=\"shouldDisableBtn()\" (click)=\"submitInteraction()\">{{ physicsFnQuestionData.submitBtn.tag }}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .function-question-container {\n  font-size: 1.4rem; }\n  :host .function-question-container .change-variables-modal {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1000;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center; }\n    :host .function-question-container .change-variables-modal .change-variables-container {\n      margin: 0 auto;\n      border-radius: 25px;\n      background: white;\n      width: 50%;\n      height: 40%;\n      padding: 20px;\n      overflow-y: auto; }\n      :host .function-question-container .change-variables-modal .change-variables-container h2.change-variables-title {\n        font-weight: bolder;\n        text-align: center;\n        color: #11434A;\n        border-bottom: solid 3px #11434A;\n        padding-bottom: 10px;\n        margin-bottom: 0;\n        font-size: 1.5rem; }\n      :host .function-question-container .change-variables-modal .change-variables-container .variable {\n        padding: 20px 10px;\n        border-bottom: solid 1px dimgray; }\n        :host .function-question-container .change-variables-modal .change-variables-container .variable label {\n          font-weight: bold;\n          color: #333;\n          font-size: 1.2rem; }\n        :host .function-question-container .change-variables-modal .change-variables-container .variable .unit {\n          display: inline-block;\n          font-size: 1.3rem; }\n        :host .function-question-container .change-variables-modal .change-variables-container .variable input {\n          width: 80px;\n          font-size: 1.3rem;\n          margin-left: 10px;\n          text-align: center; }\n        :host .function-question-container .change-variables-modal .change-variables-container .variable .invalid-value {\n          color: red;\n          font-size: 1rem; }\n      :host .function-question-container .change-variables-modal .change-variables-container button {\n        display: block;\n        margin-top: 20px;\n        float: right;\n        background: #11434A;\n        color: white;\n        padding: 10px;\n        border: 0;\n        font-size: 1.3rem;\n        border-radius: 10px; }\n        :host .function-question-container .change-variables-modal .change-variables-container button:hover {\n          background: #D2ECD6;\n          color: #142325;\n          border: 1px solid #11434A; }\n        :host .function-question-container .change-variables-modal .change-variables-container button:active {\n          background: #142325;\n          color: white; }\n  :host .function-question-container .physics-fn-question-statement {\n    text-align: justify;\n    font-size: 1.2rem; }\n  :host .function-question-container .question p.question-statement {\n    font-size: 1.2rem; }\n    :host .function-question-container .question p.question-statement span.question-number {\n      font-weight: bold;\n      color: #351C75; }\n  :host .function-question-container .question .input-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center; }\n    :host .function-question-container .question .input-container input {\n      height: 40px;\n      width: 40%;\n      font-size: 1.4rem;\n      color: #5e32cd;\n      text-align: center; }\n      :host .function-question-container .question .input-container input:-ms-input-placeholder {\n        color: lightgray; }\n      :host .function-question-container .question .input-container input::placeholder {\n        color: lightgray; }\n      :host .function-question-container .question .input-container input::-webkit-input-placeholder {\n        color: lightgray; }\n      :host .function-question-container .question .input-container input::-moz-placeholder {\n        color: lightgray; }\n      :host .function-question-container .question .input-container input:-ms-input-placeholder {\n        color: lightgray; }\n      :host .function-question-container .question .input-container input:-moz-placeholder {\n        color: lightgray; }\n  :host .function-question-container .function-question-btn {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center; }\n    :host .function-question-container .function-question-btn button.submit-btn {\n      border-radius: 10px;\n      height: 50px;\n      width: 150px;\n      font-size: 1.2rem;\n      border: 3px solid #351C75;\n      background: white;\n      color: #351C75; }\n      :host .function-question-container .function-question-btn button.submit-btn:hover {\n        border-color: white;\n        background: #351C75;\n        color: white; }\n      :host .function-question-container .function-question-btn button.submit-btn:disabled {\n        border-color: dimgray;\n        background: lightgray;\n        color: gray; }\n  :host .function-question-container .function-question-header {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row; }\n    :host .function-question-container .function-question-header .name {\n      -ms-flex: 1;\n          flex: 1;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n      :host .function-question-container .function-question-header .name p {\n        font-weight: bold;\n        color: #351C75;\n        text-decoration: underline;\n        font-size: 1.6rem;\n        margin: 0; }\n    :host .function-question-container .function-question-header .change-values-container {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: end;\n          align-items: flex-end;\n      -ms-flex: 4;\n          flex: 4; }\n      :host .function-question-container .function-question-header .change-values-container .change-values {\n        display: -ms-flexbox;\n        display: flex;\n        width: 300px;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        background-color: #cfc1f0;\n        padding: 0px;\n        border-radius: 10px; }\n        :host .function-question-container .function-question-header .change-values-container .change-values:hover {\n          background-color: #351C75; }\n          :host .function-question-container .function-question-header .change-values-container .change-values:hover .change-values-icon i {\n            color: white; }\n          :host .function-question-container .function-question-header .change-values-container .change-values:hover .change-values-statement {\n            color: white; }\n        :host .function-question-container .function-question-header .change-values-container .change-values .change-values-icon {\n          -ms-flex: 1;\n              flex: 1;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-direction: row;\n              flex-direction: row;\n          -ms-flex-align: center;\n              align-items: center; }\n          :host .function-question-container .function-question-header .change-values-container .change-values .change-values-icon i {\n            margin: 0 auto;\n            font-size: 2.5rem; }\n        :host .function-question-container .function-question-header .change-values-container .change-values .change-values-statement {\n          -ms-flex: 3;\n              flex: 3;\n          font-size: 0.8rem;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-direction: row;\n              flex-direction: row;\n          -ms-flex-align: center;\n              align-items: center;\n          font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysicsFunctionQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_noop_constant__ = __webpack_require__("../../../../../src/app/core/constants/noop.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_utils_constant__ = __webpack_require__("../../../../../src/app/core/constants/utils.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhysicsFunctionQuestionComponent = (function () {
    function PhysicsFunctionQuestionComponent() {
        this.changeValues = false;
        this.isCorrect = false;
        this.printVarClosure = function (variable) { return variable.value + ' ' + variable.unit + (variable.ref ? ' (' + variable.ref + ')' : ''); };
    }
    PhysicsFunctionQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.physicsFnQuestionData = this.attributeData ? this.attributeData : this.data;
        this.interactionData = this.data.LOCurrentState.interactions[this.physicsFnQuestionData.interactionId];
        this.exerciseName = this.physicsFnQuestionData.name ? this.physicsFnQuestionData.name :
            this.data.name;
        this.answers = Array(this.physicsFnQuestionData.questions.length).fill('');
        var vars = __WEBPACK_IMPORTED_MODULE_3_lodash__["clone"](this.physicsFnQuestionData.variables);
        var consts = __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](vars, function (myVar) { return !myVar.mutable; });
        this.variables = __WEBPACK_IMPORTED_MODULE_3_lodash__["reduce"](vars, this.buildVariableObj.bind(this), {});
        if (__WEBPACK_IMPORTED_MODULE_3_lodash__["has"](this.interactionData, 'data.updatedValues')) {
            Object.keys(this.interactionData.data.updatedValues).forEach(function (newValKey) {
                _this.variables[newValKey] = _this.interactionData.data.updatedValues[newValKey];
            });
        }
        this.variablesArray = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](__WEBPACK_IMPORTED_MODULE_3_lodash__["values"](this.variables), function (v) { return v.mutable; });
        this.variablesErrArray = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](this.variablesArray, function (v) { return false; });
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](this.variablesArray, function (v) {
            v.min = __WEBPACK_IMPORTED_MODULE_3_lodash__["isNumber"](v.min) && v.min >= 0 ? v.min : 0;
            v.max = __WEBPACK_IMPORTED_MODULE_3_lodash__["isNumber"](v.max) && v.max >= 0 ? v.max : 1000;
            if (v.max < v.min) {
                v.min = 0;
                v.max = 1000;
            }
        });
        this.constants = __WEBPACK_IMPORTED_MODULE_3_lodash__["reduce"](consts, this.buildVariableObj.bind(this), {});
        this.currentInteraction =
            this.physicsFnQuestionData.LOCurrentState.interactions[this.physicsFnQuestionData.interactionId];
        this.attempted = this.currentInteraction.attempts;
        this.maxAttempts = this.physicsFnQuestionData.attempts ? this.physicsFnQuestionData.attempts : 1;
        this.submitAction =
            this.physicsFnQuestionData.submitAction ? this.physicsFnQuestionData.submitAction : __WEBPACK_IMPORTED_MODULE_1__constants_noop_constant__["a" /* noop */];
        this.updateAction =
            this.physicsFnQuestionData.updateAction ? this.physicsFnQuestionData.updateAction : __WEBPACK_IMPORTED_MODULE_1__constants_noop_constant__["a" /* noop */];
        this.questions = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](this.physicsFnQuestionData.questions, function (q) {
            return {
                getStatement: function () {
                    return _this.replaceStrings(q.statement, __WEBPACK_IMPORTED_MODULE_3_lodash__["extend"](_this.variables, _this.constants), _this.printVarClosure);
                },
                validateFn: q.validateFn,
                options: q.options
            };
        });
    };
    PhysicsFunctionQuestionComponent.prototype.submitInteraction = function () {
        var _this = this;
        this.isCorrect = __WEBPACK_IMPORTED_MODULE_3_lodash__["every"](this.answers, function (answer, idx) {
            return _this.questions[idx].validateFn(answer, __WEBPACK_IMPORTED_MODULE_3_lodash__["extend"](_this.variables, _this.constants));
        });
        var response = __WEBPACK_IMPORTED_MODULE_3_lodash__["reduce"](this.answers, function (acum, answer) {
            var separator = acum.length > 0 ? ' / ' : '';
            return acum + separator + answer;
        }, '');
        this.attempted++;
        var details = {
            remainingAttempts: this.maxAttempts - this.attempted
        };
        if (!this.isCorrect && (this.maxAttempts - this.attempted <= 0)) {
            this.changeMutableValues();
            this.attempted = 0;
            details = __WEBPACK_IMPORTED_MODULE_3_lodash__["extend"](details, {
                updatedValues: __WEBPACK_IMPORTED_MODULE_3_lodash__["pickBy"](this.variables, function (v) { return v.mutable; })
            });
        }
        this.submitAction(this.physicsFnQuestionData.interactionId, response, this.isCorrect, details);
    };
    PhysicsFunctionQuestionComponent.prototype.getStatement = function () {
        return this.replaceStrings(this.physicsFnQuestionData.statement, __WEBPACK_IMPORTED_MODULE_3_lodash__["extend"](this.variables, this.constants), this.printVarClosure);
    };
    PhysicsFunctionQuestionComponent.prototype.shouldDisableBtn = function () {
        return this.isCorrect || this.attempted >= this.maxAttempts || !__WEBPACK_IMPORTED_MODULE_3_lodash__["every"](this.answers, this.validateAnswerPattern.bind(this));
    };
    PhysicsFunctionQuestionComponent.prototype.toggleChangeValues = function () {
        this.changeValues = !this.changeValues;
        if (this.changeValues) {
            this.validateValues = this.variablesArray.map(function (v) { return v.value; });
        }
    };
    PhysicsFunctionQuestionComponent.prototype.validateVariableValues = function () {
        this.variablesErrArray = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](this.variablesArray, function (v) {
            return !(__WEBPACK_IMPORTED_MODULE_3_lodash__["isNumber"](v.value) && v.value >= v.min && v.value <= v.max);
        });
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["some"](this.variablesErrArray, function (e) { return e === true; })) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](this.validateValues, this.variablesArray.map(function (v) { return v.value; }))) {
                this.attempted = 0;
                this.updateAction(this.physicsFnQuestionData.interactionId, {
                    resetInteraction: {
                        updatedValues: __WEBPACK_IMPORTED_MODULE_3_lodash__["pickBy"](this.variables, function (v) { return v.mutable; })
                    }
                });
            }
            this.toggleChangeValues();
        }
    };
    PhysicsFunctionQuestionComponent.prototype.validateAnswerPattern = function (ans, idx) {
        var pattern = this.questions[idx].options.pattern;
        pattern = pattern instanceof RegExp ? pattern : __WEBPACK_IMPORTED_MODULE_2__constants_utils_constant__["a" /* anythingRegex */];
        return !__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](ans) && pattern.test(ans);
    };
    PhysicsFunctionQuestionComponent.prototype.replaceStrings = function (text, replaceFrom, pickValue) {
        var _txt = text;
        while (_txt.match(__WEBPACK_IMPORTED_MODULE_2__constants_utils_constant__["b" /* argumentsRegex */]) !== null) {
            var matches = _txt.match(__WEBPACK_IMPORTED_MODULE_2__constants_utils_constant__["b" /* argumentsRegex */]);
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](matches, function (match) {
                var key = match.substring(2, match.length - 1);
                var replaceVal = '';
                if (__WEBPACK_IMPORTED_MODULE_3_lodash__["has"](replaceFrom, key)) {
                    replaceVal = pickValue ? pickValue(replaceFrom[key]) : replaceFrom[key];
                    replaceVal = replaceFrom[key].mutable ? '<strong>' + replaceVal + '</strong>' : replaceVal;
                }
                _txt = _txt.replace(match, replaceVal);
            });
        }
        return _txt;
    };
    PhysicsFunctionQuestionComponent.prototype.buildVariableObj = function (acum, myVar) {
        var varObj = {};
        varObj[myVar.name] = __WEBPACK_IMPORTED_MODULE_3_lodash__["pick"](myVar, ['ref', 'value', 'unit', 'tag', 'mutable', 'min', 'max']);
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["extend"](acum, varObj);
    };
    PhysicsFunctionQuestionComponent.prototype.changeMutableValues = function () {
        this.variablesArray.forEach(function (v) {
            v.value = Math.floor(Math.random() * (v.max - v.min + 1)) + v.min;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PhysicsFunctionQuestionComponent.prototype, "attributeData", void 0);
    PhysicsFunctionQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'physics-function-question',
            template: __webpack_require__("../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhysicsFunctionQuestionComponent);
    return PhysicsFunctionQuestionComponent;
}());

//# sourceMappingURL=physics-function-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/constants/element-actions.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__ = __webpack_require__("../../../../../src/app/core/enums/element-action.enum.ts");

var elementActions = {};
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].GoToSection] = function (data, providers) {
    return {
        onClick: function () {
            providers.navigation.goToSectionSlide(data.target, 0);
        }
    };
};
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].GoToSectionSlide] = function (data, providers) {
    return {
        onClick: data.target ? function () {
            providers.navigation.goToSectionSlide(data.target.section, data.target.slide);
        } : function () { }
    };
};
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].GoToSlide] = function (data, providers) {
    return {
        onClick: data.target ? function () {
            providers.navigation.goToSectionSlide(providers.navigation.getCurrentPosition().section.getId(), data.target);
        } : function () { }
    };
};
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection] = function (data, providers) {
    return {
        isActive: function () {
            return providers.navigation.getCurrentPosition().section.getId() === data.target;
        }
    };
};
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].ActiveIfSlideInteractionsDone] = function (data, providers) {
    return {
        isActive: function () {
            return providers.interactions.areAllSlideInteractionsCorrect(providers.navigation.getCurrentPosition().section.getId(), data.target);
        }
    };
};
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].ActiveIfSectionInteractionsDone] = function (data, providers) {
    return {
        isActive: function () {
            return providers.interactions.areAllSectionInteractionsCorrect(data.target);
        }
    };
};
var ElementActions = elementActions;
//# sourceMappingURL=element-actions.constant.js.map

/***/ }),

/***/ "../../../../../src/app/core/constants/interaction-actions.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_interactions_enum__ = __webpack_require__("../../../../../src/app/core/enums/interactions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_modals_activity_submit_activity_submit_modal__ = __webpack_require__("../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var interactions = {};
interactions[__WEBPACK_IMPORTED_MODULE_0__enums_interactions_enum__["b" /* InteractionSubmitAction */].Alert] = function (response, correct, details) {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
};
interactions[__WEBPACK_IMPORTED_MODULE_0__enums_interactions_enum__["b" /* InteractionSubmitAction */].GoToPrevious] = function (response, correct, details, providers) {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
    providers.navigation.previousSlide();
};
interactions[__WEBPACK_IMPORTED_MODULE_0__enums_interactions_enum__["b" /* InteractionSubmitAction */].DisplayModal] = function (response, correct, details, providers) {
    var innerComponent = {
        component: __WEBPACK_IMPORTED_MODULE_1__components_layout_modals_activity_submit_activity_submit_modal__["a" /* ActivitySubmitModal */],
        data: __WEBPACK_IMPORTED_MODULE_2_lodash__["extend"]({
            response: response,
            correct: correct
        }, details)
    };
    providers.modal.showModal(innerComponent);
};
var InteractionsActions = interactions;
//# sourceMappingURL=interaction-actions.constant.js.map

/***/ }),

/***/ "../../../../../src/app/core/constants/noop.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() { }
;
//# sourceMappingURL=noop.constant.js.map

/***/ }),

/***/ "../../../../../src/app/core/constants/utils.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return argumentsRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anythingRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return truncateDecimal; });
var argumentsRegex = /%\([A-z]*\)/;
var anythingRegex = /.*/;
var truncateDecimal = function (num, amount) {
    var a = (num + '').split('.');
    var truncated = '';
    if (a.length > 1) {
        truncated = '.' + a[1].substr(0, amount);
    }
    return parseFloat(a[0] + truncated);
};
//# sourceMappingURL=utils.constant.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_safe_html_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_course_column_course_column_component__ = __webpack_require__("../../../../../src/app/core/components/base/course-column/course-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_course_column_column_content_component__ = __webpack_require__("../../../../../src/app/core/components/base/course-column/column-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_course_content_course_content_component__ = __webpack_require__("../../../../../src/app/core/components/base/course-content/course-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_course_row_course_row_component__ = __webpack_require__("../../../../../src/app/core/components/base/course-row/course-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_basic_title_title_component__ = __webpack_require__("../../../../../src/app/core/components/basic/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_basic_button_button_component__ = __webpack_require__("../../../../../src/app/core/components/basic/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_layout_base_course_container_base_course_container_component__ = __webpack_require__("../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_course_content_provider__ = __webpack_require__("../../../../../src/app/core/providers/course-content.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_side_menu_provider__ = __webpack_require__("../../../../../src/app/core/providers/side-menu.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_scorm_provider__ = __webpack_require__("../../../../../src/app/core/providers/scorm.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_state_provider__ = __webpack_require__("../../../../../src/app/core/providers/state.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_actions_provider__ = __webpack_require__("../../../../../src/app/core/providers/actions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_lo_structure_provider__ = __webpack_require__("../../../../../src/app/core/providers/lo-structure.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_interactions_provider__ = __webpack_require__("../../../../../src/app/core/providers/interactions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_modal_provider__ = __webpack_require__("../../../../../src/app/core/providers/modal-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_learning_activities_form_question_form_question_component__ = __webpack_require__("../../../../../src/app/core/components/learning-activities/form-question/form-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_learning_activities_physics_function_question_physics_function_question_component__ = __webpack_require__("../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_content_organizers_test_organizer_test_organizer_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/test-organizer/test-organizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_content_organizers_tab_organizer_tab_organizer_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/tab-organizer/tab-organizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_layout_navigations_side_btns_navigation_side_btns_component__ = __webpack_require__("../../../../../src/app/core/components/layout/navigations-side-btns/navigation-side-btns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_layout_floating_btn_floating_btn_component__ = __webpack_require__("../../../../../src/app/core/components/layout/floating-btn/floating-btn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_layout_floating_btn_set_floating_btn_set_component__ = __webpack_require__("../../../../../src/app/core/components/layout/floating-btn-set/floating-btn-set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_layout_lo_modal_lo_modal_component__ = __webpack_require__("../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__directives_hide_in_section_directive__ = __webpack_require__("../../../../../src/app/core/directives/hide-in-section.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__directives_show_in_section_directive__ = __webpack_require__("../../../../../src/app/core/directives/show-in-section.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__directives_navigate_to_section_directive__ = __webpack_require__("../../../../../src/app/core/directives/navigate-to-section.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_item_directive__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu-item.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__directives_display_modal_directive__ = __webpack_require__("../../../../../src/app/core/directives/display-modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_layout_modals_modals_module__ = __webpack_require__("../../../../../src/app/core/components/layout/modals/modals.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// imports





//BASE




//BASIC






//PROVIDERS









//LEARNING ACTIVITIES


//CONTENT ORGANIZERS





//LAYOUT




//DIRECTIVES






// @NgModule decorator with its metadata
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_base_course_column_column_content_component__["a" /* ColumnContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_base_course_column_course_column_component__["a" /* CourseColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_base_course_content_course_content_component__["a" /* CourseContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_base_course_row_course_row_component__["a" /* CourseRowComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_layout_base_course_container_base_course_container_component__["a" /* BaseCourseContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_learning_activities_form_question_form_question_component__["a" /* FormQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_learning_activities_physics_function_question_physics_function_question_component__["a" /* PhysicsFunctionQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_content_organizers_test_organizer_test_organizer_component__["a" /* TestOrganizerComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_10__components_basic_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_basic_img_img_component__["a" /* ImgComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_basic_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_layout_navigations_side_btns_navigation_side_btns_component__["a" /* NavigationSideBtnsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_basic_void_void_component__["a" /* VoidComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_layout_floating_btn_floating_btn_component__["a" /* FloatingBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_layout_floating_btn_set_floating_btn_set_component__["a" /* FloatingBtnSetComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_layout_lo_modal_lo_modal_component__["a" /* LOModalComponent */],
                __WEBPACK_IMPORTED_MODULE_35__directives_hide_in_section_directive__["a" /* HideInSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_36__directives_show_in_section_directive__["a" /* ShowInSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_37__directives_navigate_to_section_directive__["a" /* NavigateToSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_29__components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_component__["a" /* DynamicOverlapMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_item_directive__["a" /* DynamicOverlapMenuItemDirective */],
                __WEBPACK_IMPORTED_MODULE_39__directives_display_modal_directive__["a" /* DisplayModalDirective */],
                __WEBPACK_IMPORTED_MODULE_30__components_content_organizers_tab_organizer_tab_organizer_component__["a" /* TabOrganizerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_40__components_layout_modals_modals_module__["a" /* ModalsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__providers_course_content_provider__["a" /* CourseContentProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_navigation_provider__["a" /* NavigationProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_side_menu_provider__["a" /* SideMenuProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_scorm_provider__["a" /* SCORMProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_state_provider__["a" /* StateProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_actions_provider__["a" /* ActionsProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_lo_structure_provider__["a" /* LOStructureProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_interactions_provider__["a" /* InteractionsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_modal_provider__["a" /* ModalProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__components_base_course_column_column_content_component__["a" /* ColumnContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_base_course_column_course_column_component__["a" /* CourseColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_base_course_content_course_content_component__["a" /* CourseContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_base_course_row_course_row_component__["a" /* CourseRowComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_layout_base_course_container_base_course_container_component__["a" /* BaseCourseContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_learning_activities_form_question_form_question_component__["a" /* FormQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_learning_activities_physics_function_question_physics_function_question_component__["a" /* PhysicsFunctionQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_content_organizers_test_organizer_test_organizer_component__["a" /* TestOrganizerComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_basic_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_basic_img_img_component__["a" /* ImgComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_basic_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_layout_navigations_side_btns_navigation_side_btns_component__["a" /* NavigationSideBtnsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_basic_void_void_component__["a" /* VoidComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_layout_floating_btn_floating_btn_component__["a" /* FloatingBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_layout_floating_btn_set_floating_btn_set_component__["a" /* FloatingBtnSetComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_layout_lo_modal_lo_modal_component__["a" /* LOModalComponent */],
                __WEBPACK_IMPORTED_MODULE_35__directives_hide_in_section_directive__["a" /* HideInSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_36__directives_show_in_section_directive__["a" /* ShowInSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_37__directives_navigate_to_section_directive__["a" /* NavigateToSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_29__components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_component__["a" /* DynamicOverlapMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_item_directive__["a" /* DynamicOverlapMenuItemDirective */],
                __WEBPACK_IMPORTED_MODULE_39__directives_display_modal_directive__["a" /* DisplayModalDirective */],
                __WEBPACK_IMPORTED_MODULE_30__components_content_organizers_tab_organizer_tab_organizer_component__["a" /* TabOrganizerComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_learning_activities_form_question_form_question_component__["a" /* FormQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_learning_activities_physics_function_question_physics_function_question_component__["a" /* PhysicsFunctionQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_content_organizers_test_organizer_test_organizer_component__["a" /* TestOrganizerComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_basic_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_basic_img_img_component__["a" /* ImgComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_basic_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_layout_navigations_side_btns_navigation_side_btns_component__["a" /* NavigationSideBtnsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_basic_void_void_component__["a" /* VoidComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_layout_floating_btn_floating_btn_component__["a" /* FloatingBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_layout_floating_btn_set_floating_btn_set_component__["a" /* FloatingBtnSetComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_layout_lo_modal_lo_modal_component__["a" /* LOModalComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_component__["a" /* DynamicOverlapMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_content_organizers_tab_organizer_tab_organizer_component__["a" /* TabOrganizerComponent */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/directives/display-modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__ = __webpack_require__("../../../../../src/app/core/providers/modal-provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayModalDirective = (function () {
    function DisplayModalDirective(el, modal) {
        this.el = el;
        this.modal = modal;
    }
    DisplayModalDirective.prototype.onClick = function () {
        this.modal.showModal(this.modalData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('displayModal'),
        __metadata("design:type", Object)
    ], DisplayModalDirective.prototype, "modalData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DisplayModalDirective.prototype, "onClick", null);
    DisplayModalDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[displayModal]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__["a" /* ModalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_modal_provider__["a" /* ModalProvider */]) === "function" && _b || Object])
    ], DisplayModalDirective);
    return DisplayModalDirective;
    var _a, _b;
}());

//# sourceMappingURL=display-modal.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/directives/hide-in-section.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideInSectionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HideInSectionDirective = (function () {
    function HideInSectionDirective(el, navigation) {
        this.el = el;
        this.navigation = navigation;
        this.originalDisplay = 'initial';
    }
    HideInSectionDirective.prototype.updateDisplay = function () {
        var currentSection = this.navigation.getCurrentPosition().section.getId();
        this.el.nativeElement.style.display = this.hideInSection.includes(currentSection) ?
            'none' : this.originalDisplay;
    };
    HideInSectionDirective.prototype.ngOnInit = function () {
        if (!this.hideInSection) {
            return;
        }
        if (!Array.isArray(this.hideInSection)) {
            this.hideInSection = this.hideInSection.split(',');
        }
        this.updateDisplay();
        this.navigation.getSlideChangedObservable().subscribe(this.currentSlideChanged.bind(this));
    };
    HideInSectionDirective.prototype.currentSlideChanged = function (navPos) {
        this.el.nativeElement.style.display = this.hideInSection.includes(navPos.section.getId()) ?
            'none' : this.originalDisplay;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hideInSection'),
        __metadata("design:type", Object)
    ], HideInSectionDirective.prototype, "hideInSection", void 0);
    HideInSectionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[hideInSection]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */]) === "function" && _b || Object])
    ], HideInSectionDirective);
    return HideInSectionDirective;
    var _a, _b;
}());

//# sourceMappingURL=hide-in-section.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/directives/navigate-to-section.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigateToSectionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigateToSectionDirective = (function () {
    function NavigateToSectionDirective(el, navigation) {
        this.el = el;
        this.navigation = navigation;
    }
    NavigateToSectionDirective.prototype.onClick = function () {
        this.navigation.goToSectionSlide(this.targetSection, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('navigateToSection'),
        __metadata("design:type", String)
    ], NavigateToSectionDirective.prototype, "targetSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigateToSectionDirective.prototype, "onClick", null);
    NavigateToSectionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[navigateToSection]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */]) === "function" && _b || Object])
    ], NavigateToSectionDirective);
    return NavigateToSectionDirective;
    var _a, _b;
}());

//# sourceMappingURL=navigate-to-section.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/directives/show-in-section.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowInSectionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowInSectionDirective = (function () {
    function ShowInSectionDirective(el, navigation) {
        this.el = el;
        this.navigation = navigation;
        this.originalDisplay = this.el.nativeElement.style.display;
    }
    ShowInSectionDirective.prototype.updateDisplay = function () {
        var currentSection = this.navigation.getCurrentPosition().section.getId();
        this.el.nativeElement.style.display = this.showInSection.includes(currentSection) ?
            this.originalDisplay : 'none';
    };
    ShowInSectionDirective.prototype.ngOnInit = function () {
        if (!this.showInSection) {
            return;
        }
        if (!Array.isArray(this.showInSection)) {
            this.showInSection = this.showInSection.split(',');
        }
        this.updateDisplay();
        this.navigation.getSlideChangedObservable().subscribe(this.currentSlideChanged.bind(this));
    };
    ShowInSectionDirective.prototype.currentSlideChanged = function (navPos) {
        this.el.nativeElement.style.display = this.showInSection.includes(navPos.section.getId()) ?
            this.originalDisplay : 'none';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('showInSection'),
        __metadata("design:type", Object)
    ], ShowInSectionDirective.prototype, "showInSection", void 0);
    ShowInSectionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[showInSection]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */]) === "function" && _b || Object])
    ], ShowInSectionDirective);
    return ShowInSectionDirective;
    var _a, _b;
}());

//# sourceMappingURL=show-in-section.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/enums/component-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentType; });
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["Basic"] = 0] = "Basic";
    ComponentType[ComponentType["Layout"] = 1] = "Layout";
    ComponentType[ComponentType["LearningActivity"] = 2] = "LearningActivity";
    ComponentType[ComponentType["ContentOrganizer"] = 3] = "ContentOrganizer";
})(ComponentType || (ComponentType = {}));
//# sourceMappingURL=component-type.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/enums/element-action.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementAction; });
var ElementAction;
(function (ElementAction) {
    ElementAction["GoToSection"] = "goToSection";
    ElementAction["GoToSectionSlide"] = "goToSectionSlide";
    ElementAction["GoToSlide"] = "goToSlide";
    ElementAction["ActiveIfCurrentSection"] = "activeIfCurrentSection";
    ElementAction["ActiveIfSlideInteractionsDone"] = "activeIfSlideInteractionsDone";
    ElementAction["ActiveIfSectionInteractionsDone"] = "activeIfSectionInteractionsDone";
})(ElementAction || (ElementAction = {}));
//# sourceMappingURL=element-action.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/enums/interactions.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InteractionSubmitAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionStatus; });
var InteractionSubmitAction;
(function (InteractionSubmitAction) {
    InteractionSubmitAction["Alert"] = "alert";
    InteractionSubmitAction["GoToPrevious"] = "goToPrevious";
    InteractionSubmitAction["DisplayModal"] = "displayModal";
})(InteractionSubmitAction || (InteractionSubmitAction = {}));
var InteractionStatus;
(function (InteractionStatus) {
    InteractionStatus["Unanswered"] = "unanswered";
    InteractionStatus["Wrong"] = "wrong";
    InteractionStatus["Correct"] = "correct";
    InteractionStatus["NewAttempt"] = "newAttempt";
})(InteractionStatus || (InteractionStatus = {}));
//# sourceMappingURL=interactions.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/enums/scorm.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCORMInteractionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCORMCompletionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SCORMInteractionResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SCORMSuccessStatus; });
var SCORMInteractionType;
(function (SCORMInteractionType) {
    SCORMInteractionType["TrueOrFalse"] = "true-false";
    SCORMInteractionType["Choice"] = "choice";
    SCORMInteractionType["FillIn"] = "fill-in";
    SCORMInteractionType["LongFillIn"] = "long-fill-in";
    SCORMInteractionType["Matching"] = "matching";
    SCORMInteractionType["Performance"] = "performance";
    SCORMInteractionType["Sequencing"] = "sequencing";
    SCORMInteractionType["Likert"] = "likert";
    SCORMInteractionType["Numeric"] = "numeric";
    SCORMInteractionType["Other"] = "other";
})(SCORMInteractionType || (SCORMInteractionType = {}));
var SCORMCompletionStatus;
(function (SCORMCompletionStatus) {
    SCORMCompletionStatus["Completed"] = "completed";
    SCORMCompletionStatus["Incomplete"] = "incomplete";
    SCORMCompletionStatus["NotAttempted"] = "not attempted";
    SCORMCompletionStatus["Unknown"] = "unknown";
})(SCORMCompletionStatus || (SCORMCompletionStatus = {}));
var SCORMInteractionResult;
(function (SCORMInteractionResult) {
    SCORMInteractionResult["Correct"] = "correct";
    SCORMInteractionResult["Incorrect"] = "incorrect";
    SCORMInteractionResult["Unanticipated"] = "unanticipated";
    SCORMInteractionResult["Neutral"] = "neutral";
})(SCORMInteractionResult || (SCORMInteractionResult = {}));
var SCORMSuccessStatus;
(function (SCORMSuccessStatus) {
    SCORMSuccessStatus["Passed"] = "passed";
    SCORMSuccessStatus["Failed"] = "failed";
    SCORMSuccessStatus["Unknown"] = "unknown";
})(SCORMSuccessStatus || (SCORMSuccessStatus = {}));
//# sourceMappingURL=scorm.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/enums/units.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LengthUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccelerationUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MassUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ForceUnits; });
var LengthUnits;
(function (LengthUnits) {
    LengthUnits["Meter"] = "m";
    LengthUnits["Centimeter"] = "cm";
})(LengthUnits || (LengthUnits = {}));
var AccelerationUnits;
(function (AccelerationUnits) {
    AccelerationUnits["MeterPerSecondSquare"] = "m/s2";
})(AccelerationUnits || (AccelerationUnits = {}));
var MassUnits;
(function (MassUnits) {
    MassUnits["Kilogram"] = "kg";
})(MassUnits || (MassUnits = {}));
var ForceUnits;
(function (ForceUnits) {
    ForceUnits["Newton"] = "N";
})(ForceUnits || (ForceUnits = {}));
//# sourceMappingURL=units.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["V" /* Pipe */])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());

//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/actions.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scorm_provider__ = __webpack_require__("../../../../../src/app/core/providers/scorm.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interactions_provider__ = __webpack_require__("../../../../../src/app/core/providers/interactions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_provider__ = __webpack_require__("../../../../../src/app/core/providers/modal-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_interaction_actions_constant__ = __webpack_require__("../../../../../src/app/core/constants/interaction-actions.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_element_actions_constant__ = __webpack_require__("../../../../../src/app/core/constants/element-actions.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ActionsProvider = (function () {
    function ActionsProvider(scorm, interactions, navigation, modal) {
        this.scorm = scorm;
        this.interactions = interactions;
        this.navigation = navigation;
        this.modal = modal;
    }
    ActionsProvider.prototype.prepareMenuBarElements = function (elems) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](elems, function (el) {
            return _this.extendObjectUsingDataActions({
                text: el.text
            }, el.data, el.actions);
        });
    };
    ActionsProvider.prototype.prepareElementAction = function (elem) {
        return this.extendObjectUsingDataActions(elem.data, elem.data, elem.actions);
        ;
    };
    ActionsProvider.prototype.prepareSubmitAction = function (data) {
        var _this = this;
        return function (interactionId, response, isCorrect, details) {
            _this.interactions.submitInteraction(interactionId, response, isCorrect);
            _this.scorm.submitInteraction(interactionId, response, isCorrect);
            if (!isCorrect && details.remainingAttempts === 0) {
                _this.interactions.resetInteraction(interactionId, {
                    updatedValues: details.updatedValues
                });
            }
            if (__WEBPACK_IMPORTED_MODULE_5__constants_interaction_actions_constant__["a" /* InteractionsActions */].hasOwnProperty(data.onSubmit)) {
                var extendedDetails = __WEBPACK_IMPORTED_MODULE_7_lodash__["extend"]({
                    interactionId: interactionId
                }, details);
                __WEBPACK_IMPORTED_MODULE_5__constants_interaction_actions_constant__["a" /* InteractionsActions */][data.onSubmit](response, isCorrect, extendedDetails, {
                    navigation: _this.navigation,
                    modal: _this.modal
                });
            }
        };
    };
    ActionsProvider.prototype.prepareUpdateAction = function () {
        var _this = this;
        return function (interactionId, updatedData) {
            if (updatedData.resetInteraction) {
                _this.interactions.resetInteraction(interactionId, updatedData.resetInteraction);
            }
        };
    };
    ActionsProvider.prototype.extendObjectUsingDataActions = function (obj, data, actions) {
        return __WEBPACK_IMPORTED_MODULE_7_lodash__["extend"](obj, this.retrieveActionsObj(data, actions));
    };
    ActionsProvider.prototype.retrieveActionsObj = function (data, actions) {
        var _navigation = this.navigation;
        var _interactions = this.interactions;
        return __WEBPACK_IMPORTED_MODULE_7_lodash__["reduce"](actions, function (acum, action) {
            return __WEBPACK_IMPORTED_MODULE_7_lodash__["extend"](acum, __WEBPACK_IMPORTED_MODULE_6__constants_element_actions_constant__["a" /* ElementActions */].hasOwnProperty(action) ?
                __WEBPACK_IMPORTED_MODULE_6__constants_element_actions_constant__["a" /* ElementActions */][action](data, {
                    navigation: _navigation,
                    interactions: _interactions
                }) : {});
        }, {});
    };
    ActionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__scorm_provider__["a" /* SCORMProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__scorm_provider__["a" /* SCORMProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__interactions_provider__["a" /* InteractionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interactions_provider__["a" /* InteractionsProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navigation_provider__["a" /* NavigationProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__modal_provider__["a" /* ModalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modal_provider__["a" /* ModalProvider */]) === "function" && _d || Object])
    ], ActionsProvider);
    return ActionsProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=actions.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/course-content.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseContentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lo_lo_main__ = __webpack_require__("../../../../../src/app/lo/lo.main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_course_section_class__ = __webpack_require__("../../../../../src/app/core/classes/course-section.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_scorm_enum__ = __webpack_require__("../../../../../src/app/core/enums/scorm.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_lo_structure_provider__ = __webpack_require__("../../../../../src/app/core/providers/lo-structure.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_interactions_provider__ = __webpack_require__("../../../../../src/app/core/providers/interactions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_actions_provider__ = __webpack_require__("../../../../../src/app/core/providers/actions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_course_row_class__ = __webpack_require__("../../../../../src/app/core/classes/course-row.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CourseContentProvider = (function () {
    function CourseContentProvider(LOStructure, actions, interactions) {
        this.LOStructure = LOStructure;
        this.actions = actions;
        this.interactions = interactions;
        this.interactionCount = 0;
    }
    CourseContentProvider.prototype.init = function () {
        __WEBPACK_IMPORTED_MODULE_9_lodash__["forEach"](__WEBPACK_IMPORTED_MODULE_1__lo_lo_main__["a" /* LO */].content, this.prepareSection.bind(this));
    };
    CourseContentProvider.prototype.prepareSection = function (sectionObj) {
        var _this = this;
        var newSection = new __WEBPACK_IMPORTED_MODULE_2__classes_course_section_class__["a" /* CourseSection */](sectionObj.id, sectionObj.name, sectionObj.icon)
            .createSlides(sectionObj.slides.length);
        __WEBPACK_IMPORTED_MODULE_9_lodash__["forEach"](newSection.getSlides(), function (slide, idx) {
            _this.prepareSlide(sectionObj, slide, idx);
        });
        this.LOStructure.addSection(newSection);
    };
    CourseContentProvider.prototype.prepareSlide = function (sectionObj, slide, idx) {
        var _this = this;
        var slideObj = sectionObj.slides[idx];
        var rowsObj = slideObj.rows;
        var doRowsHaveFlexAssigned = __WEBPACK_IMPORTED_MODULE_9_lodash__["some"](rowsObj, function (rowObj) {
            return __WEBPACK_IMPORTED_MODULE_9_lodash__["isInteger"](rowObj.flex);
        });
        var rowsParam = doRowsHaveFlexAssigned ? __WEBPACK_IMPORTED_MODULE_9_lodash__["map"](rowsObj, function (rowObj) {
            return __WEBPACK_IMPORTED_MODULE_9_lodash__["isInteger"](rowObj.flex) ? rowObj.flex : 1;
        }) : rowsObj.length;
        slide.setName(slideObj.name);
        slide.setRows(rowsParam);
        slide.setStyle(slideObj.style);
        if (slideObj.classes) {
            slide.setClasses(slideObj.classes);
        }
        __WEBPACK_IMPORTED_MODULE_9_lodash__["forEach"](slide.getRows(), function (row, idy) {
            _this.prepareRow(sectionObj, slideObj, idx, row, idy);
        });
    };
    CourseContentProvider.prototype.prepareRow = function (sectionObj, slideObj, slideIdx, row, idy) {
        var _this = this;
        var rowObj = slideObj.rows[idy];
        var colsObj = rowObj.cols;
        var doColsHaveFlexAssigned = __WEBPACK_IMPORTED_MODULE_9_lodash__["some"](colsObj, function (colObj) {
            return __WEBPACK_IMPORTED_MODULE_9_lodash__["isInteger"](colObj.flex);
        });
        var colsParam = doColsHaveFlexAssigned ? __WEBPACK_IMPORTED_MODULE_9_lodash__["map"](colsObj, function (col) {
            return __WEBPACK_IMPORTED_MODULE_9_lodash__["isInteger"](col.flex) ? col.flex : 1;
        }) : colsObj.length;
        row.setCols(colsParam);
        if (rowObj.style) {
            row.setStyle(rowObj.style);
        }
        if (rowObj.classes) {
            row.setClasses(rowObj.classes);
        }
        __WEBPACK_IMPORTED_MODULE_9_lodash__["forEach"](row.getCols(), function (col, idz) {
            _this.prepareColumn(sectionObj, slideIdx, rowObj, col, idz);
        });
    };
    CourseContentProvider.prototype.prepareColumn = function (sectionObj, slideIdx, rowObj, col, idz) {
        var _this = this;
        var colObj = rowObj.cols[idz];
        if (colObj.actions) {
            this.actions.prepareElementAction(__WEBPACK_IMPORTED_MODULE_9_lodash__["pick"](colObj, ['type', 'component', 'data', 'actions']));
        }
        if (colObj.type === __WEBPACK_IMPORTED_MODULE_3__enums_component_type_enum__["a" /* ComponentType */].LearningActivity) {
            var scormData = colObj.data.SCORM;
            var statement = colObj.data.statement;
            this.interactions.addInteraction({
                interactionId: ++this.interactionCount,
                type: scormData && scormData.type ? scormData.type : __WEBPACK_IMPORTED_MODULE_4__enums_scorm_enum__["c" /* SCORMInteractionType */].Choice,
                weight: scormData && scormData.weight ? scormData.weight : 1,
                description: statement ? statement : '',
                section: sectionObj.id,
                slide: slideIdx
            });
            col.setContent(colObj.component, __WEBPACK_IMPORTED_MODULE_9_lodash__["extend"](colObj.data, {
                interactionId: this.interactionCount,
                submitAction: this.actions.prepareSubmitAction(colObj.data),
                updateAction: this.actions.prepareUpdateAction()
            }));
        }
        else if (colObj.type === __WEBPACK_IMPORTED_MODULE_3__enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer) {
            if (__WEBPACK_IMPORTED_MODULE_9_lodash__["isObject"](colObj.data) && __WEBPACK_IMPORTED_MODULE_9_lodash__["has"](colObj.data, 'rows')) {
                this.prepareInnerRowCols(colObj.data, sectionObj.id, slideIdx);
            }
            else if (Array.isArray(colObj.data) && __WEBPACK_IMPORTED_MODULE_9_lodash__["some"](colObj.data, function (d) { return d.rows; })) {
                colObj.data.forEach(function (d) {
                    _this.prepareInnerRowCols(d, sectionObj.id, slideIdx);
                });
            }
            col.setContent(colObj.component, colObj.data);
        }
        else {
            col.setContent(colObj.component, colObj.data);
        }
        if (colObj.style) {
            col.setStyle(colObj.style);
        }
        if (colObj.classes) {
            col.setClasses(colObj.classes);
        }
    };
    CourseContentProvider.prototype.prepareInnerRowCols = function (colObj, section, slide) {
        var _this = this;
        colObj.rows = colObj.rows.map(function (innerRowObj) {
            var innerRowFlex = innerRowObj.flex ? innerRowObj.flex : 1;
            var innerRow = new __WEBPACK_IMPORTED_MODULE_8__classes_course_row_class__["a" /* CourseRow */](innerRowFlex);
            var innerColsObj = innerRowObj.cols;
            var doColsHaveFlexAssigned = __WEBPACK_IMPORTED_MODULE_9_lodash__["some"](innerColsObj, function (innerColObj) {
                return __WEBPACK_IMPORTED_MODULE_9_lodash__["isInteger"](innerColObj.flex);
            });
            var innerColsParam = doColsHaveFlexAssigned ? __WEBPACK_IMPORTED_MODULE_9_lodash__["map"](innerColsObj, function (innerColObj) {
                return __WEBPACK_IMPORTED_MODULE_9_lodash__["isInteger"](innerColObj.flex) ? innerColObj.flex : 1;
            }) : innerColsObj.length;
            innerRow.setCols(innerColsParam);
            if (innerRowObj.style) {
                innerRow.setStyle(innerRowObj.style);
            }
            if (innerRowObj.classes) {
                innerRow.setClasses(innerRowObj.classes);
            }
            innerRow.getCols().forEach(function (innerCol, innerIdx) {
                var innerColObj = innerColsObj[innerIdx];
                if (innerColObj.actions) {
                    _this.actions.prepareElementAction(__WEBPACK_IMPORTED_MODULE_9_lodash__["pick"](innerColObj, ['type', 'component', 'data', 'actions']));
                }
                if (innerColObj.type === __WEBPACK_IMPORTED_MODULE_3__enums_component_type_enum__["a" /* ComponentType */].LearningActivity) {
                    var scormData = innerColObj.data.SCORM;
                    var statement = innerColObj.data.statement;
                    _this.interactions.addInteraction({
                        interactionId: ++_this.interactionCount,
                        type: scormData && scormData.type ? scormData.type : __WEBPACK_IMPORTED_MODULE_4__enums_scorm_enum__["c" /* SCORMInteractionType */].Choice,
                        weight: scormData && scormData.weight ? scormData.weight : 1,
                        description: statement ? statement : '',
                        section: section,
                        slide: slide
                    });
                    innerCol.setContent(innerColObj.component, __WEBPACK_IMPORTED_MODULE_9_lodash__["extend"](innerColObj.data, {
                        interactionId: _this.interactionCount,
                        submitAction: _this.actions.prepareSubmitAction(innerColObj.data),
                        updateAction: _this.actions.prepareUpdateAction()
                    }));
                }
                else if (innerColObj.type === __WEBPACK_IMPORTED_MODULE_3__enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer) {
                    if (__WEBPACK_IMPORTED_MODULE_9_lodash__["isObject"](innerColObj.data) && __WEBPACK_IMPORTED_MODULE_9_lodash__["has"](innerColObj.data, 'rows')) {
                        _this.prepareInnerRowCols(innerColObj.data, section, slide);
                    }
                    else if (Array.isArray(colObj.data) && __WEBPACK_IMPORTED_MODULE_9_lodash__["some"](colObj.data, function (d) { return d.rows; })) {
                        innerColObj.data.forEach(function (d) {
                            _this.prepareInnerRowCols(d, section, slide);
                        });
                    }
                    innerCol.setContent(innerColObj.component, innerColObj.data);
                }
                else {
                    innerCol.setContent(innerColObj.component, innerColObj.data);
                }
                if (innerColObj.style) {
                    innerCol.setStyle(innerColObj.style);
                }
                if (innerColObj.classes) {
                    innerCol.setClasses(innerColObj.classes);
                }
            });
            return innerRow;
        });
    };
    CourseContentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__providers_lo_structure_provider__["a" /* LOStructureProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_lo_structure_provider__["a" /* LOStructureProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__providers_actions_provider__["a" /* ActionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_actions_provider__["a" /* ActionsProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_interactions_provider__["a" /* InteractionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_interactions_provider__["a" /* InteractionsProvider */]) === "function" && _c || Object])
    ], CourseContentProvider);
    return CourseContentProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=course-content.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/interactions.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__ = __webpack_require__("../../../../../src/app/core/enums/interactions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InteractionsProvider = (function () {
    function InteractionsProvider() {
        this.interactionsStatus = {};
        this.interactions = [];
    }
    InteractionsProvider.prototype.init = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](this.interactions, function (interaction) {
            _this.interactionsStatus[interaction.interactionId] = {
                status: __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].Unanswered,
                response: '',
                attempts: 0,
                previouslyCorrect: false
            };
        });
    };
    InteractionsProvider.prototype.addInteraction = function (interaction) {
        this.interactions.push(interaction);
    };
    InteractionsProvider.prototype.getInteractions = function () {
        return this.interactions;
    };
    InteractionsProvider.prototype.getInteractionsStatus = function () {
        return this.interactionsStatus;
    };
    InteractionsProvider.prototype.setInteractions = function (interactions) {
        this.interactions = interactions;
    };
    InteractionsProvider.prototype.setInteractionData = function (id, data) {
        this.interactionsStatus[id].data = data;
    };
    InteractionsProvider.prototype.resetInteraction = function (id, data) {
        if (this.interactionsStatus[id].status === __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].Correct) {
            this.interactionsStatus[id].previouslyCorrect = true;
        }
        this.interactionsStatus[id].status = __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].NewAttempt;
        this.interactionsStatus[id].attempts = 0;
        this.interactionsStatus[id].response = '';
        if (data) {
            this.interactionsStatus[id].data = data;
        }
    };
    InteractionsProvider.prototype.submitInteraction = function (id, response, isCorrect) {
        this.interactionsStatus[id].status = isCorrect ?
            __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].Correct : __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].Wrong;
        this.interactionsStatus[id].attempts += 1;
        this.interactionsStatus[id].response = response;
    };
    InteractionsProvider.prototype.isInteractionCorrect = function (interactionId) {
        return this.interactionsStatus[interactionId].status === __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].Correct;
    };
    InteractionsProvider.prototype.areAllSlideInteractionsCorrect = function (section, slide) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["every"](__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.interactions, function (interaction) {
            return interaction.section === section && interaction.slide === slide;
        }), function (filteredInteraction) {
            return _this.interactionsStatus[filteredInteraction.interactionId]
                .status === __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].Correct ||
                _this.interactionsStatus[filteredInteraction.interactionId]
                    .previouslyCorrect === true;
        });
    };
    InteractionsProvider.prototype.areAllSectionInteractionsCorrect = function (section) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["every"](__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.interactions, function (interaction) {
            return interaction.section === section;
        }), function (filteredInteraction) {
            return _this.interactionsStatus[filteredInteraction.interactionId]
                .status === __WEBPACK_IMPORTED_MODULE_1__enums_interactions_enum__["a" /* InteractionStatus */].Correct ||
                _this.interactionsStatus[filteredInteraction.interactionId]
                    .previouslyCorrect === true;
        });
    };
    InteractionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InteractionsProvider);
    return InteractionsProvider;
}());

//# sourceMappingURL=interactions.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/lo-structure.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOStructureProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LOStructureProvider = (function () {
    function LOStructureProvider() {
        this.sections = [];
    }
    LOStructureProvider.prototype.addSection = function (section) {
        this.sections.push(section);
    };
    LOStructureProvider.prototype.getSections = function () {
        return this.sections;
    };
    LOStructureProvider.prototype.setSections = function (sections) {
        this.sections = sections;
    };
    LOStructureProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LOStructureProvider);
    return LOStructureProvider;
}());

//# sourceMappingURL=lo-structure.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/modal-provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalProvider = (function () {
    function ModalProvider() {
    }
    ModalProvider.prototype.showModal = function (innerComponent) {
        this.innerComponent = innerComponent;
        this.isVisible = true;
    };
    ModalProvider.prototype.hideModal = function () {
        this.innerComponent = null;
        this.isVisible = false;
    };
    ModalProvider.prototype.getVisible = function () {
        return this.isVisible;
    };
    ModalProvider.prototype.getInnerComponent = function () {
        return this.innerComponent;
    };
    ModalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ModalProvider);
    return ModalProvider;
}());

//# sourceMappingURL=modal-provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/navigation.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lo_structure_provider__ = __webpack_require__("../../../../../src/app/core/providers/lo-structure.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scorm_provider__ = __webpack_require__("../../../../../src/app/core/providers/scorm.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationProvider = (function () {
    function NavigationProvider(LOStructure, scorm) {
        this.LOStructure = LOStructure;
        this.scorm = scorm;
        this.subscriptions = 0;
        this.notifiedSubscriptors = 0;
        this.visitedSections = {};
    }
    NavigationProvider.prototype.init = function () {
        var sections = this.LOStructure.getSections();
        var firstSection = __WEBPACK_IMPORTED_MODULE_4_lodash__["first"](sections);
        var currentSCORM = this.scorm.getLocation();
        var defaultPosition = {
            section: firstSection,
            slide: 0,
            name: firstSection.slide(0).getName(),
            totalSlides: firstSection.getSlides().length
        };
        this.updateVisitedSections(firstSection.getId(), 0);
        if (currentSCORM) {
            this.goToSectionSlide(currentSCORM.section, currentSCORM.slide);
        }
        else {
            this.current = defaultPosition;
        }
        this.lastCheckedPosition = this.buildLastCheckedPosition();
    };
    NavigationProvider.prototype.getSlideChangedObservable = function () {
        var _this = this;
        this.subscriptions++;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var interval = setInterval(function () {
                if (!_this.validateLastChecked()) {
                    _this.notifiedSubscriptors++;
                    if (_this.notifiedSubscriptors === _this.subscriptions) {
                        _this.lastCheckedPosition = _this.buildLastCheckedPosition();
                        _this.notifiedSubscriptors = 0;
                    }
                    observer.next(_this.current);
                }
            }, 500);
            return { unsubscribe: function () {
                    clearInterval(interval);
                } };
        });
    };
    NavigationProvider.prototype.getCurrentPosition = function () {
        return this.current;
    };
    NavigationProvider.prototype.getCurrentSlide = function () {
        return this.current.section.slide(this.current.slide);
    };
    NavigationProvider.prototype.nextSlide = function () {
        if (this.current.slide < (this.current.totalSlides - 1)) {
            this.current.slide = this.current.slide + 1;
            this.current.name = this.getCurrentSlide().getName();
        }
    };
    NavigationProvider.prototype.previousSlide = function () {
        if (this.current.slide > 0) {
            this.current.slide = this.current.slide - 1;
            this.current.name = this.getCurrentSlide().getName();
        }
    };
    NavigationProvider.prototype.buildLastCheckedPosition = function () {
        return JSON.parse(JSON.stringify({
            section: this.current.section.getId(),
            slide: this.current.slide
        }));
    };
    NavigationProvider.prototype.validateLastChecked = function () {
        return this.current.section.getId() == this.lastCheckedPosition.section &&
            this.current.slide === this.lastCheckedPosition.slide;
    };
    NavigationProvider.prototype.goToSectionSlide = function (id, slide) {
        var desiredSection = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.LOStructure.getSections(), function (section) {
            return section.getId() === id;
        });
        if (desiredSection) {
            this.current.section = desiredSection;
            this.current.slide = slide ? slide : 0;
            this.current.totalSlides = desiredSection.getSlides().length;
            this.current.name = this.getCurrentSlide().getName();
            this.updateVisitedSections(id, slide ? slide : 0);
        }
        else {
            console.error('The desired section does not exist');
        }
    };
    NavigationProvider.prototype.isFirstSlide = function () {
        return this.current.slide === 0;
    };
    NavigationProvider.prototype.isLastSlide = function () {
        return this.current.slide === (this.current.totalSlides - 1);
    };
    NavigationProvider.prototype.hasOnlyOneSlide = function () {
        return this.current.totalSlides === 1;
    };
    NavigationProvider.prototype.getSectionName = function () {
        return this.current.section.getName();
    };
    NavigationProvider.prototype.getSlideName = function () {
        return this.getCurrentSlide().getName();
    };
    NavigationProvider.prototype.hasSectionBeenVisited = function (sectionId) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["has"](this.visitedSections, sectionId);
    };
    NavigationProvider.prototype.updateVisitedSections = function (section, slide) {
        if (__WEBPACK_IMPORTED_MODULE_4_lodash__["has"](this.visitedSections, section)) {
            if (!__WEBPACK_IMPORTED_MODULE_4_lodash__["includes"](this.visitedSections[section], slide)) {
                this.visitedSections[section].push(slide);
            }
        }
        else {
            this.visitedSections[section] = [slide];
        }
    };
    NavigationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lo_structure_provider__["a" /* LOStructureProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lo_structure_provider__["a" /* LOStructureProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__scorm_provider__["a" /* SCORMProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__scorm_provider__["a" /* SCORMProvider */]) === "function" && _b || Object])
    ], NavigationProvider);
    return NavigationProvider;
    var _a, _b;
}());

//# sourceMappingURL=navigation.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/scorm.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCORMProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lo_lo_main__ = __webpack_require__("../../../../../src/app/lo/lo.main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_scorm_enum__ = __webpack_require__("../../../../../src/app/core/enums/scorm.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SCORMDataModel = {
    location: 'cmi.location',
    suspendData: 'cmi.suspend_data',
    completionStatus: 'cmi.completion_status',
    successStatus: 'cmi.success_status',
    interaction: {
        tag: 'cmi.interactions',
        id: 'id',
        idPrefix: 'learning-object-interaction-',
        response: 'learner_response',
        result: 'result',
        type: 'type',
        weight: 'weighting',
        description: 'description'
    }
};
var SCORMProvider = (function () {
    function SCORMProvider() {
    }
    SCORMProvider.prototype.init = function () {
        var _this = this;
        this.validateSCORMAvailable(function () {
            pipwerks.SCORM.init();
            _this.setLOIncomplete();
            _this.setLOFailure();
        });
    };
    SCORMProvider.prototype.setLocation = function (position) {
        var locationSummary = {
            section: position.section.getId(),
            slide: position.slide
        };
        this.setValidatedSCORMData(SCORMDataModel.location, JSON.stringify(locationSummary));
    };
    SCORMProvider.prototype.setLOIncomplete = function () {
        this.setValidatedSCORMData(SCORMDataModel.completionStatus, __WEBPACK_IMPORTED_MODULE_2__enums_scorm_enum__["a" /* SCORMCompletionStatus */].Incomplete);
    };
    SCORMProvider.prototype.setLOComplete = function () {
        this.setValidatedSCORMData(SCORMDataModel.completionStatus, __WEBPACK_IMPORTED_MODULE_2__enums_scorm_enum__["a" /* SCORMCompletionStatus */].Completed);
    };
    SCORMProvider.prototype.setLOFailure = function () {
        this.setValidatedSCORMData(SCORMDataModel.successStatus, __WEBPACK_IMPORTED_MODULE_2__enums_scorm_enum__["d" /* SCORMSuccessStatus */].Failed);
    };
    SCORMProvider.prototype.setLOSuccess = function () {
        this.setValidatedSCORMData(SCORMDataModel.successStatus, __WEBPACK_IMPORTED_MODULE_2__enums_scorm_enum__["d" /* SCORMSuccessStatus */].Passed);
    };
    SCORMProvider.prototype.setSuspendData = function (suspendData) {
        this.setValidatedSCORMData(SCORMDataModel.suspendData, JSON.stringify(suspendData));
    };
    SCORMProvider.prototype.registerInteraction = function (interaction) {
        var prefix = SCORMDataModel.interaction.tag + '.' + interaction.interactionId + '.';
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.id, SCORMDataModel.interaction.idPrefix + interaction.interactionId);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.type, interaction.type);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.weight, interaction.weight);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.description, interaction.description);
    };
    SCORMProvider.prototype.submitInteraction = function (id, response, isCorrect) {
        var prefix = SCORMDataModel.interaction.tag + '.' + id + '.';
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.response, response);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.result, isCorrect ? __WEBPACK_IMPORTED_MODULE_2__enums_scorm_enum__["b" /* SCORMInteractionResult */].Correct : __WEBPACK_IMPORTED_MODULE_2__enums_scorm_enum__["b" /* SCORMInteractionResult */].Incorrect);
    };
    SCORMProvider.prototype.getSuspendData = function () {
        return this.getValidatedSCORMData(SCORMDataModel.suspendData);
    };
    SCORMProvider.prototype.getLOCompletionStatus = function () {
        return this.getValidatedSCORMData(SCORMDataModel.completionStatus);
    };
    SCORMProvider.prototype.getLOSuccessStatus = function () {
        return this.getValidatedSCORMData(SCORMDataModel.successStatus);
    };
    SCORMProvider.prototype.getLocation = function () {
        var location = this.getValidatedSCORMData(SCORMDataModel.location);
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["isString"](location) && location.length > 0 ? JSON.parse(location) : null;
    };
    SCORMProvider.prototype.setValidatedSCORMData = function (dataModel, value) {
        this.validateSCORMAvailable(pipwerks.SCORM.set, dataModel, value);
    };
    SCORMProvider.prototype.getValidatedSCORMData = function (dataModel) {
        return this.validateSCORMAvailable(pipwerks.SCORM.get, dataModel);
    };
    SCORMProvider.prototype.validateSCORMAvailable = function (callback, dataModel, value) {
        return __WEBPACK_IMPORTED_MODULE_1__lo_lo_main__["a" /* LO */] && __WEBPACK_IMPORTED_MODULE_1__lo_lo_main__["a" /* LO */].SCORM ?
            value && dataModel ?
                callback(dataModel, value) : dataModel ?
                callback(dataModel) : callback()
            : null;
    };
    SCORMProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SCORMProvider);
    return SCORMProvider;
}());

//# sourceMappingURL=scorm.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/side-menu.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SideMenuProvider = (function () {
    function SideMenuProvider() {
    }
    SideMenuProvider.prototype.toggleVisible = function () {
        this.setVisible(!this.getVisible());
    };
    SideMenuProvider.prototype.setVisible = function (visible) {
        this.isVisible = visible;
    };
    SideMenuProvider.prototype.getVisible = function () {
        return this.isVisible;
    };
    SideMenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], SideMenuProvider);
    return SideMenuProvider;
}());

//# sourceMappingURL=side-menu.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/providers/state.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scorm_provider__ = __webpack_require__("../../../../../src/app/core/providers/scorm.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_content_provider__ = __webpack_require__("../../../../../src/app/core/providers/course-content.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_interactions_provider__ = __webpack_require__("../../../../../src/app/core/providers/interactions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StateProvider = (function () {
    function StateProvider(navigation, scorm, content, interactions) {
        this.navigation = navigation;
        this.scorm = scorm;
        this.content = content;
        this.interactions = interactions;
        this.state = {
            sections: {}
        };
    }
    StateProvider.prototype.init = function () {
        var _this = this;
        this.scorm.init();
        this.content.init();
        this.navigation.init();
        this.interactions.init();
        this.currentPosition = this.navigation.getCurrentPosition();
        this.navigation.getSlideChangedObservable().subscribe(this.currentSlideChanged.bind(this));
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](this.interactions.getInteractions(), function (interaction) {
            _this.scorm.registerInteraction(interaction);
        });
    };
    StateProvider.prototype.getCurrentState = function () {
        return {
            position: this.navigation.getCurrentPosition(),
            interactions: this.interactions.getInteractionsStatus()
        };
    };
    StateProvider.prototype.getCurrentPosition = function () {
        return this.navigation.getCurrentPosition();
    };
    StateProvider.prototype.getInteractions = function () {
        return this.interactions.getInteractionsStatus();
    };
    StateProvider.prototype.currentSlideChanged = function (navPos) {
        this.scorm.setLocation(navPos);
        this.updateNavigationState(navPos);
    };
    StateProvider.prototype.updateNavigationState = function (navPos) {
        var sectionId = navPos.section.getId();
        if (!this.state.sections.hasOwnProperty(sectionId)) {
            this.state.sections[sectionId] = {
                visited: []
            };
        }
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](this.state.sections[sectionId].visited, navPos.slide)) {
            this.state.sections[sectionId].visited.push(navPos.slide);
            //this.scorm.setSuspendData(this.state);
        }
    };
    StateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navigation_provider__["a" /* NavigationProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__scorm_provider__["a" /* SCORMProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__scorm_provider__["a" /* SCORMProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__course_content_provider__["a" /* CourseContentProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__course_content_provider__["a" /* CourseContentProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_interactions_provider__["a" /* InteractionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_interactions_provider__["a" /* InteractionsProvider */]) === "function" && _d || Object])
    ], StateProvider);
    return StateProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=state.provider.js.map

/***/ }),

/***/ "../../../../../src/app/lo/helpers/physics.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return physicsHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_constants_utils_constant__ = __webpack_require__("../../../../../src/app/core/constants/utils.constant.ts");

var validateRoundAndTruncate = function (response, value, decimals) {
    return response === Object(__WEBPACK_IMPORTED_MODULE_0__core_constants_utils_constant__["c" /* truncateDecimal */])(value, decimals) ||
        value === parseFloat(value.toFixed(decimals));
};
var validateErrorMargin = function (response, value, margin) {
    var _response = Math.abs(response);
    var _value = Math.abs(value);
    var _margin = Math.abs(margin);
    return (_response <= (_value + _margin)) && (response >= (value - margin));
};
var getRectangularComponentsArr = function (rectangularComponentsStr) {
    var rectangularComponents = rectangularComponentsStr.split(/[ijk]/);
    rectangularComponents.pop();
    return rectangularComponents.map(function (rectComp) { return parseFloat(rectComp); });
};
var validateRectangularComponents = function (splittedComponents, correct, margin) {
    return validateErrorMargin(splittedComponents[0], correct.i, margin) &&
        validateErrorMargin(splittedComponents[1], correct.j, margin) &&
        validateErrorMargin(splittedComponents[2], correct.k, margin);
};
var sceneOneExerciseOneData = function (variables) {
    var hexagonSide = variables.hexagonSide.value;
    var tieDownDistance = variables.tieDownDistance.value;
    var hexagonWeight = variables.hexagonWeight.value;
    var asteroidGravity = variables.asteroidGravity.value;
    var hexagonSideCms = hexagonSide * 100;
    var cableLength = Math.hypot(hexagonSideCms, tieDownDistance);
    var w = hexagonWeight * asteroidGravity;
    var tGE = (w * cableLength) / (3 * tieDownDistance);
    var tensions = {
        GE: tGE
    };
    var rectangularComponents = {
        TGE: {
            i: 0,
            j: -1 * tGE * (hexagonSideCms / cableLength),
            k: -1 * tGE * (tieDownDistance / cableLength)
        },
        TGD: {
            i: tGE * ((hexagonSideCms * -1 * Math.sin(60 * (Math.PI / 180))) / cableLength),
            j: tGE * ((hexagonSideCms / 2) / cableLength),
            k: -1 * tGE * (tieDownDistance / cableLength)
        }
    };
    return {
        tensions: tensions,
        rectangularComponents: rectangularComponents
    };
};
var sceneOneExerciseTwoData = function (variables) {
    var lampMass = variables.lampMass.value;
    var maxMassBetweenBnC = variables.maxMassBetweenBnC.value;
    var asteroidGravity = variables.asteroidGravity.value;
    var klCableTension = variables.klCableTension.value;
    var jdDistance = variables.jdDistance.value;
    var abcdeklDistance = variables.abcdeklDistance.value;
    var efDistance = variables.efDistance.value;
    var p1 = (lampMass * asteroidGravity) / 2;
    var p2 = (maxMassBetweenBnC * asteroidGravity);
    var AJ = Math.hypot(abcdeklDistance * 3, jdDistance);
    var pAH = (p1 * AJ) / jdDistance;
    var pAB = (pAH * abcdeklDistance * 3) / AJ;
    var pKLy = klCableTension * Math.cos(45 * (Math.PI / 180));
    var Fk = Math.hypot(abcdeklDistance, abcdeklDistance + efDistance);
    var pGK = pKLy * (Fk / 2);
    return {
        tensions: {
            pAB: pAB,
            pGK: pGK
        }
    };
};
var sceneOneExerciseThreeData = function (variables) {
    var adCableTension = variables.adCableTension.value;
    var distances = {
        x: variables.xDistance.value,
        y: variables.yDistance.value,
        z: variables.zDistance.value
    };
    var OB = variables.obDistance.value;
    var squareSum = Object.values(distances)
        .reduce(function (acum, dist) { return acum + Math.pow(dist, 2); }, 0);
    var sides = {
        OB: OB,
        AD: Math.sqrt(squareSum),
        AB: Math.hypot(OB, distances.z)
    };
    var tADy = adCableTension * (distances.y / sides.AD);
    var tADz = (adCableTension * distances.z) / sides.AD;
    var tAB = (2 * tADy) / (OB / sides.AB);
    var tABz = tAB * (distances.z / sides.AB);
    var tensions = {
        tADy: tADy,
        tADz: tADz,
        tABz: tABz,
        tAB: tAB
    };
    return tensions;
};
var physicsHelper = {
    scenario: {
        1: {
            exercise: {
                1: {
                    getEachCableTension: function (response, variables) {
                        var data = sceneOneExerciseOneData(variables);
                        return validateErrorMargin(response, data.tensions.GE, 0.8);
                    },
                    getTGETensionRectangularComponent: function (response, variables) {
                        var data = sceneOneExerciseOneData(variables);
                        return validateRectangularComponents(getRectangularComponentsArr(response), data.rectangularComponents.TGE, 0.5);
                    },
                    getTGDTensionRectangularComponent: function (response, variables) {
                        var data = sceneOneExerciseOneData(variables);
                        return validateRectangularComponents(getRectangularComponentsArr(response), data.rectangularComponents.TGD, 0.5);
                    }
                },
                2: {
                    getABAxial: function (response, variables) {
                        var data = sceneOneExerciseTwoData(variables);
                        return validateErrorMargin(response, data.tensions.pAB, 8);
                    },
                    getGKAxial: function (response, variables) {
                        var data = sceneOneExerciseTwoData(variables);
                        return validateErrorMargin(response, data.tensions.pGK, 8);
                    },
                    getICAxial: function (response, variables) {
                        return response === 0;
                    }
                },
                3: {
                    getCableTensionAB: function (response, variables) {
                        var data = sceneOneExerciseThreeData(variables);
                        return validateErrorMargin(response, data.tAB, 10);
                    },
                    getCableTensionAC: function (response, variables) { return response === variables.adCableTension.value; },
                    getVerticalReactionInB: function (response, variables) {
                        var data = sceneOneExerciseThreeData(variables);
                        return validateErrorMargin(response, (2 * data.tADz) + data.tABz, 10);
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=physics.helper.js.map

/***/ }),

/***/ "../../../../../src/app/lo/i18n/lo.i18n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOi18n; });
var LOi18n = {
    sections: {
        introduction: {
            slides: {
                1: {
                    intro: 'En un futuro no muy lejano, por la falta de recursos naturales y' +
                        ' la contaminación del aire, suelo y agua del planeta tierra, se establecieron' +
                        ' colonias de seres humanos en diferentes asteroides.'
                },
                2: {
                    intro: 'En una de las búsquedas de asteroides colonizables, los' +
                        ' exploradores encontraron el asteroide XXC1.'
                },
                3: {
                    intro: 'Se empezó la construcción de la primera colonia en el asteroide.' +
                        ' El primer paso, fue la construcción de un domo, bajo el cual se' +
                        ' mantendría un ambiente apto para la vida sobre la superficie del asteroide.'
                },
                4: {
                    intro: 'El domo, estaba formado de plafones hexagonales, unidos entre sí' +
                        ' mediante juntas selladas para garantizar la atmósfera interna. Adicionalmente,' +
                        ' estos plafones serían los responsables de manejar las condiciones de luz de la colonia.'
                },
                5: {
                    intro: 'Para sostener cada plafón, es decir el domo, se utilizaría una estructura de' +
                        ' barras que unidas entre sí, conformarían un domo geodésico externo.'
                },
                6: {
                    intro: 'Es tu momento de ser parte de esta historia. Regresa al menú principal y ayuda' +
                        ' a los seres humanos a establecer la colonia del asteroide XXC1.'
                }
            }
        },
        scenario: {
            1: {
                exercises: {
                    1: {
                        name: 'Ejercicio 1',
                        intro1: 'En las primeras colonias, los plafones, con autonomía de vuelo, se sostenían' +
                            ' del domo geodésico exterior mediante tres cables unidos a tres puntos de la estructura.',
                        intro2: 'Pero, posteriormente se decidió, por velocidad de instalación, cambiar el sistema' +
                            ' de sujeción, conectando cada plafón a un punto de la estructura. Los plafones una vez en contacto' +
                            ' con los vecinos se unían automáticamente.',
                        statement: 'Cada uno de los plafones hexagonales, cuyo lado mide %(hexagonSide), ' +
                            'tiene una masa de %(hexagonWeight). El asteroide tiene una gravedad de %(asteroidGravity).',
                        variables: {
                            hexagonSide: {
                                tag: 'Lado plafón hexagonal'
                            },
                            hexagonWeight: {
                                tag: 'Peso plafón hexagonal'
                            },
                            asteroidGravity: {
                                tag: 'Gravedad del asteroide'
                            },
                            tieDownDistance: {
                                tag: 'Distancia del punto de sujeción'
                            }
                        },
                        questions: {
                            1: {
                                statement: 'Cual es la tensión en cada cable del plafón central si el punto de sujeción ' +
                                    'de los cables se encuentra a %(tieDownDistance)?'
                            },
                            2: {
                                statement: 'Cuáles son las componentes rectangulares de la tensión TGE de acuerdo ' +
                                    'al sistema de coordenadas mostrado?'
                            },
                            3: {
                                statement: 'Cuáles son las componentes rectangulares de la tensión TGD de acuerdo ' +
                                    'al sistema de coordenadas mostrado?'
                            }
                        },
                        btns: {
                            submit: {
                                tag: 'Responder'
                            }
                        }
                    },
                    2: {
                        name: 'Ejercicio 2',
                        intro1: 'Una vez instalado el domo, empezó el proceso de colonización del planeta en dos' +
                            ' sectores donde la superficie era relativamente plana. En el primer sector' +
                            ' estaban las grandes construcciones para las colonias y en el segundo las' +
                            ' granjas para garantizar la seguridad alimentaria. En el interior del domo se mantiene una' +
                            ' gravedad artificial de 10m/s2.',
                        statement: 'En la figura se observa la estructura de la granja construida por el polímero xyz,' +
                            ' muy resistente y super liviano. Ningún elemento de la estructura es continuo y todas las uniones son' +
                            ' articuladas, para un fácil transporte y armado. La estructura se encuentra simplemente apoyada en un' +
                            ' único punto (F) y estabilizada por un cable amarrado en K y anclado en L. La granja está automatizada' +
                            ' para garantizar las condiciones de humedad, temperatura y luz de las plantas.' +
                            ' B y C son los puntos de suministro de agua y A es uno de los dos puntos que' +
                            ' sostienen la lámpara. Si la masa de ésta es de %(lampMass) (para repartir en dos) y las' +
                            ' máximas masas que puede haber en un momento dado en B y en C son de %(maxMassBetweenBnC).' +
                            ' Recordando que la gravedad artificial en el asteroide es de %(asteroidGravity) y si la tensión en el cable KL es' +
                            ' de %(klCableTension):',
                        variables: {
                            lampMass: {
                                tag: 'Masa de la lámpara'
                            },
                            maxMassBetweenBnC: {
                                tag: 'Máxima masa permitida en B y en C'
                            },
                            asteroidGravity: {
                                tag: 'Gravedad del asteroide'
                            },
                            klCableTension: {
                                tag: 'Tensión en el cable KL'
                            },
                            jdDistance: {
                                tag: 'Distancia entre los puntos J y D'
                            },
                            efDistance: {
                                tag: 'Distancia entre los puntos E y F'
                            },
                            abcdeklDistance: {
                                tag: 'Distancia entre los puntos AB, BC, CD, DK y KL'
                            }
                        },
                        questions: {
                            1: {
                                statement: '¿Cuál es el axial en AB?'
                            },
                            2: {
                                statement: '¿Cuál es el axial en GK?'
                            },
                            3: {
                                statement: '¿Cuál es el axial en IC?'
                            }
                        },
                        btns: {
                            submit: {
                                tag: 'Responder'
                            }
                        }
                    },
                    3: {
                        name: 'Ejercicio 3',
                        intro1: 'Para garantizar la comunicación en toda la colonia se instaló una torre de comunicación' +
                            ' localizada en la cima de una loma.',
                        statement: 'La torre está compuesta por un mástil de %(zDistance) de altura, simplemente apoyado en el punto O.' +
                            ' Para estabilizarla se colocan 3 cables amarrados en la punta (A) y anclados en los puntos B, C y D' +
                            ' como se muestra en la figura. Si la distancia entre O y B es de %(obDistance) y la tensión en el cable AD es de %(adCableTension):',
                        variables: {
                            adCableTension: {
                                tag: 'Tensión en el cable AD'
                            },
                            xDistance: {
                                tag: 'Distancia OD en el eje X'
                            },
                            yDistance: {
                                tag: 'Distancia OD en el eje Y'
                            },
                            zDistance: {
                                tag: 'Distancia OA en el eje Z'
                            },
                            obDistance: {
                                tag: 'Distancia OB en el eje Y'
                            }
                        },
                        questions: {
                            1: {
                                tag: '¿Cuál es la tensión en el cable AB?'
                            },
                            2: {
                                tag: '¿Cuál es la tensión en el cable AC?'
                            },
                            3: {
                                tag: '¿Cuál es la reacción vertical en el apoyo B?'
                            }
                        },
                        btns: {
                            submit: {
                                tag: 'Responder'
                            }
                        }
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=lo.i18n.js.map

/***/ }),

/***/ "../../../../../src/app/lo/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<navigation-side-btns [hideInSection]=\"'cover'\"></navigation-side-btns>\n<div class=\"container\">\n    <course-content\n        [ngClass]=\"getContentClasses()\"\n        [ngStyle]=\"getSlideStyle()\"\n        [LOCurrentState]=\"LOCurrentState\"\n    ></course-content>\n</div>\n\n<floating-btn-set [showInSection]=\"showHelpBtns\" [floatingBtns]=\"helpBtns\">\n</floating-btn-set>\n\n<floating-btn\n    [floatBtnTag]=\"'Menú'\"\n    [floatBtnIconTxt]=\"'igloo'\"\n    [hideInSection]=\"hideInFloatingBtn\"\n    [navigateToSection]=\"'scenarios'\">\n</floating-btn>\n\n<lo-modal [LOCurrentState]=\"LOCurrentState\"></lo-modal>"

/***/ }),

/***/ "../../../../../src/app/lo/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* General */\n/* Header */\n/* Navigation Bar */\n/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host::ng-deep {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 100%;\n  background: white; }\n  :host::ng-deep .container {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background-color: white;\n    overflow: hidden;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1;\n        flex: 1;\n    /*********************************************************/ }\n    :host::ng-deep .container course-content {\n      /*******  COVER  ******/\n      /********* SCENARIOS **********/ }\n      :host::ng-deep .container course-content.cover .cover-simple-container .simple-container {\n        -ms-flex-direction: column;\n            flex-direction: column; }\n        :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .main-title {\n          font-size: 5rem;\n          font-weight: bold;\n          border-bottom: 1px solid gray; }\n          :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .main-title p {\n            margin: 20px 0; }\n        :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .subtitle {\n          margin-top: 20px;\n          font-size: 1.5rem; }\n          :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .subtitle p {\n            margin: 10px 0; }\n          :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .subtitle .init-btn-container {\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-direction: column;\n                flex-direction: column;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n            :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .subtitle .init-btn-container button {\n              width: 200px;\n              height: 60px;\n              border-radius: 20px;\n              background: white;\n              font-weight: bold;\n              font-size: 1.8rem;\n              border: 1px solid dimgray;\n              margin-top: 10px; }\n              :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .subtitle .init-btn-container button:hover {\n                background: #643DBF;\n                color: white; }\n              :host::ng-deep .container course-content.cover .cover-simple-container .simple-container .subtitle .init-btn-container button:active {\n                background: #3B0D8D; }\n      :host::ng-deep .container course-content.scenarios.asteroid-scene {\n        background: #142325; }\n    :host::ng-deep .container course-column.space-intro {\n      background: url(" + escape(__webpack_require__("../../../../../src/assets/img/space.gif")) + ") no-repeat;\n      background-size: 100% 100%; }\n      :host::ng-deep .container course-column.space-intro intro-slideshow div.intro-slideshow-content {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center; }\n        :host::ng-deep .container course-column.space-intro intro-slideshow div.intro-slideshow-content paragraph {\n          margin: 0 auto; }\n          :host::ng-deep .container course-column.space-intro intro-slideshow div.intro-slideshow-content paragraph p {\n            color: #351C75;\n            font-size: 1.4rem;\n            line-height: 1.4;\n            width: 80%;\n            margin: 0 auto; }\n            :host::ng-deep .container course-column.space-intro intro-slideshow div.intro-slideshow-content paragraph p:not(:first-of-type) {\n              margin-top: 20px; }\n      :host::ng-deep .container course-column.space-intro.no-img intro-slideshow div.intro-slideshow-content {\n        width: 40% !important;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n        :host::ng-deep .container course-column.space-intro.no-img intro-slideshow div.intro-slideshow-content .return-to-menu {\n          margin-top: 20px; }\n          :host::ng-deep .container course-column.space-intro.no-img intro-slideshow div.intro-slideshow-content .return-to-menu button {\n            border-radius: 10px;\n            height: 50px;\n            width: 150px;\n            font-size: 1.2rem;\n            border: 3px solid #3B0D8D;\n            background: white;\n            color: #3B0D8D; }\n            :host::ng-deep .container course-column.space-intro.no-img intro-slideshow div.intro-slideshow-content .return-to-menu button:hover {\n              border-color: white;\n              background: #3B0D8D;\n              color: white; }\n            :host::ng-deep .container course-column.space-intro.no-img intro-slideshow div.intro-slideshow-content .return-to-menu button:disabled {\n              border-color: dimgray;\n              background: lightgray;\n              color: gray; }\n    :host::ng-deep .container course-column.img-intro {\n      background-size: auto 100% !important;\n      background-position: center !important; }\n    :host::ng-deep .container course-row.cover-bottom {\n      background: #3B0D8D;\n      padding: 20px;\n      /* Safari/Chrome, other WebKit */\n      /* Firefox, other Gecko */\n      box-sizing: border-box; }\n      :host::ng-deep .container course-row.cover-bottom .entity-in-charge {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center;\n        padding-left: 20px; }\n        :host::ng-deep .container course-row.cover-bottom .entity-in-charge p {\n          color: white;\n          font-size: 2rem;\n          margin: 5px 0; }\n  :host::ng-deep lo-modal span.credits-professional {\n    font-weight: bold;\n    font-size: 1rem; }\n  :host::ng-deep lo-modal .img-copyright p {\n    margin: 10px 0;\n    font-size: 0.9rem; }\n  :host::ng-deep lo-modal .help-title p {\n    font-size: 2rem;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0;\n    color: #3B0D8D;\n    border-bottom: 5px solid #3B0D8D;\n    padding: 10px; }\n  :host::ng-deep lo-modal .help-item {\n    border-bottom: solid 1px gray; }\n  :host::ng-deep lo-modal .simple-container {\n    -ms-flex-direction: column;\n        flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lo/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lo_extras__ = __webpack_require__("../../../../../src/app/lo/lo.extras.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_enums_interactions_enum__ = __webpack_require__("../../../../../src/app/core/enums/interactions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_providers_modal_provider__ = __webpack_require__("../../../../../src/app/core/providers/modal-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_layout_modals_lo_completion_modal_lo_completion_modal__ = __webpack_require__("../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutComponent = (function () {
    function LayoutComponent(modal) {
        this.modal = modal;
        this.isLOCompleted = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.menuElements = __WEBPACK_IMPORTED_MODULE_1__lo_extras__["a" /* LOExtras */].menuBars.top;
        this.footerContent = __WEBPACK_IMPORTED_MODULE_1__lo_extras__["a" /* LOExtras */].footer;
        this.hideInFloatingBtn = __WEBPACK_IMPORTED_MODULE_5_lodash__["get"](this.layoutConfig, 'hide.floatMenuBtn');
        this.showHelpBtns = __WEBPACK_IMPORTED_MODULE_5_lodash__["get"](this.layoutConfig, 'show.helpBtns');
        this.helpBtns = __WEBPACK_IMPORTED_MODULE_1__lo_extras__["a" /* LOExtras */].helpBtns;
    };
    LayoutComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var isMainMenu = this.LOCurrentState.position.section.getId() === 'scenarios';
        var interactionsComplete = Object.keys(this.LOCurrentState.interactions).every(function (intKey) {
            var int = _this.LOCurrentState.interactions[intKey];
            return int.status === __WEBPACK_IMPORTED_MODULE_2__core_enums_interactions_enum__["a" /* InteractionStatus */].Correct || int.previouslyCorrect === true;
        });
        if (!this.isLOCompleted && isMainMenu && interactionsComplete) {
            this.isLOCompleted = true;
            this.modal.showModal({
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_layout_modals_lo_completion_modal_lo_completion_modal__["a" /* LOCompletionModal */],
                data: {}
            });
        }
    };
    LayoutComponent.prototype.getSlideStyle = function () {
        return this.LOCurrentState.position.section.slide(this.LOCurrentState.position.slide).getStyle();
    };
    LayoutComponent.prototype.getContentClasses = function () {
        var sectionId = this.LOCurrentState.position.section.getId();
        var slideClasses = Array.from(this.LOCurrentState.position.section.slide(this.LOCurrentState.position.slide).getClasses());
        slideClasses.unshift(sectionId);
        return slideClasses;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LayoutComponent.prototype, "LOCurrentState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LayoutComponent.prototype, "layoutConfig", void 0);
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-layout',
            template: __webpack_require__("../../../../../src/app/lo/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lo/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_providers_modal_provider__["a" /* ModalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_providers_modal_provider__["a" /* ModalProvider */]) === "function" && _a || Object])
    ], LayoutComponent);
    return LayoutComponent;
    var _a;
}());

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/lo/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("../../../../../src/app/lo/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// imports




// @NgModule decorator with its metadata
var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__core_core_module__["a" /* CoreModule */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/lo/lo.content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_cover_cover_section__ = __webpack_require__("../../../../../src/app/lo/sections/cover/cover.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sections_introduction_introduction_section__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/introduction.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections_scenarios_scenarios__ = __webpack_require__("../../../../../src/app/lo/sections/scenarios/scenarios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sections_first_scenario_exercises_first_first_scenario_first_exercise_section__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/first/first-scenario-first-exercise.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sections_first_scenario_exercises_second_first_scenario_second_exercise_section__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/second/first-scenario-second-exercise.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sections_first_scenario_exercises_third_first_scenario_third_exercise_section__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/third/first-scenario-third-exercise.section.ts");






var LOContent = [
    __WEBPACK_IMPORTED_MODULE_0__sections_cover_cover_section__["a" /* coverSection */],
    __WEBPACK_IMPORTED_MODULE_2__sections_scenarios_scenarios__["a" /* scenariosSection */],
    __WEBPACK_IMPORTED_MODULE_1__sections_introduction_introduction_section__["a" /* introductionSection */],
    __WEBPACK_IMPORTED_MODULE_3__sections_first_scenario_exercises_first_first_scenario_first_exercise_section__["a" /* firstSceneFirstExerciseSection */],
    __WEBPACK_IMPORTED_MODULE_4__sections_first_scenario_exercises_second_first_scenario_second_exercise_section__["a" /* firstSceneSecondExerciseSection */],
    __WEBPACK_IMPORTED_MODULE_5__sections_first_scenario_exercises_third_first_scenario_third_exercise_section__["a" /* firstSceneThirdExerciseSection */]
];
//# sourceMappingURL=lo.content.js.map

/***/ }),

/***/ "../../../../../src/app/lo/lo.extras.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOExtras; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_content_organizers_tab_organizer_tab_organizer_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/tab-organizer/tab-organizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.enum.ts");






var LOExtras = {
    menuBars: {
        //LOHelper.createElementAction(basicComponentsSection, ElementAction.GoToSection)
        top: []
    },
    footer: [{
            text: '',
            args: {}
        }],
    helpBtns: [{
            tag: 'Créditos',
            icon: 'users',
            action: 'modal',
            data: {
                component: __WEBPACK_IMPORTED_MODULE_0__core_components_content_organizers_tab_organizer_tab_organizer_component__["a" /* TabOrganizerComponent */],
                data: [{
                        name: 'Profesionales',
                        rows: [{
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: '%(name)',
                                                args: {
                                                    name: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                                        data: {
                                                            innerText: 'Óscar Germán Duarte Velasco',
                                                            class: 'credits-professional'
                                                        }
                                                    }
                                                }
                                            }]
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Director Dirección Nacional de Innovación Académica',
                                                args: {}
                                            }]
                                    }]
                            }, {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: '%(name)',
                                                args: {
                                                    name: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                                        data: {
                                                            innerText: 'Margie Nohemy Jessup Cáceres',
                                                            class: 'credits-professional'
                                                        }
                                                    }
                                                }
                                            }]
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Coordinadora del Proyecto 256',
                                                args: {}
                                            }]
                                    }]
                            }, {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: '%(name)',
                                                args: {
                                                    name: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                                        data: {
                                                            innerText: 'Caori Patricia Takeuchi',
                                                            class: 'credits-professional'
                                                        }
                                                    }
                                                }
                                            }]
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Experta temática',
                                                args: {}
                                            }]
                                    }]
                            }, {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: '%(name)',
                                                args: {
                                                    name: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                                        data: {
                                                            innerText: 'Luis Gabriel Toscano Rodríguez',
                                                            class: 'credits-professional'
                                                        }
                                                    }
                                                }
                                            }]
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Desarrollador / Maestrante de Apoyo',
                                                args: {}
                                            }]
                                    }]
                            }, {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: '%(name)',
                                                args: {
                                                    name: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                                        data: {
                                                            innerText: 'Yeny Amalia Correales Martínez',
                                                            class: 'credits-professional'
                                                        }
                                                    }
                                                }
                                            }]
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Adecuadora Pedagógica',
                                                args: {}
                                            }]
                                    }]
                            }, {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: '%(name)',
                                                args: {
                                                    name: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                                        data: {
                                                            innerText: 'Andrés Felipe Jaimes Sánchez',
                                                            class: 'credits-professional'
                                                        }
                                                    }
                                                }
                                            }]
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Edición de Imágenes',
                                                args: {}
                                            }]
                                    }]
                            }]
                    }, {
                        name: 'Imágenes',
                        rows: [{
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Este OVA hace uso de las siguientes imágenes:',
                                                args: {}
                                            }]
                                    }]
                            },
                            {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: '%(photo) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Meteor Space Stars Asteroid',
                                                            href: 'https://www.maxpixel.net/Meteor-Space-Stars-Asteroid-1477065'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en'
                                                        }
                                                    }
                                                }
                                            }, {
                                                text: '%(photo) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Radio Transmitter Dish',
                                                            href: 'https://www.goodfreephotos.com/business-and-technology/radio-transmitter-dish.jpg.php'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/licenses/publicdomain/'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                text: '%(photo) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Future City Picture',
                                                            href: 'http://epicwallpaperz.com/future-city-picture/'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                text: '%(photo) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Dead Trees',
                                                            href: 'https://pxhere.com/en/photo/1063849'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en'
                                                        }
                                                    }
                                                }
                                            }, {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Milky Way',
                                                            href: 'https://exoplanets.nasa.gov/internal_resources/698'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'NASA',
                                                            href: 'http://www.nasa.gov/'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://www.nasa.gov/multimedia/guidelines/index.html'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Limb of Copernicus Impact Crater',
                                                            href: 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA00094_hires.jpg'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'NASA',
                                                            href: 'http://www.nasa.gov/'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://www.nasa.gov/multimedia/guidelines/index.html'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Geodesic shapes on Project Eden, Cornwall dome',
                                                            href: 'https://www.flickr.com/photos/elias_daniel/6019904580/'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Elias Gayles',
                                                            href: 'https://www.flickr.com/photos/elias_daniel/'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/licenses/by/2.0/'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Russell Township-ASM Headquarters & Geodesic Dome (OHPTC)',
                                                            href: 'https://www.flickr.com/photos/63837784@N08/6035360487'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'ODSA',
                                                            href: 'https://www.flickr.com/photos/63837784@N08/'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/licenses/by/2.0/'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Dome at the South Pole',
                                                            href: 'https://www.flickr.com/photos/usnavyseabeemuseum/6887360473'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'U.S. Navy Seabee Museum',
                                                            href: 'https://www.flickr.com/photos/usnavyseabeemuseum/'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/licenses/by/2.0/'
                                                        }
                                                    }
                                                }
                                            }, {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Tropical biome, Eden Project',
                                                            href: 'https://commons.wikimedia.org/wiki/File:Eden_project_tropical_biome.jpg'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Stevekeiretsu (Usuario Wikipedia)',
                                                            href: 'https://en.wikipedia.org/wiki/User:Stevekeiretsu'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/licenses/by/1.0/deed.en'
                                                        }
                                                    }
                                                }
                                            }, {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Estadio Olímpico Luzhnikí',
                                                            href: 'https://commons.wikimedia.org/wiki/File:%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD_%D0%9B%D1%83%D0%B6%D0%BD%D0%B8%D0%BA%D0%B8_(29_%D0%BC%D0%B0%D1%80%D1%82%D0%B0_2017)_%C2%B7_23.jpg'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Government of Moscow',
                                                            href: 'https://en.wikipedia.org/wiki/Government_of_Moscow'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/licenses/by/4.0/'
                                                        }
                                                    }
                                                }
                                            }, {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Invernadero para cultivo de pimiento',
                                                            href: 'http://www.flickriver.com/photos/ininsa/7400347942/'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Invernaderos Ininsa',
                                                            href: 'http://www.flickriver.com/photos/ininsa/popular-interesting/'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/licenses/by-nc-sa/2.0/'
                                                        }
                                                    }
                                                }
                                            }, {
                                                text: '%(photo) de %(owner) / %(copyright)',
                                                args: {
                                                    photo: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Starfield Simulation',
                                                            href: 'https://es.wikipedia.org/wiki/Archivo:StarfieldSimulation.gif'
                                                        }
                                                    },
                                                    owner: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Jahobr (Usuario Wikipedia)',
                                                            href: 'https://commons.wikimedia.org/wiki/User:Jahobr'
                                                        }
                                                    },
                                                    copyright: {
                                                        type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                                                        data: {
                                                            innerText: 'Licencia',
                                                            href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.es'
                                                        }
                                                    }
                                                }
                                            }]
                                    }],
                                classes: ['img-copyright']
                            }]
                    }]
            }
        }, {
            tag: 'Ayuda',
            icon: 'question',
            action: 'modal',
            data: {
                component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                data: [{
                        rows: [{
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Ayuda',
                                                args: {}
                                            }],
                                        classes: ['help-title']
                                    }]
                            },
                            {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'No avances o retrocedas entre páginas haciendo uso de tu navegador web.' +
                                                    ' Al hacerlo perderías tu progreso actual.',
                                                args: {}
                                            }],
                                        flex: 3
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                        data: {
                                            source: './assets/img/browser-navbar.PNG',
                                            style: {
                                                width: '120px',
                                                margin: '0 auto'
                                            }
                                        },
                                        flex: 1,
                                        style: {
                                            'display': 'flex',
                                            'flex-direction': 'row',
                                            'align-items': 'center'
                                        }
                                    }],
                                classes: ['help-item']
                            },
                            {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Usa los botones de navegación ubicados en los extremos laterales del objeto para dirigirte a la anterior o siguiente diapositiva.',
                                                args: {}
                                            }],
                                        flex: 3
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                        data: {
                                            source: './assets/img/navbtns.PNG',
                                            style: {
                                                width: '100px',
                                                margin: '0 auto'
                                            }
                                        },
                                        flex: 1,
                                        style: {
                                            'display': 'flex',
                                            'flex-direction': 'row',
                                            'align-items': 'center'
                                        }
                                    }],
                                classes: ['help-item']
                            },
                            {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Accede a los elementos del menú principal que se encuentran a color y se iluminan al contacto del cursor, recorre las actividades y desbloquea asi nuevos caminos.',
                                                args: {}
                                            }],
                                        flex: 3
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                        data: {
                                            source: './assets/img/asteroid-city.png',
                                            style: {
                                                width: '150px',
                                                margin: '0 auto'
                                            }
                                        },
                                        flex: 1,
                                        style: {
                                            'display': 'flex',
                                            'flex-direction': 'row',
                                            'align-items': 'center'
                                        }
                                    }],
                                classes: ['help-item']
                            },
                            {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Elementos del menú principal que se encuentren en blanco y negro se activarán mediante el progreso del estudiante en el objeto.',
                                                args: {}
                                            }],
                                        flex: 3
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                        data: {
                                            source: './assets/img/asteroid-city-disabled.png',
                                            style: {
                                                width: '150px',
                                                margin: '0 auto'
                                            }
                                        },
                                        flex: 1,
                                        style: {
                                            'display': 'flex',
                                            'flex-direction': 'row',
                                            'align-items': 'center'
                                        }
                                    }],
                                classes: ['help-item']
                            },
                            {
                                cols: [{
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                        data: [{
                                                text: 'Usa el botón ubicado en la parte inferior derecha cuando se encuentre visible para regresar al menú principal.',
                                                args: {}
                                            }],
                                        flex: 3
                                    }, {
                                        type: __WEBPACK_IMPORTED_MODULE_4__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                        component: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                        data: {
                                            source: './assets/img/menubtn.PNG',
                                            style: {
                                                width: '80px',
                                                margin: '0 auto'
                                            }
                                        },
                                        flex: 1,
                                        style: {
                                            'display': 'flex',
                                            'flex-direction': 'row',
                                            'align-items': 'center'
                                        }
                                    }],
                                classes: ['help-item']
                            }]
                    }]
            }
        }]
};
//# sourceMappingURL=lo.extras.js.map

/***/ }),

/***/ "../../../../../src/app/lo/lo.main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lo_content__ = __webpack_require__("../../../../../src/app/lo/lo.content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lo_extras__ = __webpack_require__("../../../../../src/app/lo/lo.extras.ts");


var LO = {
    name: 'Curso estática',
    teacher: 'Caori Takeuchi',
    unit: 0,
    unitName: 'Unit',
    SCORM: false,
    content: __WEBPACK_IMPORTED_MODULE_0__lo_content__["a" /* LOContent */],
    extras: __WEBPACK_IMPORTED_MODULE_1__lo_extras__["a" /* LOExtras */]
};
//# sourceMappingURL=lo.main.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/cover/cover.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coverSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_cover_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/cover/slides/cover-1.slide.ts");

var coverSection = {
    id: 'cover',
    name: 'Portada',
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_cover_1_slide__["a" /* coverSectionSlide1 */]
    ]
};
//# sourceMappingURL=cover.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/cover/slides/cover-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coverSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_basic_button_button_component__ = __webpack_require__("../../../../../src/app/core/components/basic/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_enums_element_action_enum__ = __webpack_require__("../../../../../src/app/core/enums/element-action.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");






var coverSectionSlide1 = {
    name: 'Cover',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_5__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */]
                                        }],
                                    flex: 2
                                }, {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: 'Ejercicios de Aplicación',
                                                    args: {}
                                                }],
                                            style: {
                                                'align-items': 'flex-end'
                                            }
                                        }],
                                    flex: 2,
                                    classes: ['main-title']
                                }, {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: 'FACULTAD DE INGENIERÍA',
                                                    args: {}
                                                }, {
                                                    text: 'CURSO DE ESTÁTICA',
                                                    args: {}
                                                }]
                                        }, {
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_1__core_components_basic_button_button_component__["a" /* ButtonComponent */],
                                            data: {
                                                text: 'Iniciar',
                                                target: 'scenarios'
                                            },
                                            actions: [__WEBPACK_IMPORTED_MODULE_4__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection],
                                            classes: ['init-btn-container']
                                        }],
                                    flex: 2,
                                    classes: ['subtitle']
                                }]
                        }],
                    classes: ['cover-simple-container']
                }],
            flex: 5,
            style: {
                padding: '0 100px'
            }
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    flex: 3
                }],
            flex: 1
        }]
};
/*
[{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: 'Dirección Nacional de Innovación Académica',
                args: {}
            }, {
                text: 'Vicerrectoría Académica',
                args: {}
            }],
            classes: ['entity-in-charge'],
            flex: 3
        }, {
            type: ComponentType.Basic,
            component: VoidComponent,
            data: null,
            flex: 1
        }, {
            type: ComponentType.Basic,
            component: ImgComponent,
            data: {
                source: './assets/img/logo_unal.png',
                style: {
                    'max-height': '100%',
                    'max-width': '100%'
                }
            }
        }]
*/ 
//# sourceMappingURL=cover-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/first/first-scenario-first-exercise.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstSceneFirstExerciseSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_first_scenario_first_exercise_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/first/slides/first-scenario-first-exercise-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slides_first_scenario_first_exercise_2_slide__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/first/slides/first-scenario-first-exercise-2.slide.ts");


var firstSceneFirstExerciseSection = {
    id: 'scene1exercise1',
    name: 'First Scene First Exam',
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_first_scenario_first_exercise_1_slide__["a" /* firstScenarioFirstExerciseSlide1 */],
        __WEBPACK_IMPORTED_MODULE_1__slides_first_scenario_first_exercise_2_slide__["a" /* firstScenarioFirstExerciseSlide2 */]
    ]
};
//# sourceMappingURL=first-scenario-first-exercise.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/first/slides/first-scenario-first-exercise-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstScenarioFirstExerciseSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.scenario[1].exercises[1];
var firstScenarioFirstExerciseSlide1 = {
    name: 'Escenario 1 - Ejercicio 1 - Intro',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro1
                                                }, {
                                                    text: staticTxt.intro2
                                                }],
                                            classes: ['padding-top-small']
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/dome-2.jpg") no-repeat'
                    },
                    flex: 2
                }]
        }]
};
//# sourceMappingURL=first-scenario-first-exercise-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/first/slides/first-scenario-first-exercise-2.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstScenarioFirstExerciseSlide2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_learning_activities_physics_function_question_physics_function_question_component__ = __webpack_require__("../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_enums_interactions_enum__ = __webpack_require__("../../../../../src/app/core/enums/interactions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_enums_scorm_enum__ = __webpack_require__("../../../../../src/app/core/enums/scorm.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__ = __webpack_require__("../../../../../src/app/core/enums/units.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__ = __webpack_require__("../../../../../src/app/lo/helpers/physics.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");









var staticTxt = __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].sections.scenario[1].exercises[1];
var firstScenarioFirstExerciseSlide2 = {
    name: 'Escenario 1 - Ejercicio 1',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_1__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                            data: {
                                                source: 'assets/img/exercise1.png',
                                                style: {
                                                    'max-width': '95%',
                                                    'margin': '0 auto'
                                                }
                                            },
                                            style: {
                                                'display': 'flex',
                                                'flex-direction': 'row',
                                                'align-items': 'center'
                                            },
                                            classes: ['space-intro']
                                        }]
                                }]
                        }]
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].LearningActivity,
                    component: __WEBPACK_IMPORTED_MODULE_0__core_components_learning_activities_physics_function_question_physics_function_question_component__["a" /* PhysicsFunctionQuestionComponent */],
                    data: {
                        name: staticTxt.name,
                        variables: [{
                                ref: 'L',
                                name: 'hexagonSide',
                                tag: staticTxt.variables.hexagonSide.tag,
                                value: 1,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: true,
                                min: 1,
                                max: 5
                            }, {
                                name: 'hexagonWeight',
                                tag: staticTxt.variables.hexagonWeight.tag,
                                value: 20,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["d" /* MassUnits */].Kilogram,
                                mutable: false
                            }, {
                                name: 'asteroidGravity',
                                tag: staticTxt.variables.asteroidGravity.tag,
                                value: 2,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["a" /* AccelerationUnits */].MeterPerSecondSquare,
                                mutable: false
                            }, {
                                ref: 'h',
                                name: 'tieDownDistance',
                                tag: staticTxt.variables.tieDownDistance.tag,
                                value: 80,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Centimeter,
                                mutable: true,
                                min: 50,
                                max: 100
                            }],
                        statement: staticTxt.statement,
                        questions: [{
                                statement: staticTxt.questions[1].statement,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[1].getEachCableTension(parseFloat(response), variables);
                                },
                                options: {
                                    type: 'number',
                                    placeholder: '0.0',
                                    pattern: /\d+(\.\d{1,2})*/
                                }
                            }, {
                                statement: staticTxt.questions[2].statement,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[1].getTGETensionRectangularComponent(response, variables);
                                },
                                options: {
                                    type: 'text',
                                    placeholder: '0i+0j-0k',
                                    pattern: /\d+(\.\d{1,2})*[i][+-]\d+(\.\d{1,2})*[j][+-]\d+(\.\d{1,2})*[k]/
                                }
                            }, {
                                statement: staticTxt.questions[3].statement,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[1].getTGDTensionRectangularComponent(response, variables);
                                },
                                options: {
                                    type: 'text',
                                    placeholder: '0i+0j-0k',
                                    pattern: /\d+(\.\d{1,2})*[i][+-]\d+(\.\d{1,2})*[j][+-]\d+(\.\d{1,2})*[k]/
                                }
                            }],
                        SCORM: {
                            weight: 1,
                            type: __WEBPACK_IMPORTED_MODULE_5__core_enums_scorm_enum__["c" /* SCORMInteractionType */].FillIn
                        },
                        submitBtn: {
                            tag: staticTxt.btns.submit.tag
                        },
                        attempts: 3,
                        onSubmit: __WEBPACK_IMPORTED_MODULE_4__core_enums_interactions_enum__["b" /* InteractionSubmitAction */].DisplayModal
                    },
                    style: {
                        padding: '50px'
                    }
                }]
        }]
};
//# sourceMappingURL=first-scenario-first-exercise-2.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/second/first-scenario-second-exercise.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstSceneSecondExerciseSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_first_scenario_second_exam_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/second/slides/first-scenario-second-exam-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slides_first_scenario_second_exam_2_slide__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/second/slides/first-scenario-second-exam-2.slide.ts");


var firstSceneSecondExerciseSection = {
    id: 'scene1exercise2',
    name: 'First Scene Second Exam',
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_first_scenario_second_exam_1_slide__["a" /* firstScenarioSecondExerciseSlide1 */],
        __WEBPACK_IMPORTED_MODULE_1__slides_first_scenario_second_exam_2_slide__["a" /* firstScenarioSecondExerciseSlide2 */]
    ]
};
//# sourceMappingURL=first-scenario-second-exercise.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/second/slides/first-scenario-second-exam-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstScenarioSecondExerciseSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.scenario[1].exercises[2];
var firstScenarioSecondExerciseSlide1 = {
    name: 'Escenario 1 - Ejercicio 2 - Intro',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro1
                                                }],
                                            classes: ['padding-top-small']
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/farm.jpg") no-repeat'
                    },
                    flex: 2
                }]
        }]
};
//# sourceMappingURL=first-scenario-second-exam-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/second/slides/first-scenario-second-exam-2.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstScenarioSecondExerciseSlide2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_learning_activities_physics_function_question_physics_function_question_component__ = __webpack_require__("../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_enums_interactions_enum__ = __webpack_require__("../../../../../src/app/core/enums/interactions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_enums_scorm_enum__ = __webpack_require__("../../../../../src/app/core/enums/scorm.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__ = __webpack_require__("../../../../../src/app/core/enums/units.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__ = __webpack_require__("../../../../../src/app/lo/helpers/physics.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");









var staticTxt = __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].sections.scenario[1].exercises[2];
var firstScenarioSecondExerciseSlide2 = {
    name: 'Escenario 1 - Ejercicio 2',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_1__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                            data: {
                                                source: 'assets/img/exercise2.png',
                                                style: {
                                                    'max-width': '95%',
                                                    'margin': '0 auto'
                                                }
                                            },
                                            style: {
                                                'display': 'flex',
                                                'flex-direction': 'row',
                                                'align-items': 'center'
                                            },
                                            classes: ['space-intro']
                                        }]
                                }]
                        }]
                },
                {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].LearningActivity,
                    component: __WEBPACK_IMPORTED_MODULE_0__core_components_learning_activities_physics_function_question_physics_function_question_component__["a" /* PhysicsFunctionQuestionComponent */],
                    data: {
                        name: staticTxt.name,
                        variables: [{
                                name: 'lampMass',
                                tag: staticTxt.variables.lampMass.tag,
                                value: 10,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["d" /* MassUnits */].Kilogram,
                                mutable: true,
                                ref: 'm1',
                                min: 5,
                                max: 30
                            }, {
                                name: 'maxMassBetweenBnC',
                                tag: staticTxt.variables.maxMassBetweenBnC.tag,
                                value: 4,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["d" /* MassUnits */].Kilogram,
                                mutable: true,
                                ref: 'm2',
                                min: 2,
                                max: 10
                            },
                            {
                                name: 'asteroidGravity',
                                tag: staticTxt.variables.asteroidGravity.tag,
                                value: 10,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["a" /* AccelerationUnits */].MeterPerSecondSquare,
                                mutable: false
                            },
                            {
                                name: 'klCableTension',
                                tag: staticTxt.variables.klCableTension.tag,
                                value: 109.1,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["b" /* ForceUnits */].Newton,
                                mutable: false
                            },
                            {
                                name: 'jdDistance',
                                tag: staticTxt.variables.jdDistance.tag,
                                value: 2,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: false
                            },
                            {
                                name: 'efDistance',
                                tag: staticTxt.variables.efDistance.tag,
                                value: 3,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: false
                            },
                            {
                                name: 'abcdeklDistance',
                                tag: staticTxt.variables.abcdeklDistance.tag,
                                value: 2,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: false
                            }],
                        statement: staticTxt.statement,
                        questions: [{
                                statement: staticTxt.questions[1].statement,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[2].getABAxial(parseInt(response), variables);
                                },
                                options: {
                                    type: 'number',
                                    placeholder: '14.37',
                                    pattern: /\d+(\.\d{1,2})*/
                                }
                            }, {
                                statement: staticTxt.questions[2].statement,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[2].getGKAxial(parseInt(response), variables);
                                },
                                options: {
                                    type: 'number',
                                    placeholder: '14.37',
                                    pattern: /\d+(\.\d{1,2})*/
                                }
                            }, {
                                statement: staticTxt.questions[3].statement,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[2].getICAxial(parseInt(response), variables);
                                },
                                options: {
                                    type: 'number',
                                    placeholder: '14.37',
                                    pattern: /\d+(\.\d{1,2})*/
                                }
                            }],
                        SCORM: {
                            weight: 1,
                            type: __WEBPACK_IMPORTED_MODULE_5__core_enums_scorm_enum__["c" /* SCORMInteractionType */].FillIn
                        },
                        submitBtn: {
                            tag: staticTxt.btns.submit.tag
                        },
                        attempts: 3,
                        onSubmit: __WEBPACK_IMPORTED_MODULE_4__core_enums_interactions_enum__["b" /* InteractionSubmitAction */].DisplayModal
                    },
                    style: {
                        padding: '50px'
                    }
                }]
        }]
};
//# sourceMappingURL=first-scenario-second-exam-2.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/third/first-scenario-third-exercise.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstSceneThirdExerciseSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_first_scenario_third_exercise_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/third/slides/first-scenario-third-exercise-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slides_first_scenario_third_exercise_2_slide__ = __webpack_require__("../../../../../src/app/lo/sections/first-scenario-exercises/third/slides/first-scenario-third-exercise-2.slide.ts");


var firstSceneThirdExerciseSection = {
    id: 'scene1exercise3',
    name: 'First Scene Third Exam',
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_first_scenario_third_exercise_1_slide__["a" /* firstScenarioThirdExerciseSlide1 */],
        __WEBPACK_IMPORTED_MODULE_1__slides_first_scenario_third_exercise_2_slide__["a" /* firstScenarioThirdExerciseSlide2 */]
    ]
};
//# sourceMappingURL=first-scenario-third-exercise.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/third/slides/first-scenario-third-exercise-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstScenarioThirdExerciseSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.scenario[1].exercises[3];
var firstScenarioThirdExerciseSlide1 = {
    name: 'Escenario 1 - Ejercicio 3 - Intro',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro1
                                                }]
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/antenna.png") no-repeat'
                    },
                    flex: 2
                }]
        }]
};
//# sourceMappingURL=first-scenario-third-exercise-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/first-scenario-exercises/third/slides/first-scenario-third-exercise-2.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstScenarioThirdExerciseSlide2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_learning_activities_physics_function_question_physics_function_question_component__ = __webpack_require__("../../../../../src/app/core/components/learning-activities/physics-function-question/physics-function-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_enums_interactions_enum__ = __webpack_require__("../../../../../src/app/core/enums/interactions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_enums_scorm_enum__ = __webpack_require__("../../../../../src/app/core/enums/scorm.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__ = __webpack_require__("../../../../../src/app/core/enums/units.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__ = __webpack_require__("../../../../../src/app/lo/helpers/physics.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");









var staticTxt = __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].sections.scenario[1].exercises[3];
var firstScenarioThirdExerciseSlide2 = {
    name: 'Escenario 1 - Ejercicio 1',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_1__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                            data: {
                                                source: 'assets/img/exercise3.png',
                                                style: {
                                                    'max-width': '95%',
                                                    'margin': '0 auto'
                                                }
                                            },
                                            style: {
                                                'display': 'flex',
                                                'flex-direction': 'row',
                                                'align-items': 'center'
                                            },
                                            classes: ['space-intro']
                                        }]
                                }]
                        }]
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].LearningActivity,
                    component: __WEBPACK_IMPORTED_MODULE_0__core_components_learning_activities_physics_function_question_physics_function_question_component__["a" /* PhysicsFunctionQuestionComponent */],
                    data: {
                        name: staticTxt.name,
                        variables: [{
                                name: 'adCableTension',
                                tag: staticTxt.variables.adCableTension.tag,
                                value: 400,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["b" /* ForceUnits */].Newton,
                                mutable: false
                            },
                            {
                                name: 'xDistance',
                                tag: staticTxt.variables.xDistance.tag,
                                value: 2,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: false
                            },
                            {
                                name: 'yDistance',
                                tag: staticTxt.variables.yDistance.tag,
                                value: 2.5,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: false
                            },
                            {
                                name: 'zDistance',
                                tag: staticTxt.variables.zDistance.tag,
                                value: 5,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: false
                            },
                            {
                                name: 'obDistance',
                                tag: staticTxt.variables.obDistance.tag,
                                value: 3,
                                unit: __WEBPACK_IMPORTED_MODULE_6__core_enums_units_enum__["c" /* LengthUnits */].Meter,
                                mutable: true,
                                ref: 'd',
                                min: 1,
                                max: 8
                            }],
                        statement: staticTxt.statement,
                        questions: [{
                                statement: staticTxt.questions[1].tag,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[3].getCableTensionAB(parseFloat(response), variables);
                                },
                                options: {
                                    type: 'number',
                                    placeholder: '14.37',
                                    pattern: /\d+(\.\d{1,2})*/
                                }
                            }, {
                                statement: staticTxt.questions[2].tag,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[3].getCableTensionAC(parseFloat(response), variables);
                                },
                                options: {
                                    type: 'number',
                                    placeholder: '14.37',
                                    pattern: /\d+(\.\d{1,2})*/
                                }
                            }, {
                                statement: staticTxt.questions[3].tag,
                                validateFn: function (response, variables) {
                                    return __WEBPACK_IMPORTED_MODULE_7__helpers_physics_helper__["a" /* physicsHelper */].scenario[1].exercise[3].getVerticalReactionInB(parseFloat(response), variables);
                                },
                                options: {
                                    type: 'number',
                                    placeholder: '14.37',
                                    pattern: /\d+(\.\d{1,2})*/
                                }
                            }],
                        SCORM: {
                            weight: 1,
                            type: __WEBPACK_IMPORTED_MODULE_5__core_enums_scorm_enum__["c" /* SCORMInteractionType */].FillIn
                        },
                        submitBtn: {
                            tag: staticTxt.btns.submit.tag
                        },
                        attempts: 3,
                        onSubmit: __WEBPACK_IMPORTED_MODULE_4__core_enums_interactions_enum__["b" /* InteractionSubmitAction */].DisplayModal
                    },
                    style: {
                        padding: '50px'
                    }
                }]
        }]
};
//# sourceMappingURL=first-scenario-third-exercise-2.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/introduction.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_introduction_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/slides/introduction-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slides_introduction_2_slide__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/slides/introduction-2.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slides_introduction_3_slide__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/slides/introduction-3.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slides_introduction_4_slide__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/slides/introduction-4.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slides_introduction_5_slide__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/slides/introduction-5.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slides_introduction_6_slide__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/slides/introduction-6.slide.ts");






var introductionSection = {
    id: 'intro',
    name: 'Introducción',
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_introduction_1_slide__["a" /* introductionSectionSlide1 */],
        __WEBPACK_IMPORTED_MODULE_1__slides_introduction_2_slide__["a" /* introductionSectionSlide2 */],
        __WEBPACK_IMPORTED_MODULE_2__slides_introduction_3_slide__["a" /* introductionSectionSlide3 */],
        __WEBPACK_IMPORTED_MODULE_3__slides_introduction_4_slide__["a" /* introductionSectionSlide4 */],
        __WEBPACK_IMPORTED_MODULE_4__slides_introduction_5_slide__["a" /* introductionSectionSlide5 */],
        __WEBPACK_IMPORTED_MODULE_5__slides_introduction_6_slide__["a" /* introductionSectionSlide6 */]
    ]
};
//# sourceMappingURL=introduction.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/slides/introduction-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.slides[1];
var introductionSectionSlide1 = {
    name: 'Introducción - 1',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro
                                                }]
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/deserted.jpg") no-repeat'
                    },
                    flex: 2
                }]
        }]
};
//# sourceMappingURL=introduction-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/slides/introduction-2.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSectionSlide2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.slides[2];
var introductionSectionSlide2 = {
    name: 'Introducción - 2',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/asteroid.jpg") no-repeat'
                    },
                    flex: 2
                },
                {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro
                                                }]
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }]
        }]
};
//# sourceMappingURL=introduction-2.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/slides/introduction-3.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSectionSlide3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.slides[3];
var introductionSectionSlide3 = {
    name: 'Introducción - 1',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro
                                                }]
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/dome-construction.jpg") no-repeat'
                    },
                    flex: 2
                }]
        }]
};
//# sourceMappingURL=introduction-3.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/slides/introduction-4.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSectionSlide4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.slides[4];
var introductionSectionSlide4 = {
    name: 'Introducción - 4',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/dome.jpg") no-repeat'
                    },
                    flex: 2
                },
                {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro
                                                }],
                                            style: {
                                                'flex-direction': 'column'
                                            }
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }]
        }]
};
//# sourceMappingURL=introduction-4.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/slides/introduction-5.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSectionSlide5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var staticTxt = __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.slides[5];
var introductionSectionSlide5 = {
    name: 'Introducción - 5',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_1__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro
                                                }],
                                            style: {
                                                'flex-direction': 'column'
                                            }
                                        }]
                                }]
                        }],
                    classes: ['space-intro'],
                    flex: 3
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_void_void_component__["a" /* VoidComponent */],
                    data: {},
                    classes: ['img-intro'],
                    style: {
                        background: 'url("assets/img/dome-3.jpg") no-repeat'
                    },
                    flex: 2
                }]
        }]
};
//# sourceMappingURL=introduction-5.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/slides/introduction-6.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSectionSlide6; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_basic_button_button_component__ = __webpack_require__("../../../../../src/app/core/components/basic/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_intro_slideshow_intro_slideshow_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/intro-slideshow/intro-slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_enums_element_action_enum__ = __webpack_require__("../../../../../src/app/core/enums/element-action.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");







var staticTxt = __WEBPACK_IMPORTED_MODULE_6__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.slides[6];
var introductionSectionSlide6 = {
    name: 'Introducción - 6',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_intro_slideshow_intro_slideshow_component__["a" /* IntroSlideShowComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_void_void_component__["a" /* VoidComponent */],
                                            data: {}
                                        }]
                                }, {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_1__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: staticTxt.intro
                                                }],
                                            style: {
                                                'flex-direction': 'column'
                                            }
                                        }]
                                }, {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_0__core_components_basic_button_button_component__["a" /* ButtonComponent */],
                                            data: {
                                                text: 'Regresar',
                                                target: 'scenarios'
                                            },
                                            actions: [__WEBPACK_IMPORTED_MODULE_4__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection],
                                            classes: ['return-to-menu'],
                                            style: {
                                                'flex-direction': 'column'
                                            }
                                        }]
                                }, {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_3__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_void_void_component__["a" /* VoidComponent */],
                                            data: {}
                                        }]
                                }]
                        }],
                    classes: ['space-intro', 'no-img'],
                    flex: 3
                }]
        }]
};
//# sourceMappingURL=introduction-6.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/scenarios/scenarios.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scenariosSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_scenarios_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/scenarios/slides/scenarios-1.slide.ts");

var scenariosSection = {
    id: 'scenarios',
    name: 'Escenarios',
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_scenarios_1_slide__["a" /* scenariosSectionSlide1 */]
    ]
};
//# sourceMappingURL=scenarios.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/scenarios/slides/scenarios-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scenariosSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");


var statement = 'Una vez instalado el domo, empieza el proceso de colonización del planeta, en dos sectores ' +
    'donde la superficie del planeta era relativamente plana. En el primer sector estaban las grandes ' +
    'construcciones para las colonias y en el segundo sector las grandes granjas para garantizar la ' +
    'seguridad alimentaria. En el interior del domo se mantiene una gravedad artificial de 10m/s2.';
var scenariosSectionSlide1 = {
    name: 'Starting Colonization',
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_0__core_components_content_organizers_dynamic_overlap_menu_dynamic_overlap_menu_component__["a" /* DynamicOverlapMenuComponent */],
                    data: {
                        defaultSelection: 'Asteroide XXC1',
                        bgImage: 'assets/img/asteroid-bg.png',
                        btns: [{
                                tag: 'Introducción',
                                width: 40,
                                top: 53.5,
                                left: 4,
                                target: 'intro',
                                validateSection: '',
                                disableOnInteractions: false,
                                disableOnVisit: false,
                                bgImages: {
                                    normal: 'asteroid-city.png',
                                    hover: 'asteroid-city-hover.png',
                                    disabled: 'asteroid-city-disabled.png'
                                }
                            }, {
                                tag: 'Ejercicio 1',
                                width: 22,
                                top: 16,
                                left: 20,
                                target: 'scene1exercise1',
                                validateSection: 'intro',
                                disableOnInteractions: false,
                                disableOnVisit: true,
                                bgImages: {
                                    normal: 'asteroid-dome-section.png',
                                    hover: 'asteroid-dome-section-hover.png',
                                    disabled: 'asteroid-dome-section-disabled.png'
                                }
                            }, {
                                tag: 'Ejercicio 2',
                                width: 30,
                                top: 60,
                                left: 60,
                                target: 'scene1exercise2',
                                validateSection: 'scene1exercise1',
                                disableOnInteractions: true,
                                disableOnVisit: false,
                                bgImages: {
                                    normal: 'asteroid-farm.png',
                                    hover: 'asteroid-farm-hover.png',
                                    disabled: 'asteroid-farm-disabled.png'
                                }
                            }, {
                                tag: 'Ejercicio 3',
                                width: 24,
                                top: 31,
                                left: 41,
                                target: 'scene1exercise3',
                                validateSection: 'scene1exercise2',
                                disableOnInteractions: true,
                                disableOnVisit: false,
                                bgImages: {
                                    normal: 'asteroid-antenna.png',
                                    hover: 'asteroid-antenna-hover.png',
                                    disabled: 'asteroid-antenna-disabled.png'
                                }
                            }]
                    },
                    style: {
                        'flex-direction': 'row',
                        'align-items': 'center'
                    }
                }]
        }],
    classes: ['asteroid-scene']
};
//# sourceMappingURL=scenarios-1.slide.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/montserrat/Montserrat-Regular.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Regular.cfb2ae7c14f4bef92bfb.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/montserrat/Montserrat-Regular.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Regular.83dc13fb3f396ace7764.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/montserrat/Montserrat-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Regular.22c1f3364ea955e2e83e.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/montserrat/Montserrat-Regular.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Regular.ef093416b31930dc4563.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/montserrat/Montserrat-Regular.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Regular.e97a1f550e392c2f11c2.woff2";

/***/ }),

/***/ "../../../../../src/assets/img/space.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "space.f72858297677fb303154.gif";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map