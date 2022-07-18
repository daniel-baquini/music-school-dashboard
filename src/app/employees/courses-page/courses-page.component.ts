import { Component, Input } from '@angular/core';
import { employeesTopLinks } from '../employees.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
    @Input() links: TopMenuLink[] = employeesTopLinks;
}