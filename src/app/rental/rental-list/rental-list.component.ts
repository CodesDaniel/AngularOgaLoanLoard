import { Component, OnInit, Input } from '@angular/core';
import {RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

 Rental: Rental[] = [];
  constructor(private rentalService: RentalService) { }
  ngOnInit() {
    const rentalObserable =  this.rentalService.getrental();
    rentalObserable.subscribe(
      (rental :Rental[]) => {
   this.Rental = rental;
    },
    (error) => {
      console.warn(error);
    },
    () => {

    }
    );
    }

}
