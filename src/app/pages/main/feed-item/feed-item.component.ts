import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { FeedModel } from '../../../common/models/feed.model';
import { FeedItemService } from './feed-item.service';
import { AuthenticationService } from '../../../common/services/authentication/authentication.service';
import { UserProfileModel } from '../../../common/models/user-profile.model';
import { Router } from '@angular/router';
import { ReplyModel } from '../../../common/models/reply.model';
import { Subscription } from 'rxjs';
import { GO_LOGIN_MESSAGE, LESS_TEXT, MORE_TEXT } from '../../../common/const';
import { BaseComponent } from '../../../common/components/base.component';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss'],
    providers: [
        FeedItemService,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class FeedItemComponent extends BaseComponent implements OnInit, OnDestroy {
    @Input() feed: FeedModel;

    // ngmodel과 2way binding
    // FormsModule이 임포트가 되어야 한다.
    replyContent = '';

    // 객체의 특정 값의 변경에 따라 템플릿을 적용해야할 경우에는 따로 변수를 선언하는게 낫다.
    feedLike = 0;

    // tag list
    tags: string[] = [];

    // feed content 요약글
    feedContent = '';

    // feed content에서 요약보기 더보기 flag
    isMoreContent = true;

    private userProfile: UserProfileModel;

    constructor(
        private router: Router,
        private feedItemService: FeedItemService,
        private authService: AuthenticationService
    ) {
        super();
    }

    ngOnInit(): void {
        this.feedLike = this.feed.like || 0;
        // parse 하여 템플릿에 바인딩
        this.tags = this.feed.tags ? this.feed.tags.split(',') : [];

        // 더보기 기능을 위해 임시로 텍스트를 자름.
        this.feedContent = this.feed.content.substring(0, 15) + '...';

        this.subscription = this.feedItemService.replyList$.subscribe((replys: ReplyModel[]) => {
            this.replyContent = '';
            this.feed.reply = replys;
        });

        // login 여부 체크
        if (this.authService.userModel.userEmail) {
            this.userProfile = this.authService.userModel;
        }
    }

    onRegisterReply(): void {
        if (!this.replyContent.length) {
            return;
        }

        if (!this.loginCheck()) {
            return;
        }

        this.feedItemService.addReply({
            id: 0,
            content: this.replyContent,
            userId: this.userProfile.id || 0,
            userNickName: this.userProfile.userNickName || '',
            feedId: this.feed.id,
            created: new Date().getTime()
        });
    }

    onLike(): void {
        if (!this.loginCheck()) {
            return;
        }

        if (this.userProfile.likeFeeds) {
            const likeFeeds = this.userProfile.likeFeeds;
            const likeIndex = likeFeeds.findIndex((like: string) => +like === this.feed.id);
            this.feedItemService.applyLike(this.feed.id, likeIndex < 0, () => {
                if (likeIndex < 0) {
                    likeFeeds.push(this.feed.id + '');
                    this.feedLike++;
                } else {
                    likeFeeds.splice(likeIndex, 1);
                    this.feedLike--;
                }
            });
        }
    }

    onGoUserPage(userNickName: string) {
        this.router.navigate(['/home/' + userNickName]);
    }

    onGoSearchPage(tag: string) {
        this.router.navigate(['/feed-search/' + tag.substring(1, tag.length)]);
    }

    onMoreContent(event: any) {
        this.isMoreContent = !this.isMoreContent;
        if (!this.isMoreContent) {
            event.target.innerText = LESS_TEXT;
            this.feedContent = this.feed.content;
        } else {
            event.target.innerText = MORE_TEXT;
            this.feedContent = this.feed.content.substring(0, 15) + '...';
        }
    }

    private loginCheck(): boolean {
        if (!this.userProfile) {
            // login 상태가 아니므로 로그인 화면으로 보낸다.
            alert(GO_LOGIN_MESSAGE);
            this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url }});
            return false;
        } else {
            return true;
        }
    }
}
