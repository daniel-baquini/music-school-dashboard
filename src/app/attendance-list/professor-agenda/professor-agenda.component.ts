import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-professor-agenda',
    templateUrl: './professor-agenda.component.html',
    styleUrls: ['./professor-agenda.component.css']
})
export class ProfessorAgendaComponent {
    
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

}
