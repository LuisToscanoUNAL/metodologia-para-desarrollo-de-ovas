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

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  font-family: \"Ancizar sans\", Tahoma, Geneva, sans-serif; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lo_i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lo_lo_extras__ = __webpack_require__("../../../../../src/app/lo/lo.extras.ts");
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
            title: __WEBPACK_IMPORTED_MODULE_3__lo_i18n_lo_i18n__["a" /* LOi18n */].title,
            subtitle: __WEBPACK_IMPORTED_MODULE_3__lo_i18n_lo_i18n__["a" /* LOi18n */].layout.mainHeader.subtitle.prefix + ' ' + __WEBPACK_IMPORTED_MODULE_3__lo_i18n_lo_i18n__["a" /* LOi18n */].teacher,
            unit: {
                number: __WEBPACK_IMPORTED_MODULE_3__lo_i18n_lo_i18n__["a" /* LOi18n */].layout.breadcrumb.prefix + ' ' + 0,
                name: __WEBPACK_IMPORTED_MODULE_3__lo_i18n_lo_i18n__["a" /* LOi18n */].unit
            },
            menuBars: __WEBPACK_IMPORTED_MODULE_4__lo_lo_extras__["a" /* LOExtras */].menuBars,
            navBars: {
                inner: __WEBPACK_IMPORTED_MODULE_3__lo_i18n_lo_i18n__["a" /* LOi18n */].layout.navBars.inner
            },
            copyright: __WEBPACK_IMPORTED_MODULE_4__lo_lo_extras__["a" /* LOExtras */].copyright
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LOState.init();
        this.LOCurrentState = this.LOState.getCurrentState();
        this.subscription = this.LOState.LOStateChanged.subscribe(function (state) {
            _this.LOCurrentState = Object.assign({}, state);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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
    CourseColumnComponent.prototype.ngAfterContentInit = function () {
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

module.exports = "<course-row\r\n*ngFor='let row of rows; trackBy: index;'\r\n[style.flex]=\"row.flex\"\r\n[cols]=\"row.cols\"\r\n[LOCurrentState]=\"LOCurrentState\"\r\n[ngStyle]=\"row.getStyle()\"\r\n[ngClass]=\"row.getClasses()\"\r\n></course-row>"

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
    CourseContentComponent.prototype.ngOnChanges = function () {
        this.rows = this.LOCurrentState.position.section.slide(this.LOCurrentState.position.slide).getRows();
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

module.exports = "<course-column\r\n*ngFor='let col of colArray; trackBy: index;'\r\n[componentInner]=\"col.getContent()\"\r\n[style.flex]=\"col.flex\"\r\n[LOCurrentState]=\"LOCurrentState\"\r\n[ngStyle]=\"col.getStyle()\"\r\n[ngClass]=\"col.getClasses()\"></course-column>"

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
    CourseRowComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.cols && changes.cols.currentValue) {
            this.colArray = this.cols;
        }
    };
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

module.exports = "<button *ngIf=\"text\" \r\n    [ngStyle]=\"btnStyle\"\r\n    [ngClass]=\"{'is-active': isActive()}\"\r\n    (click)=\"onClick()\">{{text}}\r\n</button>"

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

/***/ "../../../../../src/app/core/components/basic/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lo-download\">\r\n    <img [src]=\"innerDownloadData.img\" />\r\n    <a [href]=\"innerDownloadData.url\" class=\"btn\">\r\n        {{innerDownloadData.text}}\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/download/download.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lo-download {\n  background: #E1E0DA;\n  max-width: 250px;\n  border-radius: 5px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 10px 20px; }\n  .lo-download a.btn {\n    background: -webkit-linear-gradient(top, #c48e00 0px, #a27500 100%);\n    border: 1px solid #f0ae00;\n    border-radius: 3px;\n    color: #fff !important;\n    display: inline-block;\n    font-weight: 700;\n    line-height: 1.3;\n    padding: 8px 25px;\n    text-align: center;\n    text-decoration: none !important;\n    text-shadow: 1px 1px 1px #644900;\n    -moz-text-shadow: 1px 1px 1px #644900;\n    -ms-text-shadow: 1px 1px 1px #644900;\n    -o-text-shadow: 1px 1px 1px #644900;\n    -webkit-text-shadow: 1px 1px 1px #644900;\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/basic/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
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

var DownloadComponent = (function () {
    function DownloadComponent() {
        this.downloadData = {
            text: "",
            url: "",
            img: null
        };
        this.innerDownloadData = {
            text: "",
            url: "",
            img: null
        };
        this.data = {
            text: "",
            url: "",
            img: null
        };
    }
    DownloadComponent.prototype.ngOnInit = function () {
        this.innerDownloadData.text = this.data.text
            ? this.data.text
            : this.downloadData.text;
        this.innerDownloadData.img = this.data.img
            ? this.data.img
            : this.downloadData.img;
        this.innerDownloadData.url = this.data.url
            ? this.data.url
            : this.downloadData.url;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DownloadComponent.prototype, "downloadData", void 0);
    DownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "lo-download",
            template: __webpack_require__("../../../../../src/app/core/components/basic/download/download.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/basic/download/download.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadComponent);
    return DownloadComponent;
}());

//# sourceMappingURL=download.component.js.map

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

/***/ "../../../../../src/app/core/components/basic/link/link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lo-link\">\r\n    <img *ngIf=\"innerLinkData.img\" [src]=\"innerLinkData.img\" class=\"link-img\" />\r\n    <a [href]=\"innerLinkData.url\" class=\"link-txt\">{{innerLinkData.text}}</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/link/link.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lo-link .link-img, .lo-link .link-txt {\n  display: inline-block;\n  vertical-align: middle; }\n\n.lo-link .link-img {\n  width: 30px;\n  height: 30px;\n  margin-right: 5px; }\n\n.lo-link .link-txt {\n  font-size: 15px;\n  text-decoration: none;\n  color: #ad8114; }\n  .lo-link .link-txt:hover {\n    color: #577B65;\n    text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/basic/link/link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkComponent; });
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

var LinkComponent = (function () {
    function LinkComponent() {
        this.linkData = {
            text: "",
            url: "",
            img: null
        };
        this.innerLinkData = {
            text: "",
            url: "",
            img: null
        };
        this.data = {
            text: "",
            url: "",
            img: null
        };
    }
    LinkComponent.prototype.ngOnInit = function () {
        this.innerLinkData.text = this.data.text
            ? this.data.text
            : this.linkData.text;
        this.innerLinkData.img = this.data.img
            ? this.data.img
            : this.linkData.img;
        this.innerLinkData.url = this.data.url
            ? this.data.url
            : this.linkData.url;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "linkData", void 0);
    LinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "lo-link",
            template: __webpack_require__("../../../../../src/app/core/components/basic/link/link.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/basic/link/link.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkComponent);
    return LinkComponent;
}());

//# sourceMappingURL=link.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lo-list\">\r\n    <ng-container *ngIf=\"numbered; then numberedList; else regularList;\"></ng-container>  \r\n</div>\r\n\r\n<ng-template #numberedList>\r\n    <ul class=\"numbered\">\r\n        <li *ngFor=\"let el of elements; let i = index\"> \r\n            <div class=\"idx-number\">{{i}}</div>\r\n            <span>{{el}}</span>\r\n        </li>\r\n    </ul>\r\n</ng-template>\r\n\r\n<ng-template #regularList>\r\n    <ul class=\"regular\">\r\n        <li *ngFor=\"let el of elements\">{{el}}</li>\r\n    </ul>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lo-list ul {\n  font-size: 16px;\n  margin: 5px 0; }\n  .lo-list ul.numbered {\n    list-style: none; }\n    .lo-list ul.numbered li {\n      margin-bottom: 10px; }\n      .lo-list ul.numbered li .idx-number {\n        border-radius: 100%;\n        background: red;\n        color: white;\n        padding: 5px 10px;\n        margin-right: 10px;\n        display: inline-block;\n        font-size: 14px; }\n  .lo-list ul.regular {\n    list-style: circle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/basic/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
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

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        this.elements = this.data && this.data.elements ? this.data.elements : this.elements;
        this.numbered = this.data && this.data.numbered ? this.data.numbered : this.numbered;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "elements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "numbered", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-list',
            template: __webpack_require__("../../../../../src/app/core/components/basic/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/basic/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/basic/paragraph/paragraph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"paragraph-container\">\r\n    <p *ngFor=\"let paragraph of paragraphs\" [innerHtml]=\"paragraph.innerHtml | safeHtml\"></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/paragraph/paragraph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host::ng-deep span.bold {\n  font-weight: bold;\n  color: #333; }\n\n:host::ng-deep span.italic {\n  font-style: italic; }\n", ""]);

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
    ParagraphComponent.prototype.ngOnInit = function () {
        this.paragraphs = this.attributeData ? this.attributeData : this.data;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](this.paragraphs, this.processParagraphs.bind(this));
    };
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ParagraphClass; });
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

module.exports = "<div class=\"lo-title\">\r\n    <i *ngIf=\"iconClass\" class=\"fas fa-2x\" [ngClass]=\"'fa-' + iconClass\"></i>\r\n    <h1> {{ title }} </h1>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/basic/title/title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  :host div {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center;\n    color: #6b8375; }\n    :host div ::ng-deep i {\n      margin-right: 10px; }\n    :host div ::ng-deep h1 {\n      margin: 0px;\n      font-size: 20px;\n      color: black;\n      font-weight: normal; }\n", ""]);

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
        this.title = this.data && this.data.title ? this.data.title : this.title;
        this.iconClass = this.data && this.data.iconClass ? this.data.iconClass : this.iconClass;
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

/***/ "../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lo-character-dialog\">\r\n    <div class=\"character\">\r\n        <img [src]=\"innerCharacterDialogData.character\" />\r\n    </div>\r\n    <div class=\"dialog-container\">\r\n        <div class=\"outer-border\">\r\n            <div class=\"dialog\" #dialog>\r\n                <paragraph [attributeData]=\"innerCharacterDialogData.paragraphs\"></paragraph>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .lo-character-dialog {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1; }\n  :host .lo-character-dialog .character {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1;\n        flex: 1; }\n    :host .lo-character-dialog .character img {\n      margin: 0 0 0 auto; }\n  :host .lo-character-dialog .dialog-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex: 2;\n        flex: 2; }\n    :host .lo-character-dialog .dialog-container .outer-border {\n      width: 80%;\n      background: url(\"./assets/img/bocadillo.png\");\n      background-repeat: no-repeat;\n      background-size: 100% 100%;\n      margin-top: -100px; }\n      :host .lo-character-dialog .dialog-container .outer-border .dialog {\n        margin-left: 25%;\n        margin-top: 40px;\n        padding: 10px 40px 20px 15px; }\n        :host .lo-character-dialog .dialog-container .outer-border .dialog ::ng-deep p {\n          margin-top: 0px;\n          text-align: center;\n          font-size: 22px;\n          color: #333; }\n        :host .lo-character-dialog .dialog-container .outer-border .dialog ::ng-deep .dialog-header {\n          font-size: 24px;\n          color: #262262; }\n        :host .lo-character-dialog .dialog-container .outer-border .dialog ::ng-deep .dialog-highlight {\n          color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterDialogComponent; });
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

