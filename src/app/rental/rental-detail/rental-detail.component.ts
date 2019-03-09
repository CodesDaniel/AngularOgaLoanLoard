import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental: Rental = new Rental();

  constructor( private route: ActivatedRoute,
               public rentalService: RentalService) { }

  ngOnInit() {
   this.route.params.subscribe((route) => {
    this.getrental(route.rentalId);

   });
  }

  getrental( rentalId: string){
     this.rentalService.getrentalbyId(rentalId).subscribe(
       (rental: Rental) => {
         this.rental = rental;
     });
  }

}
