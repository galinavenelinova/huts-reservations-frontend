import {Component, OnInit, ViewChild} from '@angular/core';
import {ReservationService} from '../shared/reservation.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {IReservation} from '../shared/reservation.model';
import {IUser} from '../../user/shared/user.model';
import {UserService} from '../../user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HutService} from '../../huts/shared/hut.service';
import {datesValidatorFactory} from '../../shared/validators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  form: FormGroup;
  hutId: string;
  hutName: string;
  paramsProperty = 'id';
  reservationDetails: any;
  userDetails: IUser;
  reservation: IReservation = {checkinDate: undefined, checkoutDate: undefined, peopleCount: 0, user: null};

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private userService: UserService,
    private hutService: HutService,
    private route: ActivatedRoute,
    private router: Router) {
    this.form = this.fb.group({
      checkinDate: '',
      checkoutDate: '',
      peopleCount: '',
      phone: '',
      names: '',
      email: ''
    });
  }

  ngOnInit(): void {
    this.reservationDetails = this.reservationService.reservationDetails;
    this.form.get('checkinDate').setValue(this.reservationDetails.checkinDate);
    this.form.get('checkoutDate').setValue(this.reservationDetails.checkoutDate);
    this.form.get('peopleCount').setValue(this.reservationDetails.peopleCount);
    this.userService.getCurrentUserProfile().subscribe(
      userDetails => {
        this.userDetails = userDetails;
        console.log('userService loaded userDetails');
        this.form.get('phone').setValue(this.userDetails.tel);
        this.form.get('names').setValue(this.userDetails.names);
        this.form.get('email').setValue(this.userDetails.email);
      }
    );
    this.route.params.subscribe(params => {
      this.hutId = params[this.paramsProperty];
    });
    this.hutService.getHutById(this.hutId).subscribe(hut => this.hutName = hut.name);
  }

  submitHandler(): void {
    this.reservation.checkinDate = this.form.value.checkinDate;
    this.reservation.checkoutDate = this.form.value.checkoutDate;
    this.reservation.peopleCount = this.form.value.peopleCount;
    this.reservation.user = this.userDetails;
    console.log(this.reservation);
    this.reservationService.save(this.reservation, this.hutId).subscribe(
      reservation => {
        console.log(reservation);
        this.router.navigate(['/user/reservation']);
      });
  }
}
