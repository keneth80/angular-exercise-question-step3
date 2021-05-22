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
        path: 'feed-write',
        loadChildren: () => import('./pages/feed-write/feed-write.module').then(m => m.FeedWriteModule)
    },
    {
        path: 'feed-search',
        loadChildren: () => import('./pages/feed-search/feed-search.module').then(m => m.FeedSearchModule)
    },
    {
        path: 'feed-search/:tag',
        loadChildren: () => import('./pages/feed-search/feed-search.module').then(m => m.FeedSearchModule)
    },
    {
        path: 'mypage',
        loadChildren: () => import('./pages/my-page/my-page.module').then(m => m.MyPageModule)
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
