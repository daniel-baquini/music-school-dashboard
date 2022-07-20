import { BaseFormField } from '../../utils/base-form-field.component';
import { Component, forwardRef, Input } from '@angular/core';
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
export class BorderedFieldComponent extends BaseFormField {

    @Input() fieldConfig: { type: "input" } |
    {
        data: { label: string, value: any }[],
        type: "select"
    } |
    { type: "textarea" } = { type: "input" }

    textareaOnChange(event: Event): void {    
        const textArea = event.target as HTMLTextAreaElement;
        textArea.style.height = "auto";
        textArea.style.height = `${textArea.scrollHeight}px`;

        this.formFieldOnChange(event);
    }

}