var CharacterDialogComponent = (function () {
    function CharacterDialogComponent() {
        this.characterDialogData = {
            character: "",
            paragraphs: []
        };
        this.innerCharacterDialogData = {
            character: "",
            paragraphs: []
        };
    }
    CharacterDialogComponent.prototype.ngOnInit = function () {
        this.innerCharacterDialogData.character =
            this.data && this.data.character
                ? this.data.character
                : this.characterDialogData.character;
        this.innerCharacterDialogData.paragraphs =
            this.data && this.data.paragraphs
                ? this.data.paragraphs
                : this.characterDialogData.paragraphs;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CharacterDialogComponent.prototype, "characterDialogData", void 0);
    CharacterDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "lo-character-dialog",
            template: __webpack_require__("../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CharacterDialogComponent);
    return CharacterDialogComponent;
}());

//# sourceMappingURL=character-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"simple-container\" *ngIf=\"current\">\r\n    <course-row *ngFor='let row of current.rows'\r\n        [style.flex]=\"row.flex\"\r\n        [cols]=\"row.cols\"\r\n        [ngStyle]=\"row.getStyle()\"\r\n        [ngClass]=\"row.getClasses()\"\r\n        ></course-row>\r\n</div>"

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

/***/ "../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <course-content [LOCurrentState]=\"LOCurrentState\" [ngStyle]=\"getSlideStyle()\"></course-content>\r\n</div>"

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

/***/ "../../../../../src/app/core/components/layout/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-container\">\r\n  <div class=\"content\">\r\n    <div class=\"breadcrumb\"><b>{{unit.number}}</b> / {{unit.name}}</div>\r\n    <div class=\"volume-shadow\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .breadcrumb-container {\n  width: 100%;\n  min-height: 24px;\n  -ms-flex: 1;\n      flex: 1;\n  background: #F0EDC8;\n  position: relative; }\n  :host .breadcrumb-container .content {\n    position: absolute;\n    width: 960px;\n    height: 38px;\n    background: #FCFAE0;\n    left: calc(50% - 480px - 10px);\n    top: -7px; }\n    :host .breadcrumb-container .content .breadcrumb {\n      padding: 11px 20px;\n      color: #558265;\n      font-family: sans-serif;\n      font-size: 16px; }\n    :host .breadcrumb-container .content .volume-shadow {\n      position: absolute;\n      border-bottom: 12px solid #dcdab1;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      height: 0;\n      top: 12px;\n      width: 28px;\n      right: -26px;\n      transform: rotate(90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_lo_unit_interface__ = __webpack_require__("../../../../../src/app/core/interfaces/lo-unit.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_lo_unit_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_lo_unit_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_lo_unit_interface__["LOUnit"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_lo_unit_interface__["LOUnit"]) === "function" && _a || Object)
    ], BreadcrumbComponent.prototype, "unit", void 0);
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-breadcrumb',
            template: __webpack_require__("../../../../../src/app/core/components/layout/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
    var _a;
}());

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/copyright/copyright.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"iconset\">\r\n        <img src=\"./assets/img/licencia.png\" />\r\n    </div>\r\n    <div class=\"text\">\r\n        <paragraph [attributeData]=\"copyright\"></paragraph>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/copyright/copyright.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n  :host .container {\n    width: 900px;\n    margin: 0 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row; }\n    :host .container .iconset {\n      -ms-flex: 1;\n          flex: 1;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center;\n      display: -ms-flexbox;\n      display: flex; }\n    :host .container .text {\n      -ms-flex: 5;\n          flex: 5;\n      font-size: 11px;\n      color: #999;\n      font-family: sans-serif;\n      text-align: center;\n      font-weight: bold; }\n      :host .container .text ::ng-deep a {\n        color: #F0B31C; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/copyright/copyright.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyrightComponent; });
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

var CopyrightComponent = (function () {
    function CopyrightComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CopyrightComponent.prototype, "copyright", void 0);
    CopyrightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-copyright',
            template: __webpack_require__("../../../../../src/app/core/components/layout/copyright/copyright.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/copyright/copyright.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CopyrightComponent);
    return CopyrightComponent;
}());

//# sourceMappingURL=copyright.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/course-container/course-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n    <lo-inner-nav-bar\r\n      [prefix]=\"innerNavBarData.section.prefix\"\r\n      [nextBtnTag]=\"innerNavBarData.btns.next.tag\"\r\n      [previousBtnTag]=\"innerNavBarData.btns.previous.tag\"></lo-inner-nav-bar>\r\n    <course-content\r\n        [ngClass]=\"getContentClasses()\"\r\n        [ngStyle]=\"getSlideStyle()\"\r\n        [LOCurrentState]=\"LOCurrentState\"\r\n    ></course-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/course-container/course-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  :host .container {\n    width: 100%;\n    min-height: 24px;\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    :host .container .content {\n      -ms-flex-direction: column;\n          flex-direction: column;\n      margin: 0 auto;\n      width: 960px;\n      background: white;\n      left: 25.5%;\n      border: 3px solid #77BB9E;\n      border-radius: 10px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex: 1;\n          flex: 1;\n      height: 100%;\n      overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/course-container/course-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseContainerComponent; });
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

