import { Injectable } from '@angular/core';
import { FeedApiService } from '../../common/backend/api/feed-api.service';
import { Subject, Observable } from 'rxjs';
import { FeedModel } from '../../common/models/feed.model';

@Injectable()
export class FeedSearchService {
    private feedListSubject: Subject<FeedModel[]> = new Subject();

    constructor(
        private apiService: FeedApiService
    ) {
    }

    get feedList$(): Observable<FeedModel[]> {
        return this.feedListSubject.asObservable();
    }

    getFeedSearch(tagName: string) {
        this.apiService.getFeedListByTagName(tagName).subscribe((result: FeedModel[]) => {
            this.feedListSubject.next(result);
        });
    }
}
