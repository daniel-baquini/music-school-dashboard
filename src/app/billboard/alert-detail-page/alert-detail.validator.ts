import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
class AlertDetailValidator {

    content(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "content": "É preciso fornecer um conteúdo para o alerta." }
        }

        return null;
    }

    title(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "title": "É preciso fornecer um título para o alerta." }
        }

        return null;
    }

}

export default AlertDetailValidator