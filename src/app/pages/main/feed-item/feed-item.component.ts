import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FeedModel } from '../../../common/models/feed.model';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FeedItemComponent implements OnInit {
    @Input() feed: FeedModel;

    constructor() { }

    ngOnInit(): void {
        console.log('feed : ', this.feed);
    }

}
