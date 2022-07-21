import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Employee from 'src/app/shared/firebase/employees/employee.model';
import Class from 'src/app/shared/firebase/schedule-class/class.model';
import hourStrToNumber from 'src/app/shared/utils/hoursStrToNumber.function';

@Component({
    selector: 'app-professor-agenda',
    templateUrl: './professor-agenda.component.html',
    styleUrls: ['./professor-agenda.component.css']
})
export class ProfessorAgendaComponent implements OnChanges, OnInit {   
    @Input() date: string = "";
    @Input() employee: Employee | undefined;
    @Input() newClass: Partial<Class> | undefined;

    _newClass: Class | undefined;
    _hourStrToNumber = hourStrToNumber

    private _date: Date | undefined;
    private _employee: Employee | undefined
    private _notAvaliableClasses: Class[] = [];

    get classes(): Class[] {
        return [...this._notAvaliableClasses];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['date']) {
            this._date = new Date(`${changes['date'].currentValue}`.replace(/-/g, '\/'));
        }

        if(changes['employee']) {
            this._employee = changes['employee'].currentValue;
        }

        this.updateNewClass();
        this.updateNotAvaliableClasses();
    }

    ngOnInit(): void {
        this._date = new Date(this.date.replace(/-/g, '\/'));

        if(isNaN(this._date.getTime())) {
            this._date = undefined;
        }
        this._employee = this.employee;

        this.updateNewClass();
        this.updateNotAvaliableClasses();
    }

    public getRangeInSteps(rangeStart: number, rangeEnd: number, step: number): number[] {
        const steps: number[] = [];
        
        for(let i = rangeStart; i <= rangeEnd; i += step) {
            steps.push(i)
        }

        return steps
    }
    
    public numberToStrHour(hour: number): string {
        return `${Math.floor(hour)}`.padStart(2, "0") + ":" + `${(hour - Math.floor(hour))*60}`.padStart(2, "0");
    }

    updateNewClass(): void {

        this._newClass = this.newClass as unknown as Class;
        if(this.newClass === undefined) {
            return
        }

        for(let key in this.newClass) {
            if(key === undefined) {
                return undefined
            }
        }


        const busyIntervals:string[][] = this.classes.map(x => [x.classStartTime, x.classEndTime]);
        const freeIntervals: string[][] = [["00:00"]]
        if(busyIntervals.length !== 0) {
            busyIntervals.forEach((x, i) => {
                freeIntervals[i][1] = x[0];
                freeIntervals.push([x[1]])
            });
        }
        freeIntervals[freeIntervals.length - 1][1] = "23:59";

        const isScheduleAvaliable = freeIntervals.some(
            x => {
                return this.isTimeBetween(
                    this._hourStrToNumber(this.newClass!.classStartTime!),
                    this._hourStrToNumber(x[0]),
                    this._hourStrToNumber(x[1])) &&
                this.isTimeBetween(
                    this._hourStrToNumber(this.newClass!.classEndTime!),
                    this._hourStrToNumber(x[0]),
                    this._hourStrToNumber(x[1]))
            }
        );

        this._newClass._type = isScheduleAvaliable ? "free" : "busy";
    }

    updateNotAvaliableClasses(): void {
        this._notAvaliableClasses = [];

        if(!this._date || !this._employee) {
            return
        }

        const hoursStr: string = (this._employee.workingTimes[this._date.getDay()]).hoursStr;
        const intervalsStr: string[][] = [["00:00"]]

        if(hoursStr !== "") {
            hoursStr.split(";").forEach((x, i) => {
                const [start, end] = x.split("-");
                intervalsStr[i][1] = start;
                intervalsStr.push([end])
            });
        }
        
        intervalsStr[intervalsStr.length - 1][1] = "23:59";
        intervalsStr.forEach((x, i) => {
            this._notAvaliableClasses.push({
                classDate: this._date!,
                classEndTime: x[1],
                classStartTime: x[0],
                plan: {
                    courseName: "",
                    endDate: new Date(),
                    isFinished: false,
                    startDate: new Date(),
                    studentName: "",
                    value: 0
                },
                professorName: "",
                studentName: "",
                _type: i === 0 || i === (intervalsStr.length - 1) ? "not-avaliable" : "break"
            })
        });
    }

    private isTimeBetween(time: number, start: number, end: number) {
        return time >= start && time <= end;
    }

}
