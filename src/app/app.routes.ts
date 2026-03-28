import { Routes } from '@angular/router';
import { Task } from './pages/task/task';
import { TastForm } from './pages/tast-form/tast-form';
import { Login } from './pages/login/login';
import { Loginform } from './component/loginform/loginform';
import { SignIn } from './pages/sign-in/sign-in';

export const routes: Routes = [
    {
        path:"",
        component: Login
    },
    {
        path:"sign_in",
        component: SignIn
    },
    {
        path:'task',
        component: Task
    },
    {
        path:'tasksform',
        component: TastForm
    }
];
