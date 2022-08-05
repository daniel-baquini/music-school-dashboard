import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-content/new-content.component';
import { ContentManagementService } from 'src/app/shared/firebase/contents-magement/content-management.service';

@Component({
    selector: 'app-link-content-page',
    styleUrls: ['./link-content-page.component.css'],
    templateUrl: './link-content-page.component.html',
})
export class LinkContentPageComponent {
    
    form: FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>;
    showFileRequiredAlert: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private contentManagementService: ContentManagementService,
        formProvider: FormProvider,
        private router: Router
    ) {
        this.form = formProvider.getForm();
    }

    navigateToContentManagement(): void {
        this.router.navigate(
            ["../../"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToContentType(): void {
        this.router.navigate(
            ["../content-type"],
            { relativeTo: this.activatedRoute }
        );
    }

    onNextStep(): void {
        if(this.form.invalid) {
            this.form.markAllAsTouched();
            return
        }

        this.contentManagementService.create(this.form.getRawValue()).then(x => {
            this.navigateToContentManagement();
        });
    }
    
}
