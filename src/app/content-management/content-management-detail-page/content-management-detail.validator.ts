import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
class ContentManagementDetailValidator {

    contentUrl(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "contentUrl": "É preciso fornecer um endereço para acessar o conteúdo." }
        }

        return null;
    }

    courseName(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "courseName": "É preciso escolher um curso." }
        }

        return null;
    }

    contentType(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "contentType": "É preciso escolher um tipo de conteúdo." }
        }

        return null;
    }

    description(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "description": "É preciso fornecer uma descrição para o conteúdo." }
        }

        return null;
    }

    title(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value}`.trim();

        if(value.length === 0) {
            return { "title": "É preciso fornecer um título para o conteúdo." }
        }

        return null;
    }

}

export default ContentManagementDetailValidator