import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../shared/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: IUser[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(
      {
        next: value => {
          this.usersList = value;
        }
      }
    );
  }

}
