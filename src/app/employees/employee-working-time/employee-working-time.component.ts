import { AbstractControl, ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import EmployeeDetailValidator from '../employee-detail-page/employee-detail.validator';

const WEEK_DAYS: string[] = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

@Component({
    selector: 'app-employee-working-time',
    templateUrl: './employee-working-time.component.html',
    styleUrls: ['./employee-working-time.component.css'],
    viewProviders: [{ 
        provide: ControlContainer, 
        useExisting: FormGroupDirective 
    }]

})
export class EmployeeWorkingTimeComponent implements OnInit {

    @Input() formArray: FormArray | undefined;
    
    constructor(private formBuilder: FormBuilder, private validator: EmployeeDetailValidator) { }

    ngOnInit(): void {
        if(!this.formArray) {
            return;
        }

        WEEK_DAYS.forEach(x => {
            this.formArray!.push(this.formBuilder.group({
                hoursStr: new FormControl('', [this.validator.hoursStr]),
                weekDay: new FormControl(x)
            }));
        });
    }

    getErrorFromControl(control: AbstractControl, controlName: string): string {
        const selectedControl = (control as FormGroup).controls[controlName];

        if(!selectedControl) return ""
        if(selectedControl.untouched) return ""

        let errorMessage: string = "";
        for(const errorCode in selectedControl.errors) {
            errorMessage = selectedControl.errors[errorCode];
            break;
        }

        return errorMessage;
    }

    getWeekDayFromControl(control: AbstractControl): string {
        return (control as FormGroup).controls['weekDay'].value
    }

    markControlAsTouched(control: AbstractControl, controlName: string): void {
        (control as FormGroup).controls[controlName]?.markAsTouched();
    }

}
