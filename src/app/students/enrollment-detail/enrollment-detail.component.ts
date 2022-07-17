import { Component } from '@angular/core';
import { studentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-enrollment-detail',
    templateUrl: './enrollment-detail.component.html',
    styleUrls: ['./enrollment-detail.component.css']
})
export class EnrollmentDetailComponent {
    links: TopMenuLink[] = studentsTopLinks;
}
