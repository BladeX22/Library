"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = (function () {
    function Book(id, title, description, numOfPages, authors, numberOfRates, genre) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.numOfPages = numOfPages;
        this.authors = authors;
        this.numberOfRates = numberOfRates;
        this.genre = genre;
    }
    Book.prototype.getAuthors = function () {
        var names = '';
        for (var _i = 0, _a = this.authors; _i < _a.length; _i++) {
            var author = _a[_i];
            names = names + ", " + author.toString() + '\n';
        }
        return names;
    };
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map