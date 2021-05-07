import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * title: Spinner Component controller
 * description: 해당 service로 spinner를 제어한다.
 */
@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    status: Subject<boolean> = new Subject();

    private isActive = false;

    get active(): boolean {
        return this.isActive;
    }

    set active(v: boolean) {
        this.isActive = v;
        this.status.next(v);
    }

    start(): void {
        this.isActive = true;
    }

    stop(): void {
        this.isActive = false;
    }
}
