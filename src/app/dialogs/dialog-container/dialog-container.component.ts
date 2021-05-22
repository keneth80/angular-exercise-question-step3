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
        this.dialogService.modal$.subscribe((event: ModalEvent) => {
            if (event.type === ModalType.FEED) {
                this.loadFeedDetail(event.data);
            } else {
                this.modalDestroy();
            }
        });
    }

    async loadFeedDetail(feed: FeedModel) {
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const dialogRef = viewContainerRef.createComponent(
            this.cfr.resolveComponentFactory(FeedModalComponent)
        );
        const dialogInstance = dialogRef.instance;
        dialogInstance.feed = feed;
    }

    modalDestroy() {
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
    }

}
