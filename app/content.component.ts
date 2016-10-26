import {Component, OnInit} from '@angular/core';
import {Book} from "./book";
import {BookService} from "./book.service";
import {Category} from "./category";
@Component({
    selector: 'page_content',
    templateUrl: 'app/content.html',
    styleUrls: [ 'app/library-homepage.css' ],
    providers: [ BookService ]
})
export class ContentComponent implements OnInit{
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