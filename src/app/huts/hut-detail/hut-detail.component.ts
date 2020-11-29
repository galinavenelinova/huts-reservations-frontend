import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HutService} from '../shared/hut.service';
import {IHut} from '../shared/hut.model';

@Component({
  selector: 'app-hut-detail',
  templateUrl: './hut-detail.component.html',
  styleUrls: ['./hut-detail.component.css']
})
export class HutDetailComponent implements OnInit {
  hutId: string;
  hut: IHut;
  constructor(private route: ActivatedRoute, private hutService: HutService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hutId = params['id'];
    });
    this.hutService.getHutById(this.hutId).subscribe(hut => {
      this.hut = hut;
    });
  }

}
