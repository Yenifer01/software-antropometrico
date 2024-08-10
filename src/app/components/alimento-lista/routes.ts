import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alimentos-lista',
    loadComponent: () => import('./alimento-lista.component').then(m => m.AlimentoListaComponent),
    data: {
      icon: 'fa-solid fa-list',
      title: $localize`Lista de alimentos`
    }
  }
 
];

