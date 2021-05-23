import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User, UserAuth } from '../models/user';
import { Feed } from '../models/feed';
import { Reply } from '../models/reply';
import { userAuth, users, feeds, replys } from '../mock';

// backend가 없이 구현이 가능하도록 하는 http interceptor
// http client 로 호출할 때 호출된 url이 이곳에 정의 되어 있으면 Server로 call 하지 않고 이곳에서 데이터를 처리한다.
@Injectable({
    providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        const handleRoute = () => {
            switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/register') && method === 'POST':
                    return register();
                case url.endsWith('/feed') && method === 'POST':
                    return registerFeed();
                case url.endsWith('/reply') && method === 'POST':
                    return registerReply();
                case url.match(/\/reply\/.*/) && method === 'GET':
                    return getReplys();
                case url.match(/\/user\/.*/) && method === 'GET':
                    return getUser();
                case url.match(/\/feeds\/.*/) && method === 'GET':
                    return getFeeds();
                case url.match(/\/feedsearch\/.*/) && method === 'GET':
                    return getFeedsByTagName();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        };

        const authenticate = () => {
            const { email, password } = body;
            const user = userAuth.find((userObj: UserAuth) => userObj.email === email && userObj.password === password);

            if (!user) return error('Email or password is incorrect');

            const userInfo = users.find((userObj: User) => userObj.email === user.email);
            return ok({
                status: 200,
                statusText: 'ok',
                data: userInfo
            });
        };

        const register = () => {
            const user = body;

            if (users.find((userObj: User) => userObj.email === user.userEmail)) {
                return error('Email "' + user.userEmail + '" is already!');
            }

            user.id = users.length ? Math.max(...users.map((userObj: User) => userObj.id)) + 1 : 1;
            user.created = new Date().getTime();
            users.push(user);
            // localStorage.setItem('users', JSON.stringify(users));
            return ok();
        };

        const getFeeds = () => {
            const urlValues = url.split('/');
            const userId = urlValues[urlValues.length - 1];
            return ok({
                status: 200,
                statusText: 'ok',
                data: feeds.filter((feed: Feed) => feed.userNickName === userId)
            });
        };

        const getFeedsByTagName = () => {
            const urlValues = url.split('/');
            const tagName = urlValues[urlValues.length - 1].toLocaleLowerCase();
            return ok({
                status: 200,
                statusText: 'ok',
                data: feeds.filter((feed: Feed) => feed.tags.split(',')
                    .map((tag: string) => tag.toLocaleLowerCase()).includes('#' + tagName))
            });
        };

        const getReplys = () => {
            const urlValues = url.split('/');
            const feedId = +urlValues[urlValues.length - 1];
            return ok({
                status: 200,
                statusText: 'ok',
                data: replys.filter((reply: Reply) => reply.feedId === feedId)
            });
        };

        const getUser = () => {
            const urlValues = url.split('/');
            const userNickName = urlValues[urlValues.length - 1];
            return ok({
                status: 200,
                statusText: 'ok',
                data: users.find((user: User) => user.nickName === userNickName)
            });
        };

        const registerFeed = () => {
            const feed = body;
            const targetUser: User | undefined = users.find((userObj: User) => userObj.nickName = feed.userNickName);
            if (!targetUser) {
                return error('Unauthorised');
            }
            const newFeed: any = {};
            newFeed.id = feeds.length ? Math.max(...feeds.map((feedObj: Feed) => feedObj.id)) + 1 : 1;
            newFeed.created = new Date().getTime();
            newFeed.image = feed.feedImage;
            newFeed.content = feed.feedContent;
            newFeed.userId = targetUser.id;
            newFeed.nickName = targetUser.nickName;
            newFeed.userName = targetUser.name;
            feeds.push(newFeed);

            return ok();
        };

        const registerReply = () => {
            const reply = body;
            reply.id = replys.length ? Math.max(...replys.map((replyObj: Reply) => replyObj.id)) + 1 : 1;
            reply.created = new Date().getTime();
            replys.push(reply);
            return ok();
        };

        // helper functions

        const ok = (body?: any) => {
            return of(new HttpResponse({ status: 200, body }));
        };

        const error = (message: any) => {
            return throwError({ message });
        };

        const unauthorized = () => {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        };

        const isLoggedIn = () => {
            return true;
        };

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(
                mergeMap(handleRoute),
                materialize(),
                delay(500),
                dematerialize()
            );
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
