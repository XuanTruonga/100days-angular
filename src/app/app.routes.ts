import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'login',
		loadComponent: () => import('./features/Login/pages/login/login.component').then((m) => m.LoginComponent),
	},
	{
		path: 'home',
		loadComponent: () => import('./home.component').then((m) => m.HomeComponent),
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{ path: '**', redirectTo: 'home' },
];
