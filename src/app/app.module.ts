import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { RentalComponent } from './rental/rental.component';
import {RentalModule} from './rental/rental.module';

const  route = [
  {path: '' , redirectTo: '/rentals', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
  ],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule,
    RentalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
