import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page.component';
import { AuthGuard } from '../../common/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MyPageComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPageRoutingModule { }
