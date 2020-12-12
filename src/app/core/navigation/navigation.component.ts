import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  get isLogged(): boolean {
    console.log('userService: ' + this.userService.isLogged);
    return this.userService.isLogged;
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler(): void {
    this.userService.logout().subscribe(() => this.router.navigate(['/user/login']));
  }
}
