import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";
import CommonTypeToAbstractControlBased from "src/app/shared/utils/common-type-to-abstract-control-based.type";
import ContentManagement from "src/app/shared/firebase/contents-magement/content-management.model";

@Injectable({
    providedIn: "root"
})
class NewContentValidator {

    description(control: AbstractControl): null | ValidationErrors {
        const value: string = `${control.value}`.trim();

        if(value.length === 0) {
            return { "description": "É necessário fornecer um descrição." }
        }

        return null;
    }

    contentUrl(control: AbstractControl): null | ValidationErrors {
        const formGroup = control as FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>; 
        const contentUrlControl = formGroup.controls.contentUrl;

        if(formGroup.controls.contentType.value === "file") {
            contentUrlControl.setErrors(null);
            return null;
        }

        if(contentUrlControl.value.length === 0) {
            contentUrlControl.setErrors({ "contentUrl": "É necessário fornecer um link." });
            return null
        }

        try {
            const url = new URL(contentUrlControl.value);
        }
        catch(e) {
            contentUrlControl.setErrors({ "contentUrl": "O link não é válido" });
            return null
        }

        contentUrlControl.setErrors(null);
        return null;
    }

    title(control: AbstractControl): null | ValidationErrors {
        const value: string = `${control.value}`.trim();

        if(value.length === 0) {
            return { "title": "É necessário fornecer um título." }
        }

        return null;
    }

}

export default NewContentValidator