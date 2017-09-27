import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(items: any[], field: string, value: String): any[] {
    if (!items) return [];
    return items.filter(it => it[field] == value);
  }

}
