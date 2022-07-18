import { Component } from '@angular/core';
import { contentManagementTopLinks } from '../content-management.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-content-management-page',
    templateUrl: './content-management-page.component.html',
    styleUrls: ['./content-management-page.component.css']
})
export class ContentManagementPageComponent {
    links: TopMenuLink[] = contentManagementTopLinks;
}
