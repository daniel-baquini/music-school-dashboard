import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-attendance-lists-page',
    templateUrl: './attendance-lists-page.component.html',
    styleUrls: ['./attendance-lists-page.component.css']
})
export class AttendanceListsPageComponent {
    links: TopMenuLink[] = attendanceListTopLinks;
}
