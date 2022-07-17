import { Component } from '@angular/core';
import { studentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-enrollments-page',
    templateUrl: './enrollments-page.component.html',
    styleUrls: ['./enrollments-page.component.css']
})
export class EnrollmentsPageComponent {
    links: TopMenuLink[] = studentsTopLinks;
}
