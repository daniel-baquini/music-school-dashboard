import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-bordered-field',
    templateUrl: './bordered-field.component.html',
    styleUrls: ['./bordered-field.component.css']
})
export class BorderedFieldComponent {
    
    @Input() label: string = "";
    
}
