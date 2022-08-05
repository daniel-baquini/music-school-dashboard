import { ClassDatePageComponent } from './class-date-page/class-date-page.component';
import { NewClassComponent } from './new-class/new-class.component';
import { NgModule } from '@angular/core';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { ProfessorPageComponent } from './professor-page/professor-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentPageComponent } from './student-page/student-page.component';
import { ProfessorAgendaComponent } from './professor-agenda/professor-agenda.component';
import { ClassPostItComponent } from './class-post-it/class-post-it.component';

const newClassRoutes: Routes = [
    {
        component: NewClassComponent,
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
                component: PlanPageComponent,
                path: "plan"
            },
            {
                component: ProfessorPageComponent,
                path: "professor"
            },
            {
                component: ClassDatePageComponent,
                path: "class-date"
            }
        ],
        path: "",
    },
];

@NgModule({
    declarations: [
        ClassPostItComponent,
        ProfessorAgendaComponent,
        ClassDatePageComponent,
        NewClassComponent,
        PlanPageComponent,
        ProfessorPageComponent,
        StudentPageComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(newClassRoutes),
        SharedModule
    ]
})
export class NewClassModule { }
