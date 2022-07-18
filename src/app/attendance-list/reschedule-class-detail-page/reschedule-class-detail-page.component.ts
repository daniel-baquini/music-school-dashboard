import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-reschedule-class-detail-page',
    templateUrl: './reschedule-class-detail-page.component.html',
    styleUrls: ['./reschedule-class-detail-page.component.css']
})
export class RescheduleClassDetailPageComponent {
    links: TopMenuLink[] = attendanceListTopLinks;    
}
