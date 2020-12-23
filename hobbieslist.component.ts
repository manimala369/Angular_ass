import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-hobbieslist',
  template: `

  <h2> HobbiesList </h2>
  <ul *ngFor="let h of itemsarray">
  <li> {{h.id}}, {{h.name}}, {{h.hobbie}} </li>
  </ul>
  `,
  styleUrls: ['./hobbieslist.component.css']
})
export class HobbieslistComponent implements OnInit {

  public itemsarray=[];

  constructor(private _hs: DataserviceService) { }

  ngOnInit() {
    this.itemsarray=this._hs.getItemsarray();
  }

}
