import type {fabric} from "fabric";

export default abstract class {

    intervalId: number | null = null;
    _canvas: fabric.Canvas;
    _url: string | URL;
    _ttl: number;

    protected constructor(url: string | URL, canvas: fabric.Canvas, ttl: number) {
        this._ttl = ttl;
        this._url = url;
        this._canvas = canvas;
    }

    public activate(): void {
        this.intervalId = setInterval(this.fetch.bind(this), this._ttl);
        this.onActivate();
    }

    protected onActivate(): void {
    }

    public deactivate(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.onDeactivate();
        }
    }

    protected onDeactivate(): void {
    }

    private fetch() {
        fetch(this._url)
            .then(response => response.json())
            .then(this.handleMessage.bind(this));
    }

    protected abstract handleMessage(message: any): void;


}
