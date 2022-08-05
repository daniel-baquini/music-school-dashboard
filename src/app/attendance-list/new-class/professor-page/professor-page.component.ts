import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import Employee from 'src/app/shared/firebase/employees/employee.model';
import { EmployeeService } from 'src/app/shared/firebase/employees/employee.service';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-class/new-class.component';
import MusicClass from 'src/app/shared/firebase/schedule-class/music-class.model';
import SearchingState from './+states/searching.state';
import State from './+states/+state.model';
import StateMachine from './+states/+state-machine.model';

@Component({
    selector: 'app-professor-page',
    templateUrl: './professor-page.component.html',
    styleUrls: ['./professor-page.component.css']
})
export class ProfessorPageComponent extends StateMachine {
    
    public professors: Employee[] = [];
    form: FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
    protected state: State;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private formProvider: FormProvider,
        private planService: EmployeeService,
        private router: Router
    ) {
        super();
        this.form = formProvider.getForm();
        this.state = new SearchingState(this);
        const subscription = this.planService.readAll().subscribe(x => {
            this.professors = x;
            this.onFetched(x);
            subscription.unsubscribe();
        })
    }
 
    navigateToClassDate(): void {
        this.router.navigate(
            ["../class-date"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToPlan(): void {
        this.router.navigate(
            ["../plan"],
            { relativeTo: this.activatedRoute }
        );
    }
    
    onFetched(professors: Employee[]): void {
        this.state.onFetched(professors);
    }
    
    onNextStep(): void {
        this.state.onNextStep();
    }
    
    onSelected(professor: Employee): void {
        this.formProvider.professor = professor;
        this.state.onSelected(professor);
    }
    
}