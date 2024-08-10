import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'nuevo-paciente',
    loadComponent: () => import('./nuevo-paciente.component').then(m => m.NuevoPacienteComponent),
    data: {
      title: $localize`Registrar Paciente`
    }
  }
 
];

