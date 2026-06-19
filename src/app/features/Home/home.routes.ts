import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'view/:id',
        loadComponent: () =>
          import('./pages/home-detail/home-detail.component').then(
            (m) => m.HomeDetailComponent,
          ),
      },
      {
        path: 'update/:id',
        loadComponent: () =>
          import('./pages/home-detail/home-detail.component').then(
            (m) => m.HomeDetailComponent,
          ),
      },
    ],
  },
];
