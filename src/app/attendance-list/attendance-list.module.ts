import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleClassesPageComponent } from './schedule-classes-page/schedule-classes-page.component';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';
import { ReescheduleSolicitationsPageComponent } from './reeschedule-solicitations-page/reeschedule-solicitations-page.component';
import { ReescheduleSolicitationsComponent } from './reeschedule-solicitation/reeschedule-solicitation.component';
import { ScheduleClassDetailComponent } from './schedule-class-detail/schedule-class-detail.component';

const attendanceListRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "schedule-classes"
    },
    {
        component: ScheduleClassesPageComponent,
        path: "schedule-classes"
    },
    {
        component: ScheduleClassDetailComponent,
        path: "schedule-classes/detail/:id"
    },
    {
        loadChildren: () => import("./new-class/new-class.module").then(m => m.NewClassModule),
        path: "schedule-classes/new"
    },
    {
        component: ReescheduleSolicitationsPageComponent,
        path: "reeschedule-solicitations"
    }
];

export const attendanceListTopLinks: TopMenuLink[] = [
    {
        label: "Marcar aula",
        link: "/attendance-list/schedule-classes"
    },
    {
        label: "Solicitações para remarcar aulas",
        link: "/attendance-list/reeschedule-solicitations"
    }
];

@NgModule({
    declarations: [
        ScheduleClassesPageComponent,
        ReescheduleSolicitationsPageComponent,
        ReescheduleSolicitationsComponent,
        ScheduleClassDetailComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(attendanceListRoutes),
        SharedModule
    ]
})
export class AttendanceListModule { }
