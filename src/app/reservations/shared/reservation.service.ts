import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {IReservationCheck} from './reservation-check.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
    return this.http.post<any>(`${apiUrl}/huts/${hutId}/check`, JSON.stringify(reservationCheck));
  }

  save(value: any) {

  }
}
