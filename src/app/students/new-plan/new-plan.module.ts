import { CoursePageComponent } from './course-page/course-page.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentPageComponent } from './student-page/student-page.component';
import { UIModule } from 'src/app/ui/ui.module';
import { StartAndEndPageComponent } from './start-and-end-page/start-and-end-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValuePageComponent } from './value-page/value-page.component';

const newPlanRoutes: Routes = [
    {
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "student"
            },
            {
                component: StudentPageComponent,
                path: "student"
            },
            {
                component: CoursePageComponent,
                path: "course"
            },
            {
                component: StartAndEndPageComponent,
                path: "start-and-end"
            },
            {
                component: ValuePageComponent,
                path: "value"
            }
        ],
        component: NewPlanComponent,
        path: ""
    }
]

@NgModule({
    declarations: [
        NewPlanComponent,
        StudentPageComponent,
        CoursePageComponent,
        StartAndEndPageComponent,
        ValuePageComponent
    ],
    imports: [
        UIModule,
        ReactiveFormsModule,
        RouterModule.forChild(newPlanRoutes),
        SharedModule
    ]
})
export class NewPlanModule { }
