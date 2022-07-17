import { EnrollmentPageComponent } from './enrollment-page/enrollment-page.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const studentsRoutes: Routes = [
    {
        component: EnrollmentPageComponent,
        path: ""
    }
]

@NgModule({
    declarations: [
        EnrollmentPageComponent
    ],
    imports: [
        RouterModule.forChild(studentsRoutes),
        SharedModule
    ]
})
export class StudentsModule { }
