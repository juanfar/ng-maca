import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class MacaJoinPipe implements PipeTransform {

  transform(value: string[], separator: string = ','): any {
    if (!value) {
      return '';
    }
    return value.join(separator);
  }
}
