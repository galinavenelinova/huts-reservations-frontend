import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ReservationService} from '../shared/reservation.service';
import {NgForm} from '@angular/forms';
import {IReservation} from '../shared/reservation.model';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/user.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationDetails: any;
  currentUser: IUser;
  reservation: IReservation = {checkinDate: undefined, checkoutDate: undefined, peopleCount: 0, user: null};
  @ViewChild('reservationForm') form: NgForm;
  constructor(private reservationService: ReservationService, private userService: UserService) { }

  ngOnInit(): void {
    this.reservationDetails = this.reservationService.reservationDetails;
    this.currentUser = this.userService.currentUser;
  }

  reservationHandler(value: any): void {
    this.reservation.checkinDate = value.checkinDate;
    this.reservation.checkoutDate = value.checkoutDate;
    this.reservation.peopleCount = value.peopleCount;
    console.log(this.reservation);
    this.reservationService.save(this.reservation);
  }
}
