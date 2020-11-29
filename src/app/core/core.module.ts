import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {storageServiceProvider} from './storage.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    storageServiceProvider,
    AuthGuard
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class CoreModule { }
