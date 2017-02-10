import {Component, OnInit} from "@angular/core";
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {CategoryService} from "../category/category.service";

@Component({
    selector: 'new_book',
    templateUrl: 'app/book/new_book_form.component.html',
    styleUrls: [ 'app/book/new_book_form.component.css', 'app/library-homepage.css' ],
    providers: [CategoryService],
})

export class NewBookComponent implements OnInit{

    constructor(private categoryService: CategoryService){};

    public selectedOptions: number[];
    public categoryOptions: IMultiSelectOption[];


    public mySettings: IMultiSelectSettings = {
        pullRight: false,
        enableSearch: false,
        checkedStyle: 'glyphicon',
        buttonClasses: 'btn btn-default',
        selectionLimit: 0,
        closeOnSelect: false,
        showCheckAll: false,
        showUncheckAll: false,
        dynamicTitleMaxItems: 6,
        maxHeight: '600px',
    };

    public myTexts: IMultiSelectTexts = {
        checkAll: 'Check all',
        uncheckAll: 'Uncheck all',
        checked: 'checked',
        checkedPlural: 'checked',
        searchPlaceholder: 'Search...',
        defaultTitle: 'Select',
    };

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe(
            categories => {this.categoryOptions = categories;
            },
            err => {
                console.log(err);
            }
        );
    }
}