import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import PhotoCropper from './photo-cropper.model';

@Component({
    selector: 'app-photo-cropper',
    templateUrl: './photo-cropper.component.html',
    styleUrls: ['./photo-cropper.component.css']
})
export class PhotoCropperComponent implements AfterViewInit {
    
    @ViewChild("imageCanvas") private _imageCanvas: ElementRef | undefined;
    @ViewChild("zoomRange") private _zoomRange: ElementRef | undefined;

    @Input() imagePath: string = "";

    @Output() discardImageEvent = new EventEmitter();
    @Output() saveImageEvent = new EventEmitter<string>();

    private photoCropper: PhotoCropper | undefined;

    get imageCanvas(): HTMLCanvasElement {
        return this._imageCanvas!.nativeElement as HTMLCanvasElement;
    }

    get zoomRange(): HTMLInputElement {
        return this._zoomRange!.nativeElement as HTMLInputElement;
    }

    discardImage(): void {
        this.discardImageEvent.emit();
    }
    
    ngAfterViewInit(): void {
        this.photoCropper = new PhotoCropper(this.imageCanvas, this.imagePath, this.zoomRange);
    }

    saveImage(): void {
        this.saveImageEvent.emit(this.photoCropper?.saveAsImage());
    }

}
