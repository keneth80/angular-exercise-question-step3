import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedWriteComponent } from './feed-write.component';

const routes: Routes = [
    {
        path: '',
        component: FeedWriteComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedWriteRoutingModule { }
