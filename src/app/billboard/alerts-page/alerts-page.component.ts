import Alert from 'src/app/shared/firebase/alerts/alert.model';
import { AlertService } from 'src/app/shared/firebase/alerts/alert.service';
import { billboardTopLinks } from '../billboard.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-alerts-page',
    templateUrl: './alerts-page.component.html',
    styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent {
    data: Alert[] = [];
    dataLoaded: boolean = false;
    links: TopMenuLink[] = billboardTopLinks;

    constructor(alertService: AlertService) {
        alertService.readAll().subscribe(x => {
            this.dataLoaded = true;
            this.data = x;
        })
    }
}
