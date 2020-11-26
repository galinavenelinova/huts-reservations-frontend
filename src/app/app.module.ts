import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {MountainService} from './mountain.service';
import {HttpClientModule} from '@angular/common/http';
import { HutComponent } from './hut/hut.component';
import {HutService} from './hut.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    MountainService,
    HutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
