import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home/:userNickName',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'enter',
        loadChildren: () => import('./pages/enter/enter.module').then(m => m.EnterModule)
    },
    {
        path: 'example',
        loadChildren: () => import('./pages/example/example.module').then(m => m.ExampleModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
