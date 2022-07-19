import { BaseFormField } from '../../utils/base-form-field.component';
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-bordered-field',
    templateUrl: './bordered-field.component.html',
    styleUrls: ['./bordered-field.component.css'],
    providers: [     
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => BorderedFieldComponent),
            multi: true
        }   
    ] 

})
export class BorderedFieldComponent extends BaseFormField { }
