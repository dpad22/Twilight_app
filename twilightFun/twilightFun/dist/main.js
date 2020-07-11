(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"\nintegrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n\n<body id=\"override\">\n  \n\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container-fluid\">\n    <h1 class=\"display-4\">Twilight Imperium Companion</h1>\n    <p class=\"lead\">Find your TI4 faction info below!</p>\n  </div>\n</div>\n\n<div class=\"col-md-4\" id=\"sideBar\">\n  <ul class=\"nav flex-column\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/\">About</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['companion']\">Companion Table</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['factions']\">Factions</a>\n    </li>\n  </ul>\n  <ul *ngFor=\"let faction of factions\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['factions',faction._id]\">{{faction.faction}}</a>\n      </li>\n  </ul>\n</div>\n\n\n\n<router-outlet></router-outlet>\n\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companion/companion.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companion/companion.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-9\" id=\"factions\">\n    <h2>TI4 Companion</h2>\n<div>\n    <h5 id=\"h5\">Factions to Display </h5>\n    \n        <div *ngFor=\"let faction of factions\" class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"checkbox\" (click)=\"displayFaction(faction, $event)\"> {{faction.faction}}\n            </label>\n        </div>\n\n</div>\n<table class=\"table table-dark\">\n    <thead>\n        <tr>\n            <th scope=\"col\">Faction</th>\n            <th scope=\"col\">Flagship</th>\n            <th scope=\"col\">Abilities</th>\n            <th scope=\"col\">Technologies</th>\n            <th scope=\"col\">Promissory Note</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let faction of selectedFactions\">\n            <td>\n                <img class=\"mr-3\" src=\"{{faction.image}}\" alt=\"{{faction.faction}}\" width=\"150\" height=\"150\">\n                <p>{{faction.faction}}</p>\n            </td>\n            <td>\n                <p><span>Flagship: </span>{{faction.flagship.name}}</p>\n                <ul>\n                    <li><span>Abilities: </span>{{faction.flagship.abilities}}</li>\n                    <li><span>Combat Roll: </span>{{faction.flagship.combat}}</li>\n                    <li><span>Move: </span>{{faction.flagship.move}}</li>\n                    <li><span>Capacity: </span>{{faction.flagship.capacity}}</li>\n                </ul>\n            </td>\n            <td>\n                <ul *ngFor=\"let ability of faction.abilities\">\n                    <li><span>{{ability.name}}: </span>{{ability.info}}</li>\n                </ul>\n            <td>\n                <ul *ngFor=\"let tech of faction.technologies\">\n                    <li><span>{{tech.name}}: </span>{{tech.info}}</li>\n                </ul>\n            </td>\n            <td>\n                <ul>\n                    <li><span>{{faction.promissory_note.name}}:</span> {{faction.promissory_note.info}}\n                    </li>\n                </ul>\n            </td>\n        </tr>\n    </tbody>\n</table>\n</div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/factions/factions.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/factions/factions.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"col-sm-8\" id=\"factions\">\n        <h1>Factions</h1>\n        <div class=\"media\" *ngFor=\"let faction of factions\">\n            <img class=\"mr-3\" src=\"{{faction.image}}\" alt=\"{{faction.faction}}\" width=\"200\" height=\"200\">\n            <div class=\"media-body\">\n                <h3 class=\"faction-name\">{{faction.faction}}</h3>\n                <h5>{{faction.government}}</h5>\n                <h5>{{faction.quote}}</h5>\n\n\n            </div>\n        </div>\n        \n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"content col-sm-8\">\n        <h2>Twilight Imperium Fourth Edition</h2>\n        <p>Mecatol Rex. The center of the known galaxy and seat of the former Lazax Empire. Scarred by the flames of betrayal, Rex is a specter of a fallen empire and of ages long forgotten, yet it remains an object of reverence— and desire—in a galaxy of conflict and uncertainty.</p>\n        <br>\n        <p>Once, the great city that spanned its surface was the pinnacle of civilization. Today, Mecatol City is naught but a blasted shell of its former glory, a grim respite in the toxic Sea of Desolation that covers the majority of the planet.</p>\n        <br>\n        <p>Even so, its parabolic history of decadence and destruction does little to deter those who would seek to harness its power. The Winaaran custodians who dwell within the remnants of the city maintain what is left of the former capital, waiting for one of the Great Races to step forward and take up the mantle of the former Emperors.</p>\n        <br>\n        <p>But who among the races of the galaxy could fill the void left by the Lazax? To lay claim to the throne is a destiny sought by many, yet the shadows of the past serve as a grim warning to those who would follow in their footsteps...</p>\n        <br>\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-9\" id=\"factions\">\n    <div class=\"container\">\n        <h1 *ngIf=\"factionData\">{{factionData.faction}}</h1>\n        <!-- <p>{{factionData | json}}</p> -->\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <img src=\"{{factionData.image}}\" alt=\"{{factionData.faction}} Image\" width=\"350\" height=\"400\">\n            </div>\n            <div class=\"col-sm-6\">\n                <h5 class=\"h5_Header\">Government Type</h5>\n                <ul>\n                    <li>{{factionData.government}}</li>\n                </ul>\n\n                <div>\n                    <h5 class=\"h5_Header\">Quote: </h5>\n                    <p>{{factionData.quote}}</p>\n                </div>\n\n                <h5 class=\"h5_Header\">Technologies</h5>\n                <ul *ngFor=\"let tech of factionData.technologies\">\n                    <li><span>{{tech.name}}: </span>{{tech.info}}</li>\n                </ul>\n\n                <h5 class=\"h5_Header\">Promissory Note</h5>\n                <ul>\n                    <li><span>{{factionData.promissory_note.name}}: </span>{{factionData.promissory_note.info}}</li>\n                </ul>\n\n                <h5 class=\"h5_Header\">Faction Abilities</h5>\n                <ul *ngFor=\"let ability of factionData.abilities\">\n                    <li><span>{{ability.name}}: </span>{{ability.info}}</li>\n                </ul>\n\n            </div>\n        </div>\n\n\n    </div>\n    <hr style=\"color: white;\">\n    <div>\n        <h5 class=\"h5_Header\">Flagship: {{factionData.flagship.name}}</h5>\n        <ul>\n            <li><span>Cost:</span> {{factionData.flagship.cost}}</li>\n            <li><span>Combat Roll:</span> {{factionData.flagship.combat}}</li>\n            <li><span>Move:</span> {{factionData.flagship.move}}</li>\n            <li><span>Capacity:</span> {{factionData.flagship.capacity}}</li>\n            <li><span>Abilities:</span> {{factionData.flagship.abilities}}</li>\n            \n        </ul>\n    </div>\n    <div *ngFor=\"let unit of factionData.unit_upgrades\">\n        <h5 class=\"h5_Header\">Special Unit: {{unit.name}}</h5>\n        <ul>\n            <li><span>Cost:</span> {{unit.cost}}</li>\n            <li><span>Combat Roll:</span> {{unit.combat}}</li>\n            <li><span>Abilities:</span> {{unit.abilities}}</li>\n            <li><span>Movement:</span> {{unit.move}}</li>\n            <li><span>Capacity:</span> {{unit.capacity}}</li>\n            <li><span>Pre-Reqs:</span> {{unit.prerequisites}}</li>\n        </ul>\n    </div>\n\n    \n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _factions_factions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factions/factions.component */ "./src/app/factions/factions.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _companion_companion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companion/companion.component */ "./src/app/companion/companion.component.ts");







