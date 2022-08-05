import { ContentTypePageComponent } from './content-type-page/content-type-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { NewContentComponent } from './new-content/new-content.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitleAndDescriptionPageComponent } from './title-and-description-page/title-and-description-page.component';
import { LinkContentPageComponent } from './link-content-page/link-content-page.component';
import { FileContentPageComponent } from './file-content-page/file-content-page.component';

const newContentRoutes: Routes = [
    {
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "title-and-description"
            },
            {
                component: TitleAndDescriptionPageComponent,
                path: "title-and-description"
            },
            {
                component: CoursePageComponent,
                path: "course"
            },
            {
                component: ContentTypePageComponent,
                path: "content-type"
            },
            {
                component: FileContentPageComponent,
                path: "file-content"
            },
            {
                component: LinkContentPageComponent,
                path: "link-content"
            }
        ],
        component: NewContentComponent,
        path: ""
    }
];

@NgModule({
    declarations: [
        ContentTypePageComponent,
        CoursePageComponent,
        NewContentComponent,
        TitleAndDescriptionPageComponent,
        LinkContentPageComponent,
        FileContentPageComponent,
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(newContentRoutes),
        SharedModule
    ]
})
export class NewContentModule { }
