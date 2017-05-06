import {Component, OnInit} from "@angular/core";
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {CategoryService} from "../category/category.service";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {BookService} from "./book.service";

@Component({
    selector: 'new_book',
    templateUrl: 'app/book/new_book_form.component.html',
    styleUrls: ['app/book/new_book_form.component.css', 'app/library-homepage.css'],
    providers: [CategoryService, BookService],
})

export class NewBookComponent implements OnInit {

    public mainForm: FormGroup;

    private formErrors = {
        'title': '',
        'isbnNumber': '',
        'description': '',
        'authors': {
            0: {
                'name': '',
                'lastName': ''
            }
        }

    };

    private validationMessages = {
        'title': {
            'required': 'Title is required',
            'maxlength': 'Title cannot be more than 255 characters long'
        },
        'isbnNumber': {
            'required': 'isbn Number is required',
            'maxlength': 'isbn Number cannot be more than 255 characters long'
        },
        'description': {
            'required': 'description is required',
        },
        'authors': {
            'name': {
                'required': 'Name is required',
                'maxlength': 'Name cannot be more than 255 characters long'
            },
            'lastName': {
                'required': 'Last name is required',
                'maxlength': 'Last name cannot be more than 255 characters long'
            }
        }
    };

    constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private bookService: BookService) {
    };

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


    public submit(): void {
        console.log(this.mainForm);
        this.bookService.createBook(this.mainForm.getRawValue())
            .subscribe();
    }

    ngOnInit(): void {
        this.buildForm();

        this.categoryService.getCategories().subscribe(
            categories => {
                this.categoryOptions = categories;
            },
            err => {
                console.log(err);
            }
        );
    }

    private buildForm(): void {
        this.mainForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(255)]],
            isbnNumber: ['', [Validators.required, Validators.maxLength(255)]],
            genres: [[], [Validators.required]],
            description: ['', [Validators.required]],
            authors: this.formBuilder.array([
                this.initAuthors(),
            ])
        });

        this.mainForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.mainForm.get('authors').valueChanges
            .subscribe(data => this.onAuthorsChanged(data));

        this.onValueChanged();
    }

    private initAuthors() {
        return this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(255)]],
            lastName: ['', [Validators.required, Validators.maxLength(255)]]
        });
    }

    public addAuthor(): void {
        const control = <FormArray>this.mainForm.controls['authors'];
        control.push(this.initAuthors());
    }

    public removeAuthor(id: number): void {
        const control = <FormArray>this.mainForm.controls['authors'];
        control.removeAt(id);
    }

    public getAuthors() {
        return this.mainForm.get('authors')['controls'];
    }

    onValueChanged(data?: any): void {
        if (!this.mainForm) {
            return;
        }
        const form = this.mainForm;

        for (const field in this.formErrors) {
            if (!(form.get(field) instanceof FormArray)) {
                this.formErrors[field] = '';
                const control = form.get(field);

                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        this.formErrors[field] += messages[key] + "\n";
                    }
                }
            }
        }
    }

    private onAuthorsChanged(data?: any): void {
        if (!this.mainForm) {
            return;
        }
        const authors = this.mainForm.get('authors');

        for (const i in authors['controls']) {
            const author = authors['controls'][i];
            this.formErrors.authors[i] = {
                'name': '',
                'lastName': ''
            };
            for (const key in author['controls']) {
                if (author['controls'][key] && author['controls'][key].dirty && !author['controls'][key].valid) {
                    for (const error in author['controls'][key].errors) {
                        this.formErrors.authors[i][key] += this.validationMessages.authors[key][error] + "\n";
                        console.log(this.mainForm.getRawValue());
                    }
                }
            }
        }
    }
}