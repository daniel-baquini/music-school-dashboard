import { Component, Input } from '@angular/core';
import TopMenuLink from './top-menu-link.model';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
    @Input() links: TopMenuLink[] = [];
    @Input() pageTitle: string = "";
}
