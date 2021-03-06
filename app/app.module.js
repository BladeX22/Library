"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var content_component_1 = require("./content.component");
var category_component_1 = require("./category/category.component");
var book_component_1 = require("./book/book.component");
var app_routing_module_1 = require("./app-routing.module");
var new_book_component_1 = require("./book/new_book.component");
var book_detail_component_1 = require("./book/book-detail.component");
var multiselect_dropdown_1 = require("angular-2-dropdown-multiselect/src/multiselect-dropdown");
var http_1 = require("@angular/http");
var book_genre_component_1 = require("./book/book-genre.component");
var ObjectIteratorPipe_1 = require("./pipe/ObjectIteratorPipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, multiselect_dropdown_1.MultiselectDropdownModule,
            forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, forms_1.ReactiveFormsModule, http_1.JsonpModule],
        declarations: [app_component_1.AppComponent, content_component_1.ContentComponent,
            category_component_1.CategoryComponent, book_component_1.BookComponent, new_book_component_1.NewBookComponent, book_detail_component_1.BookDetailComponent, book_genre_component_1.BookGenreComponent, ObjectIteratorPipe_1.ObjectIteratorPipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map