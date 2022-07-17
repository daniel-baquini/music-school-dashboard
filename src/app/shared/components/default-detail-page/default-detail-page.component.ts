import { Component, Input } from '@angular/core';
import TopMenuLink from '../top-menu/top-menu-link.model';

@Component({
    selector: 'app-default-detail-page',
    templateUrl: './default-detail-page.component.html',
    styleUrls: ['./default-detail-page.component.css']
})
export class DefaultDetailPageComponent {
    @Input() links: TopMenuLink[] = [];
    @Input() pageTitle: string = "";    
}
