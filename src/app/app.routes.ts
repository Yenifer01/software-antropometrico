import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'alimentos',
        loadChildren: () => import('./components/alimento-nuevo/routes').then((m) => m.routes)
      },
      {
        path: 'alimentos',
        loadChildren: () => import('./components/alimento-lista/routes').then((m) => m.routes)
      },
      {
        path: 'alimentos',
        loadChildren: () => import('./components/alimento-editar/routes').then((m) => m.routes)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./components/Pacientes/nuevo-paciente/routes').then((m) => m.routes)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./components/Pacientes/nuevo-paciente/habitos/routes').then((m) => m.routes)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./components/Pacientes/nuevo-paciente/funciones-biologicas/routes').then((m) => m.routes)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./components/Pacientes/nuevo-paciente/actividad-fisica/routes').then((m) => m.routes)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./components/Pacientes/nuevo-paciente/antecedentes-familiares/routes').then((m) => m.routes)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./components/Pacientes/nuevo-paciente/evaluacion-antropometrica/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },

      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },


  { path: '**', redirectTo: 'dashboard' }
];
