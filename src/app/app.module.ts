import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { GnbComponent } from './common/components/gnb/gnb.component';
import { SpinnerComponent } from './common/components/spinner/spinner.component';
import { BackendModule } from './common/backend/backend.module';
import { ErrorModule } from './common/error/error.module';
import { ServicesModule } from './common/services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent, // root component
        FooterComponent, // footer 하단 영역
        GnbComponent, // 상단 영역
        SpinnerComponent // 로딩바 componenet
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServicesModule, // 공통 비즈니스 및 controller service module
        BackendModule, // backend module
        ErrorModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
