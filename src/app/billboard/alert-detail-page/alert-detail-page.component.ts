import { billboardTopLinks } from '../billboard.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-alert-detail-page',
    templateUrl: './alert-detail-page.component.html',
    styleUrls: ['./alert-detail-page.component.css']
})
export class AlertDetailPageComponent {
    links: TopMenuLink[] = billboardTopLinks;
}
