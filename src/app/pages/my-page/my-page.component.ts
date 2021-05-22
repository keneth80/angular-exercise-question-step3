import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileModel } from '../../common/models/user-profile.model';
import { FeedModel } from '../../common/models/feed.model';
import { PageEvent } from '../../common/models/event/page-event';
import { AuthenticationService } from '../../common/services/authentication/authentication.service';
import { BaseComponent } from '../../common/components/base.component';
import { MyPageService } from './my-page.service';
import { DialogService } from '../../common/services/dialog/dialog.service';

@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.scss'],
    providers: [
        MyPageService
    ],
    encapsulation: ViewEncapsulation.None
})
export class MyPageComponent extends BaseComponent implements OnInit {
    userProfile: UserProfileModel;

    feeds: FeedModel[] = [];

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private myPageService: MyPageService,
        private dialogService: DialogService
    ) {
        super();
    }

    ngOnInit(): void {
        // user 정보 연결
        this.userProfile = this.authService.userModel;
        this.subscription = this.myPageService.myPageThumbs$.subscribe((feeds: FeedModel[]) => {
            this.feeds = feeds;
        });

        // component에서 로그인 여부 처리 할때
        if (this.userProfile?.userNickName) {
            this.myPageService.getMyPageThumb(this.userProfile?.userNickName);
        }
    }

    onOpenFeedModal(feed: FeedModel): void {
        this.dialogService.showFeedDetailModal(feed);
    }

    onPageChange(event: PageEvent): void {
        console.log('onPageChange : ', event);
    }

}
