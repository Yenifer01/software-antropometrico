import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'actividad-fisica',
    loadComponent: () => import('./actividad-fisica.component').then(m => m.ActividadFisicaComponent),
    data: {
      title: $localize`Registrar Paciente`
    }
  }
 
];

