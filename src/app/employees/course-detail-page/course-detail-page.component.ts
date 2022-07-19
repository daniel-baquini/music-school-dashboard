import { Component } from '@angular/core';
import CourseDetailValidator from './course-detail.validator';
import { CourseService } from 'src/app/shared/firebase/courses/course.service';
import { employeesTopLinks } from '../employees.module';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-course-detail-page',
    templateUrl: './course-detail-page.component.html',
    styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent {
    
    form: FormGroup;
    links: TopMenuLink[] = employeesTopLinks;

    constructor(
        public courseService: CourseService,
        formBuilder: FormBuilder,
        validator: CourseDetailValidator
    ) {
        this.form = formBuilder.group({
            "name": new FormControl("", [validator.name])
        });
    }

}