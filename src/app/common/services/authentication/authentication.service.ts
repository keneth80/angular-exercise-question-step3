import { Injectable } from '@angular/core';
import { FeedApiService } from '../../backend/api/feed-api.service';
import { UserProfileModel } from '../../models/user-profile.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserParam } from '../../models/params/user-param';

// 인증 관련 service
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    // 로그인 데이터를 발행하지 않아도 가져오기 위해 BehaviorSubject를 썼지만,
    // session storage에 담는다던가 쿠키에 담는 다던가 하는 방법은 선택하여 구현하도록 한다.
    private userModelSubject: BehaviorSubject<UserProfileModel> = new BehaviorSubject({});

    private userEnterSubject: Subject<boolean> = new Subject();

    constructor(
        private apiService: FeedApiService
    ) { }

    get userModel$(): Observable<UserProfileModel> {
        return this.userModelSubject.asObservable();
    }

    get userEnter$(): Observable<boolean> {
        return this.userEnterSubject.asObservable();
    }

    get userModel(): UserProfileModel {
        return this.userModelSubject.value;
    }

    login(email: string, password: string) {
        this.apiService.login(email, password).subscribe((userModel: UserProfileModel | any) => {
            this.userModelSubject.next(userModel);
        });
    }

    enter(param: UserParam) {
        this.apiService.enter(param).subscribe((response: any) => {
            this.userEnterSubject.next(true);
        });
    }
}
