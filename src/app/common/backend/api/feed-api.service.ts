import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

import { BaseService } from '../../services/base.service';
import { GlobalVariableService } from '../../services/application/global-variable.service';
import { BackendResponse } from '../models/backend-response';
import { User } from '../models/user';
import { UserProfileModel } from '../../models/user-profile.model';
import { userMapperForUserProfile, feedMapperForFeedModel } from '../../mappers';
import { throwError, Observable, forkJoin } from 'rxjs';
import { UserParam } from '../../models/params/user-param';
import { Feed } from '../models/feed';
import { FeedModel } from '../../models/feed.model';

// backend api가 정의되는 service
@Injectable({
    providedIn: 'root'
})
export class FeedApiService extends BaseService {
    private PRE_FIX = '/api';

    constructor(
        private http: HttpClient,
        private globalVariableService: GlobalVariableService
    ) {
        super();
    }

    login(email: string, password: string): Observable<UserProfileModel> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/authenticate`;
        return this.http.post<BackendResponse<User>>(url, { email, password })
            .pipe(
                map((response: BackendResponse<User>) => {
                    return userMapperForUserProfile(response.data);
                })
            );
    }

    enter(param: UserParam) {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/register`;
        return this.http.post<BackendResponse<any>>(url, param);
    }

    getFeedList(userId: string): Observable<FeedModel[]> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/feeds`;
        return this.http.get<BackendResponse<Array<Feed>>>(url)
            .pipe(
                map((response: BackendResponse<Array<Feed>>) => {
                    const feeds: FeedModel[] = [];
                    if (response.data && response.data.length) {
                        for (const feed of response.data) {
                            feeds.push(
                                feedMapperForFeedModel(feed)
                            );
                        }
                    }
                    return feeds;
                })
            );
    }

    getUserInfo(userId: string): Observable<UserProfileModel> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/user/${userId}`;
        return this.http.get<BackendResponse<User>>(url)
            .pipe(
                map((response: BackendResponse<User>) => {
                    return userMapperForUserProfile(response.data);
                })
            );
    }

    getMainData(userId: string): Observable<{
        userInfo: any,
        feeds: any
    }> {
        return forkJoin({
            userInfo: this.getUserInfo(userId),
            feeds: this.getFeedList(userId)
        });
    }
}
