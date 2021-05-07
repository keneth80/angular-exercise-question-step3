import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
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
