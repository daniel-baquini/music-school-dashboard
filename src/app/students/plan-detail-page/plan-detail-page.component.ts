import { Component } from '@angular/core';
import { studentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-plan-detail-page',
    templateUrl: './plan-detail-page.component.html',
    styleUrls: ['./plan-detail-page.component.css']
})
export class PlanDetailPageComponent {
    links: TopMenuLink[] = studentsTopLinks;    
}
