import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSelf'
})
export class AddSelfPipe implements PipeTransform {

  transform(current_path: String, current_id: String): String {
    return current_path;
  }

}
