import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {IReservationCheck} from './reservation-check.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IReservation} from './reservation.model';
import {tap} from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class ReservationService {
  isAvailable: boolean;
  reservationDetails = null;
  constructor(private http: HttpClient) { }

  checkAvailability(reservationCheck: IReservationCheck, hutId: string): Observable<any> {
    this.reservationDetails = reservationCheck;
    this.reservationDetails.hutId = hutId;
    return this.http.post(`${apiUrl}/huts/${hutId}/check`, reservationCheck, { withCredentials: true }).pipe(
      tap((isAvailable: boolean) => this.isAvailable = isAvailable)
    );
  }

  save(reservation: IReservation, hutId: string): Observable<any> {
    return this.http.post(`${apiUrl}/huts/${hutId}/reservation`, reservation, { withCredentials: true }).pipe(
      tap((reservationResult: IReservation) => this.reservationDetails = reservationResult)
    );
  }

  loadReservationsForUser(userId: string): Observable<any> {
    return this.http.get(`${apiUrl}/reservation/${userId}`, { withCredentials: true, headers: {'Content-Type': 'application/json' }});
  }
}
