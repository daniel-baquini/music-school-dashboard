import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.css']
})
export class ChipComponent {
    @HostBinding('class.active') activeClass: boolean = false;    
    @Input() label: string = "";
}
