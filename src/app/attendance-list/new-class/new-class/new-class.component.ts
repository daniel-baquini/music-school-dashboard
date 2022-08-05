import { attendanceListTopLinks } from '../../attendance-list.module';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import MusicClass from 'src/app/shared/firebase/schedule-class/music-class.model';
import TopMenuLink from 'src/app/ui/top-menu/top-menu-link.model';
import NewClassValidator from './new-class.validator';
import Employee from 'src/app/shared/firebase/employees/employee.model';

export abstract class FormProvider {

    professor: Employee | undefined;

    abstract getForm(): FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
}

@Component({
    providers: [{ provide: FormProvider, useExisting: NewClassComponent }],
    selector: 'app-new-class',
    styleUrls: ['./new-class.component.css'],
    templateUrl: './new-class.component.html'
})
export class NewClassComponent implements FormProvider {
    
    form = new FormGroup<CommonTypeToAbstractControlBased<MusicClass>>({
        classDate: new FormControl("" as unknown as Date, { nonNullable: true, validators: [this.validator.classDate] }),
        classEndTime: new FormControl("" as unknown as number, { nonNullable: true, validators: [this.validator.classEndTime] }),
        classStartTime: new FormControl("" as unknown as number, { nonNullable: true, validators: [this.validator.classStartTime] }),
        id: new FormControl("", { nonNullable: true }),
        professor: new FormGroup({
            id: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
            name: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
        }),
        plan: new FormGroup({
            course: new FormGroup({
                id: new FormControl("", { nonNullable: true }),
                name: new FormControl("", { nonNullable: true })
            }),
            id: new FormControl("", { nonNullable: true, validators: [Validators.required] })
        }),
        status: new FormControl("Pending", { nonNullable: true }),
        student: new FormGroup({
            id: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
            name: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
            surname: new FormControl("", { nonNullable: true, validators: [Validators.required] })
        })
    }, {
        validators: [this.validator.startTimeGreaterThanEndTime]
    });

    links: TopMenuLink[] = attendanceListTopLinks;
    pageTitle: string = "Aulas";
    professor: Employee | undefined;

    constructor(private validator: NewClassValidator) { }

    getForm(): FormGroup<CommonTypeToAbstractControlBased<MusicClass>> {
        return this.form;
    }
    
}
