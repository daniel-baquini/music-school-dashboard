import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-radio-button-group',
    templateUrl: './radio-button-group.component.html',
    styleUrls: ['./radio-button-group.component.css']
})
export class RadioButtonGroupComponent {
    @Input() label: string = "";
    @Input() name: string = "";
}
