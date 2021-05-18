import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../../common/modules/shared.module';
import { PaginationComponent } from '../../common/components/pagination/pagination.component';


@NgModule({
    declarations: [
        MainComponent,
        FeedItemComponent,
        UserProfileComponent,
        PaginationComponent
    ],
    imports: [
        SharedModule,
        MainRoutingModule
    ]
})
export class MainModule { }
