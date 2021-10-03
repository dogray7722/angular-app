import { Component } from '@angular/core'
import { User } from '../../models/User'

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
  user: User;
  
  // Methods
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main St',
        city: 'Denver',
        state: 'CO'
      }
    }
  }
}