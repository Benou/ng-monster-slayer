import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tupleValues'
})
export class TupleValuesPipe implements PipeTransform {

  /**
   * Simple helper method used to display a tuple value.
   * @param value - The tuple to transform.
   * @returns The well formatted value.
   */
  transform(value: [number, number]): string {
    return value ? value.join('/') : '';
  }
}
