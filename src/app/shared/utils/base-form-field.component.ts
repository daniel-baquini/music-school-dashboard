import { AbstractControl } from "@angular/forms";
import BaseControlValueAccessor from "./base-control-value-acessor.model";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import HTMLInputType from "./html-input-type.type";

@Component({
    template: "",
})
export class BaseFormField extends BaseControlValueAccessor<string> {
    
    @Input() abstractControl: AbstractControl | undefined;
    @Input() disabled: boolean = false;
    @Input() helperText: string = "";
    @Input() label: string = "";
    @Input() maskUnmask: { mask: (value: any) => string, unmask: (value: string) => any } | undefined
    @Input() readOnly: boolean = false;
    @Input() type: HTMLInputType = "text";
    @Output() inputEvent = new EventEmitter<string>();
    
    get error(): string {
        if(!this.abstractControl) return ""
        if(this.abstractControl.untouched) return ""

        let errorMessage: string = "";
        for(const errorCode in this.abstractControl.errors) {
            errorMessage = this.abstractControl.errors[errorCode];
            break;
        }

        return errorMessage;
    }
    
    formFieldOnChange(value: any): void {
        this.inputEvent.emit(value);
        this.onBaseChangeFn(value);
    }
}
