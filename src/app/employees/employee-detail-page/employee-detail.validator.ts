import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

const workingTimeValidationRegex: RegExp = /(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]) - (0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9])/;

@Injectable({
    providedIn: "root"
})
class EmployeeDetailValidator {

    email(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "email": "É preciso fornecer um email." }
        }

        if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }

        return null;
    }

    hoursStr(control: AbstractControl): null | ValidationErrors {
        let value = `${control.value}`.trim();
        if(value.length === 0) {
            return null
        }

        const hours = value.split(";");
        for(let i = 0; i < hours.length; i++) {
            if(!workingTimeValidationRegex.test(hours[i])) {
                return { "hoursStr": `O ${i+1}° intervalo não está formatado corretamente` }
            }
        }

        return null;
    }

    name(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "name": "É preciso fornecer um nome." }
        }

        return null;
    }

    surname(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "surname": "É preciso fornecer um sobrenome." }
        }

        return null;
    }

}

export default EmployeeDetailValidator