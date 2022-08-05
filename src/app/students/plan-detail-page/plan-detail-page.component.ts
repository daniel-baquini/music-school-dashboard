import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import { enrollmentsTopLinks } from '../students.module';
import { FormControl, FormGroup } from '@angular/forms';
import NewPlanValidator from '../new-plan/new-plan/new-plan.validator';
import Plan from 'src/app/shared/firebase/plans/plan.model';
import { PlanService } from 'src/app/shared/firebase/plans/plan.service';
import { Subscription } from 'rxjs';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-plan-detail-page',
    templateUrl: './plan-detail-page.component.html',
    styleUrls: ['./plan-detail-page.component.css'] 
})
export class PlanDetailPageComponent {
    
    form = new FormGroup<CommonTypeToAbstractControlBased<Plan>>({
        course: new FormGroup({
            id: new FormControl("", { nonNullable: true }),
            name: new FormControl("", { nonNullable: true })
        }),
        endDate: new FormControl("", { nonNullable: true, validators: [this.validator.endDate] }),
        id: new FormControl("", { nonNullable: true }),
        isFinished: new FormControl(false, { nonNullable: true }),
        startDate: new FormControl("", { nonNullable: true, validators: [this.validator.startDate] }),
        student: new FormGroup({
            id: new FormControl("", { nonNullable: true }),
            name: new FormControl("", { nonNullable: true }),
            surname: new FormControl("", { nonNullable: true })
        }),
        value: new FormControl(0, { nonNullable: true }),
    }, {
        validators: [this.validator.expireDateGreaterThanStartDate]
    });
    isLoading: boolean = true;
    links: TopMenuLink[] = enrollmentsTopLinks;
    pageTitle: string = "Estudantes";

    private _subscriptions: Subscription[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private planService: PlanService,
        private router: Router,
        private validator: NewPlanValidator
    ) {
        const planId = this.activatedRoute.snapshot.params["id"];
        this.planService.read(planId).then(x => {
            this.isLoading = false;

            if(x === undefined) {
                this.navigateToPlans();
                return;
            }

            this.form.patchValue(x);
        });
    }

    get error(): string {
        for(let errorCode in this.form.errors) {
            return this.form.getError(errorCode);
        }

        return "";
    }

    navigateToPlans(): void {
        this.router.navigate(
            ["../../"],
            { relativeTo: this.activatedRoute }
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }

    update(): void {
        if(this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.planService.update(this.form.getRawValue()).then(x => {
            this.navigateToPlans();
        });
    }

}
