import { Routes } from '@angular/router';
import { Task } from './pages/task/task';
import { TastForm } from './pages/tast-form/tast-form';

export const routes: Routes = [
    {
        path:'',
        component: Task
    },
    {
        path:'tasks',
        component: TastForm
    }
];
