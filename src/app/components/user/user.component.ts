import { Component } from '@angular/core'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  styles: [`
    h2 {
      color: blue
    }
  `]
})

export class UserComponent {
  // Properties
  firstName: string;
  lastName: string; 
  age: number;
  address: any;

  foo: any;
  hasKids: boolean;
  
  // Methods
  constructor() {
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.age = 30;
      this.address = {
        street: '50 Main St',
        city: 'Denver',
        state: 'CO'
      }
      this.hasKids = false

  }
}