import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'edicion-alimento/:id',
    loadComponent: () => import('./alimento-editar.component').then(m => m.AlimentoEditarComponent),
    data: {
      title: $localize`Edición de un Alimento`
    }
  }
 
];

