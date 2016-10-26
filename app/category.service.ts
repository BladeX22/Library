import {Injectable} from "@angular/core";
import {Category} from "./category";
import {CATEGORIES} from "./category-manager";

@Injectable()
export class CategoryService {

    getCategories(): Promise<Category[]> {
        return Promise.resolve(CATEGORIES);
    }
}