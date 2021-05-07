import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeedItemComponent } from './feed-item/feed-item.component';


@NgModule({
    declarations: [MainComponent, FeedItemComponent],
    imports: [
        CommonModule,
        MainRoutingModule
    ]
})
export class MainModule { }
