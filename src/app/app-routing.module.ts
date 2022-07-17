import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule),
        path: "authentication"
    },
    {
        loadChildren: () => import("./students/students.module").then(m => m.StudentsModule),
        path: "students"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
