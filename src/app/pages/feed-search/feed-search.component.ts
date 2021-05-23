import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { FeedSearchService } from './feed-search.service';
import { FeedModel } from '../../common/models/feed.model';
import { BaseComponent } from '../../common/components/base.component';
import { DialogService } from '../../common/services/dialog/dialog.service';

@Component({
    selector: 'app-feed-search',
    templateUrl: './feed-search.component.html',
    styleUrls: ['./feed-search.component.scss'],
    providers: [
        FeedSearchService
    ],
    encapsulation: ViewEncapsulation.None
})
export class FeedSearchComponent extends BaseComponent implements OnInit {
    feeds: FeedModel[] = [];

    searchText = '';

    private searchEnter$: Subject<string> = new Subject();

    constructor(
        private route: ActivatedRoute,
        private feedSearchService: FeedSearchService,
        private dialogService: DialogService
    ) {
        super();
    }

    ngOnInit(): void {
        // q5. 검색어 검색 시 검색어 입력을 debounce 기능을 이용하여 검색결과를 출력하시오.
        // TODO: Write JS code here!'

        this.subscription = this.feedSearchService.feedList$.subscribe((feeds: FeedModel[]) => {
            this.feeds = feeds;
        });

        const routeParams = this.route.snapshot.paramMap;
        const tagName = routeParams.get('tag');
        if (tagName) {
            this.searchText = tagName;
            this.feedSearchService.getFeedSearch(this.searchText);
        }
    }

    onSearchTextChange(searchText: string) {
        this.searchEnter$.next(searchText);
    }

    onOpenFeedModal(feed: FeedModel): void {
        this.dialogService.showFeedDetailModal(feed);
    }

}
