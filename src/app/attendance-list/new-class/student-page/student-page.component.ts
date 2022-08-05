import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import Enrollment from 'src/app/shared/firebase/enrollments/enrollment.model';
import { EnrollmentService } from 'src/app/shared/firebase/enrollments/enrollment.service';
import { FormGroup } from '@angular/forms';
import IdleState from './+states/idle.state';
import { Observable } from 'rxjs';
import State from './+states/+state.model';
import StateMachine from './+states/+state-machine.model';
import { FormProvider } from '../new-class/new-class.component';
import MusicClass from 'src/app/shared/firebase/schedule-class/music-class.model';

@Component({
    selector: 'app-student-page',
    templateUrl: './student-page.component.html',
    styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent extends StateMachine {

    public enrollments: Enrollment[] = [];
    form: FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
    protected state: State;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private enrollmentService: EnrollmentService,
        formProvider: FormProvider,
        private router: Router
    ) {
        super();
        this.form = formProvider.getForm();
        this.state = new IdleState(this);
    }

    get bindedEnrollmentFilter(): (searchTerm: string) => Observable<Enrollment[]> {
        return this.enrollmentService.filter.bind(this.enrollmentService);
    }

    navigateToPlan(): void {
        this.router.navigate(
            ["../plan"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToScheduleClasses(): void {
        this.router.navigate(
            ["../../"],
            { relativeTo: this.activatedRoute }
        );
    }

    onFetched(enrollments: Enrollment[]): void {
        this.state.onFetched(enrollments);
    }

    onIdle(): void {
        this.state.onIdle();
    }

    onInput(value: string): void {
        if(value.trim().length === 0) {
            this.setState(new IdleState(this));
        }
    }

    onNextStep(): void {
        this.state.onNextStep();
    }

    onSearching(): void {
        this.state.onSearching();
    }

    onSelected(enrollment: Enrollment): void {
        this.state.onSelected(enrollment);
    }
    
}
