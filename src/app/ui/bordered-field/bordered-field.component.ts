import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import HTMLInputType from 'src/app/shared/utils/html-input-type.type';

@Component({
    selector: 'ui-bordered-field',
    styleUrls: ['./bordered-field.component.css'],
    templateUrl: './bordered-field.component.html',
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BorderedFieldComponent)
        }
    ]
})
export class BorderedFieldComponent implements AfterViewInit, ControlValueAccessor, OnInit {
    @HostBinding("class.active") activeClass: boolean = false;
    @HostBinding("class.disabled") disabledClass: boolean = false;
    
    @Input() error: string = "";
    @Input() disabled: boolean = false;
    @Input() label: string = "";
    @Input() maskUnmask: { mask: (value: any) => string, unmask: (value: string) => any } | undefined
    @Input() readOnly: boolean = false;
    @Input() type: HTMLInputType = "text";
    @Input() value: any;

    @Output() blur = new EventEmitter<Event>();
    @Output() focus = new EventEmitter<Event>();
    @Output() inputValue = new EventEmitter<any>();

    @ViewChild("field") field!: HTMLInputElement

    ngAfterViewInit(): void {
        if(this.maskUnmask) {
            this.field.value = this.maskUnmask.mask(this.value);
        }
    }

    ngOnInit(): void {
        this.disabledClass = this.disabled;
    }

    onBlur(event: Event): void {
        this.activeClass = false;
        this.blur.emit(event);
    }

    onFocus(event: Event): void {
        this.activeClass = true;
        this.focus.emit(event);
    }

    onInput(event: Event): void {
        if(!this.maskUnmask) {
            this.inputValue.emit((event.target as HTMLInputElement).value);
            return;
        }

        const inputElement = (event.target as HTMLInputElement)
        inputElement.value = this.maskUnmask.mask(inputElement.value);
        this.inputValue.emit(this.maskUnmask.unmask(inputElement.value));
    }

    registerOnChange(fn: any): void { }
    
    registerOnTouched(fn: any): void { }

    writeValue(obj: any): void {
        this.value = obj;
    }

}
