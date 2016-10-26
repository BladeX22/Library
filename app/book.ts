import {Category} from "./category";
export class Book {
    id: number;
    name: string;
    numOfPages: number;
    price: number;
    author: string;
    numOfRates: number;
    category: Category;
}