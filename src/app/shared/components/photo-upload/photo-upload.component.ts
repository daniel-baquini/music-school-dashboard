import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-photo-upload',
    templateUrl: './photo-upload.component.html',
    styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent {
    
    @HostBinding("class.active") activeClass: boolean = false;
    @ViewChild("inputField") private _inputField: ElementRef | undefined;

    @Input() imageUrl: string = "";

    @Output() callImageCropper = new EventEmitter<string>();
    @Output() deleteImage = new EventEmitter();

    get inputField(): HTMLInputElement {
        return this._inputField!.nativeElement as HTMLInputElement;
    }
    
    onDeletePhotoClick(event: Event) {
        this.deleteImage.emit();
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
    
    updatePreview() {
        if(!this.inputField.files) return;

        const file: File | null = this.inputField.files[0];
        if(!file || !file?.type.startsWith("image/")) return
        
        const reader = new FileReader();
        reader.onload = () => {
            this.callImageCropper.emit(`${reader.result}`);
        }
        reader.readAsDataURL(file);
    }
    
}
