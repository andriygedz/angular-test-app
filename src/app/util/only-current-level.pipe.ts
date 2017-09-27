import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyCurrentLevel'
})
export class OnlyCurrentLevelPipe implements PipeTransform {

  transform(items: any[], path: string): any[] {
    if (!items) return [];
    return items.filter(it => it.path === path );
  }

}
