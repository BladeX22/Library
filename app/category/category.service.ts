import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Genre} from "./genre";
import {Observable} from "rxjs/Rx";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {

    constructor(private http: Http){};

    private allGenresUrl = 'http://library.local/app_dev.php/genre/all';

    getCategories(): Observable<Genre[]> {
        return this.http.get(this.allGenresUrl)
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}