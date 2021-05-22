import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppInjector } from '../services/application/app-injector.service';
import { SpinnerService } from './spinner/spinner.service';

@Component({
    selector: 'app-base',
    template: `NO UI TO BE FOUND HERE!`
})
export class BaseComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription;

    private spinnerService: SpinnerService;

    constructor() {
        this.subscriptions = new Subscription();
        const injector = AppInjector.getInjector();
        if (injector) {
            this.spinnerService = injector.get(SpinnerService);
            console.log('this.spinner : ', this.spinnerService);
        }
    }

    set subscription(value: Subscription) {
        this.subscriptions.add(value);
    }

    ngOnInit() {}

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (console && console.log) {
            console.log('BaseComponent.destroy');
        }
    }
}
