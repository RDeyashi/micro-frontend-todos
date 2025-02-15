import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'todo',
        loadComponent: () => import('new-todo/TodosComponent').then(m => m.TodosComponent)
    }
];
