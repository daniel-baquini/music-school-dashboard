import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() canClose: boolean = false;
    @Input() message: string = "";
    @Input() type: "error" | "success" | "warning" = "error";

    @Output() close = new EventEmitter();
}