var CourseContainerComponent = (function () {
    function CourseContainerComponent() {
    }
    CourseContainerComponent.prototype.getSlideStyle = function () {
        var position = this.LOCurrentState.position;
        return position.section.slide(position.slide).getStyle();
    };
    CourseContainerComponent.prototype.getContentClasses = function () {
        var sectionId = this.LOCurrentState.position.section.getId();
        var slideClasses = Array.from(this.LOCurrentState.position.section.slide(this.LOCurrentState.position.slide).getClasses());
        slideClasses.unshift(sectionId);
        return slideClasses;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CourseContainerComponent.prototype, "LOCurrentState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CourseContainerComponent.prototype, "innerNavBarData", void 0);
    CourseContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-course-container',
            template: __webpack_require__("../../../../../src/app/core/components/layout/course-container/course-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/course-container/course-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseContainerComponent);
    return CourseContainerComponent;
}());

//# sourceMappingURL=course-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/inner-nav-bar/inner-nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"where\">\r\n   <span class=\"prefix\">{{prefix}} </span> {{section.name}}\r\n</div>\r\n<div class=\"navigation\">\r\n    <title [title]=\"section.name\" [iconClass]=\"section.icon\"></title>\r\n    <div class=\"nav\" *ngIf=\"shouldDisplayBothBtn\">\r\n        <div class=\"nav-container\">\r\n            <div class=\"before\" *ngIf=\"shouldDisplayLeftBtn\">\r\n                <div class=\"wrapper\" (click)=\"previous()\"><div><i class=\"fas fa-3x fa-angle-left\"></i> <span>{{previousBtnTag}}</span></div></div>\r\n            </div>\r\n            <div class=\"position\"> <div class=\"inner\"> {{position}} </div> </div>\r\n            <div class=\"after\" *ngIf=\"shouldDisplayRightBtn\">\r\n                <div class=\"wrapper\" (click)=\"next()\"><div><span>{{nextBtnTag}}</span><i class=\"fas fa-3x fa-angle-right\"></i></div></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/inner-nav-bar/inner-nav-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 10px 10px 0 10px;\n  max-height: 80px; }\n  :host .where {\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex: 1;\n        flex: 1;\n    background-color: #d8ecdf;\n    color: #666;\n    -ms-flex-align: center;\n        align-items: center;\n    border-radius: 5px;\n    font-size: 12px;\n    font-family: sans-serif;\n    max-height: 25px;\n    margin-bottom: 10px; }\n    :host .where .prefix {\n      font-weight: bold;\n      margin-left: 10px; }\n  :host .navigation {\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex: 3;\n        flex: 3;\n    font-family: sans-serif;\n    border-bottom: 1px dotted #6b8375;\n    max-height: 35px;\n    padding-bottom: 10px; }\n    :host .navigation title {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex: 1;\n          flex: 1;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center; }\n      :host .navigation title::ng-deep h1 {\n        font-size: 24px;\n        font-weight: normal;\n        color: #6b8375; }\n    :host .navigation .nav {\n      -ms-flex: 1;\n          flex: 1;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n      :host .navigation .nav .nav-container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex: 1;\n            flex: 1; }\n        :host .navigation .nav .nav-container .before, :host .navigation .nav .nav-container .after {\n          -ms-flex-align: center;\n              align-items: center;\n          color: #f0b31c;\n          font-size: 13px; }\n          :host .navigation .nav .nav-container .before span, :host .navigation .nav .nav-container .after span {\n            color: #6b8275; }\n          :host .navigation .nav .nav-container .before:hover, :host .navigation .nav .nav-container .after:hover {\n            color: #D5D11F; }\n            :host .navigation .nav .nav-container .before:hover span, :host .navigation .nav .nav-container .after:hover span {\n              color: #D5D11F; }\n        :host .navigation .nav .nav-container .before .wrapper {\n          cursor: pointer;\n          -ms-flex-direction: column;\n              flex-direction: column;\n          -ms-flex-align: end;\n              align-items: flex-end;\n          -ms-flex: 1;\n              flex: 1; }\n          :host .navigation .nav .nav-container .before .wrapper > div {\n            -ms-flex-direction: row;\n                flex-direction: row;\n            -ms-flex: 1;\n                flex: 1;\n            -ms-flex-align: center;\n                align-items: center; }\n            :host .navigation .nav .nav-container .before .wrapper > div i {\n              margin-right: 5px; }\n        :host .navigation .nav .nav-container .after .wrapper {\n          cursor: pointer;\n          -ms-flex-direction: column;\n              flex-direction: column;\n          -ms-flex-align: start;\n              align-items: flex-start;\n          -ms-flex: 1;\n              flex: 1; }\n          :host .navigation .nav .nav-container .after .wrapper > div {\n            -ms-flex-direction: row;\n                flex-direction: row;\n            -ms-flex: 1;\n                flex: 1;\n            -ms-flex-align: center;\n                align-items: center; }\n            :host .navigation .nav .nav-container .after .wrapper > div i {\n              margin-left: 5px; }\n        :host .navigation .nav .nav-container .position {\n          margin: 0 8px;\n          max-width: 70px;\n          height: 30px; }\n          :host .navigation .nav .nav-container .position .inner {\n            font-size: 13px;\n            background: #EFEFEF;\n            border-radius: 5px;\n            color: #0b4373;\n            width: 100%;\n            text-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n            -ms-flex-direction: column;\n                flex-direction: column;\n            /* Safari/Chrome, other WebKit */\n            /* Firefox, other Gecko */\n            box-sizing: border-box;\n            padding: 8px 10px 0 10px; }\n        :host .navigation .nav .nav-container > div {\n          -ms-flex: 1;\n              flex: 1; }\n  :host div {\n    display: -ms-flexbox !important;\n    display: flex !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/inner-nav-bar/inner-nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerNavBarComponent; });
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


var InnerNavBarComponent = (function () {
    function InnerNavBarComponent(navigation) {
        this.navigation = navigation;
        this.section = {
            name: "",
            icon: "",
        };
    }
    InnerNavBarComponent.prototype.ngOnInit = function () {
        this.updateDisplay();
        this.navigation.getSlideChangedObservable().subscribe(this.updateDisplay.bind(this));
    };
    InnerNavBarComponent.prototype.next = function () {
        this.navigation.nextSlide();
    };
    InnerNavBarComponent.prototype.previous = function () {
        this.navigation.previousSlide();
    };
    InnerNavBarComponent.prototype.updateDisplay = function () {
        var position = this.navigation.getCurrentPosition();
        this.position = position.slide + 1 + " / " + position.totalSlides;
        this.section.icon = position.section.getIcon();
        this.section.name = position.section.getName();
        this.shouldDisplayBothBtn = !this.navigation.hasOnlyOneSlide();
        this.shouldDisplayLeftBtn = !this.navigation.isFirstSlide();
        this.shouldDisplayRightBtn = !this.navigation.isLastSlide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InnerNavBarComponent.prototype, "prefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InnerNavBarComponent.prototype, "previousBtnTag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InnerNavBarComponent.prototype, "nextBtnTag", void 0);
    InnerNavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-inner-nav-bar',
            template: __webpack_require__("../../../../../src/app/core/components/layout/inner-nav-bar/inner-nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/inner-nav-bar/inner-nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_navigation_provider__["a" /* NavigationProvider */]) === "function" && _a || Object])
    ], InnerNavBarComponent);
    return InnerNavBarComponent;
    var _a;
}());

//# sourceMappingURL=inner-nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lo-modal-container\" *ngIf=\"shouldDisplayModal\">\r\n    <div class=\"lo-modal-content\">\r\n        <div *ngIf=\"!hideCloseIcon\" (click)=\"close()\" class=\"lo-modal-close-icon\"><i class=\"fas fa-times-circle\"></i></div>\r\n        <div class=\"lo-modal-content-scroll\">\r\n            <course-column\r\n                [LOCurrentState]=\"LOCurrentState\"\r\n                [componentInner]=\"innerComponent\">\r\n            </course-column>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host .lo-modal-container {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  left: 0; }\n  :host .lo-modal-container .lo-modal-content {\n    position: relative;\n    margin: 0 auto;\n    border-radius: 25px;\n    background: white;\n    width: 45%;\n    height: 50%;\n    padding: 20px;\n    display: -ms-flexbox;\n    display: flex; }\n    :host .lo-modal-container .lo-modal-content .lo-modal-close-icon {\n      position: absolute;\n      right: -40px;\n      top: -40px;\n      z-index: 1001;\n      color: #D2ECD6;\n      font-size: 2.3em; }\n      :host .lo-modal-container .lo-modal-content .lo-modal-close-icon:hover {\n        cursor: pointer;\n        color: #D2ECD6; }\n      :host .lo-modal-container .lo-modal-content .lo-modal-close-icon:active {\n        cursor: pointer;\n        color: #11434A; }\n    :host .lo-modal-container .lo-modal-content .lo-modal-content-scroll {\n      overflow-y: auto;\n      width: 100%; }\n", ""]);

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
        this.hideCloseIcon = false;
        this.shouldDisplayModal = false;
    }
    LOModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkChangesSubscription = this.modal.modalContentChange.subscribe(function (component) {
            _this.innerComponent = component;
            _this.shouldDisplayModal = !!component;
        });
    };
    LOModalComponent.prototype.ngOnDestroy = function () {
        if (this.checkChangesSubscription) {
            this.checkChangesSubscription.unsubscribe();
        }
    };
    LOModalComponent.prototype.close = function () {
        this.modal.hideModal();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LOModalComponent.prototype, "LOCurrentState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LOModalComponent.prototype, "hideCloseIcon", void 0);
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

/***/ "../../../../../src/app/core/components/layout/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gray-space\"></div>\r\n<div class=\"main\">\r\n  <div class=\"space\"></div>\r\n  <div class=\"content\">\r\n    <div class=\"text\">\r\n      <div class=\"title\">{{title}}</div>\r\n      <div class=\"separator\"></div>\r\n      <div class=\"subtitle\">{{subtitle}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"space\"></div>\r\n</div>\r\n<div class=\"unal-logo-container\">\r\n  <img src=\"./assets/img/escudo_UNAL.png\" />\r\n</div>\r\n<div class=\"colombia-seal-container\">\r\n  <img src=\"./assets/img/escudo_Colombia.png\" />\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/main-header/main-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  min-height: 160px;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  position: relative; }\n  :host div {\n    display: -ms-flexbox;\n    display: flex; }\n    :host div.gray-space {\n      -ms-flex: 1;\n          flex: 1;\n      background-color: #666666;\n      height: 30px; }\n    :host div.main {\n      -ms-flex: 3;\n          flex: 3;\n      max-height: 130px;\n      background: url(\"./assets/img/fondo_header.jpg\");\n      background-size: auto 100%;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n      :host div.main .space {\n        -ms-flex: 1;\n            flex: 1;\n        -ms-flex-positive: 4;\n            flex-grow: 4; }\n      :host div.main .content {\n        -ms-flex: 5;\n            flex: 5;\n        -ms-flex-negative: 3;\n            flex-shrink: 3; }\n        :host div.main .content .text {\n          box-shadow: 0px 0px 50px #666666;\n          background: #8EBB9F;\n          -ms-flex: 1;\n              flex: 1;\n          -ms-flex-direction: column;\n              flex-direction: column;\n          margin: 10px 0;\n          border-top-right-radius: 50px;\n          border-bottom-right-radius: 50px;\n          padding: 10px 0; }\n          :host div.main .content .text .title, :host div.main .content .text .subtitle {\n            -ms-flex: 2;\n                flex: 2;\n            text-align: center;\n            padding: 0px;\n            color: #FEFAC7;\n            font-family: sans-serif;\n            text-shadow: 2px 2px 2px #585858;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n          :host div.main .content .text .title {\n            -ms-flex: 1;\n                flex: 1;\n            font-size: 30px;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n            font-weight: bold;\n            margin-top: 5px; }\n          :host div.main .content .text .subtitle {\n            font-size: 16px;\n            -ms-flex-pack: start;\n                justify-content: flex-start; }\n          :host div.main .content .text .separator {\n            -ms-flex: 1;\n                flex: 1;\n            width: 30%;\n            margin: 10px auto 15px auto;\n            background: #FEFAC7;\n            min-height: 1px;\n            height: 1px;\n            max-height: 1px; }\n    :host div.unal-logo-container {\n      height: 85%;\n      position: absolute;\n      background: url(\"./assets/img/sealBack.png\");\n      background-size: 100% 100%;\n      left: 10px;\n      top: 0px;\n      width: 12%; }\n      :host div.unal-logo-container img {\n        width: 80%;\n        height: 60%;\n        margin: 30px auto 0 auto; }\n    :host div.colombia-seal-container {\n      height: 40%;\n      position: absolute;\n      right: 10px;\n      top: 0px;\n      width: auto; }\n      :host div.colombia-seal-container img {\n        margin-top: 60%;\n        width: auto;\n        height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/main-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
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

var MainHeaderComponent = (function () {
    function MainHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], MainHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], MainHeaderComponent.prototype, "subtitle", void 0);
    MainHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-main-header',
            template: __webpack_require__("../../../../../src/app/core/components/layout/main-header/main-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/main-header/main-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());

//# sourceMappingURL=main-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-submit-modal\"\r\n    [ngClass]=\"{'error': !correct, 'success': correct}\"\r\n    *ngIf=\"data\">\r\n    <h1 class=\"activity-submit-modal-title\">\r\n        {{i18n.title}}\r\n    </h1>\r\n    <div class=\"result-icon-container\">\r\n        <i *ngIf=\"correct\" class=\"fas fa-check-circle result-icon\"></i>\r\n        <i *ngIf=\"!correct\" class=\"fas fa-times-circle result-icon\"></i>\r\n    </div>\r\n    <h2 class=\"activity-submit-modal-msg\">\r\n        {{i18n.msg}}\r\n    </h2>\r\n    <p class=\"activity-submit-modal-reminder\">\r\n        <span *ngIf=\"!correct && remainingAttempts > 0\">\r\n            {{i18n.reminder.attemptsRemainingBefore}} {{remainingAttempts}}\r\n            <span *ngIf=\"remainingAttempts > 1\">{{i18n.reminder.attemptsRemainingAfterPlural}}</span>\r\n            <span *ngIf=\"remainingAttempts === 1\">{{i18n.reminder.attemptsRemainingAfterSingular}}</span>\r\n        </span>\r\n        <span *ngIf=\"!correct && remainingAttempts === 0\">\r\n            {{i18n.reminder.noAttemptsRemaining}}\r\n        </span>\r\n    </p>\r\n    <div class=\"back-to-menu-container\">\r\n        <button class=\"back-to-menu\" *ngIf=\"correct\" (click)=\"backToMenu()\">Regresar al menú</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/activity-submit/activity-submit-modal.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host .activity-submit-modal .activity-submit-modal-title {\n  font-weight: bolder;\n  text-align: center;\n  border-bottom: solid 5px;\n  padding-bottom: 20px;\n  margin-bottom: 0; }\n\n:host .activity-submit-modal .result-icon-container {\n  padding: 25px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host .activity-submit-modal .result-icon-container .result-icon {\n    font-size: 8rem; }\n\n:host .activity-submit-modal .activity-submit-modal-msg {\n  text-align: center;\n  margin-top: 0; }\n\n:host .activity-submit-modal .activity-submit-modal-reminder {\n  text-align: center;\n  font-size: 1.2rem; }\n\n:host .activity-submit-modal .back-to-menu-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center; }\n  :host .activity-submit-modal .back-to-menu-container .back-to-menu {\n    border-radius: 10px;\n    height: 50px;\n    width: 250px;\n    font-size: 1.2rem;\n    border: 3px solid #11434A;\n    background: white;\n    color: #11434A; }\n    :host .activity-submit-modal .back-to-menu-container .back-to-menu:hover {\n      border-color: white;\n      background: #11434A;\n      color: white; }\n    :host .activity-submit-modal .back-to-menu-container .back-to-menu:disabled {\n      border-color: dimgray;\n      background: lightgray;\n      color: gray; }\n\n:host .activity-submit-modal.error .activity-submit-modal-title {\n  color: darkred;\n  border-color: darkred; }\n\n:host .activity-submit-modal.error .result-icon-container .result-icon {\n  color: darkred; }\n\n:host .activity-submit-modal.success .activity-submit-modal-title {\n  color: green;\n  border-color: green; }\n\n:host .activity-submit-modal.success .result-icon-container .result-icon {\n  color: green; }\n", ""]);

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

module.exports = "<div class=\"lo-completion-modal\">\r\n        <h1 class=\"lo-completion-modal-title\">\r\n            ¡Muchas Gracias!\r\n        </h1>\r\n        <div class=\"icon-container\">\r\n            <i class=\"fas fa-user-astronaut\"></i>\r\n        </div>\r\n\r\n        <h2 class=\"lo-completion-modal-msg\">\r\n            A través de tu ayuda, los seres humanos han logrado establecerse en el asteroide XXC1.\r\n        </h2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/modals/lo-completion-modal/lo-completion-modal.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host .lo-completion-modal {\n  padding: 20px; }\n  :host .lo-completion-modal .lo-completion-modal-title {\n    font-weight: bolder;\n    text-align: center;\n    border-bottom: solid 5px;\n    padding-bottom: 20px;\n    margin-bottom: 0;\n    color: #3B0D8D; }\n  :host .lo-completion-modal .icon-container {\n    padding: 25px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    margin: 10px 0; }\n    :host .lo-completion-modal .icon-container i {\n      font-size: 8rem;\n      color: #643DBF; }\n  :host .lo-completion-modal .lo-completion-modal-msg {\n    text-align: center;\n    margin-top: 0; }\n", ""]);

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

