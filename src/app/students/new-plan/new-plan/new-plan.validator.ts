import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import Plan from "src/app/shared/firebase/plans/plan.model";
import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";

@Injectable({
    providedIn: "root"
})
class NewPlanValidator {

    endDate(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "endDate": "Necessário fornecer uma data de vencimento." }
        }

        return null;
    }

    startDate(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "startDate": "Necessário fornecer uma data de início." }
        }

        return null;
    }
    
    expireDateGreaterThanStartDate(control: AbstractControl): null | ValidationErrors {
        const formGroup = control as unknown as FormGroup<CommonTypeToAbstractControlBased<Plan>>;
        const endDate: number = new Date(formGroup.controls.endDate.value).getTime();
        const startDate: number = new Date(formGroup.controls.startDate.value).getTime();

        if(startDate > endDate) {
            return { "start-and-end": "A data de vencimento deve ser maior que a data de início." }
        }

        return null;
    }

}

export default NewPlanValidator