import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import { Component, ViewChild } from '@angular/core';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { FormProvider } from '../new-content/new-content.component';
import { FormGroup } from '@angular/forms';
import { ContentManagementService } from 'src/app/shared/firebase/contents-magement/content-management.service';

@Component({
    selector: 'app-file-content-page',
    styleUrls: ['./file-content-page.component.css'],
    templateUrl: './file-content-page.component.html'
})
export class FileContentPageComponent {
    
    @ViewChild("fileUpload") fileUpload!: FileUploadComponent

    fileUploadingLabel: string = "";
    form: FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>;
    showFileRequiredAlert: boolean = false;
    showModelUploading: boolean = false;
    showSendingFile: boolean = false;

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

    async onNextStep(): Promise<void> {
        if(!this.fileUpload.file) {
            this.showFileRequiredAlert = true;
            return Promise.resolve();
        }

        this.showSendingFile = true;
        this.form.controls.contentUrl.setValue(await this.contentManagementService.uploadFile(
            this.form.getRawValue(),
            this.fileUpload.file,
            (progress: number) => {
                this.fileUploadingLabel = `Enviando arquivo: ${Math.floor(progress*100)}%`
            }
        ));

        this.showSendingFile = false;
        this.showModelUploading = true;
        await this.contentManagementService.create(this.form.getRawValue());
        this.navigateToContentManagement();
    }

}
