import {Component, OnInit} from '@angular/core';
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
  ) {
  }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(
      {
        next: value => {
          this.usersList = value;
          this.usersList.sort((a, b) => (a.username > b.username) ? 1 : -1);
        }
      }
    );
  }

  makeUserAdmin(username: string): void {
    if (confirm('Моля потвърдете, че желаете да смените ролята на потребител с потребителско име: ' + username)) {
      this.userService.makeUserAdmin(username).subscribe(
        {
          next: value => {
            this.usersList = value;
            this.usersList.sort((a, b) => (a.username > b.username) ? 1 : -1);
          }
        });
    }
  }
}
