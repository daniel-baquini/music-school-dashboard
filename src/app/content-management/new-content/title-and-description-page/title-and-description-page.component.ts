import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-content/new-content.component';

@Component({
    selector: 'app-title-and-description-page',
    styleUrls: ['./title-and-description-page.component.css'],
    templateUrl: './title-and-description-page.component.html'
})
export class TitleAndDescriptionPageComponent {
    
    form: FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>;

    constructor(
        private activatedRoute: ActivatedRoute,
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

    navigateToCourses(): void {
        this.router.navigate(
            ["../course"],
            { relativeTo: this.activatedRoute }
        );
    }

    onNextStep(): void {
        if(this.form.controls.description.invalid || this.form.controls.title.invalid) {
            this.form.controls.description.markAsTouched();
            this.form.controls.title.markAsTouched();
            return
        }

        this.navigateToCourses();
    }
    
}
