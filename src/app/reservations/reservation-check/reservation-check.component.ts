import {Component, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ReservationService} from '../shared/reservation.service';
import {IReservationCheck} from '../shared/reservation-check.model';
import {datesValidatorFactory, emailValidator, rePasswordValidatorFactory} from '../../shared/validators';
import {HutService} from '../../huts/shared/hut.service';

@Component({
  selector: 'app-reservation-check',
  templateUrl: './reservation-check.component.html',
  styleUrls: ['./reservation-check.component.css']
})
export class ReservationCheckComponent implements OnInit {
  form: FormGroup;
  hutId: string;
  hutName: string;
  paramsProperty = 'id';
  // tslint:disable-next-line:new-parens
  reservationCheck: IReservationCheck = new class implements IReservationCheck {
    checkinDate: Date;
    checkoutDate: Date;
    peopleCount: number;
  };
  isAvailable: boolean;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private hutService: HutService) {
    const dateControl = this.fb.control('', [Validators.required]);
    this.form = this.fb.group({
      checkinDate: dateControl,
      checkoutDate: ['', [Validators.required, datesValidatorFactory(dateControl)]],
      peopleCount: ['', [Validators.required, Validators.min(1)]]
    });
    this.form.get('peopleCount').setValue('1');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hutId = params[this.paramsProperty];
    });
    this.hutService.getHutById(this.hutId).subscribe(hut => this.hutName = hut.name);
  }

  submitHandler(): void {
    this.reservationCheck.checkinDate = this.form.value.checkinDate;
    this.reservationCheck.checkoutDate = this.form.value.checkoutDate;
    this.reservationCheck.peopleCount = this.form.value.peopleCount;
    this.reservationService.checkAvailability(this.reservationCheck, this.hutId).subscribe(data => {
      this.isAvailable = data;
    });
    this.form.reset();
  }
}
