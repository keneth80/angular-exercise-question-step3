import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { SpinnerService} from './spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
    active = false;

    constructor(
        private spinner: SpinnerService,
        private router: Router,
    ) {
        this.router.events.subscribe((event) => {
            // navigation 이 시작될 때 active가 되어 있으면 비활성화 하도록 한다.
            if (event instanceof NavigationStart && this.active === true) {
                this.active = false;
            }
        });
        this.spinner.status.subscribe((status: boolean) => {
            this.active = status;
        });
    }

    ngOnInit(): void {
      
    }
}
