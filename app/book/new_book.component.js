"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var category_service_1 = require("../category/category.service");
var forms_1 = require("@angular/forms");
var NewBookComponent = (function () {
    function NewBookComponent(categoryService, formBuilder) {
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.formErrors = {
            'title': '',
            'isbnNumber': '',
            'author': {
                'name': '',
                'lastName': ''
            }
        };
        this.validationMessages = {
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
        this.mySettings = {
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
        this.myTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            defaultTitle: 'Select',
        };
    }
    ;
    NewBookComponent.prototype.submit = function (value) {
    };
    NewBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.categoryOptions = categories;
        }, function (err) {
            console.log(err);
        });
    };
    NewBookComponent.prototype.buildForm = function () {
        var _this = this;
        this.mainForm = this.formBuilder.group({
            title: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(255)]],
            isbnNumber: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(255)]],
            authors: this.formBuilder.array([
                this.initAuthors(),
            ])
        });
        this.mainForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    NewBookComponent.prototype.initAuthors = function () {
        return this.formBuilder.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(255)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(255)]]
        });
    };
    NewBookComponent.prototype.addAuthor = function () {
        var control = this.mainForm.controls['authors'];
        control.push(this.initAuthors());
    };
    NewBookComponent.prototype.removeAuthor = function (id) {
        var control = this.mainForm.controls['authors'];
        control.removeAt(id);
    };
    NewBookComponent.prototype.getAuthors = function () {
        return this.mainForm.get('authors')['controls'];
    };
    NewBookComponent.prototype.onValueChanged = function (data) {
        if (!this.mainForm) {
            return;
        }
        var form = this.mainForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            console.log(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + "\n";
                }
            }
        }
    };
    return NewBookComponent;
}());
NewBookComponent = __decorate([
    core_1.Component({
        selector: 'new_book',
        templateUrl: 'app/book/new_book_form.component.html',
        styleUrls: ['app/book/new_book_form.component.css', 'app/library-homepage.css'],
        providers: [category_service_1.CategoryService],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, forms_1.FormBuilder])
], NewBookComponent);
exports.NewBookComponent = NewBookComponent;
//# sourceMappingURL=new_book.component.js.map