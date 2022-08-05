import { ContentManagementPageComponent } from './content-management-page/content-management-page.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import TopMenuLink from '../shared/components/top-menu/top-menu-link.model';
import { ContentManagementDetailPageComponent } from './content-management-detail-page/content-management-detail-page.component';

const contentManagementRoutes: Routes = [
    {
        component: ContentManagementPageComponent,
        path: ""
    },
    {
        loadChildren: () => import("./new-content/new-content.module").then(m => m.NewContentModule),
        path: "new"
    },
    {
        component: ContentManagementDetailPageComponent,
        path: "detail/:id"
    }
];

export const contentManagementTopLinks: TopMenuLink[] = [
    {
        label: "Gerenciador de conteúdo",
        link: "/content-management"
    }
];

@NgModule({
    declarations: [
        ContentManagementPageComponent,
        ContentManagementDetailPageComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(contentManagementRoutes),
        SharedModule
    ]
})
export class ContentManagementModule { }
