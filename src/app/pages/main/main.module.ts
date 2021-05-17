import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../../common/modules/shared.module';


@NgModule({
    declarations: [MainComponent, FeedItemComponent, UserProfileComponent],
    imports: [
        SharedModule,
        MainRoutingModule
    ]
})
export class MainModule { }
