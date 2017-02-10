import {ActivatedRoute} from "@angular/router";
import {BookService} from "./book.service";
import {OnInit, Component} from "@angular/core";
import {Book} from "./book";

@Component({
    selector: 'book_details',
    templateUrl: 'app/book/book.component.html',
    styleUrls: ['app/library-homepage.css'],
    providers: [BookService]
})

export class BookGenreComponent implements OnInit {

    books: Book[];

    constructor(private bookService: BookService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.bookService.findBooksForGenreName(params['genre']).subscribe(
                books => this.books = books,
                err => {
                    console.log(err);
                }
            );
        });
    }
}