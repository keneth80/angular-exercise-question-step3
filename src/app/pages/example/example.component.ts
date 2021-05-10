import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../common/components/snack-bar/snack-bar.component';

// component 나 함수의 example code를 구현하는 페이지 입니다.
@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
    durationInSeconds = 5;
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        private snackBar: MatSnackBar,
        private http: HttpClient
    ) { }

    ngOnInit(): void {
    }

    // script error test
    scriptError(): void {
        const that: any = {};
        that.call();
    }

    // server error test
    serverError(): void {
      this.http.get('https://jsonplaceholder.typicode.com1/1').subscribe();
    }

    // snack bar component example
    openSnackBar(): void {
        this.snackBar.openFromComponent(SnackBarComponent, {
            duration: this.durationInSeconds * 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            data: 'Test!'
        });
    }
}
