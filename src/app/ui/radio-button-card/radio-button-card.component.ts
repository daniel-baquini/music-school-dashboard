import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'ui-radio-button-card',
    templateUrl: './radio-button-card.component.html',
    styleUrls: ['./radio-button-card.component.css']
})
export class RadioButtonCardComponent {
    
    @HostBinding("class.active")
    @Input()
    public isActive: boolean = false;
    
}
