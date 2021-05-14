import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseService } from '../../services/base.service';
import { GlobalVariableService } from '../../services/application/global-variable.service';
import { BackendResponse } from '../models/backend-response';
import { User } from '../models/user';
import { UserProfileModel } from '../../models/user-profile.model';
import { userMapperForUserProfile } from '../../mappers';
import { throwError } from 'rxjs';

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

    login(email: string, password: string) {
        const url = `${this.globalVariableService.remoteUrl}${this.PRE_FIX}/authenticate`;
        return this.http.post<BackendResponse<User>>(url, { email, password })
        .pipe(
            map((request: BackendResponse<User>) => { // Response<AuthModel>
                return userMapperForUserProfile(request.data);
            })
        );
    }
}
