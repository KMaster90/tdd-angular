(self["webpackChunktdd"] = self["webpackChunktdd"] || []).push([["main"],{

/***/ 4882:
/*!***************************************!*\
  !*** ./src/app/app.component.spec.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_paolocapillo_Scloby_app_to_test_tdd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router/testing */ 9480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);




describe('AppComponent', () => {
  beforeEach( /*#__PURE__*/(0,_Users_paolocapillo_Scloby_app_to_test_tdd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.configureTestingModule({
      imports: [_angular_router_testing__WEBPACK_IMPORTED_MODULE_3__.RouterTestingModule],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.createComponent(_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'tdd'`, () => {
    const fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.createComponent(_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tdd');
  }); // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('tdd app is running!');
  // });
});

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tdd';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 9028:
/*!****************************************************************!*\
  !*** ./src/app/src/components/header/header.component.spec.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_paolocapillo_Scloby_app_to_test_tdd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ 7053);



describe('HeaderComponent', () => {
  let component;
  let fixture;
  beforeEach( /*#__PURE__*/(0,_Users_paolocapillo_Scloby_app_to_test_tdd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.configureTestingModule({
      declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent]
    }).compileComponents();
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_2__.TestBed.createComponent(_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })); // <!-- Nav -->

  it('should create', () => expect(component).toBeTruthy());
  it('should show logo', () => expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy());
  it('should show search', () => expect(fixture.nativeElement.querySelector('[data-test="search"]')).toBeTruthy());
  it('should show menu', () => expect(fixture.nativeElement.querySelector('[data-test="menu"]')).toBeTruthy()); // <!-- Filters -->

  it('should show home-type', () => expect(fixture.nativeElement.querySelector('[data-test="home-type"]')).toBeTruthy());
  it('should show dates', () => expect(fixture.nativeElement.querySelector('[data-test="dates"]')).toBeTruthy());
  it('should show guests', () => expect(fixture.nativeElement.querySelector('[data-test="guests"]')).toBeTruthy());
  it('should show price', () => expect(fixture.nativeElement.querySelector('[data-test="price"]')).toBeTruthy());
  it('should show rooms', () => expect(fixture.nativeElement.querySelector('[data-test="rooms"]')).toBeTruthy());
  it('should show amenities', () => expect(fixture.nativeElement.querySelector('[data-test="amenities"]')).toBeTruthy());
});

/***/ }),

/***/ 7053:
/*!***********************************************************!*\
  !*** ./src/app/src/components/header/header.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2657);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 4994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 7944:
/*!**************************************************************!*\
  !*** ./src/app/src/components/homes/homes.component.spec.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_paolocapillo_Scloby_app_to_test_tdd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _homes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homes.component */ 4226);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ 7323);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var jasmine_es6_spies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jasmine-es6-spies */ 6970);






describe('HomesComponent', () => {
  let component;
  let fixture;
  let dataService;
  beforeEach((0,_angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.async)(() => {
    _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.configureTestingModule({
      declarations: [_homes_component__WEBPACK_IMPORTED_MODULE_1__.HomesComponent],
      providers: [{
        provide: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        useFactory: () => (0,jasmine_es6_spies__WEBPACK_IMPORTED_MODULE_3__.spyOnClass)(_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService)
      }]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.createComponent(_homes_component__WEBPACK_IMPORTED_MODULE_1__.HomesComponent);
    component = fixture.componentInstance;
  });
  beforeEach( /*#__PURE__*/(0,_Users_paolocapillo_Scloby_app_to_test_tdd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    dataService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_4__.TestBed.get(_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService);
    dataService.getHomes$.and.returnValue((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([{
      "title": "Home 1",
      "image": "assets/listing.jpg",
      "location": "new york"
    }, {
      "title": "Home 2",
      "image": "assets/listing.jpg",
      "location": "boston"
    }, {
      "title": "Home 3",
      "image": "assets/listing.jpg",
      "location": "chicago"
    }]));
    fixture.detectChanges();
    fixture.whenStable().then(() => expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3));
  }));
  it('should show homes', () => {});
  it('should show home info', () => {
    fixture.whenStable().then(() => {
      const home = fixture.nativeElement.querySelector('[data-test="home"]');
      expect(home.querySelector('[data-test="image"]')).toBeTruthy();
      expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
      expect(home.querySelector('[data-test="location"]').innerText).toEqual('new york');
    });
  });
});

/***/ }),

/***/ 4226:
/*!*********************************************************!*\
  !*** ./src/app/src/components/homes/homes.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomesComponent": () => (/* binding */ HomesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _homes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homes.component.html?ngResource */ 7765);
/* harmony import */ var _homes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homes.component.scss?ngResource */ 9029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ 7323);





let HomesComponent = class HomesComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.homes$ = this.dataService.getHomes$();
    }
    ngOnInit() {
    }
};
HomesComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
HomesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-homes',
        template: _homes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_homes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomesComponent);



/***/ }),

/***/ 9493:
/*!***************************************************!*\
  !*** ./src/app/src/services/data.service.spec.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 7323);


describe('DataServiceService', () => {
    let service;
    beforeEach(() => {
        _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__.TestBed.configureTestingModule({});
        service = _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__.TestBed.inject(_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});


/***/ }),

/***/ 7323:
/*!**********************************************!*\
  !*** ./src/app/src/services/data.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);




let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHomes$() {
        // return this.httpClient.get<Home[]>('/assets/homes.json');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([
            {
                "title": "Home 1",
                "image": "assets/listing.jpg",
                "location": "new york"
            },
            {
                "title": "Home 2",
                "image": "assets/listing.jpg",
                "location": "boston"
            },
            {
                "title": "Home 3",
                "image": "assets/listing.jpg",
                "location": "chicago"
            }
        ]);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }] }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 4289:
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_testing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/testing */ 3761);
/* harmony import */ var zone_js_testing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_testing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/testing */ 5115);
/* harmony import */ var _angular_platform_browser_dynamic_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic/testing */ 5392);
// This file is required by karma.conf.js and loads recursively all the .spec and framework files



// First, initialize the Angular testing environment.
(0,_angular_core_testing__WEBPACK_IMPORTED_MODULE_1__.getTestBed)().initTestEnvironment(_angular_platform_browser_dynamic_testing__WEBPACK_IMPORTED_MODULE_2__.BrowserDynamicTestingModule, (0,_angular_platform_browser_dynamic_testing__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamicTesting)());
// Then we find all the tests.
const context = __webpack_require__(2249);
// And load the modules.
context.keys().forEach(context);


/***/ }),

/***/ 2249:
/*!*******************************!*\
  !*** ./src/ sync \.spec\.ts$ ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app/app.component.spec.ts": 4882,
	"./app/src/components/header/header.component.spec.ts": 9028,
	"./app/src/components/homes/homes.component.spec.ts": 7944,
	"./app/src/services/data.service.spec.ts": 9493,
	"src/app/app.component.spec.ts": 4882,
	"src/app/src/components/header/header.component.spec.ts": 9028,
	"src/app/src/components/homes/homes.component.spec.ts": 7944,
	"src/app/src/services/data.service.spec.ts": 9493
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2249;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4994:
/*!************************************************************************!*\
  !*** ./src/app/src/components/header/header.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9029:
/*!**********************************************************************!*\
  !*** ./src/app/src/components/homes/homes.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header></app-header>\n<app-homes></app-homes>\n";

/***/ }),

/***/ 2657:
/*!************************************************************************!*\
  !*** ./src/app/src/components/header/header.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<header>\n  <div class=\"uk-container uk-container-expand uk-padding-remove\">\n    <div\n      class=\"uk-background-default\"\n      uk-sticky=\"sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky\"\n    >\n      <!-- Nav -->\n      <nav class=\"uk-background-default uk-margin-left\" uk-navbar>\n        <div class=\"uk-navbar-left uk-flex-nowrap\">\n          <a\n            data-test=\"logo\"\n            class=\"uk-navbar-item uk-logo uk-padding-remove-left\"\n          >\n            <img src=\"favicon.ico\" width=\"40\" />\n          </a>\n        </div>\n        <div\n          data-test=\"search\"\n          class=\"uk-navbar-left uk-width-5-6@s uk-width-large@m\"\n        >\n          <form\n            class=\"uk-search uk-search-default uk-box-shadow-small uk-card-hover uk-width-5-6\"\n          >\n            <span uk-search-icon></span>\n            <input\n              class=\"uk-search-input\"\n              type=\"search\"\n              placeholder=\"Anywhere • Homes\"\n            />\n          </form>\n        </div>\n        <div class=\"uk-navbar-right\">\n          <ul\n            data-test=\"menu\"\n            class=\"uk-navbar-nav uk-visible@m uk-margin-right\"\n          >\n            <li><a href=\"\">Become a host</a></li>\n            <li><a href=\"\">Help</a></li>\n            <li><a href=\"\">Sign up</a></li>\n            <li><a href=\"\">Login</a></li>\n          </ul>\n        </div>\n      </nav>\n\n      <hr class=\"uk-margin-small uk-margin-remove-top\" />\n\n      <!-- Filters -->\n      <div class=\"uk-flex uk-flex-nowrap uk-grid-small uk-margin-left\">\n        <div data-test=\"home-type\" class=\"uk-padding-remove-left\">\n          <button\n            class=\"uk-button uk-button-default uk-button-small uk-text-nowrap\"\n          >\n            Home type\n          </button>\n        </div>\n        <div data-test=\"dates\">\n          <button\n            class=\"uk-button uk-button-default uk-button-small uk-text-nowrap\"\n          >\n            Dates\n          </button>\n        </div>\n        <div data-test=\"guests\">\n          <button\n            class=\"uk-button uk-button-default uk-button-small uk-text-nowrap\"\n          >\n            Guests\n          </button>\n        </div>\n        <div data-test=\"price\">\n          <button\n            class=\"uk-button uk-button-default uk-button-small uk-text-nowrap\"\n          >\n            Price\n          </button>\n        </div>\n        <div data-test=\"rooms\">\n          <button\n            class=\"uk-button uk-button-default uk-button-small uk-text-nowrap\"\n          >\n            Rooms\n          </button>\n        </div>\n        <div data-test=\"amenities\">\n          <button\n            class=\"uk-button uk-button-default uk-button-small uk-text-nowrap\"\n          >\n            Amenities\n          </button>\n        </div>\n      </div>\n\n      <hr class=\"uk-margin-small uk-margin-remove-bottom\" />\n    </div>\n  </div>\n</header>\n";

/***/ }),

/***/ 7765:
/*!**********************************************************************!*\
  !*** ./src/app/src/components/homes/homes.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <div data-test=\"home\" *ngFor=\"let home of homes$|async\">\n    <h1 data-test=\"title\">{{home.title}}</h1>\n    <h2 data-test=\"location\">{{home.location}}</h2>\n    <img data-test=\"image\" [src]=\"home.image\" alt=\"home.image\" >\n  </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4289)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map