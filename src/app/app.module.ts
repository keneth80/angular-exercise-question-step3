import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import localeKo from '@angular/common/locales/ko';

import { AppRoutingModule } from './app-routing.module';

import { BackendModule } from './common/backend/backend.module';
import { ErrorModule } from './common/error/error.module';
import { ServicesModule } from './common/services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './common/modules/shared.module';
import { SpinnerService } from './common/components/spinner/spinner.service';
import { NotificationService } from './common/services/notification/notification.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { GnbComponent } from './common/components/gnb/gnb.component';
import { SpinnerComponent } from './common/components/spinner/spinner.component';
import { SnackBarComponent } from './common/components/snack-bar/snack-bar.component';
import { PaginationComponent } from './common/components/pagination/pagination.component';
import { UserProfileComponent } from './common/components/user-profile/user-profile.component';
import { ComponentModule } from './common/components/component.module';
import { GuardModule } from './common/guard/guard.module';
import { DialogModule } from './dialogs/dialog.module';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeKo);

// root module로써 최상위에 가장 많이 쓰이면서 꼭 필요한 모듈들을 정의한다.
@NgModule({
    declarations: [
        AppComponent, // root component
        FooterComponent, // footer 하단 영역
        GnbComponent, // 상단 영역
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServicesModule, // 공통 비즈니스 및 controller service module
        BackendModule, // backend module
        ErrorModule,
        BrowserAnimationsModule,
        GuardModule,
        DialogModule,
        FormsModule,
        ComponentModule
    ],
    // 공통으로 자주 쓰이는 Spinner, Notification Serivce는 app module에 한번만 정의한다.
    providers: [
        SpinnerService,
        NotificationService,
        {
            provide: LOCALE_ID, useValue: 'ko'
        }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
