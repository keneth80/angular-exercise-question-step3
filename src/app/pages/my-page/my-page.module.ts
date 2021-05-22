import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { SharedModule } from '../../common/modules/shared.module';
import { ComponentModule } from '../../common/components/component.module';


@NgModule({
    declarations: [
        MyPageComponent,
    ],
    imports: [
        SharedModule,
        ComponentModule,
        MyPageRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MyPageModule { }
