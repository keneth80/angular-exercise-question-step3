import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../common/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../common/components/spinner/spinner.service';
import { ConfirmValidator } from '../../common/validators/confirm.validator';
import { Subscription } from 'rxjs';
import { REGISTER_COMPLETE_MESSAGE } from '../../common/const';
import { BaseComponent } from '../../common/components/base.component';

@Component({
    selector: 'app-enter',
    templateUrl: './enter.component.html',
    styleUrls: ['./enter.component.scss']
})
export class EnterComponent extends BaseComponent implements OnInit {
    enterForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthenticationService,
        private router: Router,
        private spinner: SpinnerService
    ) {
        super();
    }

    get formItems() {
        return this.enterForm.controls;
    }

    ngOnInit(): void {
        this.enterForm = this.fb.group({
            email: new FormControl(null, {
                validators: Validators.email,
                updateOn: 'blur'
            }),
            name: ['', Validators.required],
            nickName: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {
            validators: [
                // custom validator
                ConfirmValidator('password', 'confirmPassword')
            ]
        });

        this.subscription = this.authService.userEnter$.subscribe((result: boolean) => {
            this.spinner.stop();
            alert(REGISTER_COMPLETE_MESSAGE);
            this.router.navigate(['/login']);
        });
    }

    onEnterSubmit(): void {
        if (this.enterForm.valid) {
            this.spinner.start();
            this.authService.enter(this.enterForm.value);
        }
    }

}
