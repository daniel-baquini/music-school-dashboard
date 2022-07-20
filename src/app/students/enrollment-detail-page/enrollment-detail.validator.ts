import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";


@Injectable({
    providedIn: "root"
})
class EnrollmentDetailValidator {

    birthDate(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "birthDate": "É preciso fornecer uma data de nascimento." };
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
        // if(!this.formGroup) {
        //     return null;
        // }

        // const isUnderAge = isUnderAgeFn(`${this.formGroup.controls['birthDate'].value}`.trim());
        // if(isUnderAge === null) {
        //     return null
        // }

        // if(!isUnderAge) {
        //     return null;
        // }

        // const responsibleName = `${control.value}`.trim();
        // if(responsibleName.length === 0) {
        //     return { "responsibleName": "É preciso fornecer um nome para o responsável." }
        // }

        return null
    }

    responsibleSurname(this: { formGroup: FormGroup | undefined }, control: AbstractControl): null | ValidationErrors {
        // if(!this.formGroup) {
        //     return null;
        // }

        // const isUnderAge = isUnderAgeFn(`${this.formGroup.controls['birthDate'].value}`.trim());
        // if(isUnderAge === null) {
        //     return null
        // }

        // if(!isUnderAge) {
        //     return null;
        // }

        // const responsibleSurname = `${control.value}`.trim();
        // if(responsibleSurname.length === 0) {
        //     return { "responsibleSurname": "É preciso fornecer um sobrenome para o responsável." }
        // }

        return null
    }

    responsibleTelephone(this: { formGroup: FormGroup | undefined }, control: AbstractControl): null | ValidationErrors {
        // if(!this.formGroup) {
        //     return null;
        // }

        // const isUnderAge = isUnderAgeFn(`${this.formGroup.controls['birthDate'].value}`.trim());
        // if(isUnderAge === null) {
        //     return null
        // }

        // if(!isUnderAge) {
        //     return null;
        // }

        // const responsibleTelephone = `${control.value}`.trim();
        // if(responsibleTelephone.length === 0) {
        //     return { "responsibleTelephone": "É preciso fornecer um telefone para o responsável." }
        // }

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