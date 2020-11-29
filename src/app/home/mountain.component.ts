import { Component, OnInit } from '@angular/core';
import {IMountain} from './shared/mountain.model';
import {MountainService} from './shared/mountain.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.css']
})
export class MountainComponent implements OnInit {
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
