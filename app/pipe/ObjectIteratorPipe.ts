import {PipeTransform, Pipe} from "@angular/core";
@Pipe({ name: 'values',  pure: false })
export class ObjectIteratorPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value).map(key => value[key]);
    }
}