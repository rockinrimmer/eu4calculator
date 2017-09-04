import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], filter: any, propertyName: string): any {
    return items.filter(item => item[propertyName] === filter);
  }

}
