import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

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

    scriptError(): void {
        const that: any = {};
        that.call();
    }

    serverError(): void {
      this.http.get('https://jsonplaceholder.typicode.com1/1').subscribe();
    }

    openSnackBar(): void {
        this.snackBar.openFromComponent(SnackBarComponent, {
            duration: this.durationInSeconds * 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            data: 'Server Error!!!!!!!!!!!!!!!!!!!'
        });
    }
}
