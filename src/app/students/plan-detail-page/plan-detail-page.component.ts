import { Component, OnDestroy } from '@angular/core';
import Course from 'src/app/shared/firebase/courses/course.model';
import { CourseService } from 'src/app/shared/firebase/courses/course.service';
import Enrollment from 'src/app/shared/firebase/enrollments/enrollment.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import PlanDetailValidator from './plan-detail.validator';
import { PlanService } from 'src/app/shared/firebase/plans/plan.service';
import { studentsTopLinks } from '../students.module';
import { Subscription } from 'rxjs';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import { EnrollmentService } from 'src/app/shared/firebase/enrollments/enrollment.service';
import SelectData from 'src/app/shared/utils/select-data.type';

@Component({
    selector: 'app-plan-detail-page',
    templateUrl: './plan-detail-page.component.html',
    styleUrls: ['./plan-detail-page.component.css'] 
})
export class PlanDetailPageComponent implements OnDestroy {
    courses: Course[] = [];
    form: FormGroup;
    links: TopMenuLink[] = studentsTopLinks;    

    private _coursesLoaded: boolean = false;
    private _enrollments: Enrollment[] = [];
    private _enrollmentsLoaded: boolean = false;
    private _subscriptions: Subscription[] = [];

    constructor(
        courseService: CourseService,
        enrollmentService: EnrollmentService,
        formBuilder: FormBuilder,
        public planService: PlanService,
        validator: PlanDetailValidator
    ) {
        this.form = formBuilder.group({
            "courseName": new FormControl("", [validator.courseName]),
            "endDate": new FormControl("", [validator.endDate]),
            "isFinished": new FormControl("", [validator.isFinished]),
            "startDate": new FormControl("", [validator.startDate]),
            "studentName": new FormControl("", [validator.studentName]),
            "value": new FormControl("", [validator.value])
        });

        this._subscriptions.push(
            courseService.readAll().subscribe(x => {
                setTimeout(() => {
                    this.courses = x;
                }, 0);
                this._coursesLoaded = true;
            })
        );

        this._subscriptions.push(
            enrollmentService.readAll().subscribe(x => {
                setTimeout(() => {
                    this._enrollments = x;
                }, 0);
                this._enrollmentsLoaded = true;
            })
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }

    get coursesSelectData(): SelectData[] {
        return this.courses.map(x => x.name).sort().map(x => {
            return {
                label: x,
                value: x
            }
        });
    }

    get isLoading(): boolean {
        return !(this._coursesLoaded || this._enrollmentsLoaded);
    }

    get loadingMessage(): string {
        if(!this._coursesLoaded) {
            return "Carregando cursos";
        }

        return "Carregando estudantes";        
    }

    get studentsSelectData(): SelectData[] {
        return this._enrollments
            .map(x => x.name + " " + x.surname)
            .sort()
            .map(x => { return { label: x, value: x }});
    }
}
