import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HutService} from '../shared/hut.service';
import {IHut} from '../shared/hut.model';

@Component({
  selector: 'app-hut',
  templateUrl: './hut-list.component.html',
  styleUrls: ['./hut-list.component.css']
})
export class HutListComponent implements OnInit {
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
      this.hutList.sort((a, b) => a.name.localeCompare(b.name, 'bg'));
      this.mountainName = this.hutList[0].mountain.name;
    });
  }

}
