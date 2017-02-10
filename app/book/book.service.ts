import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Book} from "./book";
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Author} from "../author/author";
import {Genre} from "../category/genre";

@Injectable()
export class BookService {

    private oneBookUrl = 'http://library.local/app_dev.php/book_info/show/';
    private allBooksUrl = 'http://library.local/app_dev.php/book_info/all';
    private booksForGenreUrl = 'http://library.local/app_dev.php/book_info/show_for_genre/';

    constructor(private http: Http) {
    };

    findAll(): Observable<Book[]> {
        return this.http.get(this.allBooksUrl)
            .map((res: Response) => {
                return this.deserialize(res);
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    findBooksForGenreName(genreName: string): Observable<Book[]> {
        return this.http.get(this.booksForGenreUrl + genreName)
            .map((res: Response) => {
                return this.deserialize(res);
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getBook(id: number): Observable<Book> {
        return this.http.get(this.oneBookUrl + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private deserialize(res: Response): Book[] {
        return res.json().map((elt) => {
            var authors = elt.authors.map((elt) => {
                return new Author(elt.id, elt.name, elt.lastName)
            });
            var genres = elt.genres.map((elt) => {
                return new Genre(elt.id, elt.isActive, elt.name)
            });

            return new Book(elt.id, elt.title, elt.description, 200, authors, elt.numberOfRates, genres);
        });
    }

}