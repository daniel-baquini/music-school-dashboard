import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';
import { AlertDetailPageComponent } from './alert-detail-page/alert-detail-page.component';

const billboardRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "alerts"
    },
    {
        component: AlertsPageComponent,
        path: "alerts"
    },
    {
        component: AlertDetailPageComponent,
        path: "alerts/detail/:id"
    }
]

export const billboardTopLinks: TopMenuLink[] = [
    {
        label: "Avisos",
        link: "/billboard/alerts"
    }
];

@NgModule({
    declarations: [
        AlertsPageComponent,
        AlertDetailPageComponent
    ],
    imports: [
        RouterModule.forChild(billboardRoutes),
        SharedModule
    ]
})
export class BillboardModule { }
