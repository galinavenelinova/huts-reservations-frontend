import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../shared/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inEditMode = false;
  userDetails: IUser;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe(
      userDetails => {
        this.userDetails = userDetails;
      }
    );
  }

  toggleEditMode(): void {
    this.inEditMode = !this.inEditMode;
  }

  submitHandler(data: any): void {
    this.userService.updateProfile(data).subscribe({
      next: (userDetails) => {
        this.userDetails = userDetails;
        this.inEditMode = false;
        console.log('submitHandler:' + data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
