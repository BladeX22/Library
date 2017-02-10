import {Genre} from "../category/genre";
import {Author} from "../author/author";
export class Book {
    constructor(public id: number,
                public title: string,
                public description: string,
                public numOfPages: number,
                public authors: Author[],
                public numberOfRates: number,
                public genre: Genre[]) {
    }

    getAuthors(): string {
        let names = '';
        for (var author of this.authors) {
            names = names +`, `+ author.toString()+'\n';
        }

        return names;
    }
}