import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedWriteComponent } from './feed-write.component';
import { AuthGuard } from '../../common/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: FeedWriteComponent,
        canActivate: [
            AuthGuard
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedWriteRoutingModule { }
