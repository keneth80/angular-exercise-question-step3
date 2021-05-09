import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { SharedModule } from '../../common/modules/shared.module';
import { SnackBarComponent } from './snack-bar/snack-bar.component';


@NgModule({
  declarations: [ExampleComponent, SnackBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
