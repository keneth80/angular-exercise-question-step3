import { NgModule } from '@angular/core';

import { FeedWriteRoutingModule } from './feed-write-routing.module';
import { FeedWriteComponent } from './feed-write.component';
import { SharedModule } from '../../common/modules/shared.module';


@NgModule({
    declarations: [
        FeedWriteComponent
    ],
    imports: [
        SharedModule,
        FeedWriteRoutingModule
    ]
})
export class FeedWriteModule { }
