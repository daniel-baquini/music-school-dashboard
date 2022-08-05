import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent {
    @Input() size: "large" = "large";
}
