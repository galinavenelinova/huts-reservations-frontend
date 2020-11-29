import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import {MountainsModule} from './home/mountains.module';
import {HutsModule} from './huts/huts.module';
import {ReservationsModule} from './reservations/reservations.module';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MountainsModule,
    HutsModule,
    ReservationsModule,
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
