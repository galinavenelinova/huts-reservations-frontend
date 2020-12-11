import {Component, OnInit} from '@angular/core';
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
  currentUser: IUser;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe(
      userDetails => {
        this.currentUser = userDetails;
      }
    );
  }

  toggleEditMode(): void {
    this.inEditMode = !this.inEditMode;
  }

  submitHandler(data: any): void {
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.inEditMode = false;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
