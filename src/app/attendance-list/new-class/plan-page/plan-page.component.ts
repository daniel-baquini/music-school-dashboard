import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Plan from 'src/app/shared/firebase/plans/plan.model';
import { PlanService } from 'src/app/shared/firebase/plans/plan.service';
import MusicClass from 'src/app/shared/firebase/schedule-class/music-class.model';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { FormProvider } from '../new-class/new-class.component';
import StateMachine from './+states/+state-machine.model';
import State from './+states/+state.model';
import SearchingState from './+states/searching.state';

@Component({
    selector: 'app-plan-page',
    templateUrl: './plan-page.component.html',
    styleUrls: ['./plan-page.component.css']
})
export class PlanPageComponent extends StateMachine {
    
    public plans: Plan[] = [];
    form: FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
    protected state: State;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        formProvider: FormProvider,
        private planService: PlanService,
        private router: Router
    ) {
        super();
        this.form = formProvider.getForm();
        this.state = new SearchingState(this);
        const subscription = this.planService.readAll().subscribe(x => {
            this.plans = x;
            this.onFetched(x);
            subscription.unsubscribe();
        })
    }
        
    navigateToProfessor(): void {
        this.router.navigate(
            ["../professor"],
            { relativeTo: this.activatedRoute }
            );
        }
        
    navigateToStudent(): void {
        this.router.navigate(
            ["../student"],
            { relativeTo: this.activatedRoute }
        );
    }
    
    onFetched(plans: Plan[]): void {
        this.state.onFetched(plans);
    }
    
    onNextStep(): void {
        this.state.onNextStep();
    }
    
    onSelected(plan: Plan): void {
        this.state.onSelected(plan);
    }
    
}