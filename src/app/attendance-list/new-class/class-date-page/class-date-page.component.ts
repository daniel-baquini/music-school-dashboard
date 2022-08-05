import { ActivatedRoute, Router } from '@angular/router';
import CommonTypeToAbstractControlBased from 'src/app/shared/utils/common-type-to-abstract-control-based.type';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../new-class/new-class.component';
import MusicClass from 'src/app/shared/firebase/schedule-class/music-class.model';
import removeDateOffset from 'src/app/shared/utils/remove-date-offset.function';
import { ScheduleClassService } from 'src/app/shared/firebase/schedule-class/schedule-class.service';
import { maskHourMinute, unMaskHourMinute } from 'src/app/shared/masks/hour-minute.mask';
import { maskYearMonthDay, unMaskYearMonthDay } from 'src/app/shared/masks/year-month-day.mask';
import { ProfessorAgendaComponent } from '../professor-agenda/professor-agenda.component';

@Component({
    selector: 'app-class-date-page',
    styleUrls: ['./class-date-page.component.css'],
    templateUrl: './class-date-page.component.html'
})
export class ClassDatePageComponent {
    
    @ViewChild("professorAgenda") professorAgenda!: ProfessorAgendaComponent

    classes: MusicClass[] = [];
    form: FormGroup<CommonTypeToAbstractControlBased<MusicClass>>;
    loadingClasses: boolean = false;
    maskHourMinute = maskHourMinute
    unMaskHourMinute = unMaskHourMinute

    maskYearMonthDay = maskYearMonthDay;
    unMaskYearMonthDay = unMaskYearMonthDay;

    constructor(
        private activatedRoute: ActivatedRoute,
        public formProvider: FormProvider,
        private router: Router,
        private scheduleClassService: ScheduleClassService
    ) {
        this.form = formProvider.getForm();
        this.form.controls.classDate.valueChanges.subscribe(x => {
            if(this.form.controls.classDate.valid) {
                this.loadingClasses = true;
                const subscription = this.scheduleClassService.filterByDateAndProfessorId(
                    x, this.form.controls.professor.controls.id.value
                ).subscribe(y => {
                    this.classes = y;
                    this.loadingClasses = false;
                    subscription.unsubscribe();
                });
            }
        })
    }

    get error(): string {
        if(this.form.untouched) return ""

        let errorMessage: string = "";
        for(const errorCode in this.form.errors) {
            errorMessage = this.form.errors[errorCode];
            break;
        }

        return errorMessage;
    }

    get weekDay(): number | undefined {
        if(!this.form.controls.classDate.value) {
            return undefined;
        }

        return removeDateOffset(
            new Date(this.form.controls.classDate.value)
        ).getDay();
    }

    navigateToProfessor(): void {
        this.router.navigate(
            ["../professor"],
            { relativeTo: this.activatedRoute }
        );
    }

    navigateToScheduleClasses(): void {
        this.router.navigate(
            ["../../"],
            { relativeTo: this.activatedRoute }
        );
    }

    onNextStep(): void {
        if(this.form.invalid || !this.professorAgenda.isTimeAvaliable(this.form.getRawValue())) {
            this.form.markAllAsTouched();
            return
        }

        this.scheduleClassService.create(this.form.getRawValue()).then(x => this.navigateToScheduleClasses())
    }
    
}
