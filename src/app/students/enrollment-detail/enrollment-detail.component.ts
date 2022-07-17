import { Component, OnInit } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-enrollment-detail',
    templateUrl: './enrollment-detail.component.html',
    styleUrls: ['./enrollment-detail.component.css']
})
export class EnrollmentDetailComponent {
    links: TopMenuLink[] = [
        {
            label: "Matrículas",
            link: "/students"
        },
        {
            label: "Planos",
            link: "/students/plans"
        }
    ];    
}
