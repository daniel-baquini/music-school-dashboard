import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reeschedule-solicitation',
    templateUrl: './reeschedule-solicitation.component.html',
    styleUrls: ['./reeschedule-solicitation.component.css']
})
export class ReescheduleSolicitationsComponent {
    
    @Input() imageUrl: string = "";
    
}
