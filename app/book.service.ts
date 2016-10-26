import { Injectable } from '@angular/core';
import {Book} from "./book";
import {BOOKS} from "./book-manager";

@Injectable()
export class BookService {
    getBooks(): Promise<Book[]>{
        return Promise.resolve(BOOKS);
    }
}