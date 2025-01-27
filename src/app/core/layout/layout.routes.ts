import { Routes } from '@angular/router';

export const LayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/main-layout/main-layout.component').then(c => c.MainLayoutComponent),
        children: [
            {
                path: 'components',
                loadChildren: () => import('../../module/components/components.routes').then(r => r.componentsRoutes)
            },
            {
                path: 'others',
                loadChildren: () => import('../../module/others/others.routes').then(r => r.othersRoutes)
            }
        ]
    }
]