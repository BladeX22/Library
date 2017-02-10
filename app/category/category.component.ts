import {OnInit, Component} from "@angular/core";
import {CategoryService} from "./category.service";
import {Genre} from "./genre";

@Component({
    selector: 'genres',
    templateUrl: 'app/category/category.component.html',
    styleUrls: [ 'app/category/category.component.css', 'app/offer.css' ],
    providers: [ CategoryService ],
})

export class CategoryComponent implements OnInit {
    genres: Genre[];
    selectedCategory: Genre;
    constructor(
        private categoryService: CategoryService){};

    getCategories() :void {
        this.categoryService.getCategories()
            .subscribe(
              genres => this.genres = genres,
                err =>{
                    console.log(err);
                }
            );
    }

    onSelect(category: Genre): void{
        this.selectedCategory = category;
    }

    ngOnInit(): void {
        if(!this.selectedCategory) {
            this.getCategories();
        }
    }
}