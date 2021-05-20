import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
