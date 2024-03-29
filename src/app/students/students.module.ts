import { EnrollmentDetailPageComponent } from './enrollment-detail-page/enrollment-detail-page.component';
import { EnrollmentsPageComponent } from './enrollments-page/enrollments-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PlanDetailPageComponent } from './plan-detail-page/plan-detail-page.component';
import { PlansPageComponent } from './plans-page/plans-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';

const studentsRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "enrollments"
    },
    {
        component: EnrollmentsPageComponent,
        path: "enrollments"
    },
    {
        component: EnrollmentDetailPageComponent,
        path: "enrollments/detail/:id"
    },
    {
        component: PlansPageComponent,
        path: "plans"
    },
    {
        component: PlanDetailPageComponent,
        path: "plans/detail/:id"
    },
    {
        loadChildren: () => import("./new-plan/new-plan.module").then(m => m.NewPlanModule),
        path: "plans/new"
    }
]

export const enrollmentsTopLinks: TopMenuLink[] = [
    {
        label: "Matrículas",
        link: "/students/enrollments"
    },
    {
        label: "Planos",
        link: "/students/plans"
    }
];

@NgModule({
    declarations: [
        EnrollmentDetailPageComponent,
        EnrollmentsPageComponent,
        PlansPageComponent,
        PlanDetailPageComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(studentsRoutes),
        SharedModule
    ]
})
export class StudentsModule { }
