import { NgModule } from '@angular/core';
import { fakeBackendProvider } from './interceptor/fake-backend.interceptor';
import { FeedApiService } from './api/feed-api.service';



@NgModule({
    providers: [
        fakeBackendProvider,
        FeedApiService
    ]
})
export class BackendModule { }
