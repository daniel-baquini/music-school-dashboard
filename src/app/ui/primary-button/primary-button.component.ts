import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'ui-primary-button',
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
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
