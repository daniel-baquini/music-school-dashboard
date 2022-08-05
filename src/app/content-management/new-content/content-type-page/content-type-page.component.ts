import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-content/new-content.component';

@Component({
    selector: 'app-content-type-page',
    templateUrl: './content-type-page.component.html',
    styleUrls: ['./content-type-page.component.css']
})
export class ContentTypePageComponent {

    form: FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>
    
    constructor(
        private activatedRoute: ActivatedRoute,
        formProvider: FormProvider,
        private router: Router
    ) {
        this.form = formProvider.getForm();
    }

    navigateToCourses(): void {
        this.router.navigate(
            ["../course"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToFileContent(): void {
        this.router.navigate(
            ["../file-content"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToLinkContent(): void {
        this.router.navigate(
            ["../link-content"],
            { relativeTo: this.activatedRoute }
        );
    }

    onNextStep(): void {
        if(this.form.controls.contentType.value === "file") {
            this.navigateToFileContent();
        }
        else {
            this.navigateToLinkContent();
        }
    }

}