const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "factions", component: _factions_factions_component__WEBPACK_IMPORTED_MODULE_4__["FactionsComponent"] },
    { path: "factions/:id", component: _show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"] },
    { path: "companion", component: _companion_companion_component__WEBPACK_IMPORTED_MODULE_6__["CompanionComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#override {\n  background-color: black; }\n\n.row {\n  width: 15%; }\n\n.jumbotron {\n  background-image: url(https://img.wallpapersafari.com/desktop/1600/900/90/73/vgR97F.jpg);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  color: white;\n  font-family: Verdana, Geneva, Tahoma, sans-serif; }\n\n#sideBar {\n  display: inline-block;\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHBhZGlsbGEvRG9jdW1lbnRzL0NvZGluZ19Eb2pvL01FQU4vTUVBTl9GdW5kYW1lbnRhbHMvQW5ndWxhci90d2lsaWdodC90d2lsaWdodEZ1bi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QixFQUFBOztBQUkzQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHdGQUF3RjtFQUN4Riw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnREFBZ0QsRUFBQTs7QUFFcEQ7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI292ZXJyaWRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxufVxuXG4ucm93e1xuICAgIHdpZHRoOiAxNSU7XG59XG5cbi5qdW1ib3Ryb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nLndhbGxwYXBlcnNhZmFyaS5jb20vZGVza3RvcC8xNjAwLzkwMC85MC83My92Z1I5N0YuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuI3NpZGVCYXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.title = 'twilightFun';
        this.factions = [];
    }
    ngOnInit() {
        this._httpService.getAllFactions().subscribe((data) => {
            this.factions = data;
            console.log("*****************");
            console.log(this.factions);
            console.log("*****************");
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _factions_factions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factions/factions.component */ "./src/app/factions/factions.component.ts");
/* harmony import */ var _companion_companion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./companion/companion.component */ "./src/app/companion/companion.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _factions_factions_component__WEBPACK_IMPORTED_MODULE_8__["FactionsComponent"],
            _companion_companion_component__WEBPACK_IMPORTED_MODULE_9__["CompanionComponent"],
            _show_show_component__WEBPACK_IMPORTED_MODULE_10__["ShowComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["NgMultiSelectDropDownModule"].forRoot()
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/companion/companion.component.scss":
/*!****************************************************!*\
  !*** ./src/app/companion/companion.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p span {\n  font-weight: bold;\n  text-transform: uppercase;\n  color: gold; }\n\n#h5 {\n  text-align: center;\n  text-decoration: underline; }\n\n.form-check {\n  display: inline; }\n\n.fixedHead thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.fixedHead {\n  overflow-y: auto; }\n\ntd li {\n  width: 200px; }\n\ntable {\n  font-size: small; }\n\n#factions {\n  vertical-align: top;\n  margin-top: 50px;\n  height: 1020px;\n  overflow-y: scroll;\n  overflow-x: scroll;\n  float: right;\n  color: white;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n#factions thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #212529;\n  text-align: center; }\n\n#factions tr {\n  border: 2px solid black; }\n\nli span {\n  font-weight: bold;\n  text-transform: uppercase;\n  color: gold; }\n\n.h5_Header {\n  font-weight: bold;\n  color: royalblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHBhZGlsbGEvRG9jdW1lbnRzL0NvZGluZ19Eb2pvL01FQU4vTUVBTl9GdW5kYW1lbnRhbHMvQW5ndWxhci90d2lsaWdodC90d2lsaWdodEZ1bi9zcmMvYXBwL2NvbXBhbmlvbi9jb21wYW5pb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFJOUI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUFFLE1BQU0sRUFBQTs7QUFHNUI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBRUksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUFHLDhCQUFBO0VBQ3FELCtCQUFBO0VBQzNFLGdFQUFnRTtFQUFFLHFFQUFBLEVBQXNFOztBQUc1STtFQUNJLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFBRSxNQUFNO0VBQ3hCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFJZjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmlvbi9jb21wYW5pb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHNwYW57XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogZ29sZDtcbn1cblxuI2g1e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuXG4uZm9ybS1jaGVja3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5maXhlZEhlYWQgdGhlYWQgdGh7XG4gICAgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwO1xufVxuXG4uZml4ZWRIZWFke1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbnRkIGxpe1xuXG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG50YWJsZXtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIFxufVxuXG4jZmFjdGlvbnN7XG5cbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiAxMDIwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMwZjBjMjk7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbiNmYWN0aW9ucyB0aGVhZCB0aCB7XG4gICAgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZmFjdGlvbnMgdHJ7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbmxpIHNwYW57XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogZ29sZDtcbiAgICBcbn1cblxuLmg1X0hlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcm95YWxibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/companion/companion.component.ts":
/*!**************************************************!*\
  !*** ./src/app/companion/companion.component.ts ***!
  \**************************************************/
/*! exports provided: CompanionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanionComponent", function() { return CompanionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CompanionComponent = class CompanionComponent {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.selectedFactions = [];
        this.wasClicked = false;
    }
    ngOnInit() {
        this.getFactionsFromService();
    }
    getFactionsFromService() {
        let observable = this._httpService.getAllFactions();
        observable.subscribe((data) => {
            this.factions = data;
            console.log("*****************");
            console.log(this.factions);
            console.log("*****************");
        });
    }
    displayFaction(faction, event) {
        console.log("display factions");
        console.log(faction);
        console.log(event);
        if (event.target.checked == true) {
            this.selectedFactions.push(faction);
        }
        else {
            this.selectedFactions.splice(this.selectedFactions.indexOf(faction), 1);
        }
        console.log("display factions array");
        console.log(this.selectedFactions);
        return this.selectedFactions;
    }
};
CompanionComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CompanionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companion/companion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companion.component.scss */ "./src/app/companion/companion.component.scss")).default]
    })
], CompanionComponent);



