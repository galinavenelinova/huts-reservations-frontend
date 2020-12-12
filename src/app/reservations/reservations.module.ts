import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCheckComponent } from './reservation-check/reservation-check.component';
import {ReservationService} from './shared/reservation.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [ReservationCheckComponent, ReservationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    ReservationService
  ],
  exports: [
    ReservationCheckComponent,
    ReservationComponent
  ]
})
export class ReservationsModule { }
