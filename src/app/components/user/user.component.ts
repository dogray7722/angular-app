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
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  
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
      this.numberArray = [1,3,5]
      this.stringArray = ["hello", "world"]
      this.mixedArray = [true, "fart", 2] 
      this.myTuple = ["toad", 12, false]
      this.unusable = undefined
      this.u = undefined
      this.n = null

      console.log(this.addNumbers(2, 3))
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  } 
}