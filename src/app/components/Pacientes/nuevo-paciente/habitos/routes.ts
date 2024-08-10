import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'habitos',
    loadComponent: () => import('./habitos.component').then(m => m.HabitosComponent),
    data: {
      title: $localize`Registrar Paciente`
    }
  }
 
];

