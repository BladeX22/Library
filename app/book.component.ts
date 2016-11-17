import {BookService} from "./book.service";
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Book} from "./book";
import {Category} from "./category";
import {BOOKS} from "./book-manager";

@Component({
    selector: 'books',
    templateUrl: 'app/book.component.html',
    styleUrls: ['app/library-homepage.css'],
    providers: [BookService],
})

export class BookComponent implements OnChanges{

    books: Book[] = BOOKS;
    @Input()
    selectedCategory: Category;

    constructor(private bookService: BookService) {
    }

    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }

    ngOnChanges(changes: SimpleChanges): void {
        let selectedCategory = changes["selectedCategory"];
        this.bookService.getBooksForCategory(selectedCategory.currentValue).then(books => this.books = books);
    }
}