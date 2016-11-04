import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ContentComponent} from "./content.component";
import {CategoryComponent} from "./category.component";
import {BookComponent} from "./book.component";
import {AppRoutingModule} from "./app-routing.module";
@NgModule({
    imports:      [ BrowserModule, AppRoutingModule ],
    declarations: [ AppComponent, ContentComponent, CategoryComponent, BookComponent],
    bootstrap:    [ AppComponent, ContentComponent]
})
export class AppModule { }