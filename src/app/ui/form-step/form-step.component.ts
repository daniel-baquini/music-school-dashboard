import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-form-step',
    templateUrl: './form-step.component.html',
    styleUrls: ['./form-step.component.css']
})
export class FormStepComponent {    
    @Input() currentStep: number = 0;
    @Input() stepTitle: string = "";
    @Input() stepsQuantity: number = 0;
}
