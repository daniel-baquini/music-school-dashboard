import { Component } from '@angular/core';
import { studentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-enrollment-detail-page',
    templateUrl: './enrollment-detail-page.component.html',
    styleUrls: ['./enrollment-detail-page.component.css']
})
export class EnrollmentDetailPageComponent {
    links: TopMenuLink[] = studentsTopLinks;
}
