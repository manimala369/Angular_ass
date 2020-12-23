import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  public getItemsarray(){
    return[
    {"id": 1, "name":"mani", "hobbie": "singing"},
    {"id": 2,"name":"vedu", "hobbie": "dancing"},
    {"id": 3,"name":"ganta", "hobbie": "internet"}
  ];
}

  // servicemethod(){
  //   return 'Its just a simple service method';
  //   }
    
}
