import { Injectable } from '@angular/core';
import { FeedModel } from '../../models/feed.model';
import { Subject, Observable } from 'rxjs';
import { ModalEvent } from '../../models/event/modal-event';
import { ModalType } from '../../const';

// q3. layer popup을 출력하는 dialog service를 완성하시오.
// TODO: Write JS code here!'
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

    }

    close() {

    }
}
