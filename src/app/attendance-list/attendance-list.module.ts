import { AttendanceListDetailPageComponent } from './attendance-list-detail-page/attendance-list-detail-page.component';
import { AttendanceListsPageComponent } from './attendance-lists-page/attendance-lists-page.component';
import { NgModule } from '@angular/core';
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
    }
];

export const attendanceListTopLinks: TopMenuLink[] = [
    {
        label: "Listas de presença",
        link: "/attendance-list/attendance-lists"
    },
    {
        label: "Remarcar aula",
        link: "/attendance-lists/reschedule-class"
    },
    {
        label: "Todas as listas de presença",
        link: "/attendance-lists/all-attendance-lists"
    }
];

@NgModule({
    declarations: [
        AttendanceListsPageComponent,
        AttendanceListDetailPageComponent
    ],
    imports: [
        RouterModule.forChild(attendanceListRoutes),
        SharedModule
    ]
})
export class AttendanceListModule { }
