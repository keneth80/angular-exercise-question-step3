import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { FeedApiService } from '../../common/backend/api/feed-api.service';
import { NotificationService } from '../../common/services/notification/notification.service';
import { IMAGE_CHECK_MESSAGE, FEED_CONTENT_CHECK_MESSAGE } from '../../common/const';
import { AuthenticationService } from '../../common/services/authentication/authentication.service';

@Injectable()
export class FeedWriteService {
    private feedWriteSubject: Subject<boolean> = new Subject();

    constructor(
        private apiService: FeedApiService,
        private notifyService: NotificationService,
        private authService: AuthenticationService
    ) {
    }

    get feedWrite$(): Observable<boolean> {
        return this.feedWriteSubject.asObservable();
    }

    addFeed(feedImage: string, feedContent: string) {
        if (feedImage.trim() === '') {
            this.notifyService.notifyMessage(IMAGE_CHECK_MESSAGE);
            return;
        }

        if (feedContent.trim() === '') {
            this.notifyService.notifyMessage(FEED_CONTENT_CHECK_MESSAGE);
            return;
        }

        this.apiService.addFeed(
            this.authService.userModel?.userNickName || '',
            feedImage,
            feedContent
        ).subscribe((result: boolean) => {
            this.feedWriteSubject.next(true);
        });
    }
}
