import { Component, Input } from '@angular/core';
import TopMenuLink from '../top-menu/top-menu-link.model';

@Component({
    selector: 'app-default-data-page',
    templateUrl: './default-data-page.component.html',
    styleUrls: ['./default-data-page.component.css']
})
export class DefaultDataPageComponent {
    @Input() links: TopMenuLink[] = [];
    @Input() newRegistryLink: string | undefined;
    @Input() pageTitle: string = "";
}
