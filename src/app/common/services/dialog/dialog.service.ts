import { Injectable } from '@angular/core';
import { FeedModel } from '../../models/feed.model';
import { Subject, Observable } from 'rxjs';
import { ModalEvent } from '../../models/event/modal-event';
import { ModalType } from '../../const';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    private modalSubject: Subject<ModalEvent> = new Subject();

    constructor() { }

    get modal$(): Observable<any> {
        return this.modalSubject.asObservable();
    }

    showFeedDetailModal(feed: FeedModel) {
        this.modalSubject.next({
            type: ModalType.FEED,
            data: feed
        });
    }

    close() {
        this.modalSubject.next({
            type: ModalType.CLOSE
        });
    }
}
