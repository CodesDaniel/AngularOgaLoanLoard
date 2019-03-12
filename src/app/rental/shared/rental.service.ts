import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Rental} from './rental.model';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RentalService {

  constructor(private http :HttpClient){}

 public getrentalbyId( rentalid: string): Observable<any> {
    return this.http.get("api/v1/rentals/"+ rentalid)
 }
public getrental(): Observable<any> {
    return  this.http.get("api/v1/rentals")  
}


}
