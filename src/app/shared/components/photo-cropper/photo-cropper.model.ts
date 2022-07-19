class PhotoCropper {

    private _captureMouse: boolean = false;
    private _image: HTMLImageElement;
    private _sx: number = 0;
    private _sy: number = 0;

    constructor(private canvas: HTMLCanvasElement, imageUrl: string, private rangeInput: HTMLInputElement) {
        this.canvas.addEventListener("mousedown", () => this._captureMouse = true);
        this.canvas.addEventListener("mouseleave", () => this._captureMouse = false);
        this.canvas.addEventListener("mousemove", (e) => this.canvasMouseMove(e));
        this.canvas.addEventListener("mouseup", () => this._captureMouse = false);

        this._image = new Image();
        this._image.crossOrigin = '*';
        this._image.addEventListener("load", () => {
            const minorZoom = this.canvas.height/this.baseDimension;

            this.rangeInput.max = "1";
            this.rangeInput.min = `${minorZoom}`
            this.rangeInput.step = `${(1 - minorZoom)/100}`
            this.rangeInput.value = `${(1 + minorZoom)/2}`;

            this.rangeInput.addEventListener("input", () => { this.updateCanvas(); })
            this.updateCanvas()
        });
        this._image.src = imageUrl;
    }

    private get baseDimension(): number {
        return this._image.height > this._image.width ? this._image.width : this._image.height;
    }

    private get canvas2dContext(): CanvasRenderingContext2D {
        return this.canvas.getContext("2d")!;
    }

    private get currentZoom(): number {
        return parseFloat(this.rangeInput.value);
    }

    private get zoomedBaseDimension(): number {
        return this.baseDimension*this.currentZoom
    }

    private canvasMouseMove(event: MouseEvent): void {
        if(!this._captureMouse) {
            event.preventDefault();
            return;
        }

        this._sx -= event.movementX;
        this._sy -= event.movementY;
        this.updateCanvas();
    }

    private checkSxSy(): void {
        if(this._sx < 0) {
            this._sx = 0;
        }

        if((this._sx + this.zoomedBaseDimension) > this._image.width) {
            this._sx = this._image.width - this.zoomedBaseDimension;
        }

        if(this._sy < 0) {
            this._sy = 0;
        }

        if((this._sy + this.zoomedBaseDimension) > this._image.height) {
            this._sy = this._image.height - this.zoomedBaseDimension;
        }
    }

    saveAsImage(): string {
        return this.canvas.toDataURL();
    }

    updateCanvas(): void {
        this.checkSxSy();
        this.canvas2dContext.drawImage(
            this._image,
            this._sx,
            this._sy,
            this.zoomedBaseDimension,
            this.zoomedBaseDimension,
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

}

export default PhotoCropper