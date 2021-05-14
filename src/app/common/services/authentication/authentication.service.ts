import { Injectable } from '@angular/core';
import { FeedApiService } from '../../backend/api/feed-api.service';
import { UserProfileModel } from '../../models/user-profile.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

// 인증 관련 service
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private userModelSubject: Subject<UserProfileModel> = new BehaviorSubject({});

    constructor(
        private apiService: FeedApiService
    ) { }

    get userModel$(): Observable<UserProfileModel> {
        return this.userModelSubject.asObservable();
    }

    login(email: string, password: string) {
        this.apiService.login(email, password).subscribe((userModel: UserProfileModel | any) => {
            this.userModelSubject.next(userModel);
        });
    }
}
