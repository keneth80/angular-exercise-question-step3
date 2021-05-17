import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication/authentication.service';
import { UserProfileModel } from '../../common/models/user-profile.model';
import { Subscription } from 'rxjs';
import { MainService, MainData } from './main.service';
import { FeedModel } from '../../common/models/feed.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [
        MainService
    ],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
    userProfile: UserProfileModel;

    feeds: FeedModel[] = [];

    private subscription: Subscription = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private mainService: MainService
    ) { }

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        // userId가 없다면 login page로 이동.
        const userId = routeParams.get('userId');
        console.log('userId : ', userId);
        if (!userId) {
            this.router.navigate(['login']);
            return;
        }
        this.subscription.add(
            this.mainService.mainData$.subscribe((mainData: MainData) => {
                console.log('feedList : ', mainData);
                this.userProfile = mainData.userInfo;
                this.feeds = mainData.feeds;
            })
        );

        this.mainService.getMainData(userId);
    }
}
