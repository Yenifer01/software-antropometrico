import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Pacientes',
    url: '/base',
    icon: 'fas fa-users',
    
    children: [
      {
        name: 'Agregar Paciente',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Pacientes',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      
    ]
  },
  {
    name: 'FA',
    url: '/buttons',
    icon: 'fas fa-heartbeat',
    children: [
      {
        name: 'Factor de actividad VS TMB',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Peso VS Factor de actividad',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'REQ',
    url: '/forms',
    icon: 'fas fa-clipboard-check',
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Alimentos',
    icon: 'fas fa-utensils',
    url: '/alimentos',
    children: [
      {
        name: 'Agregar Alimento',
        url: '/alimentos/alimento-nuevo',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Lista de Alimentos',
        url: '/icons/flags',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Reportes',
    url: '/notifications',
    icon: 'fas fa-chart-line',
    children: [
      {
        name: 'Agregar Reporte',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Reportes',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Buscar Reporte',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
