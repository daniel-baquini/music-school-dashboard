import { Component } from '@angular/core';
import { contentManagementTopLinks } from '../content-management.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-content-management-detail-page',
    templateUrl: './content-management-detail-page.component.html',
    styleUrls: ['./content-management-detail-page.component.css']
})
export class ContentManagementDetailPageComponent {
    links: TopMenuLink[] = contentManagementTopLinks;
}
