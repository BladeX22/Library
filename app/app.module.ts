import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ContentComponent} from "./content.component";
import {CategoryComponent} from "./category.component";
import {BookComponent} from "./book.component";
import {AppRoutingModule} from "./app-routing.module";
import {NewBookComponent} from "./new_book.component";
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect/src/multiselect-dropdown";

@NgModule({
    imports:      [ BrowserModule, AppRoutingModule ],
    declarations: [ AppComponent, ContentComponent, CategoryComponent, BookComponent, NewBookComponent],
    bootstrap:    [ AppComponent]
})
export class AppModule { }