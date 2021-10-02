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
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  address = {
    street: '50 Main St',
    city: 'Denver',
    state: 'CO'
  }

  // Methods
  constructor() {
    // this.sayHello();
    console.log(`Yesterday you were ${this.age}.`)
      this.hasBirthday()
    console.log(`But today's your birthday, so now you are ${this.age} years old.`) 
    console.log("Happy Birthday old fuck!")
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`)
  }

  hasBirthday() {
    this.age += 1;
  }


}