/***/ "../../../../../src/app/core/components/layout/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar-container\">\r\n        <div class=\"menu-element\"\r\n        *ngFor=\"let element of elements\"\r\n        [ngClass]=\"getElementClass(element)\"\r\n        (click)=\"elementClick(element)\">\r\n        <div class=\"menu-element-content\">\r\n            <i class=\"fas fa-lg\" [ngClass]=\"'fas fa-' + element.icon\"></i>\r\n            <span>{{element.text}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/nav-bar/nav-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .nav-bar-container {\n  width: 960px;\n  margin: 0 auto;\n  min-height: 24px;\n  background: url(\"./assets/img/fondo_navegacion.jpg\"); }\n  :host .nav-bar-container .menu-element {\n    min-height: 20px;\n    background: #F0B31C;\n    display: inline-table;\n    border-radius: 5px;\n    padding: 8px 10px 8px 5px;\n    cursor: pointer; }\n    :host .nav-bar-container .menu-element:not(:last-of-type) {\n      margin-right: 10px; }\n    :host .nav-bar-container .menu-element.is-active {\n      background: #79A088; }\n      :host .nav-bar-container .menu-element.is-active .menu-element-content span {\n        color: white; }\n    :host .nav-bar-container .menu-element:hover:not(.is-active) {\n      background: #D5D11F; }\n    :host .nav-bar-container .menu-element .menu-element-content {\n      display: table-cell;\n      vertical-align: middle;\n      color: white; }\n      :host .nav-bar-container .menu-element .menu-element-content span {\n        color: #558265;\n        text-transform: uppercase;\n        font-weight: bold;\n        font-family: sans-serif;\n        margin-left: 10px;\n        font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
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

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.getElementClass = function (el) {
        return el.isActive && el.isActive() ? 'is-active' : '';
    };
    NavBarComponent.prototype.elementClick = function (el) {
        if (el.onClick) {
            el.onClick();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NavBarComponent.prototype, "elements", void 0);
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-nav-bar',
            template: __webpack_require__("../../../../../src/app/core/components/layout/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/layout/secondary-nav-bar/secondary-nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"menu-element\"\r\n    *ngFor=\"let element of elements\"\r\n    [ngClass]=\"getElementClass(element)\"\r\n    (click)=\"elementClick(element)\">\r\n        <div class=\"menu-element-content\">\r\n            <span>{{element.text}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/secondary-nav-bar/secondary-nav-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .container {\n  width: 960px;\n  min-height: 24px;\n  margin: 0 auto;\n  background: #AAA9A9;\n  border-radius: 5px;\n  padding: 0 20px;\n  /* Safari/Chrome, other WebKit */\n  /* Firefox, other Gecko */\n  box-sizing: border-box;\n  position: relative; }\n  :host .container .menu-element {\n    min-height: 20px;\n    display: inline-table;\n    /* Safari/Chrome, other WebKit */\n    /* Firefox, other Gecko */\n    box-sizing: border-box;\n    cursor: pointer;\n    padding: 0 10px;\n    height: 95%; }\n    :host .container .menu-element:not(:last-of-type) {\n      margin-right: 0px; }\n    :host .container .menu-element.is-active {\n      background: #E7E7E7; }\n      :host .container .menu-element.is-active .menu-element-content span {\n        color: #698373; }\n    :host .container .menu-element:hover:not(.is-active) {\n      background: #666666; }\n    :host .container .menu-element:last-of-type {\n      position: absolute;\n      right: 5px; }\n    :host .container .menu-element .menu-element-content {\n      display: table-cell;\n      vertical-align: middle;\n      color: white; }\n      :host .container .menu-element .menu-element-content span {\n        color: white;\n        font-weight: bold;\n        font-family: sans-serif;\n        font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/secondary-nav-bar/secondary-nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryNavBarComponent; });
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

var SecondaryNavBarComponent = (function () {
    function SecondaryNavBarComponent() {
    }
    SecondaryNavBarComponent.prototype.getElementClass = function (el) {
        return el.isActive && el.isActive() ? 'is-active' : '';
    };
    SecondaryNavBarComponent.prototype.elementClick = function (el) {
        if (el.onClick) {
            el.onClick();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SecondaryNavBarComponent.prototype, "elements", void 0);
    SecondaryNavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lo-secondary-nav-bar',
            template: __webpack_require__("../../../../../src/app/core/components/layout/secondary-nav-bar/secondary-nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/secondary-nav-bar/secondary-nav-bar.component.scss")]
        })
    ], SecondaryNavBarComponent);
    return SecondaryNavBarComponent;
}());

