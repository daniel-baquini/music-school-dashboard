import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import MusicClass from 'src/app/shared/firebase/schedule-class/music-class.model';
import WorkingTime from 'src/app/shared/firebase/employees/working-time.model';
import TimeInterval from './time-interval.type';

@Component({
    selector: 'app-professor-agenda',
    styleUrls: ['./professor-agenda.component.css'],
    templateUrl: './professor-agenda.component.html'
})
export class ProfessorAgendaComponent implements OnChanges, OnInit {

    @Input() classes: MusicClass[] = [];
    @Input() newClass: MusicClass | undefined;
    @Input() weekday: number | undefined;
    @Input() workingTimes: WorkingTime[] = [];

    unavaliableTimes: TimeInterval[] = [];

    get newClassInterval(): TimeInterval | undefined {
        if(!this.newClass) {
            return undefined;
        }

        return {
            courseName: this.newClass.plan.course.name,
            end: this.newClass.classEndTime,
            start: this.newClass.classStartTime,
            studentName: this.newClass.student.name + " " + this.newClass.student.surname,
            type: this.isTimeAvaliable(this.newClass) ? "free" : "busy" 
        }
    }

    get workingTime(): undefined | WorkingTime {
        if(!this.weekday) {
            return undefined;
        }

        return this.workingTimes[this.weekday];
    }
    
    public formatHour(hour: number): string {
        return `${Math.floor(hour)}`.padStart(2, "0") + ":" + `${(hour - Math.floor(hour))*60}`.padStart(2, "0");
    }

    public getRangeInSteps(rangeStart: number, rangeEnd: number, step: number): number[] {
        const steps: number[] = [];
        
        for(let i = rangeStart; i <= rangeEnd; i += step) {
            steps.push(i)
        }

        return steps
    }

    isTimeAvaliable(musicClass: MusicClass): boolean {
        for(let timeInterval of this.unavaliableTimes) {
            if(
                (musicClass.classStartTime >= timeInterval.start && musicClass.classStartTime <= timeInterval.end) ||
                (musicClass.classEndTime >= timeInterval.start && musicClass.classEndTime <= timeInterval.end) 
            ) {
                return false;
            }
        }

        return true
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.updateUnavaliableTimes();
    }

    ngOnInit(): void {
        this.updateUnavaliableTimes();
    }

    public numberToStrHour(hour: number): string {
        return `${Math.floor(hour)}`.padStart(2, "0") + ":" + `${(hour - Math.floor(hour))*60}`.padStart(2, "0");
    }

    public parseHour(hour: string): number {
        const splitedTime = hour.split(":");
        return parseInt(splitedTime[0]) + (parseInt(splitedTime[1])/60);
    }

    private updateUnavaliableTimes(): void {
        this.unavaliableTimes = [{ courseName: "", end: 24, start: 0, studentName: "", type: "not-avaliable" }];
        const workingTime = this.workingTime;

        if(!workingTime || !workingTime.hoursStr) {
            return
        }

        const workingTimeIntervals = this.workingTimeToTimeInterval(workingTime);
        workingTimeIntervals.forEach((x, i) => {
            this.unavaliableTimes[i].end = x.start;
            this.unavaliableTimes.push({
                courseName: "",
                end: 24,
                start: x.end,
                studentName: "",
                type: i === (workingTimeIntervals.length - 1) ? "not-avaliable" : "break"
            })
        });

        this.unavaliableTimes.push(
            ...this.classes.map(x => {
                return {
                    courseName: x.plan.course.name,
                    end: x.classEndTime,
                    start: x.classStartTime,
                    studentName: x.student.name + " " + x.student.surname,
                    type: "busy"
                };
            }) as unknown[] as TimeInterval[]    
        );
    }

    private workingTimeToTimeInterval(workingTime: WorkingTime): TimeInterval[] {
        const workingTimeIntervals: string[] = workingTime.hoursStr.split(";");
        const timeIntervals: TimeInterval[] = [];

        workingTimeIntervals.forEach((x, i) => {
            const [start, end] = x.split("-");
            timeIntervals.push({
                courseName: "",
                end: this.parseHour(end),
                start: this.parseHour(start),
                studentName: "",
                type: "free"
            });
        });

        return timeIntervals;
    }
}
