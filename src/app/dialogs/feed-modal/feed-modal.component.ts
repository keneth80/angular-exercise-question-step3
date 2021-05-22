import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DialogService } from '../../common/services/dialog/dialog.service';
import { FeedModel } from '../../common/models/feed.model';
import { IDialog } from '../dialog.interface';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../common/services/authentication/authentication.service';
import { BaseComponent } from '../../common/components/base.component';
import { ReplyModel } from '../../common/models/reply.model';
import { FeedModalService } from './feed-modal.service';

@Component({
    selector: 'app-feed-modal',
    templateUrl: './feed-modal.component.html',
    styleUrls: ['./feed-modal.component.scss'],
    providers: [
        FeedModalService
    ],
    encapsulation: ViewEncapsulation.None
})
export class FeedModalComponent extends BaseComponent implements OnInit {
    @Input() feed: FeedModel;

    // ngmodel과 2way binding
    // FormsModule이 임포트가 되어야 한다.
    replyContent = '';

    // 객체의 특정 값의 변경에 따라 템플릿을 적용해야할 경우에는 따로 변수를 선언하는게 낫다.
    feedLike = 0;

    constructor(
        private dialogService: DialogService,
        private router: Router,
        private authService: AuthenticationService,
        private feedModalService: FeedModalService
    ) {
        super();
    }

    ngOnInit(): void {
        this.feedLike = this.feed.like || 0;

        this.subscription = this.feedModalService.replyList$.subscribe((replys: ReplyModel[]) => {
            this.replyContent = '';
            this.feed.reply = replys;
        });
    }

    onModalClose(): void {
        this.dialogService.close();
    }

    onRegisterReply(): void {
        if (!this.replyContent.length) {
            return;
        }

        this.feedModalService.addReply({
            id: 0,
            content: this.replyContent,
            userId: this.authService.userModel.id || 0,
            userNickName: this.authService.userModel.userNickName || '',
            feedId: this.feed.id,
            created: new Date().getTime()
        });
    }

    onLike(): void {
        if (this.authService.userModel.likeFeeds) {
            const likeIndex = this.authService.userModel.likeFeeds.findIndex((like: string) => +like === this.feed.id);
            if (likeIndex < 0) {
                this.authService.userModel.likeFeeds.push(this.feed.id + '');
                this.feedLike++;
            } else {
                this.authService.userModel.likeFeeds.splice(likeIndex, 1);
                this.feedLike--;
            }
        }
    }

}
