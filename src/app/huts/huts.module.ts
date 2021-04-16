import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HutListComponent} from './hut-list/hut-list.component';
import {HutService} from './shared/hut.service';
import {RouterModule} from '@angular/router';
import { HutDetailComponent } from './hut-detail/hut-detail.component';
import { HutCreateComponent } from './hut-create/hut-create.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MountainService} from '../home/shared/mountain.service';


@NgModule({
  declarations: [HutListComponent, HutDetailComponent, HutCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    HutService,
    MountainService
  ],
  exports: [
    HutListComponent
  ]
})
export class HutsModule { }
