import { Component } from '@angular/core';
import Employee from 'src/app/shared/firebase/employees/employee.model';
import { EmployeeService } from 'src/app/shared/firebase/employees/employee.service';
import { employeesTopLinks } from '../employees.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-employees-page',
    templateUrl: './employees-page.component.html',
    styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {

    data: Employee[] = [];
    dataLoaded: boolean = false;
    links: TopMenuLink[] = employeesTopLinks;

    constructor(employeeService: EmployeeService) {
        employeeService.readAll().subscribe(x => {
            this.dataLoaded = true;
            this.data = x;
        })
    }

}