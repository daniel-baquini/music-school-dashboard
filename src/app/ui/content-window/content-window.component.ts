import { Component, HostBinding, Input, OnInit } from '@angular/core';

type ContentWindowSizes = "large" | "medium";
const contentWindowSizes: {[K in ContentWindowSizes]: string } = {
    large: "100%",
    medium: "840px"
}

@Component({
    selector: 'ui-content-window',
    templateUrl: './content-window.component.html',
    styleUrls: ['./content-window.component.css'],
    host: {
        "[class.global-shadow]": "true"
    }
})
export class ContentWindowComponent implements OnInit {

    @HostBinding('style.max-width') maxWidth = contentWindowSizes.medium;
    @Input() size: ContentWindowSizes = "medium";

    ngOnInit(): void {
        this.maxWidth = contentWindowSizes[this.size];
    }

}