import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hourMinute'
})
export class HourMinutePipe implements PipeTransform {
    
    transform(value: number, ...args: unknown[]): unknown {
        const hours = Math.floor(value);
        return `${hours}`.padStart(2, "0") + ":" + `${Math.floor((value - hours)*60)}`.padStart(2, "0");
    }
    
}
