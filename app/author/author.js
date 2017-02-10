"use strict";
var Author = (function () {
    function Author(id, name, lastName) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
    }
    Author.prototype.toString = function () {
        return this.name + ' ' + this.lastName;
    };
    return Author;
}());
exports.Author = Author;
//# sourceMappingURL=author.js.map