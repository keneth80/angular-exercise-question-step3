import { Injectable } from '@angular/core';
import { FeedApiService } from '../../common/backend/api/feed-api.service';
import { Subject, Observable } from 'rxjs';
import { FeedModel } from '../../common/models/feed.model';
import { UserProfileModel } from '../../common/models/user-profile.model';

@Injectable()
export class MyPageService {
    private myPageThumbsSubject: Subject<FeedModel[]> = new Subject();

    constructor(
        private apiService: FeedApiService
    ) {
    }

    get myPageThumbs$(): Observable<FeedModel[]> {
        return this.myPageThumbsSubject.asObservable();
    }

    getMyPageThumb(userNickName: string) {
        this.apiService.getFeedList(userNickName).subscribe((feedList: FeedModel[]) => {
            this.myPageThumbsSubject.next(feedList);
        });
    }
}
