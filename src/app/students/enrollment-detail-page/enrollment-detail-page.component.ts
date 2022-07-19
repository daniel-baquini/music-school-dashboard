import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import EnrollmentDetailValidator from './enrollment-detail.validator';
import { EnrollmentService } from 'src/app/shared/firebase/enrollments/enrollment.service';
import { studentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-enrollment-detail-page',
    templateUrl: './enrollment-detail-page.component.html',
    styleUrls: ['./enrollment-detail-page.component.css']
})
export class EnrollmentDetailPageComponent {

    form: FormGroup;
    links: TopMenuLink[] = studentsTopLinks;
    showImageCropper: boolean = false;
    showUploadingModal: boolean = false;

    constructor(
        public enrollmentService: EnrollmentService,
        formBuilder: FormBuilder,
        validator: EnrollmentDetailValidator
    ) {
        this.form = formBuilder.group({
            "birthDate": new FormControl("", [validator.birthDate]),
            "email": new FormControl("", [validator.email]),
            "name": new FormControl("", [validator.name]),
            "photoUrl": new FormControl(""),
            "responsibleName": new FormControl("", [(control: AbstractControl) => {
                return validator.responsibleName.call({ formGroup: this.form }, control)
            }]),
            "responsibleSurname": new FormControl("", [(control: AbstractControl) => {
                return validator.responsibleSurname.call({ formGroup: this.form }, control)
            }]),
            "responsibleTelephone": new FormControl("", [(control: AbstractControl) => {
                return validator.responsibleTelephone.call({ formGroup: this.form }, control)
            }]),
            "surname": new FormControl("", [validator.surname]),
            "telephone": new FormControl("", [validator.telephone])
        });
    }

    callImageCropper(imageUrl: string): void {
        this.form.controls["photoUrl"].setValue(imageUrl);
        this.showImageCropper = true;
    }

    discardImage(): void {
        this.form.controls["photoUrl"].setValue("");
        this.showImageCropper = false;
    }

    saveImage(imageUrl: string): void {
        this.form.controls["photoUrl"].setValue(imageUrl);
        this.showImageCropper = false;
    }

    async uploadUserPhoto(): Promise<boolean> {
        this.form.controls["photoUrl"].setValue(
            await this.enrollmentService.uploadUserPhoto(
                this.form.value,
                (progress: number) => {
                    this.showUploadingModal = true;
                }
            )
        );

        this.showUploadingModal = false;
        return Promise.resolve(true);
    }

}
