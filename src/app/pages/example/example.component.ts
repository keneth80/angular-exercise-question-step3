import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

    constructor(
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

}
