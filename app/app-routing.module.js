"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var content_component_1 = require("./content.component");
var category_component_1 = require("./category/category.component");
var new_book_component_1 = require("./book/new_book.component");
var book_detail_component_1 = require("./book/book-detail.component");
var book_genre_component_1 = require("./book/book-genre.component");
var book_component_1 = require("./book/book.component");
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: content_component_1.ContentComponent
    },
    {
        path: 'offer',
        component: category_component_1.CategoryComponent,
        children: [
            {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full'
            },
            {
                path: 'all',
                component: book_component_1.BookComponent
            },
            {
                path: ':genre',
                component: book_genre_component_1.BookGenreComponent
            }
        ]
    },
    {
        path: 'add_book',
        component: new_book_component_1.NewBookComponent
    },
    {
        path: 'book_detail/:id',
        component: book_detail_component_1.BookDetailComponent
    },
    {
        path: 'genres',
        component: category_component_1.CategoryComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule(router) {
        this.router = router;
    }
    AppRoutingModule.prototype.isActive = function (route) {
        console.log(this.router.url == route);
        return this.router.url == route;
    };
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map