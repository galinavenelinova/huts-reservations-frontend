import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HutListComponent} from './hut-list/hut-list.component';
import {HutService} from './shared/hut.service';
import {RouterModule} from '@angular/router';
import { HutDetailComponent } from './hut-detail/hut-detail.component';



@NgModule({
  declarations: [HutListComponent, HutDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    HutService
  ],
  exports: [
    HutListComponent
  ]
})
export class HutsModule { }
