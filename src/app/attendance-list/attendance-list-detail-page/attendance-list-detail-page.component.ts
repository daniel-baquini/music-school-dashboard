import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-attendance-list-detail-page',
    templateUrl: './attendance-list-detail-page.component.html',
    styleUrls: ['./attendance-list-detail-page.component.css']
})
export class AttendanceListDetailPageComponent {
    links: TopMenuLink[] = attendanceListTopLinks;
}
