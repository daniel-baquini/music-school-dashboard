import { Component } from '@angular/core';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-enrollment-page',
    templateUrl: './enrollment-page.component.html',
    styleUrls: ['./enrollment-page.component.css']
})
export class EnrollmentPageComponent {
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
