import { ControlValueAccessor } from "@angular/forms";

class BaseControlValueAccessor<T = any> implements ControlValueAccessor {
    
    onBaseChangeFn = (event: Event) => { }
    onBaseTouchedFn = () => { }
    value: T | undefined;
    
    registerOnChange(fn: any): void {
        this.onBaseChangeFn = (event: Event) => {
            fn((event.target as HTMLInputElement).value)
        };
    }

    registerOnTouched(fn: any): void {
        this.onBaseTouchedFn = fn;
    }
    
    writeValue(obj: T): void {
        this.value = obj;
    }

}

export default BaseControlValueAccessor
