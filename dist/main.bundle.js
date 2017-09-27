webpackJsonp([1,4],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.contactsUrl = '/api/companies';
    }
    // get("/api/companies")
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/companies")
    CompanyService.prototype.createCompany = function (newCompany) {
        return this.http.post(this.contactsUrl, newCompany)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/companies/:id") endpoint not used by Angular app
    // delete("/api/companies/:id")
    CompanyService.prototype.deleteCompany = function (delCompanyId) {
        return this.http.delete(this.contactsUrl + '/' + delCompanyId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/companies/:id")
    CompanyService.prototype.updateCompany = function (putCompany) {
        var putUrl = this.contactsUrl + '/' + putCompany._id;
        return this.http.put(putUrl, putCompany)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console
        return Promise.reject(errMsg);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 132;


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(147);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(153),
        styles: [__webpack_require__(149)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__companies_company_details_company_details_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__companies_company_list_company_list_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_contains_pipe__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_filter_parents_pipe__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_add_self_pipe__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__companies_company_tree_company_tree_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_only_current_level_pipe__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__companies_company_details_company_details_component__["a" /* CompanyDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__companies_company_list_company_list_component__["a" /* CompanyListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__util_contains_pipe__["a" /* ContainsPipe */],
            __WEBPACK_IMPORTED_MODULE_8__util_filter_parents_pipe__["a" /* FilterParentsPipe */],
            __WEBPACK_IMPORTED_MODULE_9__util_add_self_pipe__["a" /* AddSelfPipe */],
            __WEBPACK_IMPORTED_MODULE_10__companies_company_tree_company_tree_component__["a" /* CompanyTreeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__util_only_current_level_pipe__["a" /* OnlyCurrentLevelPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDetailsComponent = (function () {
    function CompanyDetailsComponent(companyService) {
        this.companyService = companyService;
    }
    CompanyDetailsComponent.prototype.createCompany = function (company) {
        var _this = this;
        this.companyService.createCompany(company).then(function (newCompany) {
            _this.createHandler(newCompany);
        });
    };
    CompanyDetailsComponent.prototype.updateCompany = function (company) {
        var _this = this;
        if (company.children.length != 0) {
            var currentPath_1 = company.children[0].path;
            var resultedPath_1 = company.path + company._id + ",";
            this.getNestedCompaniesList(company._id).forEach(function (child) {
                child.path = child.path.replace(currentPath_1, resultedPath_1);
                _this.companyService.updateCompany(child);
            });
        }
        this.companyService.updateCompany(company).then(function (updatedCompany) {
            _this.updateHandler(updatedCompany);
        });
    };
    CompanyDetailsComponent.prototype.deleteCompany = function (companyId) {
        var _this = this;
        this.getNestedCompaniesList(companyId).forEach(function (company) {
            _this.companyService.deleteCompany(company._id);
        });
        this.companyService.deleteCompany(companyId).then(function (deletedCompanyId) {
            _this.deleteHandler(deletedCompanyId);
        });
    };
    CompanyDetailsComponent.prototype.getNestedCompaniesList = function (companyId) {
        return this.companies.filter(function (company) { return (company.path).split(',').indexOf(companyId) > -1; });
    };
    return CompanyDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__company__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company__["a" /* Company */]) === "function" && _a || Object)
], CompanyDetailsComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], CompanyDetailsComponent.prototype, "companies", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CompanyDetailsComponent.prototype, "createHandler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CompanyDetailsComponent.prototype, "updateHandler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CompanyDetailsComponent.prototype, "deleteHandler", void 0);
CompanyDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'company-details',
        template: __webpack_require__(154),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]) === "function" && _b || Object])
], CompanyDetailsComponent);

