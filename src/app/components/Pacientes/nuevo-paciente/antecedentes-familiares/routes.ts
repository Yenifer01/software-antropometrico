import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'antecedentes-familiares',
    loadComponent: () => import('./antecedentes-familiares.component').then(m => m.AntecedentesFamiliaresComponent),
    data: {
      title: $localize`Registrar Paciente`
    }
  }
 
];

