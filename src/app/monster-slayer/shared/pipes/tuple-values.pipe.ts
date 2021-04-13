import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tupleValues'
})
export class TupleValuesPipe implements PipeTransform {

  transform(value: [number, number]): string {
    return value ? value.join('/') : '';
  }
}
