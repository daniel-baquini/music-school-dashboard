import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-loading-message',
    templateUrl: './loading-message.component.html',
    styleUrls: ['./loading-message.component.css']
})
export class LoadingMessageComponent {
    @Input() label: string = "";    
}
