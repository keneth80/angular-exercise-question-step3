import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

// title: Global guard service module
// description: 전역으로 구현된 guard service를 module로 관리한다.
@NgModule({
    providers: [
        AuthGuard,
    ]
})
export class GuardModule { }
