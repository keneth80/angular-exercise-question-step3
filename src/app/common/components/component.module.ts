import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { GnbComponent } from './gnb/gnb.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../modules/shared.module';


// shared module
// 공유 모듈로써 form module, material module등을 정의한다.
// SharedModule을 로드하면 여기에 정의된 module은 따로 정의하지 않아도 된다.
// 참고: https://angular.kr/guide/sharing-ngmodules
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        SnackBarComponent, // snack bar component
        SpinnerComponent, // 로딩바 componenet
        PaginationComponent,
        UserProfileComponent
    ],
    exports: [
        SnackBarComponent, // snack bar component
        SpinnerComponent, // 로딩바 componenet
        PaginationComponent,
        UserProfileComponent
    ]
})
export class ComponentModule { }
