import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterListAttributeList'
})
export class FilterListAttributeListPipe implements PipeTransform {

  transform(items: any[], filter: any, propertyName: string): any {
    return items.filter(item => {
      return item[propertyName].includes(filter);
    });
  }
}
