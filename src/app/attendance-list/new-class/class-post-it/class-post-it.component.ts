import { Component, Input } from '@angular/core';
import TimeInterval from '../professor-agenda/time-interval.type';

@Component({
    selector: 'app-class-post-it',
    templateUrl: './class-post-it.component.html',
    styleUrls: ['./class-post-it.component.css'],
    host: {
        "[class.global-shadow]": "true"
    }
})
export class ClassPostItComponent {
    @Input() timeInterval: TimeInterval | undefined;
}
