import { Component, Input } from '@angular/core';
import { employeesTopLinks } from '../employees.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-employee-detail-page',
    templateUrl: './employee-detail-page.component.html',
    styleUrls: ['./employee-detail-page.component.css']
})
export class EmployeeDetailComponent  {
    @Input() links: TopMenuLink[] = employeesTopLinks;    
}
