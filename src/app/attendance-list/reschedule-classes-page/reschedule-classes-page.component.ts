import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-reschedule-classes-page',
    templateUrl: './reschedule-classes-page.component.html',
    styleUrls: ['./reschedule-classes-page.component.css']
})
export class RescheduleClassesPageComponent {
    links: TopMenuLink[] = attendanceListTopLinks;    
}
