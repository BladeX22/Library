import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentComponent} from "./content.component";
import {CategoryComponent} from "./category/category.component";
import {BookComponent} from "./book/book.component";
import {AppRoutingModule} from "./app-routing.module";
import {NewBookComponent} from "./book/new_book.component";
import {BookDetailComponent} from "./book/book-detail.component";
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect/src/multiselect-dropdown";
import { HttpModule, JsonpModule } from '@angular/http';
import {BookGenreComponent} from "./book/book-genre.component";
import {ObjectIteratorPipe} from "./pipe/ObjectIteratorPipe";

@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule,
        MultiselectDropdownModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        JsonpModule
    ],
    declarations: [ AppComponent, ContentComponent,
        CategoryComponent,
        BookComponent,
        NewBookComponent,
        BookDetailComponent,
        BookGenreComponent,
        ObjectIteratorPipe
    ],
    bootstrap:    [ AppComponent]
})
export class AppModule { }