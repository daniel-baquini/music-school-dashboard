import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-class-post-it',
    templateUrl: './class-post-it.component.html',
    styleUrls: ['./class-post-it.component.css'],
    host: {
        "[class.global-shadow]": "true"
    }
})
export class ClassPostItComponent {
        
}
