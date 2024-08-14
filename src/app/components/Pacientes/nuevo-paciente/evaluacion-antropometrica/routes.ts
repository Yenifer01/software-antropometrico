import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'evaluacion-antropometrica',
    loadComponent: () => import('./evaluacion-antropometrica.component').then(m => m.EvaluacionAntropometricaComponent),
    data: {
      title: $localize`Registrar Paciente`
    }
  }
 
];

