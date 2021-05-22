import { NgModule } from '@angular/core';

import { FeedSearchRoutingModule } from './feed-search-routing.module';
import { FeedSearchComponent } from './feed-search.component';
import { SharedModule } from '../../common/modules/shared.module';


@NgModule({
    declarations: [FeedSearchComponent],
    imports: [
        SharedModule,
        FeedSearchRoutingModule
    ]
})
export class FeedSearchModule { }
