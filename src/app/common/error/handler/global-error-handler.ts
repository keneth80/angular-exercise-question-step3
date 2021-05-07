import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() {
    }

    handleError(error: Error | HttpErrorResponse): void {
        // const notificationService = this.injector.get(NotificationService);
        // const errorsService = this.injector.get(ErrorsService);
        // const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            // Server error
            if (!navigator.onLine) {
                // No Internet connection
                console.log('Please check your internet connection');
                return;
                // return notificationService.notify('Please check your internet connection');
            }
            // Http Error
            console.log(error);
            // errorsService.log(error).subscribe();
            // Show notification to the user
            // return notificationService.notify(`${error.status} - ${error.message}`);
        } else {
            // Script Error
            console.log(error);
            // errorsService
            //     .log(error)
            //     .subscribe(errorWithContextInfo => {
            //         router.navigate(['/error'], { queryParams: errorWithContextInfo });
            //     });
        }
    }
}