var _a, _b;
//# sourceMappingURL=company-details.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyListComponent = (function () {
    function CompanyListComponent(companyService) {
        var _this = this;
        this.companyService = companyService;
        this.rootPath = '';
        this.getIndexOfCompany = function (companyId) {
            return _this.companies.findIndex(function (company) {
                return company._id === companyId;
            });
        };
        this.selectCompanyHandler = function (companyId) {
            _this.selectedCompany = _this.companies.find(function (company) { return company._id === companyId; });
        };
        this.deleteCompany = function (companyId) {
            var idx = _this.getIndexOfCompany(companyId);
            if (idx !== -1) {
                _this.deleteChildrens(_this.companies.splice(idx, 1)[0]);
                _this.selectCompany(null);
            }
            _this.updateTreeModel(_this.companies);
            return _this.companies;
        };
        this.addCompany = function (company) {
            _this.companies.push(company);
            _this.selectCompany(company);
            _this.updateTreeModel(_this.companies);
            return _this.companies;
        };
        this.updateCompany = function (company) {
            var idx = _this.getIndexOfCompany(company._id);
            if (idx !== -1) {
                _this.companies[idx] = company;
                _this.selectCompany(company);
            }
            _this.updateTreeModel(_this.companies);
            return _this.companies;
        };
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService
            .getCompanies()
            .then(function (companies) {
            _this.companies = companies;
            _this.updateTreeModel(companies);
        });
    };
    CompanyListComponent.prototype.selectCompany = function (company) {
        this.selectedCompany = company;
    };
    CompanyListComponent.prototype.updateTreeModel = function (companies) {
        var leafsInTree = 0;
        var currentPath = ",";
        var currentLeaf;
        var leafsToByPass = [];
        var currentCompany;
        this.companyTree = currentLeaf = companies.filter(function (it) { return it.path === currentPath; }).slice();
        ;
        while (leafsInTree < companies.length) {
            leafsToByPass.push.apply(leafsToByPass, currentLeaf);
            currentCompany = leafsToByPass.shift();
            if (currentCompany === undefined)
                break;
            currentPath = currentCompany.path + currentCompany._id + ",";
            currentLeaf = this.companies.filter(function (it) { return it.path === currentPath; }).slice();
            currentCompany.children = currentLeaf;
            leafsInTree++;
        }
        ;
        this.getTotalVolume(companies);
    };
    CompanyListComponent.prototype.getTotalVolume = function (companies) {
        var _this = this;
        if (!companies)
            return 0;
        var totalVolume = 0;
        companies.forEach(function (el) {
            totalVolume += el.totalVolume = el.volume + _this.getTotalVolume(el.children);
        });
        return totalVolume;
    };
    CompanyListComponent.prototype.createNewCompany = function () {
        var company = {
            name: '',
            volume: 0,
            totalVolume: 0,
            path: ',',
            children: null
        };
        // By default, a newly-created company will have the selected state.
        this.selectCompany(company);
    };
    CompanyListComponent.prototype.deleteChildrens = function (company) {
        var _this = this;
        company.children.forEach(function (child) {
            var idx = _this.getIndexOfCompany(child._id);
            if (idx !== -1) {
                _this.deleteChildrens(_this.companies.splice(idx, 1)[0]);
            }
        });
    };
    return CompanyListComponent;
}());
CompanyListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'company-list',
        template: __webpack_require__(155),
        styles: [__webpack_require__(151)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]) === "function" && _a || Object])
], CompanyListComponent);

var _a;
//# sourceMappingURL=company-list.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_companies_company__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyTreeComponent = (function () {
    function CompanyTreeComponent() {
    }
    CompanyTreeComponent.prototype.selectCompany = function (company) {
        this.selectCompanyHandler(company._id);
    };
    return CompanyTreeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_companies_company__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_companies_company__["a" /* Company */]) === "function" && _a || Object)
], CompanyTreeComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_companies_company__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_companies_company__["a" /* Company */]) === "function" && _b || Object)
], CompanyTreeComponent.prototype, "selectedCompany", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CompanyTreeComponent.prototype, "selectCompanyHandler", void 0);
CompanyTreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'company-tree',
        template: __webpack_require__(156),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [])
], CompanyTreeComponent);

var _a, _b;
//# sourceMappingURL=company-tree.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSelfPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddSelfPipe = (function () {
    function AddSelfPipe() {
    }
    AddSelfPipe.prototype.transform = function (current_path, current_id) {
        return current_path;
    };
    return AddSelfPipe;
}());
AddSelfPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'addSelf'
    })
], AddSelfPipe);

//# sourceMappingURL=add-self.pipe.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContainsPipe = (function () {
    function ContainsPipe() {
    }
    ContainsPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        return items.filter(function (it) { return it[field] == value; });
    };
    return ContainsPipe;
}());
ContainsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'contains'
    })
], ContainsPipe);

//# sourceMappingURL=contains.pipe.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterParentsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterParentsPipe = (function () {
    function FilterParentsPipe() {
    }
    FilterParentsPipe.prototype.transform = function (items, value) {
        if (!items)
            return [];
        return items.filter(function (it) { return (it.path + ',' + it._id).split(',').indexOf(value) === -1; });
    };
    return FilterParentsPipe;
}());
FilterParentsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filterParents'
    })
], FilterParentsPipe);

//# sourceMappingURL=filter-parents.pipe.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyCurrentLevelPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OnlyCurrentLevelPipe = (function () {
    function OnlyCurrentLevelPipe() {
    }
    OnlyCurrentLevelPipe.prototype.transform = function (items, path) {
        if (!items)
            return [];
        return items.filter(function (it) { return it.path === path; });
    };
    return OnlyCurrentLevelPipe;
}());
OnlyCurrentLevelPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'onlyCurrentLevel'
    })
], OnlyCurrentLevelPipe);

//# sourceMappingURL=only-current-level.pipe.js.map

/***/ }),

