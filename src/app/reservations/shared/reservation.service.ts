import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {IReservationCheck} from './reservation-check.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IReservation} from './reservation.model';

const apiUrl = environment.apiUrl;

@Injectable()
export class ReservationService {
  test: string;
  isAvailable: boolean;
  reservationDetails = null;
  constructor(private http: HttpClient) { }

  checkAvailability(reservationCheck: IReservationCheck, hutId: string): Observable<any> {
    this.reservationDetails = reservationCheck;
    this.reservationDetails.hutId = hutId;
    return this.http.post(`${apiUrl}/huts/${hutId}/check`, reservationCheck, { withCredentials: true });
  }

  save(reservation: IReservation, hutId: string): Observable<any> {
    console.log('post request sent' + hutId);
    return this.http.post(`${apiUrl}/huts/${hutId}/reservation`, reservation, { withCredentials: true });
  }
}
