import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  template: `
  <h1>App Component</h1>
  <ul>
    <li *ngFor="let h of hobbies">
        {{ h.hobbie | mypipe:h.hobbie }}</li>
  </ul>
  `,
  styleUrls: []
})
export class HobbiesComponent implements OnInit {

  hobbies: any=[
    {
      name:'mani', hobbie: 'singing'
    },
    {
      name:'vedu', hobbie: 'dancing'
    },
    {
      name:'ganta', hobbie: 'internet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
