import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import Course from 'src/app/shared/firebase/courses/course.model';
import { CourseService } from 'src/app/shared/firebase/courses/course.service';
import { FormGroup } from '@angular/forms';
import SearchingState from './+states/searching.state';
import State from './+states/+state.model';
import StateMachine from './+states/+state-machine.model';
import { FormProvider } from '../new-content/new-content.component';

@Component({
    selector: 'app-course-page',
    templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent extends StateMachine {
    
    public courses: Course[] = [];
    form: FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>;
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

    navigateToContentType(): void {
        this.router.navigate(
            ["../content-type"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToTitleAndDescription(): void {
        this.router.navigate(
            ["../title-and-description"],
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
