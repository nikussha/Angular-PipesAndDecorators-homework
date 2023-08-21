import { Injectable } from '@angular/core';
import { person, status } from './interface-person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  personData: person[] = [
    {
      firstname: 'Anthony',
      lastname: 'Hopkins',
      about: 'john@',
      birthdate: '11 June 2002',
      status: status.Active,
    },
    {
      firstname: 'Daniel',
      lastname: 'lewis',
      about: 'john@',
      birthdate: '18 october 1998',
      status: status.Deleted,
    },
    {
      firstname: 'John',
      lastname: 'Malkovich',
      about: 'john@',
      birthdate: '18 december 1993',
      status: status.Inactive,
    },
  ];

  getData() {
    return this.personData;
  }

  constructor() {}
}
