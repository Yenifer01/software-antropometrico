import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'funciones-biologicas',
    loadComponent: () => import('./funciones-biologicas.component').then(m => m.FuncionesBiologicasComponent),
    data: {
      title: $localize`Registrar Paciente`
    }
  }
 
];

