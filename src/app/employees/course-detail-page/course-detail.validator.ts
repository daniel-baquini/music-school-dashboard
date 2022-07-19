import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
class CourseDetailValidator {

    name(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "name": "É preciso fornecer um nome para o curso." }
        }

        return null;
    }

}

export default CourseDetailValidator