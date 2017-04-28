import {Component, OnInit, Input} from "@angular/core";
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {CategoryService} from "../category/category.service";
import {Author} from "../author/author";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";

@Component({
    selector: 'new_book',
    templateUrl: 'app/book/new_book_form.component.html',
    styleUrls: ['app/book/new_book_form.component.css', 'app/library-homepage.css'],
    providers: [CategoryService],
})

export class NewBookComponent implements OnInit {

    public mainForm: FormGroup;

    private formErrors = {
        'title': '',
        'isbnNumber': '',
        'author': {
            'name': '',
            'lastName': ''
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
        'author': {
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

    constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) {
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


    public submit(value): void {
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
            authors: this.formBuilder.array([
                this.initAuthors(),
            ])
        });

        this.mainForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

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
            this.formErrors[field] = '';
            const control = form.get(field);
            console.log(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + "\n";
                }
            }
        }
    }
}