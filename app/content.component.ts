import {Component, OnInit} from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "./book";

@Component({
    selector: 'content',
    templateUrl: 'app/content.html',
    styleUrls: [ 'app/library-homepage.css' ],
    providers: [ BookService ]

})
export class ContentComponent implements OnInit{
    popularBooks: Book[];

    ngOnInit(): void {
    }
}