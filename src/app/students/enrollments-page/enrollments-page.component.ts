import { Component } from '@angular/core';
import Enrollment from 'src/app/shared/firebase/enrollments/enrollment.model';
import { EnrollmentService } from 'src/app/shared/firebase/enrollments/enrollment.service';
import { enrollmentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-enrollments-page',
    templateUrl: './enrollments-page.component.html',
    styleUrls: ['./enrollments-page.component.css']
})
export class EnrollmentsPageComponent {

    data: Enrollment[] = [];
    dataLoaded: boolean = false;
    links: TopMenuLink[] = enrollmentsTopLinks;

    constructor(enrollmentService: EnrollmentService) {
        enrollmentService.readAll().subscribe(x => {
            this.dataLoaded = true;
            this.data = x;
        })
    }
}
