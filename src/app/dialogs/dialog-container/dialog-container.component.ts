import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, ViewEncapsulation } from '@angular/core';
import { DialogService } from '../../common/services/dialog/dialog.service';
import { ModalEvent } from '../../common/models/event/modal-event';
import { ModalType } from '../../common/const';
import { FeedModel } from '../../common/models/feed.model';
import { DialogDirective } from '../dialog.directive';
import { IDialog } from '../dialog.interface';
import { FeedModalComponent } from '../feed-modal/feed-modal.component';

@Component({
    selector: 'app-dialog-container',
    templateUrl: './dialog-container.component.html',
    styleUrls: ['./dialog-container.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DialogContainerComponent implements OnInit {
    @ViewChild(DialogDirective, { static: true }) adHost: DialogDirective;

    constructor(
        private cfr: ComponentFactoryResolver,
        private dialogService: DialogService
    ) { }

    ngOnInit() {
        // q4. dialog container component 에 컴포넌트를 동적으로 출력하도록 완성하시오.
        // TODO: Write JS code here!'
        this.dialogService.modal$.subscribe((event: ModalEvent) => {

        });
    }

    loadFeedDetail(feed: FeedModel) {

    }

}
