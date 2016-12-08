import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ContentComponent} from "./content.component";
import {CategoryComponent} from "./category/category.component";
import {BookComponent} from "./book/book.component";
import {AppRoutingModule} from "./app-routing.module";
import {NewBookComponent} from "./book/new_book.component";
import {BookDetail} from "./book/book-detail.component";

@NgModule({
    imports:      [ BrowserModule, AppRoutingModule ],
    declarations: [ AppComponent, ContentComponent, CategoryComponent, BookComponent, NewBookComponent, BookDetail],
    bootstrap:    [ AppComponent]
})
export class AppModule { }