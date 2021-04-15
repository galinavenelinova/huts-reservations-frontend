import {Component, OnInit} from '@angular/core';
import {IReservation} from '../shared/reservation.model';
import {ReservationService} from '../shared/reservation.service';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {
  reservations: IReservation[];
  outdatedReservationList = false;

  constructor(
    private reservationService: ReservationService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    let userId = null;
    this.userService.getCurrentUserProfile().subscribe(
      user => {
        userId = user.id;
        this.reservationService.loadReservationsForUser(userId).subscribe(
          reservationList => {
            this.reservations = reservationList;
            this.outdatedReservationList = false;
            this.reservations.sort((a, b) => (a.checkinDate > b.checkinDate) ? 1 : -1);
          }
        );
      }
    );
  }

  deleteReservation(reservationId: string): void {
    if (confirm('Моля потвърдете, че желаете да изтриете посочената резервация.')) {
      this.reservationService.deleteReservation(reservationId).subscribe(
        () => this.ngOnInit()
      );
    }
  }

  loadOutdatedReservations(): void {
    this.userService.getCurrentUserProfile().subscribe(
      user => {
        this.reservationService.loadOutdatedReservationsForUser(user.id).subscribe(
          reservationList => {
            this.reservations = reservationList;
            this.outdatedReservationList = true;
            this.reservations.sort((a, b) => (a.checkinDate > b.checkinDate) ? 1 : -1);
          }
        );
      }
    );
  }

  isDateAfterCurrentDate(checkinDate: Date): boolean {
    const currentDate = new Date();
    return new Date(checkinDate).getTime() > currentDate.getTime();
  }
}
