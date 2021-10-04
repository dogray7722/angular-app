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

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
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
          }
      ];

      this.loaded = true;
    }, 2000);

    this.showExtended = false;

    this.users = [
    //   {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 30,
    //     address: {
    //       street: "50 Main St",
    //       city: "Denver",
    //       state: "CO",
    //     },
    //   },
    //   {
    //     firstName: "Janet",
    //     lastName: "Bilco",
    //     age: 34,
    //     address: {
    //       street: "501 1st St",
    //       city: "Cincinnati",
    //       state: "OH",
    //     },
    //   },
    //   {
    //     firstName: "Michael",
    //     lastName: "Hunter",
    //     age: 46,
    //     address: {
    //       street: "105 Fuck St",
    //       city: "Arvada",
    //       state: "CO",
    //     },
    //   }
    ];
    // this.addUser({
    //   firstName: "David",
    //   lastName: "CornSlurp",
    //   age: 19,
    //   address: {
    //     street: "15 NutHugger Ave",
    //     city: "Stillwater",
    //     state: "OK",
    //   }
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }


}
