import { Routes } from '@angular/router';
import { Herosection } from './components/herosection/herosection';

export const routes: Routes = [

     { path: '', component: Herosection },   
     { 
        path: 'aboutsection',
        loadComponent: () => import('./components/aboutsection/aboutsection').then(m => m.Aboutsection)
    },
    { 
        path: 'skillsection',
        loadComponent: () => import('./components/skillsection/skillsection').then(m => m.Skillsection)
    },
    {
        path: 'projectsection',
        loadComponent: () => import('./components/projectsection/projectsection').then(m => m.Projectsection)
    },
    {
        path: 'contactsection',
        loadComponent: () => import('./components/contactsection/contactsection').then(m => m.Contactsection)
    },
    {
        path: 'footersection',
        loadComponent: () => import('./components/footersection/footersection').then(m => m.Footersection)
    }
];
