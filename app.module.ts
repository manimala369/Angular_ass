import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { MypipePipe } from './mypipe.pipe';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DataserviceService } from './dataservice.service';
import { HobbieslistComponent } from './hobbieslist/hobbieslist.component';
import { HobbiesdetailsComponent } from './hobbiesdetails/hobbiesdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    MypipePipe,
    HobbiesComponent,
    HobbieslistComponent,
    HobbiesdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
