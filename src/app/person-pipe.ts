import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class personPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const today = new Date();
    const birthdateDate = new Date(value);
    const age = today.getFullYear() - birthdateDate.getFullYear();

    if (
      today.getMonth() < birthdateDate.getMonth() ||
      (today.getMonth() === birthdateDate.getMonth() &&
        today.getDate() < birthdateDate.getDate())
    ) {
    }
    return age - 1 + ' years old';
  }
}