//# sourceMappingURL=secondary-nav-bar.component.js.map

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
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].DisplayModal] = function (data, providers) {
    return {
        onClick: function () {
            return providers.modal.showModal(data);
        }
    };
};
elementActions[__WEBPACK_IMPORTED_MODULE_0__enums_element_action_enum__["a" /* ElementAction */].HideModal] = function (data, providers) {
    return {
        onClick: function () {
            return providers.modal.hideModal(data);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_basic_list_list_component__ = __webpack_require__("../../../../../src/app/core/components/basic/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_basic_button_button_component__ = __webpack_require__("../../../../../src/app/core/components/basic/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_basic_void_void_component__ = __webpack_require__("../../../../../src/app/core/components/basic/void/void.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_basic_link_link_component__ = __webpack_require__("../../../../../src/app/core/components/basic/link/link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_basic_download_download_component__ = __webpack_require__("../../../../../src/app/core/components/basic/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_layout_base_course_container_base_course_container_component__ = __webpack_require__("../../../../../src/app/core/components/layout/base-course-container/base-course-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_course_content_provider__ = __webpack_require__("../../../../../src/app/core/providers/course-content.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_navigation_provider__ = __webpack_require__("../../../../../src/app/core/providers/navigation.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_side_menu_provider__ = __webpack_require__("../../../../../src/app/core/providers/side-menu.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_scorm_provider__ = __webpack_require__("../../../../../src/app/core/providers/scorm.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_state_provider__ = __webpack_require__("../../../../../src/app/core/providers/state.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_actions_provider__ = __webpack_require__("../../../../../src/app/core/providers/actions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_lo_structure_provider__ = __webpack_require__("../../../../../src/app/core/providers/lo-structure.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_interactions_provider__ = __webpack_require__("../../../../../src/app/core/providers/interactions.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_modal_provider__ = __webpack_require__("../../../../../src/app/core/providers/modal-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_character_dialog_character_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_layout_main_header_main_header_component__ = __webpack_require__("../../../../../src/app/core/components/layout/main-header/main-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_layout_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/core/components/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_layout_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/core/components/layout/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_layout_course_container_course_container_component__ = __webpack_require__("../../../../../src/app/core/components/layout/course-container/course-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_layout_inner_nav_bar_inner_nav_bar_component__ = __webpack_require__("../../../../../src/app/core/components/layout/inner-nav-bar/inner-nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_layout_secondary_nav_bar_secondary_nav_bar_component__ = __webpack_require__("../../../../../src/app/core/components/layout/secondary-nav-bar/secondary-nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_layout_copyright_copyright_component__ = __webpack_require__("../../../../../src/app/core/components/layout/copyright/copyright.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_layout_lo_modal_lo_modal_component__ = __webpack_require__("../../../../../src/app/core/components/layout/lo-modal/lo-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_layout_modals_modals_module__ = __webpack_require__("../../../../../src/app/core/components/layout/modals/modals.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_17__components_layout_base_course_container_base_course_container_component__["a" /* BaseCourseContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_10__components_basic_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_basic_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_basic_img_img_component__["a" /* ImgComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_basic_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_basic_void_void_component__["a" /* VoidComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_layout_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_layout_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_layout_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_layout_inner_nav_bar_inner_nav_bar_component__["a" /* InnerNavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_layout_course_container_course_container_component__["a" /* CourseContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_layout_secondary_nav_bar_secondary_nav_bar_component__["a" /* SecondaryNavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_layout_copyright_copyright_component__["a" /* CopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_layout_lo_modal_lo_modal_component__["a" /* LOModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_basic_link_link_component__["a" /* LinkComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_basic_download_download_component__["a" /* DownloadComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_37__components_layout_modals_modals_module__["a" /* ModalsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__providers_course_content_provider__["a" /* CourseContentProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_navigation_provider__["a" /* NavigationProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_side_menu_provider__["a" /* SideMenuProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_scorm_provider__["a" /* SCORMProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_state_provider__["a" /* StateProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_actions_provider__["a" /* ActionsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_lo_structure_provider__["a" /* LOStructureProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_interactions_provider__["a" /* InteractionsProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_modal_provider__["a" /* ModalProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__components_base_course_column_column_content_component__["a" /* ColumnContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_base_course_column_course_column_component__["a" /* CourseColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_base_course_content_course_content_component__["a" /* CourseContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_base_course_row_course_row_component__["a" /* CourseRowComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_layout_base_course_container_base_course_container_component__["a" /* BaseCourseContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_basic_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_basic_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_basic_img_img_component__["a" /* ImgComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_basic_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_basic_void_void_component__["a" /* VoidComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_layout_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_layout_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_layout_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_layout_inner_nav_bar_inner_nav_bar_component__["a" /* InnerNavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_layout_course_container_course_container_component__["a" /* CourseContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_layout_secondary_nav_bar_secondary_nav_bar_component__["a" /* SecondaryNavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_layout_copyright_copyright_component__["a" /* CopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_layout_lo_modal_lo_modal_component__["a" /* LOModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_basic_link_link_component__["a" /* LinkComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_basic_download_download_component__["a" /* DownloadComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_basic_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_basic_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_basic_img_img_component__["a" /* ImgComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_basic_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_basic_void_void_component__["a" /* VoidComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_layout_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_layout_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_layout_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_layout_inner_nav_bar_inner_nav_bar_component__["a" /* InnerNavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_layout_course_container_course_container_component__["a" /* CourseContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_layout_secondary_nav_bar_secondary_nav_bar_component__["a" /* SecondaryNavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_layout_copyright_copyright_component__["a" /* CopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_layout_lo_modal_lo_modal_component__["a" /* LOModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_content_organizers_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_basic_link_link_component__["a" /* LinkComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_basic_download_download_component__["a" /* DownloadComponent */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

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
    ElementAction["DisplayModal"] = "displayModal";
    ElementAction["HideModal"] = "hideModal";
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

/***/ "../../../../../src/app/core/interfaces/lo-unit.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=lo-unit.interface.js.map

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
            return _this.extendObjectUsingDataActions(__WEBPACK_IMPORTED_MODULE_7_lodash__["pick"](el, ["text", "icon"]), el.data, el.actions);
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
        var _modal = this.modal;
        return __WEBPACK_IMPORTED_MODULE_7_lodash__["reduce"](actions, function (acum, action) {
            return __WEBPACK_IMPORTED_MODULE_7_lodash__["extend"](acum, __WEBPACK_IMPORTED_MODULE_6__constants_element_actions_constant__["a" /* ElementActions */].hasOwnProperty(action) ?
                __WEBPACK_IMPORTED_MODULE_6__constants_element_actions_constant__["a" /* ElementActions */][action](data, {
                    navigation: _navigation,
                    interactions: _interactions,
                    modal: _modal
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModalProvider = (function () {
    function ModalProvider() {
        this.modalContentChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    ModalProvider.prototype.showModal = function (innerComponent) {
        this.innerComponent = innerComponent;
        this.isVisible = true;
        this.modalContentChange.next(innerComponent);
    };
    ModalProvider.prototype.hideModal = function () {
        this.innerComponent = null;
        this.isVisible = false;
        this.modalContentChange.next(null);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
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
        this.LOStateChanged = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
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
        this.LOStateChanged.next(this.getCurrentState());
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

/***/ "../../../../../src/app/lo/i18n/lo.i18n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOi18n; });
var LOi18n = {
    title: 'Anestesiología',
    teacher: 'Pedro Herrera',
    unit: 'Bienvenida',
    sections: {
        start: {
            name: 'Inicio',
            slides: {
                0: {
                    name: 'Bienvenida',
                    header: 'Bienvenido a la unidad 0 del curso de Anestesiología',
                    body: 'Hola. Mi nombre es %(character). Estaré a su lado durante todo el proceso de aprendizaje,' +
                        'animándolo y brindándole herramientas que le serán muy útiles.',
                    character: 'Jaime'
                },
                1: {
                    name: 'Instrucción',
                    body: 'Preste mucha atención a todas las instrucciones y léalas atentamente.'
                },
                2: {
                    name: 'Sugerencia de navegación',
                    body: 'Por ahora, le sugiero que navegue el curso para que identifique la funcionalidad de cada botón. %(instruction)',
                    instruction: 'Adelante...'
                },
                3: {
                    name: 'Información del curso'
                }
            }
        },
        objectives: {
            name: 'Objetivos',
            slides: {
                0: {
                    name: 'Objetivo General'
                }
            }
        },
        introduction: {
            name: 'Introducción',
            slides: {
                0: {
                    name: 'Justificación'
                }
            }
        },
        tableOfContents: {
            name: 'Tabla de Contenidos',
            slides: {
                0: {
                    name: 'Tabla de Contenido'
                }
            }
        },
        bibliography: {
            name: 'Bibliografía',
            slides: {
                0: {
                    name: 'Referencias',
                    paragraphs: [{
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). ' +
                                'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero. ' +
                                'Integer consequat a ante eget vulputate. Donec interdum(i) hendrerit egestas. ' +
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). Etiam ac tortor tincidunt, ' +
                                'ultrices eros at (strong), gravida libero. Integer consequat. Donec interdum(i) hendrerit egestas.'
                        }],
                    list: [
                        'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.',
                        'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.',
                        'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.'
                    ]
                }
            }
        },
        techRequirements: {
            name: 'Requerimientos técnicos',
            slides: {
                0: {
                    name: 'Requerimientos',
                    statement: 'Para la correcta visualización de este recurso digital educativo son necesarias las siguientes características y requisitos:',
                    hardware: {
                        tag: 'Hardware',
                        operativeSystem: {
                            tag: 'Sistema operativo',
                            info: 'Windows Vista+, Mac OS X 10.6+'
                        },
                        RAM: {
                            tag: 'RAM',
                            content: [
                                'Windows: 2G de RAM',
                                'Mac OS X: 1G de RAM',
                                'Linux y Solaris: 1G de RAM'
                            ]
                        }
                    },
                    internet: {
                        tag: 'Conexión a Internet',
                        bandwidth: {
                            tag: 'Ancho de banda',
                            info: '1 Mb/seg +'
                        }
                    },
                    browsers: {
                        tag: 'Navegadores',
                        statement: 'El más conocido hoy es Internet Explorer de Microsoft que viene instalado con Windows, pero es posible y recomendable ' +
                            'disponer de alternativas gratuitas que permiten no solo visualizar más rápido, sino de mejor forma los contenidos del curso. De estas ' +
                            'alternativas, se sugiere utilizar Google Chrome y Mozilla Firefox.',
                        statement2: 'Este curso ha sido probado en %(iexplorer) , %(firefox), %(safari) y %(chrome).',
                        iexplorer: 'IE9+',
                        firefox: 'Mozilla 32.0',
                        safari: 'Safari 5.1.10',
                        chrome: 'Chrome 37.0',
                        downloadChrome: 'Descargar Google Chrome',
                        downloadFirefox: 'Descargar Mozilla Firefox'
                    },
                    screenResolution: {
                        tag: 'Resolución de pantalla',
                        statement: 'Para una mejor y más cómoda visualización, se recomienda como resolución mínima %(resolution) píxeles.',
                        resolution: '1024 X 768'
                    },
                    plugins: {
                        tag: '%(plugins) (Reproductores)',
                        statement: 'En este curso se pueden encontrar diferentes contenidos como secuencias de video, animaciones interactivas, objetos de aprendizaje o ' +
                            'textos en formato PDF. Para poder visualizar correctamente estos archivos es necesario tener instalado el reproductor adecuado, provisto gratuitamente ' +
                            'por el creador del formato o quien lo comercializa. Estos reproductores y %(plugins) tienen un autoinstalador, que al ser asistido, hará muy sencilla su implementación.',
                        statement2: 'Los siguientes reproductores son necesarios para seguir este curso, y recomendados para la navegación por Internet en general:',
                        statement3: '%(adobe) es el estándar mundial para visualizar e imprimir documentos PDF en prácticamente cualquier plataforma.',
                        pluginsUpperCase: 'Plugins',
                        pluginsLowerCase: 'plugins',
                        adobe: 'Adobe Reader',
                        downloadAdobe: 'Descargar Adobe Reader'
                    }
                }
            }
        },
        credits: {
            name: 'Créditos',
            slides: {
                0: {
                    name: 'Créditos',
                    DNIA: 'Dirección Nacional de Innovación Académica',
                    production: {
                        tag: 'Producción, diseño y virtualización',
                        list: [{
                                name: 'Edgar Antonio Reyes Montano',
                                role: 'Director'
                            }, {
                                name: 'David Moreno Gómez',
                                role: 'Coordinador de diseño'
                            }, {
                                name: 'Diana Esperanza López López',
                                role: 'Coordinadora de pedagogía'
                            }, {
                                name: 'Victor Eduardo Tenjo',
                                role: 'Adecuación pedagógica'
                            }, {
                                name: 'Diana Rozo Rojas',
                                role: 'Diseño de interfaz'
                            }, {
                                name: 'Lina Margarita Otálora',
                                role: 'Diseño gráfico'
                            }, {
                                name: 'Giselle Pinzon Garzon',
                                role: 'Diseño de personaje'
                            }, {
                                name: 'Yenny Agudelo',
                                role: 'Virtualización'
                            }]
                    },
                    author: {
                        tag: 'Autor',
                        name: 'Pedro Herrera',
                        credentials: 'Médico especialista en Anestesiología, Epidemiología y docencia universitaria. ' +
                            'Profesor asistente de la Universidad Nacional de Colombia y médico especialista en el Hospital Santa Clara y ' +
                            'en el Instituto Materno Infantil, instituciones de tercero y cuarto niveles, vinculadas a la formación del recurso humano en salud. ' +
                            'Ejerce labores docentes con estudiantes de pregrado de Medicina y de postgrado en la especialización de Anestesiología y Reanimación. ' +
                            'Orienta la ejecución y publicación de trabajos de investigación en el postgrado de Anestesiólogía.'
                    },
                    images: {
                        tag: 'Créditos imágenes'
                    }
                }
            }
        }
    },
    layout: {
        mainHeader: {
            subtitle: {
                prefix: 'Docente:'
            }
        },
        breadcrumb: {
            prefix: 'Unidad'
        },
        navBars: {
            inner: {
                section: {
                    prefix: "Está en:"
                },
                btns: {
                    previous: {
                        tag: "Anterior"
                    },
                    next: {
                        tag: "Siguiente"
                    }
                }
            },
            bottom: {
                items: {
                    navigationGuide: {
                        tag: "Guía de navegación"
                    }
                }
            }
        },
        copyright: {
            p: [{
                    text: 'Este recurso educativo digital está bajo una %(copyright)',
                    link: 'licencia de Creative Commons Reconocimiento-NoComercial-SinObraDerivada 2.5 Colombia'
                }, {
                    text: 'Además, tiene algunos derechos reservados a sus autores y colaboradores.',
                    link: ''
                }]
        }
    },
    modals: {
        navigationGuide: {
            title: 'Guía de Navegación',
            list: [
                'Título recurso / Docente',
                'Título unidad',
                'Menú principal',
                'Ubicación actual',
                'Botones para desplazamiento entre contenidos',
                'Información recurso',
                'Licencia',
                'Información contactos'
            ],
            btns: {
                close: {
                    tag: "Cerrar"
                }
            }
        }
    }
};
//# sourceMappingURL=lo.i18n.js.map

/***/ }),

/***/ "../../../../../src/app/lo/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\r\n    <lo-main-header class=\"main-header\" [title]=\"title\" [subtitle]=\"subtitle\"></lo-main-header>\r\n    <lo-breadcrumb [unit]=\"unit\"></lo-breadcrumb>\r\n    <lo-nav-bar [elements]=\"menuBars.top\"></lo-nav-bar>\r\n    <lo-course-container class=\"course-container\"\r\n        [LOCurrentState]=\"LOCurrentState\"\r\n        [innerNavBarData]=\"innerNavBarData\"></lo-course-container>\r\n    <lo-secondary-nav-bar class=\"secondary-nav-bar\"\r\n        [elements]=\"menuBars.bottom\"></lo-secondary-nav-bar>\r\n    <lo-copyright class=\"copyright\" [copyright]=\"copyright\"></lo-copyright>\r\n</div>\r\n<lo-modal class=\"modal\" [LOCurrentState]=\"LOCurrentState\"></lo-modal>"

/***/ }),

/***/ "../../../../../src/app/lo/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* General */\n/* COLORS */\n/*** LAYOUT ***/\n/******  MODAL  *******/\n/*** TAB ORGANIZER ***/\n:host {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex: 1;\n      flex: 1;\n  background: #D9EDE0; }\n  :host .layout::ng-deep .breadcrumb-container {\n    margin-top: 20px; }\n  :host .layout::ng-deep .nav-bar-container {\n    margin-top: 15px; }\n  :host .layout::ng-deep .course-container {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 10px;\n    height: 650px; }\n    :host .layout::ng-deep .course-container course-content.primary-section {\n      margin-top: 10px;\n      background: url(\"./assets/img/fondo_general.png\") no-repeat;\n      background-size: 100% 100%; }\n    :host .layout::ng-deep .course-container course-content.secondary-section {\n      padding: 0 20px; }\n    :host .layout::ng-deep .course-container course-content.techRequirements p {\n      font-size: 14px; }\n    :host .layout::ng-deep .course-container course-content .p-no-padding-container p {\n      margin: 0px; }\n    :host .layout::ng-deep .course-container course-content .p-small-padding-container p {\n      margin: 10px 0; }\n    :host .layout::ng-deep .course-container course-content.hide-overflow {\n      overflow: hidden; }\n    :host .layout::ng-deep .course-container course-content .center-img lo-img {\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center; }\n      :host .layout::ng-deep .course-container course-content .center-img lo-img img {\n        margin: 0 auto; }\n    :host .layout::ng-deep .course-container course-content .subheader p {\n      color: #ad8114;\n      font-size: 20px;\n      margin-bottom: 10px; }\n    :host .layout::ng-deep .course-container course-content .subheader-2 p {\n      color: #6f917c;\n      font-size: 18px;\n      margin-top: 10px; }\n    :host .layout::ng-deep .course-container course-content .credits-list p {\n      margin: 0;\n      font-size: 14px;\n      margin-bottom: 5px; }\n      :host .layout::ng-deep .course-container course-content .credits-list p:first-of-type {\n        color: #6f917c;\n        font-size: 20px;\n        margin: 10px 0; }\n      :host .layout::ng-deep .course-container course-content .credits-list p .credits-role {\n        font-weight: bold;\n        color: #444; }\n    :host .layout::ng-deep .course-container course-content .author-box p {\n      color: white;\n      font-size: 15px; }\n      :host .layout::ng-deep .course-container course-content .author-box p:first-of-type {\n        color: #fbf9df;\n        font-size: 22px;\n        margin-top: 10px; }\n    :host .layout::ng-deep .course-container course-content .simple-container {\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host .layout::ng-deep .secondary-nav-bar {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 13px;\n    height: 40px; }\n  :host .layout::ng-deep .copyright {\n    display: -ms-flexbox;\n    display: flex;\n    margin: 10px 0 10px 0;\n    -ms-flex: 2;\n        flex: 2; }\n  :host .modal ::ng-deep .lo-modal-content {\n    min-height: 485px; }\n  :host .modal ::ng-deep .simple-container {\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    :host .modal ::ng-deep .simple-container .btn-set lo-button {\n      -ms-flex-align: end;\n          align-items: flex-end; }\n      :host .modal ::ng-deep .simple-container .btn-set lo-button button {\n        width: 60px;\n        height: 35px;\n        border-radius: 4px;\n        color: #333;\n        background-color: #fff;\n        border: 1px solid #ccc; }\n        :host .modal ::ng-deep .simple-container .btn-set lo-button button:hover, :host .modal ::ng-deep .simple-container .btn-set lo-button button:active {\n          border-color: black;\n          background: #666;\n          color: white;\n          cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lo/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_providers_actions_provider__ = __webpack_require__("../../../../../src/app/core/providers/actions.provider.ts");
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
    function LayoutComponent(actions) {
        this.actions = actions;
        this.title = '';
        this.subtitle = '';
    }
    LayoutComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.layoutConfig && changes.layoutConfig.currentValue) {
            this.title = this.layoutConfig.title;
            this.subtitle = this.layoutConfig.subtitle;
            this.unit = this.layoutConfig.unit;
            this.layoutConfig.menuBars.bottom[1].data.data[0].rows[2].cols[0].data = this.actions.prepareElementAction(this.layoutConfig.menuBars.bottom[1].data.data[0].rows[2].cols[0]);
            this.menuBars = {
                top: this.actions.prepareMenuBarElements(this.layoutConfig.menuBars.top),
                bottom: this.actions.prepareMenuBarElements(this.layoutConfig.menuBars.bottom)
            };
            this.innerNavBarData = this.layoutConfig.navBars.inner;
            this.copyright = this.layoutConfig.copyright;
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_providers_actions_provider__["a" /* ActionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_providers_actions_provider__["a" /* ActionsProvider */]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_start_start_section__ = __webpack_require__("../../../../../src/app/lo/sections/start/start.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sections_objectives_objectives_section__ = __webpack_require__("../../../../../src/app/lo/sections/objectives/objectives.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections_introduction_introduction_section__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/introduction.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sections_table_of_contents_table_of_contents_section__ = __webpack_require__("../../../../../src/app/lo/sections/table-of-contents/table-of-contents.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sections_bibliography_bibliography_section__ = __webpack_require__("../../../../../src/app/lo/sections/bibliography/bibliography.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sections_techRequirements_techRequirements_section__ = __webpack_require__("../../../../../src/app/lo/sections/techRequirements/techRequirements.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections_credits_credits_section__ = __webpack_require__("../../../../../src/app/lo/sections/credits/credits.section.ts");







var LOContent = [
    __WEBPACK_IMPORTED_MODULE_0__sections_start_start_section__["a" /* startSection */],
    __WEBPACK_IMPORTED_MODULE_1__sections_objectives_objectives_section__["a" /* objectivesSection */],
    __WEBPACK_IMPORTED_MODULE_2__sections_introduction_introduction_section__["a" /* introductionSection */],
    __WEBPACK_IMPORTED_MODULE_3__sections_table_of_contents_table_of_contents_section__["a" /* tableOfContentsSection */],
    __WEBPACK_IMPORTED_MODULE_4__sections_bibliography_bibliography_section__["a" /* bibliographySection */],
    __WEBPACK_IMPORTED_MODULE_5__sections_techRequirements_techRequirements_section__["a" /* techRequirementsSection */],
    __WEBPACK_IMPORTED_MODULE_6__sections_credits_credits_section__["a" /* creditsSection */]
];
//# sourceMappingURL=lo.content.js.map

/***/ }),

/***/ "../../../../../src/app/lo/lo.extras.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOExtras; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_start_start_section__ = __webpack_require__("../../../../../src/app/lo/sections/start/start.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__ = __webpack_require__("../../../../../src/app/core/enums/element-action.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections_objectives_objectives_section__ = __webpack_require__("../../../../../src/app/lo/sections/objectives/objectives.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sections_introduction_introduction_section__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/introduction.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sections_table_of_contents_table_of_contents_section__ = __webpack_require__("../../../../../src/app/lo/sections/table-of-contents/table-of-contents.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sections_bibliography_bibliography_section__ = __webpack_require__("../../../../../src/app/lo/sections/bibliography/bibliography.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections_techRequirements_techRequirements_section__ = __webpack_require__("../../../../../src/app/lo/sections/techRequirements/techRequirements.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sections_credits_credits_section__ = __webpack_require__("../../../../../src/app/lo/sections/credits/credits.section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_components_basic_paragraph_paragraph_enum__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_components_basic_title_title_component__ = __webpack_require__("../../../../../src/app/core/components/basic/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_components_basic_list_list_component__ = __webpack_require__("../../../../../src/app/core/components/basic/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_components_basic_button_button_component__ = __webpack_require__("../../../../../src/app/core/components/basic/button/button.component.ts");
















var LOExtras = {
    menuBars: {
        top: [{
                text: __WEBPACK_IMPORTED_MODULE_0__sections_start_start_section__["a" /* startSection */].name,
                icon: 'home',
                actions: [
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection,
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection
                ],
                data: {
                    target: __WEBPACK_IMPORTED_MODULE_0__sections_start_start_section__["a" /* startSection */].id
                }
            },
            {
                text: __WEBPACK_IMPORTED_MODULE_2__sections_objectives_objectives_section__["a" /* objectivesSection */].name,
                icon: 'crosshairs',
                actions: [
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection,
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection
                ],
                data: {
                    target: __WEBPACK_IMPORTED_MODULE_2__sections_objectives_objectives_section__["a" /* objectivesSection */].id
                }
            },
            {
                text: __WEBPACK_IMPORTED_MODULE_3__sections_introduction_introduction_section__["a" /* introductionSection */].name,
                icon: 'power-off',
                actions: [
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection,
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection
                ],
                data: {
                    target: __WEBPACK_IMPORTED_MODULE_3__sections_introduction_introduction_section__["a" /* introductionSection */].id
                }
            },
            {
                text: __WEBPACK_IMPORTED_MODULE_4__sections_table_of_contents_table_of_contents_section__["a" /* tableOfContentsSection */].name,
                icon: 'table',
                actions: [
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection,
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection
                ],
                data: {
                    target: __WEBPACK_IMPORTED_MODULE_4__sections_table_of_contents_table_of_contents_section__["a" /* tableOfContentsSection */].id
                }
            }],
        bottom: [{
                text: __WEBPACK_IMPORTED_MODULE_5__sections_bibliography_bibliography_section__["a" /* bibliographySection */].name,
                actions: [
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection,
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection
                ],
                data: {
                    target: __WEBPACK_IMPORTED_MODULE_5__sections_bibliography_bibliography_section__["a" /* bibliographySection */].id
                }
            },
            {
                text: __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].layout.navBars.bottom.items.navigationGuide.tag,
                actions: [__WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].DisplayModal],
                data: {
                    component: __WEBPACK_IMPORTED_MODULE_10__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_11__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_12__core_components_basic_title_title_component__["a" /* TitleComponent */],
                                            data: {
                                                title: __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].modals.navigationGuide.title,
                                                iconClass: 'sitemap'
                                            }
                                        }],
                                    style: {
                                        padding: '10px 0 20px 10px',
                                        borderBottom: 'solid 1px #D3D3D3'
                                    },
                                    flex: 1
                                },
                                {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_11__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_13__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                            data: {
                                                source: './assets/img/ayuda.jpg',
                                                style: {
                                                    maxWidth: '100%'
                                                }
                                            }
                                        }, {
                                            type: __WEBPACK_IMPORTED_MODULE_11__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_14__core_components_basic_list_list_component__["a" /* ListComponent */],
                                            data: {
                                                elements: __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].modals.navigationGuide.list,
                                                numbered: true
                                            }
                                        }],
                                    style: {
                                        padding: '20px 0',
                                        borderBottom: 'solid 1px #D3D3D3'
                                    },
                                    flex: 2
                                },
                                {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_11__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_15__core_components_basic_button_button_component__["a" /* ButtonComponent */],
                                            actions: [__WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].HideModal],
                                            data: {
                                                text: __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].modals.navigationGuide.btns.close.tag
                                            },
                                            flex: 1
                                        }],
                                    style: {
                                        padding: '20px 10px 0 0'
                                    },
                                    classes: ['btn-set'],
                                    flex: 1
                                }]
                        }]
                }
            },
            {
                text: __WEBPACK_IMPORTED_MODULE_6__sections_techRequirements_techRequirements_section__["a" /* techRequirementsSection */].name,
                actions: [
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection,
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection
                ],
                data: {
                    target: __WEBPACK_IMPORTED_MODULE_6__sections_techRequirements_techRequirements_section__["a" /* techRequirementsSection */].id
                }
            },
            {
                text: __WEBPACK_IMPORTED_MODULE_7__sections_credits_credits_section__["a" /* creditsSection */].name,
                actions: [
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].GoToSection,
                    __WEBPACK_IMPORTED_MODULE_1__core_enums_element_action_enum__["a" /* ElementAction */].ActiveIfCurrentSection
                ],
                data: {
                    target: __WEBPACK_IMPORTED_MODULE_7__sections_credits_credits_section__["a" /* creditsSection */].id
                }
            }]
    },
    copyright: [{
            text: __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].layout.copyright.p[0].text,
            args: {
                copyright: {
                    type: __WEBPACK_IMPORTED_MODULE_9__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Link,
                    data: {
                        innerText: __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].layout.copyright.p[0].link,
                        href: 'https://creativecommons.org/licenses/by-nc-nd/2.5/co/deed.es_ES'
                    }
                }
            }
        }, {
            text: __WEBPACK_IMPORTED_MODULE_8__i18n_lo_i18n__["a" /* LOi18n */].layout.copyright.p[1].text,
            args: {}
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");



var LO = {
    name: __WEBPACK_IMPORTED_MODULE_2__i18n_lo_i18n__["a" /* LOi18n */].title,
    teacher: __WEBPACK_IMPORTED_MODULE_2__i18n_lo_i18n__["a" /* LOi18n */].teacher,
    unit: 0,
    unitName: __WEBPACK_IMPORTED_MODULE_2__i18n_lo_i18n__["a" /* LOi18n */].unit,
    SCORM: false,
    content: __WEBPACK_IMPORTED_MODULE_0__lo_content__["a" /* LOContent */],
    extras: __WEBPACK_IMPORTED_MODULE_1__lo_extras__["a" /* LOExtras */]
};
//# sourceMappingURL=lo.main.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/bibliography/bibliography.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bibliographySection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_bibliography_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/bibliography/slides/bibliography-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");


var bibliographySection = {
    id: 'bibliography',
    name: __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__["a" /* LOi18n */].sections.bibliography.name,
    icon: 'book',
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_bibliography_1_slide__["a" /* bibliographySectionSlide1 */]
    ]
};
//# sourceMappingURL=bibliography.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/bibliography/slides/bibliography-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bibliographySectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_basic_list_list_component__ = __webpack_require__("../../../../../src/app/core/components/basic/list/list.component.ts");




var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.bibliography.slides[0];
var bibliographySectionSlide1 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.paragraphs[0].text,
                            args: {}
                        }, {
                            text: tags.paragraphs[0].text,
                            args: {}
                        }]
                }],
            flex: 0
        },
        {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_list_list_component__["a" /* ListComponent */],
                    data: {
                        elements: tags.list,
                        numbered: false
                    }
                }],
            flex: 0
        }],
    classes: ['secondary-section']
};
//# sourceMappingURL=bibliography-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/credits/credits.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return creditsSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_credits_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/credits/slides/credits-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");