/***/ }),

/***/ "./src/app/factions/factions.component.scss":
/*!**************************************************!*\
  !*** ./src/app/factions/factions.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  background-image: url(https://cdn.mos.cms.futurecdn.net/icSun6JubcGMrywDfy8LYC.jpg);\n  margin-top: 20px; }\n\n.btn {\n  background-color: red; }\n\n#factions {\n  vertical-align: top;\n  overflow: scroll;\n  height: 750px;\n  margin-top: 50px;\n  float: right;\n  color: white;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.faction-name {\n  background-color: darkslateblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHBhZGlsbGEvRG9jdW1lbnRzL0NvZGluZ19Eb2pvL01FQU4vTUVBTl9GdW5kYW1lbnRhbHMvQW5ndWxhci90d2lsaWdodC90d2lsaWdodEZ1bi9zcmMvYXBwL2ZhY3Rpb25zL2ZhY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUZBQW1GO0VBQ25GLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUFHLDhCQUFBO0VBQ3FELCtCQUFBO0VBQzNFLGdFQUFnRTtFQUFFLHFFQUFBLEVBQXNFOztBQUk1STtFQUNJLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFjdGlvbnMvZmFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5tb3MuY21zLmZ1dHVyZWNkbi5uZXQvaWNTdW42SnViY0dNcnl3RGZ5OExZQy5qcGcpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI2ZhY3Rpb25ze1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDc1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMGYwYzI5OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNDNlLCAjMzAyYjYzLCAjMGYwYzI5KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNDNlLCAjMzAyYjYzLCAjMGYwYzI5KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuXG59XG5cbi5mYWN0aW9uLW5hbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/factions/factions.component.ts":
/*!************************************************!*\
  !*** ./src/app/factions/factions.component.ts ***!
  \************************************************/
