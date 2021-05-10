import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../services/base.service';

// backend api가 정의되는 service
@Injectable({
    providedIn: 'root'
})
export class FeedApiService extends BaseService {
    private PRE_FIX = '';

    constructor(
        private http: HttpClient
    ) {
        super();
    }
}
