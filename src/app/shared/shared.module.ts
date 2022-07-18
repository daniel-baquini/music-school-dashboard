import { BorderedFieldComponent } from './components/bordered-field/bordered-field.component';
import { ChipComponent } from './components/chip/chip.component';
import { CommonModule } from '@angular/common';
import { DefaultDataPageComponent } from './components/default-data-page/default-data-page.component';
import { DefaultDetailPageComponent } from './components/default-detail-page/default-detail-page.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { DividerComponent } from './components/divider/divider.component';
import { LogoComponent } from './components/logo/logo.component';
import { NgModule } from '@angular/core';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
    declarations: [
        BorderedFieldComponent,
        ChipComponent,
        DefaultDataPageComponent,
        DefaultDetailPageComponent,
        DefaultPageComponent,
        DividerComponent,
        LogoComponent,
        PhotoUploadComponent,
        PrimaryButtonComponent,
        RadioButtonGroupComponent,
        SideMenuComponent,
        TopMenuComponent    
    ],
    exports: [
        BorderedFieldComponent,
        ChipComponent,
        CommonModule,
        DefaultDataPageComponent,
        DefaultDetailPageComponent,
        DefaultPageComponent,
        DividerComponent,
        LogoComponent,
        PhotoUploadComponent,
        PrimaryButtonComponent,
        RadioButtonGroupComponent,
        SideMenuComponent,
        TopMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