var creditsSection = {
    id: 'credits',
    icon: 'users',
    name: __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__["a" /* LOi18n */].sections.credits.name,
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_credits_1_slide__["a" /* creditsSectionSlide1 */]
    ]
};
//# sourceMappingURL=credits.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/credits/slides/credits-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return creditsSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_content_organizers_simple_container_simple_container_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/simple-container/simple-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_components_basic_link_link_component__ = __webpack_require__("../../../../../src/app/core/components/basic/link/link.component.ts");







var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.credits.slides[0];
var creditsSectionSlide1 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.author.tag,
                            args: {}
                        }],
                    classes: ['subheader'],
                    style: {
                        paddingLeft: '20px'
                    }
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.DNIA,
                            args: {}
                        }],
                    classes: ['subheader']
                }],
            flex: 1
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_3__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_4__core_components_basic_img_img_component__["a" /* ImgComponent */],
                                            data: {
                                                source: './assets/img/autor.png',
                                                style: {
                                                    width: '100px',
                                                    height: '100px',
                                                    margin: '0 auto'
                                                }
                                            },
                                            flex: 2
                                        }, {
                                            type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: tags.author.name
                                                }, {
                                                    text: tags.author.credentials
                                                }],
                                            flex: 5,
                                            style: {
                                                marginLeft: '5px',
                                                paddingRight: '15px'
                                            },
                                            classes: ['author-box']
                                        }],
                                    style: {
                                        padding: '10px 0',
                                        background: '#6B8475'
                                    }
                                }]
                        }],
                    style: {
                        padding: '0 15px'
                    }
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.production.tag,
                            args: {}
                        }].concat(tags.production.list.map(function (el) {
                        return {
                            text: '%(role): ' + el.name,
                            args: {
                                role: {
                                    type: __WEBPACK_IMPORTED_MODULE_5__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: el.role,
                                        class: 'credits-role'
                                    }
                                }
                            }
                        };
                    })),
                    classes: ['credits-list']
                }],
            flex: 6
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_3__core_components_content_organizers_simple_container_simple_container_component__["a" /* SimpleContainerComponent */],
                    data: [{
                            rows: [{
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                                            data: [{
                                                    text: tags.images.tag,
                                                    args: {}
                                                }],
                                            classes: ['subheader-2'],
                                            style: {
                                                paddingLeft: '10px'
                                            }
                                        }],
                                    style: {
                                        borderTop: 'dotted 1px gray'
                                    }
                                }, {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_6__core_components_basic_link_link_component__["a" /* LinkComponent */],
                                            data: {
                                                text: 'Freepik.com',
                                                url: 'https://www.freepik.es/vector-gratis/infografia-medios-comunicacion_722128.htm',
                                                img: './assets/img/freepik_icon.png'
                                            },
                                            style: {
                                                paddingLeft: '30px'
                                            }
                                        }]
                                }, {
                                    cols: [{
                                            type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                                            component: __WEBPACK_IMPORTED_MODULE_6__core_components_basic_link_link_component__["a" /* LinkComponent */],
                                            data: {
                                                text: 'Depositphotos.com',
                                                url: 'https://sp.depositphotos.com/14157025/stock-photo-anesthesia-mask-holding-by-a.html',
                                                img: './assets/img/deposit_icon.png'
                                            },
                                            style: {
                                                paddingLeft: '30px'
                                            }
                                        }]
                                }]
                        }]
                }],
            flex: 3,
            style: {
                padding: '0 15px',
                marginTop: '20px'
            }
        }]
};
//# sourceMappingURL=credits-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/introduction.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_introduction_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/introduction/slides/introduction-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");


