import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page.component';
import { AuthGuard } from '../../common/guard/auth.guard';


// q1. my 피드 리스트 페이지를 로그인이 되어있을 경우에만 볼수 있도록 구현하시오.
// TODO: Write JS code here!'
const routes: Routes = [
    {
        path: '',
        component: MyPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPageRoutingModule { }
