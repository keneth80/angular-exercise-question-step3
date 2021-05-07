import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeBackendInterceptor } from './interceptor/fake-backend.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FakeBackendInterceptor,
            multi: true
        }
    ]
})
export class BackendModule { }