var introductionSection = {
    id: 'introduction',
    name: __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.name,
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_introduction_1_slide__["a" /* introductionSectionSlide1 */]
    ]
};
//# sourceMappingURL=introduction.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/introduction/slides/introduction-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return introductionSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");



var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.introduction.slides[0];
var introductionSectionSlide1 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__["a" /* ImgComponent */],
                    data: {
                        source: './assets/img/introduccion.png',
                        style: {
                            maxWidth: '100%'
                        }
                    },
                    classes: ['center-img']
                }]
        }],
    classes: ['primary-section']
};
//# sourceMappingURL=introduction-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/objectives/objectives.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return objectivesSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_objectives_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/objectives/slides/objectives-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");


var objectivesSection = {
    id: 'objectives',
    name: __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__["a" /* LOi18n */].sections.objectives.name,
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_objectives_1_slide__["a" /* objectivesSectionSlide1 */]
    ]
};
//# sourceMappingURL=objectives.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/objectives/slides/objectives-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return objectivesSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");



var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.objectives.slides[0];
var objectivesSectionSlide1 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__["a" /* ImgComponent */],
                    data: {
                        source: './assets/img/objetivo_general.png',
                        style: {
                            maxWidth: '100%',
                            marginTop: '53px'
                        }
                    },
                    classes: ['center-img']
                }]
        }],
    classes: ['primary-section']
};
//# sourceMappingURL=objectives-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/start/slides/start-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_character_dialog_character_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.enum.ts");




