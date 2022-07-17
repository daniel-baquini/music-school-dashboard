import { billboardTopLinks } from '../billboard.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-alerts-page',
    templateUrl: './alerts-page.component.html',
    styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent {
    links: TopMenuLink[] = billboardTopLinks;
}
