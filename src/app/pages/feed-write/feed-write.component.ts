import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../common/components/base.component';
import { FeedWriteService } from './feed-write.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feed-write',
    templateUrl: './feed-write.component.html',
    styleUrls: ['./feed-write.component.scss'],
    providers: [
        FeedWriteService
    ]
})
export class FeedWriteComponent extends BaseComponent implements OnInit {
    base64String = '';

    feedContent = '';

    constructor(
        private feedWriteService: FeedWriteService,
        private router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscription = this.feedWriteService.feedWrite$.subscribe((result: boolean) => {
            // 입력이 성공하면 마이 페이지로 이동한다.
            if (result) {
                this.router.navigate(['/mypage']);
            }
        });
    }

    onSubmitFeedWrite(): void {
        this.feedWriteService.addFeed(this.base64String, this.feedContent);
    }

    onFileSelect(event: any): void {
        const files = event.target.files;
        const file = files[0];

        if (files && file) {
            const reader = new FileReader();
            reader.onload = this.imageLoad;
            reader.readAsBinaryString(file);
        }
    }

    private imageLoad = (readerEvent: any) => {
        const binaryString = readerEvent.target.result;
        this.base64String = 'data:image/png;base64,' + btoa(binaryString);
    }

}
