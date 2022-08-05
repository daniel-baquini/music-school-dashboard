import { attendanceListTopLinks } from '../attendance-list.module';
import { Component } from '@angular/core';
import TopMenuLink from 'src/app/ui/top-menu/top-menu-link.model';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import MusicClass from 'src/app/shared/firebase/schedule-class/music-class.model';
import NewClassValidator from '../new-class/new-class/new-class.validator';
import { maskHourMinute, unMaskHourMinute } from 'src/app/shared/masks/hour-minute.mask';
import { maskYearMonthDay, unMaskYearMonthDay } from 'src/app/shared/masks/year-month-day.mask';
import { ScheduleClassService } from 'src/app/shared/firebase/schedule-class/schedule-class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';

@Component({
    selector: 'app-schedule-class-detail',
    templateUrl: './schedule-class-detail.component.html',
    styleUrls: ['./schedule-class-detail.component.css']
})
export class ScheduleClassDetailComponent {
    
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
    isLoading: boolean = true;
    links: TopMenuLink[] = attendanceListTopLinks;
    maskHourMinute = maskHourMinute
    unMaskHourMinute = unMaskHourMinute

    maskYearMonthDay = maskYearMonthDay;
    unMaskYearMonthDay = unMaskYearMonthDay;
    pageTitle: string = "Aulas";
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private scheduleClassService: ScheduleClassService,
        private router: Router,
        private validator: NewClassValidator
    ) {
        this.scheduleClassService.read(
            activatedRoute.snapshot.params["id"]
        ).then(x => {
            if(!x) {
                this.goToScheduleClasses();
            }
            else {
                console.log(x)
                this.form.patchValue(x);
                this.isLoading = false;
            }
        })
    }

    goToScheduleClasses(): void {
        this.router.navigate(
            ["../../"],
            { relativeTo: this.activatedRoute }
        );
    }

    saveChanges(): void {
        this.scheduleClassService.update(
            this.form.getRawValue()
        ).then(x => {
            this.goToScheduleClasses();
        })
    }

    timeStampToyyyyMMdd(timeStamp: any): string {
        const date = (timeStamp as Timestamp).toDate();
        return `${date.getFullYear()}` + "/" +
            `${date.getMonth() + 1}`.padStart(2, "0") + "/" +
            `${date.getDate()}`.padStart(2, "0");
    }

}
