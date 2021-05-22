import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ad-host]',
})
export class DialogDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
