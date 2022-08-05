import { Component } from '@angular/core';
import { enrollmentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';
import Plan from 'src/app/shared/firebase/plans/plan.model';
import { PlanService } from 'src/app/shared/firebase/plans/plan.service';

@Component({
    selector: 'app-plans-page',
    templateUrl: './plans-page.component.html',
    styleUrls: ['./plans-page.component.css']
})
export class PlansPageComponent {
    
    data: Plan[] = [];
    dataLoaded: boolean = false;
    links: TopMenuLink[] = enrollmentsTopLinks;

    constructor(planService: PlanService) {
        planService.readAll().subscribe(x => {
            this.dataLoaded = true;
            this.data = x;
        })
    }
}
