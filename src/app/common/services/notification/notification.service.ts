import { Injectable, NgZone } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';
import { SpinnerService } from '../../components/spinner/spinner.service';

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
        private snackBar: MatSnackBar,
        private spinner: SpinnerService
    ) { }

    notifyMessage(message: string): void {
        // angular에서 일부 서드파티 라이브러리를 사용할 때 변화를 감지 못할 떄가 있고
        // 또, 비동기로 발생하는 변경들은 angular 컴포넌트가 변화를 감지하지 하지 못한다.
        // 이때, 해결책은 Angular zone 내부에서 콜백을 실행하도록 하는 것이다.
        if (this.spinner.active) {
            // spinner 가 돌고 있으면 중단시킨다.
            this.spinner.stop();
        }
        this.zone.run(() => {
            this.snackBar.openFromComponent(SnackBarComponent, {
                duration: this.durationInSeconds * 1000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                data: message
            });
        });
    }
}
