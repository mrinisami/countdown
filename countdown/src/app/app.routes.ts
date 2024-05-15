import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/components/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'play',
    loadComponent: () => import('./play/play/number-selection.page').then(m => m.NumberSelection)
  },
  {
    path: 'number-selection',
    loadComponent: () => import('./play/play/number-selection.page').then(m => m.NumberSelection)
  },
];
