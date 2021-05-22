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
        this.subscription = this.searchEnter$.pipe(
            map((searchText: string) => searchText ? searchText.trim() : ''), // 검색어 공백처리
            filter((searchText: string) => searchText !== ''), // 문자가 있는 경우에만 처리
            debounceTime(600), // debounce 처리
            distinctUntilChanged() // 이전 값과 다른경우에만
        ).subscribe((searchText: string) => {
            this.feedSearchService.getFeedSearch(searchText);
        });

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
