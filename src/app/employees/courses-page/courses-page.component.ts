import { Component } from '@angular/core';
import Course from 'src/app/shared/firebase/courses/course.model';
import { CourseService } from 'src/app/shared/firebase/courses/course.service';
import { employeesTopLinks } from '../employees.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
    data: Course[] = [];
    dataLoaded: boolean = false;
    links: TopMenuLink[] = employeesTopLinks;

    constructor(courseService: CourseService) {
        courseService.readAll().subscribe(x => {
            this.dataLoaded = true;
            this.data = x;
        })
    }
}