var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.start.slides[0];
var startSectionSlide1 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */],
                    data: {
                        character: './assets/img/personaje.png',
                        paragraphs: [{
                                text: '%(header)',
                                args: {
                                    header: {
                                        type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                        data: {
                                            innerText: tags.header,
                                            class: 'dialog-header'
                                        }
                                    }
                                }
                            }, {
                                text: tags.body,
                                args: {
                                    character: {
                                        type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                        data: {
                                            innerText: tags.character,
                                            class: 'dialog-highlight'
                                        }
                                    }
                                }
                            }]
                    }
                }]
        }],
    classes: ['primary-section']
};
//# sourceMappingURL=start-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/start/slides/start-2.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startSectionSlide2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_character_dialog_character_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.ts");



var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.start.slides[1];
var startSectionSlide2 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */],
                    data: {
                        character: './assets/img/personaje.png',
                        paragraphs: [{
                                text: tags.body,
                                args: {}
                            }]
                    }
                }]
        }],
    classes: ['primary-section']
};
//# sourceMappingURL=start-2.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/start/slides/start-3.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startSectionSlide3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_character_dialog_character_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/content-organizers/character-dialog/character-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.enum.ts");




var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.start.slides[2];
var startSectionSlide3 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].ContentOrganizer,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_content_organizers_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */],
                    data: {
                        character: './assets/img/personaje.png',
                        paragraphs: [{
                                text: tags.body,
                                args: {
                                    instruction: {
                                        type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                        data: {
                                            innerText: tags.instruction,
                                            class: 'dialog-highlight'
                                        }
                                    }
                                }
                            }]
                    }
                }]
        }],
    classes: ['primary-section']
};
//# sourceMappingURL=start-3.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/start/slides/start-4.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startSectionSlide4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");



var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.start.slides[3];
var startSectionSlide4 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__["a" /* ImgComponent */],
                    data: {
                        source: './assets/img/personaje2.png',
                        style: {
                            maxWidth: '100%',
                            height: '500px'
                        }
                    },
                    classes: ['center-img']
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__["a" /* ImgComponent */],
                    data: {
                        source: './assets/img/bocadillo_carpeta.png',
                        style: {
                            maxWidth: '100%',
                            height: '500px'
                        }
                    },
                    classes: ['center-img']
                }]
        }],
    classes: ['primary-section']
};
//# sourceMappingURL=start-4.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/start/start.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_start_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/start/slides/start-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slides_start_2_slide__ = __webpack_require__("../../../../../src/app/lo/sections/start/slides/start-2.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slides_start_3_slide__ = __webpack_require__("../../../../../src/app/lo/sections/start/slides/start-3.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slides_start_4_slide__ = __webpack_require__("../../../../../src/app/lo/sections/start/slides/start-4.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");





var startSection = {
    id: 'start',
    name: __WEBPACK_IMPORTED_MODULE_4__i18n_lo_i18n__["a" /* LOi18n */].sections.start.name,
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_start_1_slide__["a" /* startSectionSlide1 */],
        __WEBPACK_IMPORTED_MODULE_1__slides_start_2_slide__["a" /* startSectionSlide2 */],
        __WEBPACK_IMPORTED_MODULE_2__slides_start_3_slide__["a" /* startSectionSlide3 */],
        __WEBPACK_IMPORTED_MODULE_3__slides_start_4_slide__["a" /* startSectionSlide4 */]
    ]
};
//# sourceMappingURL=start.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/table-of-contents/slides/table-of-contents-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tableOfContentsSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__ = __webpack_require__("../../../../../src/app/core/components/basic/img/img.component.ts");



var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.tableOfContents.slides[0];
var tableOfContentsSectionSlide1 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_img_img_component__["a" /* ImgComponent */],
                    data: {
                        source: './assets/img/tabla_contenido.png',
                        style: {
                            maxWidth: '100%'
                        }
                    },
                    classes: ['center-img']
                }]
        }],
    classes: ['primary-section']
};
//# sourceMappingURL=table-of-contents-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/table-of-contents/table-of-contents.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tableOfContentsSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_table_of_contents_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/table-of-contents/slides/table-of-contents-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");


var tableOfContentsSection = {
    id: 'tableOfContents',
    name: __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__["a" /* LOi18n */].sections.tableOfContents.name,
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_table_of_contents_1_slide__["a" /* tableOfContentsSectionSlide1 */]
    ]
};
//# sourceMappingURL=table-of-contents.section.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/techRequirements/slides/techRequirements-1.slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return techRequirementsSectionSlide1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__ = __webpack_require__("../../../../../src/app/core/enums/component-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__ = __webpack_require__("../../../../../src/app/core/components/basic/paragraph/paragraph.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_basic_download_download_component__ = __webpack_require__("../../../../../src/app/core/components/basic/download/download.component.ts");





var tags = __WEBPACK_IMPORTED_MODULE_0__i18n_lo_i18n__["a" /* LOi18n */].sections.techRequirements.slides[0];
var techRequirementsSectionSlide1 = {
    name: tags.name,
    rows: [{
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.statement,
                            args: {}
                        }]
                }],
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.hardware.tag,
                            args: {}
                        }]
                }],
            flex: 0,
            classes: ['subheader', 'p-no-padding-container']
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: '%(tag): ' + tags.hardware.operativeSystem.info,
                            args: {
                                tag: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.hardware.operativeSystem.tag,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                }
                            }
                        }]
                }],
            classes: ['p-small-padding-container'],
            flex: 0
        },
        {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: '%(tag): ',
                            args: {
                                tag: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.hardware.RAM.tag,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                }
                            }
                        }]
                }],
            classes: ['p-small-padding-container'],
            flex: 0
        },
        {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: tags.hardware.RAM.content.map(function (el) {
                        return {
                            text: el,
                            args: {}
                        };
                    })
                }],
            classes: ['p-no-padding-container'],
            style: {
                paddingLeft: '30px'
            },
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.internet.tag,
                            args: {}
                        }]
                }],
            flex: 0,
            classes: ['subheader', 'p-small-padding-container']
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: '%(tag): ' + tags.internet.bandwidth.info,
                            args: {
                                tag: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.internet.bandwidth.tag,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                }
                            }
                        }]
                }],
            classes: ['p-no-padding-container'],
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.browsers.tag,
                            args: {}
                        }]
                }],
            flex: 0,
            classes: ['subheader', 'p-small-padding-container']
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.browsers.statement,
                            args: {}
                        }]
                }],
            classes: ['p-no-padding-container'],
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_4__core_components_basic_download_download_component__["a" /* DownloadComponent */],
                    data: {
                        text: tags.browsers.downloadChrome,
                        img: './assets/img/chrome_icon.png',
                        url: 'http://www.google.com/chrome'
                    },
                    style: {
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }, {
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_4__core_components_basic_download_download_component__["a" /* DownloadComponent */],
                    data: {
                        text: tags.browsers.downloadFirefox,
                        img: './assets/img/firefox_icon.png',
                        url: 'http://www.mozilla.com/es-ES/firefox/'
                    },
                    style: {
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }],
            style: {
                padding: '20px 0'
            },
            flex: 0
        },
        {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.browsers.statement2,
                            args: {
                                iexplorer: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.browsers.iexplorer,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                },
                                firefox: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.browsers.firefox,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                },
                                chrome: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.browsers.chrome,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                },
                                safari: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.browsers.safari,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                }
                            }
                        }]
                }],
            classes: ['p-no-padding-container'],
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.screenResolution.tag,
                            args: {}
                        }]
                }],
            flex: 0,
            classes: ['subheader', 'p-small-padding-container']
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.screenResolution.statement,
                            args: {
                                resolution: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.screenResolution.resolution,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                }
                            }
                        }]
                }],
            classes: ['p-no-padding-container'],
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.plugins.tag,
                            args: {
                                plugins: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.plugins.pluginsUpperCase,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Italic
                                    }
                                }
                            }
                        }]
                }],
            flex: 0,
            classes: ['subheader', 'p-small-padding-container']
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.plugins.statement,
                            args: {
                                plugins: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.plugins.pluginsLowerCase,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Italic
                                    }
                                }
                            }
                        }]
                }],
            classes: ['p-no-padding-container'],
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.plugins.statement2,
                            args: {}
                        }]
                }],
            classes: ['p-small-padding-container'],
            flex: 0
        }, {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_2__core_components_basic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                    data: [{
                            text: tags.plugins.statement3,
                            args: {
                                adobe: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["a" /* ParagraphArgumentType */].Class,
                                    data: {
                                        innerText: tags.plugins.adobe,
                                        class: __WEBPACK_IMPORTED_MODULE_3__core_components_basic_paragraph_paragraph_enum__["b" /* ParagraphClass */].Bold
                                    }
                                }
                            }
                        }]
                }],
            classes: ['p-no-padding-container'],
            flex: 0
        },
        {
            cols: [{
                    type: __WEBPACK_IMPORTED_MODULE_1__core_enums_component_type_enum__["a" /* ComponentType */].Basic,
                    component: __WEBPACK_IMPORTED_MODULE_4__core_components_basic_download_download_component__["a" /* DownloadComponent */],
                    data: {
                        text: tags.plugins.downloadAdobe,
                        img: './assets/img/adobe_icon.png',
                        url: 'http://get.adobe.com/es/reader/'
                    }
                }],
            style: {
                padding: '20px 0',
                flexDirection: 'column',
                alignItems: 'center'
            },
            flex: 0
        }],
    style: {
        padding: '0 15px'
    }
};
//# sourceMappingURL=techRequirements-1.slide.js.map

/***/ }),

/***/ "../../../../../src/app/lo/sections/techRequirements/techRequirements.section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return techRequirementsSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides_techRequirements_1_slide__ = __webpack_require__("../../../../../src/app/lo/sections/techRequirements/slides/techRequirements-1.slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__ = __webpack_require__("../../../../../src/app/lo/i18n/lo.i18n.ts");


var techRequirementsSection = {
    id: 'techRequirements',
    icon: 'wrench',
    name: __WEBPACK_IMPORTED_MODULE_1__i18n_lo_i18n__["a" /* LOi18n */].sections.techRequirements.name,
    slides: [
        __WEBPACK_IMPORTED_MODULE_0__slides_techRequirements_1_slide__["a" /* techRequirementsSectionSlide1 */]
    ]
};
//# sourceMappingURL=techRequirements.section.js.map

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