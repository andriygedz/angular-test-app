import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterParents'
})
export class FilterParentsPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) return [];
    return items.filter(it => (it.path+','+it._id).split(',').indexOf(value) === -1 );
  }

}
