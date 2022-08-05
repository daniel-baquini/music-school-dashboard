import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() canClose: boolean = false;
    @Input() message: string = "";
    @Input() type: "error" | "success" | "warning" = "error";

    @Output() close = new EventEmitter();
}
