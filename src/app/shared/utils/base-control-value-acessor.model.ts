import { ControlValueAccessor } from "@angular/forms";

class BaseControlValueAccessor<T = any> implements ControlValueAccessor {
    
    onBaseChangeFn = (value: any) => { }
    onBaseTouchedFn = () => { }
    value: T | undefined;
    
    registerOnChange(fn: any): void {
        this.onBaseChangeFn = (value: any) => {
            fn(value)
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
