import type {fabric} from "fabric";

export default abstract class {

    intervalId: NodeJS.Timer | null = null;
    _canvas: fabric.Canvas;
    _url: string | URL;
    _ttl: number;
    _eventSource: EventSource | null = null;

    protected constructor(topic: string, canvas: fabric.Canvas, ttl: number) {
        this._ttl = ttl;
        this._url = topic;
        this._canvas = canvas;
    }

    public activate(): void {
        this._eventSource = new EventSource(globalThis.MERCURE_URL + this._url, {
            withCredentials: true
        })
        this._eventSource.onmessage = (message) => this.handleMessage(JSON.parse(message.data));
        this.onActivate();
    }

    protected onActivate(): void {
    }

    public deactivate(): void {
        if (this._eventSource) {
            this._eventSource.close();
            this.onDeactivate();
        }
    }

    protected onDeactivate(): void {
    }


    protected abstract handleMessage(message: any): void;


}
