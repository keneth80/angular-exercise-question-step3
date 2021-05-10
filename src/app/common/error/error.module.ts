import { NgModule, ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './handler/global-error-handler';
import { ServicesModule } from '../services/services.module';

@NgModule({
    imports: [
        ServicesModule
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler,
        },
    ]
})
export class ErrorModule { }
