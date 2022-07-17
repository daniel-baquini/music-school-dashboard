import { Component, Input } from '@angular/core';
import TopMenuLink from '../top-menu/top-menu-link.model';

@Component({
    selector: 'app-default-page',
    templateUrl: './default-page.component.html',
    styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent {
    @Input() links: TopMenuLink[] = [];
    @Input() pageTitle: string = "";
}
