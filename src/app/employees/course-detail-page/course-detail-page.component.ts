import { Component, Input } from '@angular/core';
import { employeesTopLinks } from '../employees.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-course-detail-page',
    templateUrl: './course-detail-page.component.html',
    styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent {
    @Input() links: TopMenuLink[] = employeesTopLinks;
}