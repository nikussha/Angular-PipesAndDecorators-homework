import { Pipe, PipeTransform } from '@angular/core';
import { person } from './interface-person';
@Pipe({
  name: 'usersPipe',
})
export class usersPipe implements PipeTransform {
  transform(value: person[]) {
    const nameCount: any = {};

    return value.map((item: person, index: number) => {
      const { firstname } = item;

      if (nameCount.hasOwnProperty(firstname)) {
        nameCount[firstname]++;
        return `${firstname} ${nameCount[firstname]}`;
      } else {
        nameCount[firstname] = 1;
        return item.firstname;
      }
    });
  }
}
