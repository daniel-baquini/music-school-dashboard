import { AlertComponent } from './alert/alert.component';
import { BorderedFieldComponent } from './bordered-field/bordered-field.component';
import { ButtonsRowComponent } from './buttons-row/buttons-row.component';
import { CommonModule } from '@angular/common';
import { ContentWindowComponent } from './content-window/content-window.component';
import { DefaultDetailPageComponent } from './default-detail-page/default-detail-page.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { FormsModule } from '@angular/forms';
import { FormStepComponent } from './form-step/form-step.component';
import { LoadingMessageComponent } from './loading-message/loading-message.component';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { RadioButtonCardComponent } from './radio-button-card/radio-button-card.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TertiaryButtonComponent } from './tertiary-button/tertiary-button.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
    declarations: [
        AlertComponent,
        BorderedFieldComponent,
        ButtonsRowComponent,
        ContentWindowComponent,
        DefaultDetailPageComponent,
        DefaultPageComponent,
        FormStepComponent,
        LoadingMessageComponent,
        LogoComponent,
        PrimaryButtonComponent,
        RadioButtonCardComponent,
        SideMenuComponent,
        TertiaryButtonComponent,
        TopMenuComponent
    ],
    exports: [
        AlertComponent,
        BorderedFieldComponent,
        ButtonsRowComponent,
        ContentWindowComponent,
        DefaultDetailPageComponent,
        DefaultPageComponent,
        FormStepComponent,
        LoadingMessageComponent,
        LogoComponent,
        PrimaryButtonComponent,
        RadioButtonCardComponent,
        TertiaryButtonComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class UIModule { }
