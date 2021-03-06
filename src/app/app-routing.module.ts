import {MountainComponent} from './home/mountain.component';
import {RouterModule, Routes} from '@angular/router';
import {HutListComponent} from './huts/hut-list/hut-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HutDetailComponent} from './huts/hut-detail/hut-detail.component';
import {ReservationCheckComponent} from './reservations/reservation-check/reservation-check.component';
import {ReservationComponent} from './reservations/reservation/reservation.component';
import {AuthGuard} from './core/guards/auth.guard';
import {ReservationsListComponent} from './reservations/reservations-list/reservations-list.component';
import {HutCreateComponent} from './huts/hut-create/hut-create.component';

const routes: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MountainComponent,
      },
      {
        path: ':id/huts',
        component: HutListComponent
      },
      {
        path: 'hut/details/:id',
        component: HutDetailComponent
      },
      {
        path: 'huts/:id/check',
        component: ReservationCheckComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'huts/:id/reservation',
        component: ReservationComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'user/reservation',
        component: ReservationsListComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'add-hut',
        component: HutCreateComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
