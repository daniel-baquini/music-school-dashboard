import { BaseFormField } from '../../utils/base-form-field.component';
import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-radio-button-group',
    templateUrl: './radio-button-group.component.html',
    styleUrls: ['./radio-button-group.component.css'],
    providers: [     
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => RadioButtonGroupComponent),
            multi: true
        }   
    ]
})
export class RadioButtonGroupComponent extends BaseFormField {
    @Input() form: FormGroup | undefined;
    @Input() formControlName: string = "";
    @Input() radioValues: { label: any, value: any }[] = []
}
