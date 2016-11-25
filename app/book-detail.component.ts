import {Component, OnInit} from "@angular/core";
import {Book} from "./book";
import {BookService} from "./book.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'book_details',
    templateUrl: 'app/book-detail.component.html',
    styleUrls: [ 'app/book-detail.component.css' ],
    providers: [BookService]
})

export class BookDetail implements OnInit {
    title = 'Tytuł:';
    description = 'Opis:';
    numOfPages = 'Liczba stron:';
    categories = 'Kategorie';
    author = 'Autor';
    book: Book;
    constructor(
        private bookService: BookService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.bookService.getBook(id)
                .then(book => this.book = book);
            });
    }

}