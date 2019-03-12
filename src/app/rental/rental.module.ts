import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgPipesModule}  from 'ngx-pipes';
import {Route, RouterModule} from '@angular/router';
import {RentalComponent} from './rental.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {RentalService} from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { HttpClientModule  } from "@angular/common/http";
import {UpperCasePipe} from '../pipes/upper.pipes'
const  route = [
  {path: 'rentals' ,
   component : RentalComponent,
   children: [
     {path: '' ,  component : RentalListComponent},
     {path: ':rentalId' , component : RentalDetailComponent}
   ]

}
]

@NgModule({
  declarations:[
      RentalComponent,
      RentalListComponent,
      RentalListItemComponent,
      RentalDetailComponent,
      UpperCasePipe
  ],
  imports :[
    RouterModule.forChild(route),
    CommonModule,
    HttpClientModule,
   NgPipesModule],
  providers: [RentalService]
})

export class RentalModule{
   
}