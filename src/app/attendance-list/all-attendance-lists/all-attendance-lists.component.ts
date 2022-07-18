import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-all-attendance-lists',
    templateUrl: './all-attendance-lists.component.html',
    styleUrls: ['./all-attendance-lists.component.css']
})
export class AllAttendanceListsComponent {
    links: TopMenuLink[] = attendanceListTopLinks;
}
