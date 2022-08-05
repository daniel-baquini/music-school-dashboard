import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import { ContentManagementService } from 'src/app/shared/firebase/contents-magement/content-management.service';
import { contentManagementTopLinks } from '../content-management.module';
import { FormControl, FormGroup } from '@angular/forms';
import TopMenuLink from 'src/app/ui/top-menu/top-menu-link.model';

@Component({
    selector: 'app-content-management-detail-page',
    styleUrls: ['./content-management-detail-page.component.css'],
    templateUrl: './content-management-detail-page.component.html'
})
export class ContentManagementDetailPageComponent {    

    form = new FormGroup<CommonTypeToAbstractControlBased<ContentManagement>>({
        contentType: new FormControl("file", { nonNullable: true }),
        contentUrl: new FormControl("", { nonNullable: true }),
        course: new FormGroup({
            id: new FormControl("", { nonNullable: true }),
            name: new FormControl("", { nonNullable: true })
        }),
        description: new FormControl("", { nonNullable: true }),
        title: new FormControl("", { nonNullable: true })
    });
    links: TopMenuLink[] = contentManagementTopLinks;
    isLoading: boolean = true;
    pageTitle: string = "Gerenciador de conteúdo"

    constructor(
        private activatedRoute: ActivatedRoute,
        private contentManagementService: ContentManagementService,
        private router: Router
    ) {
        const id = this.activatedRoute.snapshot.params["id"];
        this.contentManagementService.read(id).then(x => {
            this.isLoading = false;
            if(x === undefined) {
                this.navigateToContentManagement();
                return
            }

            this.form.patchValue(x);
        })
    }
    
    navigateToContentManagement(): void {
        this.router.navigate(
            ["../../"],
            { relativeTo: this.activatedRoute }
        );
    }

}