/*! exports provided: FactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactionsComponent", function() { return FactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FactionsComponent = class FactionsComponent {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
    }
    ngOnInit() {
        this.getFactionsFromService();
    }
    getFactionsFromService() {
        let observable = this._httpService.getAllFactions();
        observable.subscribe((data) => {
            this.factions = data;
            console.log("*****************");
            console.log(this.factions);
            console.log("*****************");
        });
    }
};
FactionsComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/factions/factions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factions.component.scss */ "./src/app/factions/factions.component.scss")).default]
    })
], FactionsComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 50px;\n  padding-left: 20px;\n  text-align: center;\n  width: auto;\n  color: white;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHBhZGlsbGEvRG9jdW1lbnRzL0NvZGluZ19Eb2pvL01FQU4vTUVBTl9GdW5kYW1lbnRhbHMvQW5ndWxhci90d2lsaWdodC90d2lsaWdodEZ1bi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFBRyw4QkFBQTtFQUNxRCwrQkFBQTtFQUMzRSxnRUFBZ0U7RUFBRSxxRUFBQSxFQUFzRSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMwZjBjMjk7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getFaction(id) {
        return this._http.get(`/factions/${id}`);
    }
    getAllFactions() {
        return this._http.get("/factions");
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/show/show.component.scss":
/*!******************************************!*\
  !*** ./src/app/show/show.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p span {\n  font-weight: bold;\n  text-transform: uppercase;\n  color: gold; }\n\n#factions {\n  vertical-align: top;\n  padding-top: 20px;\n  margin-top: 50px;\n  height: 1070px;\n  overflow: scroll;\n  float: right;\n  color: white;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\nli span {\n  font-weight: bold;\n  text-transform: uppercase;\n  color: gold; }\n\n.h5_Header {\n  font-weight: bold;\n  color: royalblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHBhZGlsbGEvRG9jdW1lbnRzL0NvZGluZ19Eb2pvL01FQU4vTUVBTl9GdW5kYW1lbnRhbHMvQW5ndWxhci90d2lsaWdodC90d2lsaWdodEZ1bi9zcmMvYXBwL3Nob3cvc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUFHLDhCQUFBO0VBQ3FELCtCQUFBO0VBQzNFLGdFQUFnRTtFQUFFLHFFQUFBLEVBQXNFOztBQUk1STtFQUNJLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUlmO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvdy9zaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCBzcGFue1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbiNmYWN0aW9uc3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiAxMDcwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMwZjBjMjk7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG5cbn1cblxubGkgc3BhbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBnb2xkO1xuICAgIFxufVxuXG4uaDVfSGVhZGVye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByb3lhbGJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let ShowComponent = class ShowComponent {
    constructor(router, route, httpService) {
        this.router = router;
        this.route = route;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.factionId = params.get("id");
            this.getOneFaction();
        });
    }
    getOneFaction() {
        let observable = this.httpService.getFaction(this.factionId);
        observable.subscribe((data) => {
            this.factionData = data;
            console.log("-------show component---------");
            console.log(this.factionData);
            console.log(this.factionId);
        });
    }
};
ShowComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show.component.scss */ "./src/app/show/show.component.scss")).default]
    })
], ShowComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidpadilla/Documents/Coding_Dojo/MEAN/MEAN_Fundamentals/Angular/twilight/twilightFun/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map