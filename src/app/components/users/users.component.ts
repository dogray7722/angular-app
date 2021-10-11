import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {}

  constructor() { }

  ngOnInit(): void {
  
      this.users = [
        {
          firstName: "John",
          lastName: "Doe",
          age: 30,
          address: {
            street: "50 Main St",
            city: "Denver",
            state: "CO",
          },
          image: "http://lorempixel.com/300/300/people/3",
          isActive: true
        },
        {
          firstName: "Janet",
          lastName: "Bilco",
          age: 34,
          address: {
            street: "501 1st St",
            city: "Cincinnati",
            state: "OH",
          },
          image: "http://lorempixel.com/300/300/people/5",
          isActive: false
        },
        {
          firstName: "Michael",
          lastName: "Hunter",
          age: 46,
          address: {
            street: "105 Fuck St",
            city: "Arvada",
            state: "CO",
          },
          image: "http://lorempixel.com/300/300/people/8",
          isActive: true
        },
      ];

    this.loaded = true;

    // this.addUser({
    //   firstName: "David",
    //   lastName: "CornSlurp"
    // });

    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }
}
