import { Routes } from '@angular/router';
import { AllFieldsComponent } from './pages/all-fields/all-fields.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { TablesComponent } from './pages/tables/tables.component';
import { CardsComponent } from './pages/cards/cards.component';

export const componentsRoutes: Routes = [
    {
        path: 'all-fields',
        component: AllFieldsComponent
    },
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'tables',
        component: TablesComponent
    }
]