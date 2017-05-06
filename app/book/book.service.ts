import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
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

    createBook(data): Observable<Book> {
        let createBookUrl = 'http://library.local/app_dev.php/book_info/new';

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
console.log(JSON.stringify(data));
        return this.http.post(createBookUrl, JSON.stringify(data), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private deserialize(res: Response): Book[] {
        return res.json().map((elt) => {
            let authors = elt.authors.map((elt) => {
                return new Author(elt.id, elt.name, elt.lastName)
            });
            let genres = elt.genres.map((elt) => {
                return new Genre(elt.id, elt.isActive, elt.name)
            });

            return new Book(elt.id, elt.title, elt.description, 200, authors, elt.numberOfRates, genres);
        });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }

}