import {Injectable} from '@angular/core';
import {Book} from "./book";
import {BOOKS} from "./book-manager";
import {Category} from "./category";

@Injectable()
export class BookService {
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }

    getBooksForCategory(category: Category): Promise<Book[]> {
        var allBooks = BOOKS;
        var books = [];
        for (var book of allBooks) {
            if (book.category === category) {
                console.log(book);
                books.push(book);
            }
        }
        return Promise.resolve(books);
    }

    getBook(id: number): Promise<Book> {
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }
}