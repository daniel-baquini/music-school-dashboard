import { Component } from '@angular/core';
import { contentManagementTopLinks } from '../content-management.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import ContentManagement from 'src/app/shared/firebase/contents-magement/content-management.model';
import { ContentManagementService } from 'src/app/shared/firebase/contents-magement/content-management.service';

@Component({
    selector: 'app-content-management-page',
    templateUrl: './content-management-page.component.html',
    styleUrls: ['./content-management-page.component.css']
})
export class ContentManagementPageComponent {
    data: ContentManagement[] = [];
    dataLoaded: boolean = false;
    links: TopMenuLink[] = contentManagementTopLinks;

    constructor(contentManagementService: ContentManagementService) {
        contentManagementService.readAll().subscribe(x => {
            this.dataLoaded = true;
            this.data = x;
        })
    }

}
