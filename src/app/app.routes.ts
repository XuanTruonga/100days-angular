import { Routes } from '@angular/router';
import { homeRoutes } from './features/Home/home.routes';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/Login/pages/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  ...homeRoutes,
];
