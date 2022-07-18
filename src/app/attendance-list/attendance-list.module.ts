import { AttendanceListDetailPageComponent } from './attendance-list-detail-page/attendance-list-detail-page.component';
import { AttendanceListsPageComponent } from './attendance-lists-page/attendance-lists-page.component';
import { NgModule } from '@angular/core';
import { RescheduleClassesPageComponent } from './reschedule-classes-page/reschedule-classes-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';
import { RescheduleClassDetailPageComponent } from './reschedule-class-detail-page/reschedule-class-detail-page.component';
import { ProfessorAgendaComponent } from './professor-agenda/professor-agenda.component';
import { ClassPostItComponent } from './class-post-it/class-post-it.component';

const attendanceListRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "attendance-lists"
    },
    {
        component: AttendanceListsPageComponent,
        path: "attendance-lists"
    },
    {
        component: AttendanceListDetailPageComponent,
        path: "attendance-lists/detail/:id"
    },
    {
        component: RescheduleClassesPageComponent,
        path: "reschedule-classes"
    },
    {
        component: RescheduleClassDetailPageComponent,
        path: "reschedule-classes/detail/:id"
    }
];

export const attendanceListTopLinks: TopMenuLink[] = [
    {
        label: "Listas de presença",
        link: "/attendance-list/attendance-lists"
    },
    {
        label: "Remarcar aula",
        link: "/attendance-list/reschedule-classes"
    },
    {
        label: "Todas as listas de presença",
        link: "/attendance-list/all-attendance-lists"
    }
];

@NgModule({
    declarations: [
        AttendanceListsPageComponent,
        AttendanceListDetailPageComponent,
        RescheduleClassesPageComponent,
        RescheduleClassDetailPageComponent,
        ProfessorAgendaComponent,
        ClassPostItComponent
    ],
    imports: [
        RouterModule.forChild(attendanceListRoutes),
        SharedModule
    ]
})
export class AttendanceListModule { }
