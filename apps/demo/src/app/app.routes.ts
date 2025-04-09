import { Routes } from '@angular/router';

export default [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.page') },
] satisfies Routes;
