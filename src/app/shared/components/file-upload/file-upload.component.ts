import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

    @HostBinding("class.active") activeClass: boolean = false;
    @ViewChild("inputField") private _inputField: ElementRef | undefined;

    file: File | undefined;
    fileName: string = "";

    get inputField(): HTMLInputElement {
        return this._inputField!.nativeElement as HTMLInputElement;
    }

    onDeleteFileClick(event: Event): void {
        this.file = undefined;
        this.fileName = "";
        event.stopPropagation();
    }

    @HostListener("click")
    onHostClick() {
        this.inputField.click();
    }
    
    @HostListener("dragend")
    onHostDragEnd() {
        this.activeClass = false;
    }
    
    @HostListener("dragleave")
    onHostDragLeave() {
        this.activeClass = false;
    }
    
    @HostListener("dragover", ["$event"])
    onHostDragOver(event: Event) {
        event.preventDefault();
        this.activeClass = true;
    }
    
    @HostListener("drop", ["$event"])
    onHostDrop(event: DragEvent) {
        event.preventDefault();
        
        if(event.dataTransfer && event.dataTransfer.files.length) {
            this.inputField.files = event.dataTransfer.files;
            this.updatePreview();
        }
        
        this.activeClass = false;
    }

    updatePreview():void {
        if(!this.inputField.files) return;

        const file: File | null = this.inputField.files[0];
        if(!file) return
        
        this.file = file;
        this.fileName = file.name;
    }

}
