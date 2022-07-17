import { BorderedFieldComponent } from './components/bordered-field/bordered-field.component';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { DividerComponent } from './components/divider/divider.component';
import { LogoComponent } from './components/logo/logo.component';
import { NgModule } from '@angular/core';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
    declarations: [
        BorderedFieldComponent,
        DefaultPageComponent,
        DividerComponent,
        LogoComponent,
        PhotoUploadComponent,
        PrimaryButtonComponent,
        SideMenuComponent,
        TopMenuComponent,
    ],
    exports: [
        BorderedFieldComponent,
        CommonModule,
        DefaultPageComponent,
        DividerComponent,
        LogoComponent,
        PhotoUploadComponent,
        PrimaryButtonComponent,
        SideMenuComponent,
        TopMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
