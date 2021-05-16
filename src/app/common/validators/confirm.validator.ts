import { FormGroup } from '@angular/forms';

export function ConfirmValidator(targetField: string, compareField: string){
    return (formGroup: FormGroup) => {
        const targetItem = formGroup.controls[targetField];
        const compareItem = formGroup.controls[compareField];
        if (compareItem.errors && !compareItem.errors.confirmValidator) {
            return;
        }
        if (targetItem.value !== compareItem.value) {
            compareItem.setErrors({ confirmValidator: true });
        } else {
            compareItem.setErrors(null);
        }
    };
}
