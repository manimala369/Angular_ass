import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-hobbiesdetails',
  template: `
  <h2> hobbies</h2>
  <ul *ngFor="let h of itemsarray">
  <li> {{h.hobbie}} </li>
  </ul>
  `,
  styleUrls: ['./hobbiesdetails.component.css']
})
export class HobbiesdetailsComponent implements OnInit {
  public itemsarray=[];

  constructor(private _hs: DataserviceService) { }

  ngOnInit() {
    this.itemsarray=this._hs.getItemsarray();
  }

}
