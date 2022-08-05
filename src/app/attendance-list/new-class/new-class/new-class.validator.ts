import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";
import MusicClass from "src/app/shared/firebase/schedule-class/music-class.model";
import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";

@Injectable({
    providedIn: "root"
})
class NewClassValidator {

    classDate(control: AbstractControl): null | ValidationErrors {
        const value: Date | string  = control.value;

        if(value instanceof Date) {
            if(isNaN(value.getTime())) {
                return { "classDate": "Necessário fornecer uma data no formato aaaa/MM/dd." }
            }

            return null
        }

        if(value.length === 0) {
            return { "classDate": "Necessário fornecer uma data no formato aaaa/MM/dd." }
        }        

        return null;
    }

    classEndTime(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "classEndTime": "Necessário fornecer uma data de início." }
        }

        const numericValue = parseFloat(value);

        if(isNaN(numericValue)) {
            return { "classEndTime": "Necessário fornecer um valor numérico" }
        }

        return null;
    }

    classStartTime(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "classStartTime": "Necessário fornecer uma data de início." }
        }

        const numericValue = parseFloat(value);

        if(isNaN(numericValue)) {
            return { "classStartTime": "Necessário fornecer um valor numérico" }
        }

        return null;
    }

    startTimeGreaterThanEndTime(control: AbstractControl): null | ValidationErrors {
        const formGroup = control as unknown as FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
        const endTime: number = formGroup.controls.classEndTime.value;
        const startTime: number = formGroup.controls.classStartTime.value

        if(startTime > endTime) {
            return { "start-time-greater-than-end-time": "O horário de início deve ser antes do horário de fim da aula." }
        }

        return null;
    }

}

export default NewClassValidator