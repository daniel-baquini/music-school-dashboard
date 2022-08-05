import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'ui-tertiary-button',
    templateUrl: './tertiary-button.component.html',
    styleUrls: ['./tertiary-button.component.css']
})
export class TertiaryButtonComponent {

    @Input() disabled: boolean = false;
    @Input() label: string = "";

    @HostListener("click", ["$event"])
    onHostClick(event: Event) {
        if(this.disabled) {
            event.stopPropagation();
            return;
        }
    }

}
