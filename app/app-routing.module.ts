
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ContentComponent} from "./content.component";
import {BookComponent} from "./book.component";
import {CategoryComponent} from "./category.component";

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
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}