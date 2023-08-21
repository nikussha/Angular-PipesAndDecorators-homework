import { Component } from '@angular/core';
import { PersonService } from './person.service';
import { person } from './interface-person';
import { status } from './interface-person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  personData: person[] = [];
  isloading: boolean = false;
  constructor(private service: PersonService) {}

  fetchData(): Promise<void> {
    this.isloading = true; // Set loading flag

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const data: person[] = this.service.getData() as person[];
        this.personData = data;
        this.isloading = false;
        resolve();
      }, 2000);
    });
  }

  arr = Array.from({ length: 56 });
}
