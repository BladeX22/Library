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
var router_1 = require("@angular/router");
var book_service_1 = require("./book.service");
var core_1 = require("@angular/core");
var BookGenreComponent = (function () {
    function BookGenreComponent(bookService, route) {
        this.bookService = bookService;
        this.route = route;
    }
    BookGenreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.bookService.findBooksForGenreName(params['genre']).subscribe(function (books) { return _this.books = books; }, function (err) {
                console.log(err);
            });
        });
    };
    BookGenreComponent = __decorate([
        core_1.Component({
            selector: 'book_details',
            templateUrl: 'app/book/book-detail.component.html',
            styleUrls: ['app/book/book-detail.component.css'],
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, router_1.ActivatedRoute])
    ], BookGenreComponent);
    return BookGenreComponent;
}());
exports.BookGenreComponent = BookGenreComponent;
//# sourceMappingURL=book_genre.component.js.map