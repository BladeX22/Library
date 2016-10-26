import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ContentComponent} from "./content.component";
import {CategoryComponent} from "./category.component";
import {OrderBy} from "./order-by.component";
import {BookComponent} from "./book.component";
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, ContentComponent, CategoryComponent, BookComponent],
    bootstrap:    [ AppComponent, ContentComponent]
})
export class AppModule { }