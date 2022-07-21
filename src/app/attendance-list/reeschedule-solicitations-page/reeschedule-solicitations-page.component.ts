import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-reeschedule-solicitations-page',
    templateUrl: './reeschedule-solicitations-page.component.html',
    styleUrls: ['./reeschedule-solicitations-page.component.css']
})
export class ReescheduleSolicitationsPageComponent {

    links: TopMenuLink[] = attendanceListTopLinks;
    
}
