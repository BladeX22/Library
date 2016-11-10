import {Injectable} from '@angular/core';
import {Book} from "./book";
import {BOOKS} from "./book-manager";
import {Category} from "./category";

@Injectable()
export class BookService {
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }
    //
    // getBooksForCategory(category: Category): Promise<Book[]> {
    //     BOOKS.fil
    // }
    // categoryFilter(element: Book, )
}