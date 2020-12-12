import {Component, OnInit} from '@angular/core';
import {IReservation} from '../shared/reservation.model';
import {ReservationService} from '../shared/reservation.service';
import {UserService} from '../../user/user.service';

export const reservations = [
  {
    checkinDate: '21.12.2020',
    checkoutDate: '23.12.2020',
    peopleCount: 3,
    hutName: 'Хижа Мазалат'
  },
  {
    checkinDate: '28.12.2020',
    checkoutDate: '30.12.2020',
    peopleCount: 5,
    hutName: 'Хижа Партизанска песен'
  },
];

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {
  reservations: IReservation[];

  constructor(
    private reservationService: ReservationService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    // this.reservations = reservations;
    let userId = null;
    this.userService.getCurrentUserProfile().subscribe(
      user => {
        userId = user.id;
        this.reservationService.loadReservationsForUser(userId).subscribe(
          reservationList => this.reservations = reservationList
        );
      }
    );
  }

}
