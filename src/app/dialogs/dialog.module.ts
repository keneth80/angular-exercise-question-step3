import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { DialogDirective } from './dialog.directive';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { ComponentModule } from '../common/components/component.module';
import { SharedModule } from '../common/modules/shared.module';
import { FormsModule } from '@angular/forms';
import { FeedModalComponent } from './feed-modal/feed-modal.component';

@NgModule({
    declarations: [
        DialogDirective,
        DialogContainerComponent,
        FeedModalComponent
    ],
    imports: [
        SharedModule,
        ComponentModule
    ],
    exports: [
        DialogContainerComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class DialogModule {}
