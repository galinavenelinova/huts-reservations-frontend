import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HutService} from '../hut.service';
import {IHut} from '../interfaces/hut';

@Component({
  selector: 'app-hut',
  templateUrl: './hut.component.html',
  styleUrls: ['./hut.component.css']
})
export class HutComponent implements OnInit {
  mountainId: string;
  mountainName: string;
  hutList: IHut[];

  constructor(private route: ActivatedRoute, private hutService: HutService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mountainId = params['id'];
    });
    this.hutService.loadHutList(this.mountainId).subscribe(hutList => {
      this.hutList = hutList;
      this.mountainName = this.hutList[0].mountain.name;
    });
  }

}
