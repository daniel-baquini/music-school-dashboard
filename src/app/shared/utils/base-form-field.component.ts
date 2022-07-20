import { AbstractControl } from "@angular/forms";
import BaseControlValueAccessor from "./base-control-value-acessor.model";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import HTMLInputType from "./html-input-type.type";

@Component({
    template: "",
})
export class BaseFormField extends BaseControlValueAccessor<string> {
    
    @Input() abstractControl: AbstractControl | undefined;
    @Input() helperText: string = "";
    @Input() label: string = "";
    @Input() mask: ((s: string) => string) | undefined
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
    
    formFieldOnChange(event: Event): void {        
        this.inputEvent.emit((event.target as HTMLInputElement).value);
        this.onBaseChangeFn(event);
    }
}
