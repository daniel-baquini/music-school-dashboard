import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-buttons-row',
    templateUrl: './buttons-row.component.html',
    styleUrls: ['./buttons-row.component.css']
})
export class ButtonsRowComponent {    
    @Input() primaryButtonDisabled: boolean = false;
    @Input() primaryButtonLabel: string = "";
    @Input() primaryButtonShow: boolean = true;
    @Input() tertiaryButtonDisabled: boolean = false;
    @Input() tertiaryButtonLabel: string = "";

    @Output() primaryButtonClick = new EventEmitter<Event>();
    @Output() tertiaryButtonClick = new EventEmitter<Event>();    
}
