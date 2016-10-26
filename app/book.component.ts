import {BookService} from "./book.service";
import {Component, OnInit} from '@angular/core';
import {Book} from "./book";
import {Category} from "./category";

@Component({
    selector: 'books',
    templateUrl: 'app/book.component.html',
    styleUrls: [ 'app/library-homepage.css' ],
    providers: [ BookService ]
})

export class BookComponent implements OnInit{
    books: Book[];

    constructor(private bookService: BookService) {}

    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }

    findAllBooksForCategory(category: Category): void{
        let books: Book[];
        for (var book of this.books){
            if(book.category == category){
                books.push(book);
            }
        }
        console.log(books);
    }

    ngOnInit(): void {
        this.getBooks();
    }
}