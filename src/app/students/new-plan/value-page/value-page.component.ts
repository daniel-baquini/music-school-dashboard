import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-plan/new-plan.component';
import Plan from 'src/app/shared/firebase/plans/plan.model';
import { PlanService } from 'src/app/shared/firebase/plans/plan.service';

@Component({
    selector: 'app-value-page',
    templateUrl: './value-page.component.html',
    styleUrls: ['./value-page.component.css']
})
export class ValuePageComponent {
    
    form: FormGroup<CommonTypeToAbstractControlBased<Plan>>;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        formProvider: FormProvider,
        private planService: PlanService,
        private router: Router
    ) {
        this.form = formProvider.getForm();
    }

    navigateToStartAndEnd(): void {
        this.router.navigate(
            ["../start-and-end"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToPlans(): void {
        this.router.navigate(
            ["../../"],
            { relativeTo: this.activatedRoute }
        );
    }

    async onNextStep(): Promise<void> {
        if(this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        try {
            await this.planService.create(this.form.getRawValue());
            this.navigateToPlans();
        }
        catch(e) {
            console.log("catch", e)
        }
        

    }
    
}
