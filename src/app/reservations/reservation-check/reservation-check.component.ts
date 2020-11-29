import {Component, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ReservationService} from '../shared/reservation.service';
import {IReservationCheck} from '../shared/reservation-check.model';

@Component({
  selector: 'app-reservation-check',
  templateUrl: './reservation-check.component.html',
  styleUrls: ['./reservation-check.component.css']
})
export class ReservationCheckComponent implements OnInit {
  hutId: string;
  paramsProperty = 'id';
  // tslint:disable-next-line:new-parens
  reservationCheck: IReservationCheck = new class implements IReservationCheck {
    checkinDate: Date;
    checkoutDate: Date;
    peopleCount: number;
  };
  isAvailable: boolean;
  formSubmitted = false;
  @ViewChild('reservationCheckForm') form: NgForm;

  constructor(private route: ActivatedRoute, private reservationService: ReservationService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hutId = params[this.paramsProperty];
    });
  }

  reservationCheckHandler(value: any): void {
    this.reservationCheck.checkinDate = value.checkinDate;
    this.reservationCheck.checkoutDate = value.checkoutDate;
    this.reservationCheck.peopleCount = value.peopleCount;
    this.reservationService.checkAvailability(this.reservationCheck, this.hutId).subscribe(data => {
      this.isAvailable = data;
    });
    this.form.reset();
  }
}
