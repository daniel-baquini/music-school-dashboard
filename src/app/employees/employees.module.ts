import { CourseDetailPageComponent } from './course-detail-page/course-detail-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { EmployeeWorkingTimeComponent } from './employee-working-time/employee-working-time.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';

const employeesRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "employees"
    },
    {
        component: EmployeesPageComponent,
        path: "employees"
    },
    {
        component: EmployeeDetailComponent,
        path: "employees/detail/:id"
    },
    {
        component: CoursesPageComponent,
        path: "courses"
    },
    {
        component: CourseDetailPageComponent,
        path: "courses/detail/:id"
    }
];

export const employeesTopLinks: TopMenuLink[] = [
    {
        label: "Colaboradores",
        link: "/employees/employees"
    },
    {
        label: "Cursos",
        link: "/employees/courses"
    }
];

@NgModule({
    declarations: [
        CourseDetailPageComponent,
        CoursesPageComponent,
        EmployeeDetailComponent,
        EmployeesPageComponent,
        EmployeeWorkingTimeComponent
    ],
    imports: [
        RouterModule.forChild(employeesRoutes),
        SharedModule
    ]
})
export class EmployeesModule { }
