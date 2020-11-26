import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {HutComponent} from './hut/hut.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    // resolve: { user: TestResolver }
  },
  {
    path: ':id/huts',
    component: HutComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
