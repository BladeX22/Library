import {OnInit, Component} from "@angular/core";
import {CategoryService} from "./category.service";
import {Category} from "./category";


@Component({
    selector: 'categories',
    templateUrl: 'app/category.component.html',
    styleUrls: [ 'app/category.component.css' ],
    providers: [ CategoryService ],
})

export class CategoryComponent implements OnInit {
    categories: Category[];
    selectedCategory: Category;
    constructor(private categoryService: CategoryService){};

    getCategories() :void {
        this.categoryService.getCategories()
            .then(categories => this.categories = categories);
    }

    onSelect(category: Category): void{
        this.selectedCategory = category;
        console.log(category);
    }

    ngOnInit(): void {
        this.getCategories();
    }
}