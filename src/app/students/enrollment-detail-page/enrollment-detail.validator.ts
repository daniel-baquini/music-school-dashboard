import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import differenceInYears from "src/app/shared/utils/difference-in-years";

function isUnderAgeFn(strBirthDate: string): boolean | null {
    if(isNaN(new Date(strBirthDate).getTime())) {
        return null
    }

    return Math.floor(differenceInYears(new Date(), new Date(strBirthDate))) < 18;
}

@Injectable({
    providedIn: "root"
})
class EnrollmentDetailValidator {

    birthDate(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "birthDate": "É preciso fornecer uma data de nascimento." };
        }

        const splitedValue = value.split("/");
        if(value.length !== 10 || splitedValue.length != 3) {
            return { "birthDate": "A data deve estar no formato \"dd/MM/aaaa\"."}
        }

        return null;
    }

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

    name(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "name": "É preciso fornecer um nome." }
        }

        return null;
    }

    responsibleName(this: { formGroup: FormGroup | undefined }, control: AbstractControl): null | ValidationErrors {
        if(!this.formGroup) {
            return null;
        }

        const isUnderAge = isUnderAgeFn(`${this.formGroup.controls['birthDate'].value}`.trim());
        if(isUnderAge === null) {
            return null
        }

        if(!isUnderAge) {
            return null;
        }

        const responsibleName = `${control.value}`.trim();
        if(responsibleName.length === 0) {
            return { "responsibleName": "É preciso fornecer um nome para o responsável." }
        }

        return null
    }

    responsibleSurname(this: { formGroup: FormGroup | undefined }, control: AbstractControl): null | ValidationErrors {
        if(!this.formGroup) {
            return null;
        }

        const isUnderAge = isUnderAgeFn(`${this.formGroup.controls['birthDate'].value}`.trim());
        if(isUnderAge === null) {
            return null
        }

        if(!isUnderAge) {
            return null;
        }

        const responsibleSurname = `${control.value}`.trim();
        if(responsibleSurname.length === 0) {
            return { "responsibleSurname": "É preciso fornecer um sobrenome para o responsável." }
        }

        return null
    }

    responsibleTelephone(this: { formGroup: FormGroup | undefined }, control: AbstractControl): null | ValidationErrors {
        if(!this.formGroup) {
            return null;
        }

        const isUnderAge = isUnderAgeFn(`${this.formGroup.controls['birthDate'].value}`.trim());
        if(isUnderAge === null) {
            return null
        }

        if(!isUnderAge) {
            return null;
        }

        const responsibleTelephone = `${control.value}`.trim();
        if(responsibleTelephone.length === 0) {
            return { "responsibleTelephone": "É preciso fornecer um telefone para o responsável." }
        }

        return null
    }

    surname(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "surname": "É preciso fornecer um sobrenome." }
        }

        return null;
    }

    telephone(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "telephone": "É preciso fornecer um telefone." }
        }

        return null;
    }

}

export default EnrollmentDetailValidator