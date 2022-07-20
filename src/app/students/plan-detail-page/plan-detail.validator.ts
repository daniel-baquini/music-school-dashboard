import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
class PlanDetailValidator {

    courseName(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "courseName": "É preciso escolher um curso." }
        }

        return null;
    }

    endDate(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "endDate": "É preciso fornecer uma data para o fim do plano." }
        }

        return null;
    }

    isFinished(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "isFinished": "É preciso dizer se o plano está finalizado ou não." }
        }

        return null;
    }

    startDate(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "startDate": "É preciso fornecer uma data para o início do plano." }
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

    value(control: AbstractControl): null | ValidationErrors {
        const value = parseFloat(`${control.value}`.trim());

        if(isNaN(value)) {
            return { "value": "É preciso fornecer um valor numérico." }
        }

        if(value < 0) {
            return { "value": "É preciso fornecer um valor positivo." }
        }

        return null;
    }

}

export default PlanDetailValidator