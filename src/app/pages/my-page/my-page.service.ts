import { Injectable } from '@angular/core';
import { FeedApiService } from '../../common/backend/api/feed-api.service';
import { Subject, Observable } from 'rxjs';
import { FeedModel } from '../../common/models/feed.model';
import { UserProfileModel } from '../../common/models/user-profile.model';

// q2. mypage controller를 완성하시오. (this.apiService.getFeedList를 참조한다.)
// TODO: Write JS code here!'
@Injectable()
export class MyPageService {
    constructor(
        private apiService: FeedApiService
    ) {
    }
}
