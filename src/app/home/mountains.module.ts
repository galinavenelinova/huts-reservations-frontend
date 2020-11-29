import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MountainComponent} from './mountain.component';
import {MountainService} from './shared/mountain.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MountainComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    MountainService
  ],
  exports: [
    MountainComponent
  ]
})
export class MountainsModule { }
