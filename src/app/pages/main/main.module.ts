import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../common/modules/shared.module';
import { MainComponent } from './main.component';
import { ComponentModule } from '../../common/components/component.module';
import { FeedItemComponent } from './feed-item/feed-item.component';


@NgModule({
    declarations: [
        MainComponent,
        FeedItemComponent
    ],
    imports: [
        SharedModule,
        ComponentModule,
        MainRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MainModule { }
