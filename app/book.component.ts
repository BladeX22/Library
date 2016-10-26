import {BookService} from "./book.service";
import {Component} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'page_content',
    templateUrl: 'app/content.html',
    styleUrls: [ 'app/library-homepage.css' ],
    providers: [ BookService ]
})

export class BookComponent {


}