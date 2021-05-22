import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UserProfileModel } from '../../../common/models/user-profile.model';
import { EMPTY_USER_DESCRIPTION_MESSAGE } from '../../../common/const';
import { Router } from '@angular/router';

interface Tag {
    isTop: boolean;
    tagText: string;
}

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
    @Input() profile: UserProfileModel;

    constructor(
        private router: Router
    ) { }

    // templete에 parsing 해야할 데이터가 있다면 templete에서 처리하지말고
    // component의 getter 함수로 처리하는 것이 직관적이어서 유지보수에도 좋다.
    get userDesciption(): string {
        return this.profile?.userDesciption ? this.profile?.userDesciption : EMPTY_USER_DESCRIPTION_MESSAGE;
    }

    get tagList(): Tag[] {
        return this.profile?.tags ? this.profile?.tags.map((tag: string) => {
            return {
                isTop: this.profile?.topTags ? this.profile?.topTags.includes(tag) : false,
                tagText: tag
            };
        }) : [];
    }

    ngOnInit(): void {
        console.log('profile : ', this.profile, this.tagList);
    }

    onGoSearchPage(tag: string): void {
        this.router.navigate(['/feed-search', tag]);
    }

}
