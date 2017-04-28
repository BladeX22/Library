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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var book_1 = require("./book");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var author_1 = require("../author/author");
var genre_1 = require("../category/genre");
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.oneBookUrl = 'http://library.local/app_dev.php/book_info/show/';
        this.allBooksUrl = 'http://library.local/app_dev.php/book_info/all';
        this.booksForGenreUrl = 'http://library.local/app_dev.php/book_info/show_for_genre/';
    }
    ;
    BookService.prototype.findAll = function () {
        var _this = this;
        return this.http.get(this.allBooksUrl)
            .map(function (res) {
            return _this.deserialize(res);
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BookService.prototype.findBooksForGenreName = function (genreName) {
        var _this = this;
        return this.http.get(this.booksForGenreUrl + genreName)
            .map(function (res) {
            return _this.deserialize(res);
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BookService.prototype.getBook = function (id) {
        return this.http.get(this.oneBookUrl + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BookService.prototype.deserialize = function (res) {
        return res.json().map(function (elt) {
            var authors = elt.authors.map(function (elt) {
                return new author_1.Author(elt.id, elt.name, elt.lastName);
            });
            var genres = elt.genres.map(function (elt) {
                return new genre_1.Genre(elt.id, elt.isActive, elt.name);
            });
            return new book_1.Book(elt.id, elt.title, elt.description, 200, authors, elt.numberOfRates, genres);
        });
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map