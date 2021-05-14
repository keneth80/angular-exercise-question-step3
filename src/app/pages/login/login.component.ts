import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../common/services/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { UserProfileModel } from '../../common/models/user-profile.model';
import { Router } from '@angular/router';
import { SpinnerService } from '../../common/components/spinner/spinner.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;

    private subscription: Subscription = new Subscription();

    constructor(
        private fb: FormBuilder,
        private authService: AuthenticationService,
        private router: Router,
        private spinner: SpinnerService
    ) {}

    get formItems() {
        return this.loginForm.controls;
    }

    ngOnInit(): void {
        // test로 미리 넣어둠.
        this.loginForm = this.fb.group({
            email: new FormControl('admin@admin.com', {
                validators: Validators.email,
                updateOn: 'blur'
            }),
            password: new FormControl('1', {
                validators: Validators.required,
                updateOn: 'blur'
            })
        });

        // user model에 대해 구독.
        this.subscription.add(
            this.authService.userModel$.subscribe((userModel: UserProfileModel) => {
                if (userModel.userEmail) {
                    this.spinner.stop();
                    this.router.navigate(['/main']);
                }
            })
        );
    }

    ngOnDestroy(): void {
        // component destory 시 구독해제
        this.subscription.unsubscribe();
    }

    onLoginSubmit(): void {
        if (this.loginForm.valid) {
            this.spinner.start();
            this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
        }
    }

}
