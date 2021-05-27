import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, concatMap } from 'rxjs/operators';

import { BaseService } from '../../services/base.service';
import { GlobalVariableService } from '../../services/application/global-variable.service';
import { BackendResponse } from '../models/backend-response';
import { User } from '../models/user';
import { UserProfileModel } from '../../models/user-profile.model';
import { userMapperForUserProfile, feedMapperForFeedModel, replyMapperForReplyModel } from '../../mappers';
import { throwError, Observable, forkJoin } from 'rxjs';
import { UserParam } from '../../models/params/user-param';
import { Feed } from '../models/feed';
import { FeedModel } from '../../models/feed.model';
import { Reply } from '../models/reply';
import { ReplyModel } from '../../models/reply.model';

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

    // 로그인
    login(email: string, password: string): Observable<UserProfileModel> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/authenticate`;
        return this.http.post<BackendResponse<User>>(url, { email, password })
            .pipe(
                map((response: BackendResponse<User>) => {
                    return userMapperForUserProfile(response.data);
                })
            );
    }

    // 회원 가입
    enter(param: UserParam) {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/register`;
        return this.http.post<BackendResponse<any>>(url, param);
    }

    // user의 feed list 가져오기.
    getFeedList(userNickName: string): Observable<FeedModel[]> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/feeds/${userNickName}`;
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

    // tag에 속한 feed 리스트 가져오기
    getFeedListByTagName(tagName: string): Observable<FeedModel[]> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/feedsearch/${tagName}`;
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

    // user 정보 가져오기
    getUserInfo(userNickName: string): Observable<UserProfileModel> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/user/${userNickName}`;
        return this.http.get<BackendResponse<User>>(url)
            .pipe(
                map((response: BackendResponse<User>) => {
                    return userMapperForUserProfile(response.data);
                })
            );
    }

    // 유저 홈 페이지의 데이터 가져오기
    getMainData(userId: string): Observable<{
        userInfo: any,
        feeds: any
    }> {
        return forkJoin({
            userInfo: this.getUserInfo(userId),
            feeds: this.getFeedList(userId)
        });
    }

    // reply 정보를 추가하고 갱신 된 리스트를 가져오기 위함.
    addReply(reply: Reply): Observable<ReplyModel[]> {
        const addUrl = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/reply`;
        return this.http.post<BackendResponse>(addUrl, reply)
            .pipe(
                concatMap((response: BackendResponse) =>
                    this.http.get<BackendResponse<Reply[]>>(`${this.globalVariableService.remoteUrl}${this.PRE_FIX}/reply/${reply.feedId}`)
                ),
                map((response: BackendResponse<Reply[]>) => {
                    const replyNodels: ReplyModel[] = [];
                    if (response.data) {
                        for (let i = 0; i < response.data.length; i++) {
                            replyNodels.push(
                                replyMapperForReplyModel(response.data[i])
                            );
                        }
                    }
                    return replyNodels;
                })
            );
    }

    // feed 추가
    addFeed(userNickName: string, feedImage: string, feedContent: string): Observable<boolean> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/feed`;
        return this.http.post<BackendResponse>(url, {
            feedImage,
            feedContent,
            userNickName
        })
        .pipe(
            map((response: BackendResponse) => {
                return true;
            })
        );
    }

    applyLike(feedId: number, isLike: boolean): Observable<any> {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/like`;
        return this.http.post<BackendResponse<any>>(url, {feedId, isLike});
    }
}
