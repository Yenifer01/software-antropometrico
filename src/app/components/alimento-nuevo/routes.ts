import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alimento-nuevo',
    loadComponent: () => import('./alimento-nuevo.component').then(m => m.AlimentoNuevoComponent),
    data: {
      title: $localize`Agregar Alimento`
    }
  }
 
];

