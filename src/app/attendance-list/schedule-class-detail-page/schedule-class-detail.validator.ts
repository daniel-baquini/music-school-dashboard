import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";
import hourStrToNumber from "src/app/shared/utils/hoursStrToNumber.function";

@Injectable({
    providedIn: "root"
})
class ScheduleClassDetailValidator {

    classDate(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "classDate": "É preciso fornecer um dia para a aula." }
        }

        return null;
    }

    classEndTime(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "classEndTime": "É preciso fornecer um horário para finalizar a aula." }
        }

        return null;
    }

    classStartTime(this: { endTime: string }, control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "classStartTime": "É preciso fornecer um horário para começar a aula." }
        }

        if(this.endTime.length === 0) {
            return null
        }

        if(hourStrToNumber(value) >= hourStrToNumber(this.endTime)) {
            return { "classStartTime": "O horário de início deve ser menor que o horário de finalização da aula." }
        }

        return null;
    }

    studentName(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "studentName": "É preciso escolher um estudante." }
        }

        return null;
    }

    plan(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "plan": "É preciso escolher um plano." }
        }

        return null;
    }

    professorName(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "professorName": "É preciso escolher um professor." }
        }

        return null;
    }

}

export default ScheduleClassDetailValidator