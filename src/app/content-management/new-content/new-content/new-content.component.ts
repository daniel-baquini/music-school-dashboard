import { Component } from '@angular/core';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import { contentManagementTopLinks } from '../../content-management.module';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import TopMenuLink from 'src/app/ui/top-menu/top-menu-link.model';
import NewContentValidator from './new-content.validator';

export abstract class FormProvider {
    abstract getForm(): FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>;
}

@Component({
    providers: [{ provide: FormProvider, useExisting: NewContentComponent }],
    selector: 'app-new-content',
    styleUrls: ['./new-content.component.css'],
    templateUrl: './new-content.component.html',
})
export class NewContentComponent implements FormProvider {
    
    form = new FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>({
        contentType: new FormControl("file", { nonNullable: true }),
        contentUrl: new FormControl("", { nonNullable: true }),
        course: new FormGroup({
            id: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
            name: new FormControl("", { nonNullable: true, validators: [Validators.required] })
        }),
        description: new FormControl("", { nonNullable: true }),
        title: new FormControl("", { nonNullable: true, validators: [this.validator.title] })
    }, {
        validators: [this.validator.contentUrl]
    });
    links: TopMenuLink[] = contentManagementTopLinks;
    pageTitle: string = "Gerenciador de conteúdo"
    
    constructor(private validator: NewContentValidator) { }

    getForm(): FormGroup<CommonTypeToAbstractControlBased<ContentManagement>> {
        return this.form;
    }

}