/***/ 147:
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

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "div.panel:first-child {\n    margin-top:20px;\n}\n\ndiv.treeview {\n    min-width: 100px;\n    min-height: 100px;\n    \n    max-height: 256px;\n    overflow:auto;\n\t\n\tpadding: 4px;\n\t\n\tmargin-bottom: 20px;\n\t\n\tcolor: #369;\n\t\n\tborder: solid 1px;\n\tborder-radius: 4px;\n}\ndiv.treeview ul:first-child:before {\n    display: none;\n}\n.treeview, .treeview ul {\n    margin:0;\n    padding:0;\n    list-style:none;\n    \n\tcolor: #369;\n}\n.treeview ul {\n    margin-left:1em;\n    position:relative\n}\n.treeview ul ul {\n    margin-left:.5em\n}\n.treeview ul:before {\n    content:\"\";\n    display:block;\n    width:0;\n    position:absolute;\n    top:0;\n    left:0;\n    border-left:1px solid;\n    \n    /* creates a more theme-ready standard for the bootstrap themes */\n    bottom:15px;\n}\n.treeview company-tree li {\n    margin:0;\n    padding:0 1em;\n    line-height:2em;\n    font-weight:700;\n    position:relative\n}\n.treeview ul company-tree li:before {\n    content:\"\";\n    display:block;\n    width:10px;\n    height:0;\n    border-top:1px solid;\n    margin-top:-1px;\n    position:absolute;\n    top:1em;\n    left:0\n}\n.tree-indicator {\n    margin-right:5px;\n    \n    cursor:pointer;\n}\n.treeview company-tree li a {\n    text-decoration: none;\n    color:inherit;\n    \n    cursor:pointer;\n}\n.treeview company-tree li button, .treeview company-tree li button:active, .treeview company-tree li button:focus {\n    text-decoration: none;\n    color:inherit;\n    border:none;\n    background:transparent;\n    margin:0px 0px 0px 0px;\n    padding:0px 0px 0px 0px;\n    outline: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <company-list></company-list>\n</div>"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"company\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"company._id\">Company Details</h2>\n    <h2 *ngIf=\"!company._id\">New Company</h2>\n  </div>\n</div>\n\n\n<pre>det {{company | json}}</pre>\n<div *ngIf=\"company\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"company-name\">Name</label>\n      <input class=\"form-control\" name=\"company-name\" [(ngModel)]=\"company.name\" placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"company-volume\">Volume</label>\n      <input type=\"number\" class=\"form-control\" name=\"company-volume\" [(ngModel)]=\"company.volume\" placeholder=\"0\"/>\n    </div>    \n    <div class=\"form-group\">\n      <label for=\"company-parent-company\">Parent company</label>\n      <select class=\"form-control\" name=\"company-parent-company\" [(ngModel)]=\"company.path\">\n          <option value=\",\">\n            <pre>(Add as main company)</pre>\n          </option>\n          <option *ngFor=\"let parent of companies | filterParents : company._id\"\n            [value]=\"parent.path + parent._id + ',' \">\n            <pre>{{parent.name}}</pre>            \n          </option>\n      </select>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!company._id\" (click)=\"createCompany(company)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"company._id\" (click)=\"updateCompany(company)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"company._id\" (click)=\"deleteCompany(company._id)\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Companies</h2>\n    <ul class=\"treeview treeview-tree\">\n      <company-tree\n        *ngFor=\"let company of companies \"\n        [company]=\"company\"\n        [selectedCompany]=\"selectedCompany\"\n        [selectCompanyHandler]=\"selectCompanyHandler\">\n      </company-tree>\n    </ul>\n\n    \n    <button class=\"btn btn-warning\" (click)=\"createNewCompany()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <company-details\n      [company]=\"selectedCompany\"\n      [companies]=\"companies\"\n      [createHandler]=\"addCompany\"\n      [updateHandler]=\"updateCompany\"\n      [deleteHandler]=\"deleteCompany\">\n    </company-details>\n  </div>\n</div>\n<pre>{{companies | json}}</pre>\n\n<pre>{{companyTree | json}}</pre>\n\n<pre>{{selectedCompany | json}}</pre>"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<li>\n    <span *ngFor=\"let i of company.path.split(',')\">-</span>    \n    <a href=\"#\" \n      (click)=\"selectCompany(company)\"\n      [class.active]=\"company === selectedCompany\">\n      {{company.name}} | {{company.volume}}$ | <span *ngIf=\"company.volume != company.totalVolume\">{{company.totalVolume}}$</span>\n    </a>\n    <ul>\n      <company-tree\n        *ngFor=\"let child of company.children \"\n        [company]=\"child\"\n        [selectedCompany]=\"selectedCompany\"\n        [selectCompanyHandler]=\"selectCompanyHandler\">\n      </company-tree>\n    </ul>\n</li>\n\n    \n\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ })

},[182]);
//# sourceMappingURL=main.bundle.js.map