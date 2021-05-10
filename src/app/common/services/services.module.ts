import { NgModule, APP_INITIALIZER } from '@angular/core';
import { GlobalVariableService } from './application/global-variable.service';
import { NotificationService } from './notification/notification.service';
import { SharedModule } from '../modules/shared.module';


// TODO: question app 이 구동되기전에 assets/config/configuration.json 을 가져와 저장 후 app이 구동이 되도록 완성하시오.
// 최초 app을 구동하기 위한 설정정보를 가져오는 함수.
export function getConfiguration(globalService: GlobalVariableService): any {
  return () => globalService.getConfiguration();
}

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        GlobalVariableService,
        NotificationService,
        // app이 시작 될 때 해당 함수를 호출한다. 단 return은 Promise 타입이어야 함.
        { provide: APP_INITIALIZER, useFactory: getConfiguration, deps: [GlobalVariableService], multi: true },
    ]
})
export class ServicesModule { }
