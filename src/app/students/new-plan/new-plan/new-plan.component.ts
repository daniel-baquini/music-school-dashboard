import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import { enrollmentsTopLinks } from '../../students.module';
import { FormControl, FormGroup } from '@angular/forms';
import Plan from 'src/app/shared/firebase/plans/plan.model';
import TopMenuLink from 'src/app/ui/top-menu/top-menu-link.model';
import NewPlanValidator from './new-plan.validator';

export abstract class FormProvider {
    abstract getForm(): FormGroup<CommonTypeToAbstractControlBased<Plan>>;
}

@Component({
    providers: [
        {
            provide: FormProvider,
            useExisting: NewPlanComponent
        }
    ],
    selector: "app-new-plan",
    styleUrls: ["./new-plan.component.css"],
    templateUrl: "./new-plan.component.html"
})
export class NewPlanComponent implements FormProvider {

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

    constructor(private validator: NewPlanValidator) { }

    links: TopMenuLink[] = enrollmentsTopLinks;
    pageTitle: string = "Estudantes";

    getForm(): FormGroup<CommonTypeToAbstractControlBased<Plan>> {
        return this.form;
    }
    
}
