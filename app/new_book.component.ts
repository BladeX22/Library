import {Component, Input} from "@angular/core";
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

declare var jQuery: any;

@Component({
    selector: 'new_book',
    templateUrl: 'app/new_book_form.component.html',
    styleUrls: [ 'app/new_book_form.component.css', 'app/library-homepage.css' ],
})

export class NewBookComponent{
    // private selectedOptions: number[];
    // private myOptions: IMultiSelectOption[] = [
    //     { id: 1, name: 'Option 1' },
    //     { id: 2, name: 'Option 2' },
    // ];
}