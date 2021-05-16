import { NgModule } from '@angular/core';

import { EnterRoutingModule } from './enter-routing.module';
import { EnterComponent } from './enter.component';
import { SharedModule } from '../../common/modules/shared.module';


@NgModule({
  declarations: [EnterComponent],
  imports: [
    SharedModule,
    EnterRoutingModule
  ]
})
export class EnterModule { }
