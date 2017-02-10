export class Author {
    constructor(
        public id: number,
        public name: string,
        public lastName: string
    ){}

    toString(): string{
        return this.name + ' ' + this.lastName;
    }
}