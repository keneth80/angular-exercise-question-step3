import { Injectable, NgZone } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';

// 간단한 noti를 주기 위한 controller
// notify 할 component를 정의한다.
@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    durationInSeconds = 5;
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        private zone: NgZone,
        private snackBar: MatSnackBar
    ) { }

    notifyMessage(message: string): void {
        // server error같은 경우 error에 의해서 ng zone으로 error를 보내 체크하는데
        // 이때 Snack Bar component로 보내야 할 이벤트가 제대로 가지 않아 엉뚱하게 동작한다.
        // 해서 zone의 run 콜백을 이용하여 zone event가 발생한 후 snack bar component를 동작하게 했음.
        this.zone.run(() => {
            console.log('run');
            this.snackBar.openFromComponent(SnackBarComponent, {
                duration: this.durationInSeconds * 1000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                data: message
            });
        });
    }
}
