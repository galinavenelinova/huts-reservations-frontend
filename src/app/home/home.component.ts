import { Component, OnInit } from '@angular/core';
import {IMountain} from '../interfaces/mountain';
import {MountainService} from '../mountain.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mountainList: IMountain[];
  routerLink: RouterLink;

  constructor(private mountainService: MountainService) { }

  ngOnInit(): void {
    this.mountainService.loadMountainsList().subscribe(
      mountainList => {
        this.mountainList = mountainList;
      }
    );
  }

}
