import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// material module로 꼭 필요한 module만 import 하여 외부(export)로 공개한다.
@NgModule({
    declarations: [],
    exports: [
        MatSnackBarModule
    ]
})
export class MaterialModule { }
