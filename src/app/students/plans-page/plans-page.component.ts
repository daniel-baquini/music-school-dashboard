import { Component } from '@angular/core';
import { studentsTopLinks } from '../students.module';
import TopMenuLink from 'src/app/shared/components/top-menu/top-menu-link.model';

@Component({
    selector: 'app-plans-page',
    templateUrl: './plans-page.component.html',
    styleUrls: ['./plans-page.component.css']
})
export class PlansPageComponent {
    links: TopMenuLink[] = studentsTopLinks;
}
