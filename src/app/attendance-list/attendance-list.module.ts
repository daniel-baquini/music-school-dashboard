import { ClassPostItComponent } from './class-post-it/class-post-it.component';
import { NgModule } from '@angular/core';
import { ProfessorAgendaComponent } from './professor-agenda/professor-agenda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleClassDetailPageComponent } from './schedule-class-detail-page/schedule-class-detail-page.component';
import { ScheduleClassesPageComponent } from './schedule-classes-page/schedule-classes-page.component';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';
import { ReescheduleSolicitationsPageComponent } from './reeschedule-solicitations-page/reeschedule-solicitations-page.component';

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
        component: ScheduleClassDetailPageComponent,
        path: "schedule-classes/detail/:id"
    }
];

export const attendanceListTopLinks: TopMenuLink[] = [
    {
        label: "Marcar aula",
        link: "/attendance-list/schedule-classes"
    }
];

@NgModule({
    declarations: [
        ClassPostItComponent,
        ProfessorAgendaComponent,
        ScheduleClassDetailPageComponent,
        ScheduleClassesPageComponent,
        ReescheduleSolicitationsPageComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(attendanceListRoutes),
        SharedModule
    ]
})
export class AttendanceListModule { }
