import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import Employee from 'src/app/shared/firebase/employees/employee.model';
import { EmployeeService } from 'src/app/shared/firebase/employees/employee.service';
import Enrollment from 'src/app/shared/firebase/enrollments/enrollment.model';
import { EnrollmentService } from 'src/app/shared/firebase/enrollments/enrollment.service';
import Plan from 'src/app/shared/firebase/plans/plan.model';
import { PlanService } from 'src/app/shared/firebase/plans/plan.service';
import Class from 'src/app/shared/firebase/schedule-class/class.model';
import { ScheduleClassService } from 'src/app/shared/firebase/schedule-class/schedule-class.service';
import SelectData from 'src/app/shared/utils/select-data.type';
import { attendanceListTopLinks } from '../attendance-list.module';
import ScheduleClassDetailValidator from './schedule-class-detail.validator';

@Component({
  selector: 'app-schedule-class-detail-page',
  templateUrl: './schedule-class-detail-page.component.html',
  styleUrls: ['./schedule-class-detail-page.component.css']
})
export class ScheduleClassDetailPageComponent implements OnDestroy {

    form: FormGroup;
    links: TopMenuLink[] = attendanceListTopLinks;
    plansSelectData: SelectData[] = [];
    professorsSelectData: SelectData[] = [];
    selectedProfessor: Employee | undefined;

    private _plans: Plan[] = [];
    private _plansLoaded: boolean = false;
    private _employees: Employee[] = [];
    private _employeesLoaded: boolean = false;
    private _enrollments: Enrollment[] = [];
    private _enrollmentsLoaded: boolean = false;
    private _subscriptions: Subscription[] = [];

    constructor(
        enrollmentService: EnrollmentService,
        employeesService: EmployeeService,
        formBuilder: FormBuilder,
        planService: PlanService,
        public scheduleClassService: ScheduleClassService,
        validator: ScheduleClassDetailValidator
    ) {
        this.form = formBuilder.group({
            "classDate": new FormControl("", [validator.classDate]),
            "classEndTime": new FormControl("", [validator.classEndTime]),
            "classStartTime": new FormControl("", [(control: AbstractControl) => {
                return validator.classStartTime.call(
                    { endTime: this.form?.controls["classEndTime"].value ?? "" },
                    control
                )
            }]),
            "studentName": new FormControl("", [validator.studentName]),
            "plan": new FormControl("", [validator.plan]),
            "professorName": new FormControl("", [validator.professorName])
        });

        this._subscriptions.push(
            enrollmentService.readAll().subscribe(x => {
                setTimeout(() => {
                    this._enrollments = x;
                }, 0);
                this._enrollmentsLoaded = true;
            })
        );

        this._subscriptions.push(
            employeesService.readAll().subscribe(x => {
                setTimeout(() => {
                    this._employees = x;
                }, 0);
                this._employeesLoaded = true;
            })
        )

        this._subscriptions.push(
            planService.readAll().subscribe(x => {
                setTimeout(() => {
                    this._plans = x;
                }, 0);
                this._plansLoaded = true;
            })
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }

    get isLoading(): boolean {
        return !(this._employeesLoaded || this._enrollmentsLoaded || this._plansLoaded);
    }

    get loadingMessage(): string {
        if(!this._employeesLoaded) {
            return "Carregando professores";
        }

        if(!this._enrollmentsLoaded) {
            return "Carregando estudantes";    
        }

        return "Carregando planos";    
    }

    get newClass(): Class | undefined {
        if(this.form.invalid) {
            return undefined;
        }

        try {
            const newClass: Class = this.form.value;
            newClass.plan = JSON.parse(this.form.controls['plan'].value);
            
            return newClass;
        }
        catch(e) {
            return undefined
        }
    }

    get studentsSelectData(): SelectData[] {
        return this._enrollments
            .map(x => x.name + " " + x.surname)
            .sort()
            .map(x => { return { label: x, value: x }});
    }

    updatePlansSelectData(event: Event): void {
        const plans: Plan[] = this._plans.filter(x => x.studentName === (event.target as HTMLSelectElement).value);
        this.plansSelectData = plans.map(x => {
            return {
                label: x.courseName + " (" + x.startDate + " - " + x.endDate + ")",
                value: JSON.stringify(x)
            }
        }).sort((a, b) => a.label.toLowerCase() < b.label.toLowerCase() ? - 1 : 1);
    }

    updateProfessorsSelectData(event: Event): void {
        const plan: Plan = JSON.parse((event.target as HTMLSelectElement).value);

        const professors = this._employees.filter(x => x.courses.includes(plan.courseName));
        this.professorsSelectData = professors.map(x => {
            return {
                label: x.name + " " + x.surname,
                value: x.id
            }
        }).sort((a, b) => a.label.toLowerCase() < b.label.toLowerCase() ? - 1 : 1);
    }

    updateProfessorAgenda(event: Event): void {
        this.selectedProfessor = this._employees.find(x => `${x.id}` === (event.target as HTMLSelectElement).value);
    }
}
