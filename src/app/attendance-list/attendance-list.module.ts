import { AllAttendanceListsComponent } from './all-attendance-lists/all-attendance-lists.component';
import { AttendanceListDetailPageComponent } from './attendance-list-detail-page/attendance-list-detail-page.component';
import { AttendanceListsPageComponent } from './attendance-lists-page/attendance-lists-page.component';
import { ClassPostItComponent } from './class-post-it/class-post-it.component';
import { NgModule } from '@angular/core';
import { ProfessorAgendaComponent } from './professor-agenda/professor-agenda.component';
import { RescheduleClassDetailPageComponent } from './reschedule-class-detail-page/reschedule-class-detail-page.component';
import { RescheduleClassesPageComponent } from './reschedule-classes-page/reschedule-classes-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';

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
    },
    {
        component: AllAttendanceListsComponent,
        path: "all-attendance-lists"
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
        label: "Visualizar listas de presenças",
        link: "/attendance-list/all-attendance-lists"
    }
];

@NgModule({
    declarations: [
        AllAttendanceListsComponent,
        AttendanceListsPageComponent,
        AttendanceListDetailPageComponent,
        ClassPostItComponent,
        ProfessorAgendaComponent,
        RescheduleClassDetailPageComponent,
        RescheduleClassesPageComponent
    ],
    imports: [
        RouterModule.forChild(attendanceListRoutes),
        SharedModule
    ]
})
export class AttendanceListModule { }
