import {BookService} from "./book.service";
import {Component, OnInit} from '@angular/core';
import {Book} from "./book";
import {Router} from "@angular/router";

@Component({
    selector: 'books',
    templateUrl: 'app/book/book.component.html',
    styleUrls: ['app/library-homepage.css'],
    providers: [BookService],
})

export class BookComponent implements OnInit {

    books: Book[];

    constructor(private router: Router,
                private bookService: BookService) {
    }

    ngOnInit(): void {
        this.bookService.findAll().subscribe(
            books => {this.books = books;
            },
            err => {
                console.log(err);
            }
        );
    }

    goToDetails(book: Book): void {
        let link = ['book_detail', book.id];
        this.router.navigate(link);
    }
}