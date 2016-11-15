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
var book_service_1 = require("./book.service");
var core_1 = require('@angular/core');
var category_1 = require("./category");
var book_manager_1 = require("./book-manager");
var BookComponent = (function () {
    function BookComponent(bookService) {
        this.bookService = bookService;
        this.books = book_manager_1.BOOKS;
    }
    BookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    BookComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log(changes["selectedCategory"]);
        var chng = changes["selectedCategory"];
        this.bookService.getBooksForCategory(chng.currentValue).then(function (books) { return _this.books = books; });
        console.log(this.books);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', category_1.Category)
    ], BookComponent.prototype, "selectedCategory", void 0);
    BookComponent = __decorate([
        core_1.Component({
            selector: 'books',
            templateUrl: 'app/book.component.html',
            styleUrls: ['app/library-homepage.css'],
            providers: [book_service_1.BookService],
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map