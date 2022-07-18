import { Component, Input } from '@angular/core';
import { employeesTopLinks } from '../employees.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-employees-page',
    templateUrl: './employees-page.component.html',
    styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {
    @Input() links: TopMenuLink[] = employeesTopLinks;
}
