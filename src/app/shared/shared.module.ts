import { BorderedFieldComponent } from './components/bordered-field/bordered-field.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

@NgModule({
    declarations: [
        BorderedFieldComponent,
        LogoComponent,
        PrimaryButtonComponent
    ],
    exports: [
        BorderedFieldComponent,
        CommonModule,
        LogoComponent,
        PrimaryButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
