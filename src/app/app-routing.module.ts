import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/example',
        pathMatch: 'full'
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
