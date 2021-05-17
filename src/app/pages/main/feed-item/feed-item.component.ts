import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FeedModel } from '../../../common/models/feed.model';
import { FeedItemService } from './feed-item.service';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss'],
    providers: [
        FeedItemService,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class FeedItemComponent implements OnInit {
    @Input() feed: FeedModel;

    // ngmodel과 2way binding
    // FormsModule이 임포트가 되어야 한다.
    replyContent = '';

    constructor(
        private feedItemService: FeedItemService
    ) { }

    ngOnInit(): void {
        console.log('feed : ', this.feed);
    }

    onRegisterReply() {
        console.log('registerReply', this.feed, this.replyContent);
    }

}
