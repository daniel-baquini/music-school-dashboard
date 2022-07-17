import { EnrollmentPageComponent } from './enrollment-page/enrollment-page.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentDetailComponent } from './enrollment-detail/enrollment-detail.component';

const studentsRoutes: Routes = [
    {
        component: EnrollmentPageComponent,
        path: ""
    },
    {
        component: EnrollmentDetailComponent,
        path: "enrollment-detail/:id"
    }
]

@NgModule({
    declarations: [
        EnrollmentPageComponent,
        EnrollmentDetailComponent
    ],
    imports: [
        RouterModule.forChild(studentsRoutes),
        SharedModule
    ]
})
export class StudentsModule { }
