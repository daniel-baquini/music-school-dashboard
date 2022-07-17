import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const authenticationRoutes: Routes = [
    {
        component: LoginPageComponent,
        path: ""
    }
]

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        RouterModule.forChild(authenticationRoutes),
        SharedModule
    ]
})
export class AuthenticationModule { }
