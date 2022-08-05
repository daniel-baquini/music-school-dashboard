import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-primary-button',
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
    @Input() disabled: boolean = false;
    @Input() label: string = "";

    @Output() onBtnClick = new EventEmitter<Event>();

    public onClick(event: Event): void {
        if(!this.disabled) {
            this.onBtnClick.emit();
        }
    }
}
