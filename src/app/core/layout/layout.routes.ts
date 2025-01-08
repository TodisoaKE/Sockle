import { Routes } from '@angular/router';

export const LayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/main-layout/main-layout.component').then(c => c.MainLayoutComponent)        
    }
]