import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import Class from 'src/app/shared/firebase/schedule-class/class.model';
import { ScheduleClassService } from 'src/app/shared/firebase/schedule-class/schedule-class.service';

@Component({
    selector: 'app-schedule-classes-page',
    templateUrl: './schedule-classes-page.component.html',
    styleUrls: ['./schedule-classes-page.component.css']
})
export class ScheduleClassesPageComponent {

    data: Class[] = [];
    dataLoaded: boolean = false;
    links: TopMenuLink[] = attendanceListTopLinks;

    constructor(scheduleClassService: ScheduleClassService) {
        scheduleClassService.readAll().subscribe(x => {
            this.dataLoaded = true;
            this.data = x;
        })
    }
    
}
