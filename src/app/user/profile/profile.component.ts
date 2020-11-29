import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {IUser} from '../shared/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inEditMode = false;

  get currentUser(): IUser {
    return this.userService.currentUser;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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
