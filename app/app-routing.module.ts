
import {NgModule} from "@angular/core";
import {RouterModule, Router} from "@angular/router";
import {ContentComponent} from "./content.component";
import {CategoryComponent} from "./category/category.component";
import {NewBookComponent} from "./book/new_book.component";
import {BookDetail} from "./book/book-detail.component";

const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: ContentComponent
    },
    {
        path: 'offer',
        component: CategoryComponent
    },
    {
        path: 'add_book',
        component: NewBookComponent
    },
    {
        path: 'book_detail/:id',
        component: BookDetail
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

    constructor(private router: Router){}

    isActive(route : string): boolean {
        console.log(this.router.url == route);
        return this.router.url == route;
    }
}