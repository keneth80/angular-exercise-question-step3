import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


// shared module
// 공유 모듈로써 form module, material module등을 정의한다.
// SharedModule을 로드하면 여기에 정의된 module은 따로 정의하지 않아도 된다.
// 참고: https://angular.kr/guide/sharing-ngmodules
@NgModule({
    exports: [
        CommonModule, // angular의 기본 directive를 사용하기 위한 module
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class SharedModule { }
