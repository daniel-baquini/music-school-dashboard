import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import Course from 'src/app/shared/firebase/courses/course.model';
import { CourseService } from 'src/app/shared/firebase/courses/course.service';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-plan/new-plan.component';
import Plan from 'src/app/shared/firebase/plans/plan.model';
import SearchingState from './+states/searching.state';
import State from './+states/+state.model';
import StateMachine from './+states/+state-machine.model';

@Component({
    selector: 'app-course-page',
    templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent extends StateMachine {
    
    public courses: Course[] = [];
    form: FormGroup<CommonTypeToAbstractControlBased<Plan>>;
    protected state: State;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private courseService: CourseService,
        formProvider: FormProvider,
        private router: Router
    ) {
        super();
        this.form = formProvider.getForm();
        this.state = new SearchingState(this);
        const subscription = this.courseService.readAll().subscribe(x => {
            this.courses = x;
            this.onFetched(x);
            subscription.unsubscribe();
        })
    }

    navigateToStardAndEnd(): void {
        this.router.navigate(
            ["../start-and-end"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToStudent(): void {
        this.router.navigate(
            ["../student"],
            { relativeTo: this.activatedRoute }
        );
    }
    
    onFetched(courses: Course[]): void {
        this.state.onFetched(courses);
    }

    onNextStep(): void {
        this.state.onNextStep();
    }

    onSelected(course: Course): void {
        this.state.onSelected(course);
    }

}
