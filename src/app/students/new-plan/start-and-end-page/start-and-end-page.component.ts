import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-plan/new-plan.component';
import Plan from 'src/app/shared/firebase/plans/plan.model';

@Component({
    selector: 'app-start-and-end-page',
    templateUrl: './start-and-end-page.component.html',
    styleUrls: ['./start-and-end-page.component.css']
})
export class StartAndEndPageComponent {
    
    form: FormGroup<CommonTypeToAbstractControlBased<Plan>>;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        formProvider: FormProvider,
        private router: Router
    ) {
        this.form = formProvider.getForm();
    }

    get error(): string {
        if(
            this.form.controls.endDate.untouched ||
            this.form.controls.startDate.untouched 
        ) {
            return "";
        }

        const error = this.form.getError("start-and-end");
        return error;
    }

    navigateToCourse(): void {
        this.router.navigate(
            ["../course"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToValue(): void {
        this.router.navigate(
            ["../value"],
            { relativeTo: this.activatedRoute }
        );
    }

    onNextStep(): void {
        if(
            this.form.controls.endDate.invalid ||
            this.form.controls.startDate.invalid ||
            this.error 
        ) {
            this.form.controls.endDate.markAsTouched();
            this.form.controls.startDate.markAsTouched();
            return;
        }

        this.navigateToValue();
    }
    
}
