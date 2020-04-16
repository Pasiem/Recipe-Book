import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterList'
})
export class SearchFilter implements PipeTransform {
    transform(value: any, searchFilterStr: string, propName: string) {
        const results = [];
        for(const item of value) {
            let name = item[propName];
            if (searchFilterStr === "") return value;   
            if(name.includes(searchFilterStr)) {
                results.push(item);
            }
            else results.push(null);
        }
        return results;
    }
}