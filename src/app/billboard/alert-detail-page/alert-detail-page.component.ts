import AlertDetailValidator from './alert-detail.validator';
import { AlertService } from 'src/app/shared/firebase/alerts/alert.service';
import { billboardTopLinks } from '../billboard.module';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-alert-detail-page',
    templateUrl: './alert-detail-page.component.html',
    styleUrls: ['./alert-detail-page.component.css']
})
export class AlertDetailPageComponent {

    form: FormGroup;
    links: TopMenuLink[] = billboardTopLinks;

    constructor(
        public alertService: AlertService,
        formBuilder: FormBuilder,
        validator: AlertDetailValidator
    ) {
        this.form = formBuilder.group({
            "content": new FormControl("", [validator.content]),
            "title": new FormControl("", [validator.title])
        });
    }
}
