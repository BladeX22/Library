import {Component, OnInit} from '@angular/core';
import {BookService} from "./book/book.service";
import {Book} from "./book/book";

@Component({
    selector: 'content',
    templateUrl: 'app/content.html',
    styleUrls: [ 'app/library-homepage.css' ],
    providers: [ BookService ]

})
export class ContentComponent implements OnInit{
    popularBooks: Book[];

    ngOnInit(): void {
        console.log('completely clueless.');
    }
}