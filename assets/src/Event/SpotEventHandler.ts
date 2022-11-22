import type SpotCollection from "../Model/SpotCollection";
import type {fabric} from "fabric";

export default class SpotEventHandler {
    _eventSource?: EventSource;
    _spotCollection: SpotCollection;
    _canvas: fabric.Canvas;

    constructor(spotCollection: SpotCollection, canvas: fabric.Canvas) {
        this._spotCollection = spotCollection;
        this._canvas = canvas;
    }

    activate(url: string | URL) {
        const eventSource = new EventSource(url)
        eventSource.onmessage = this.handleMessage.bind(this);
        this._eventSource = eventSource;

        this._spotCollection.getAll().map(spot => {
            spot.opacity = 1;
        });
        this._canvas.renderAll();
    }

    deactivate() {
        this._spotCollection.getAll().map(spot => {
            spot.opacity = 0;
        });
        if (this._eventSource) {
            this._eventSource.close();
        }
        this._canvas.renderAll();
    }

    private handleMessage(message: MessageEvent) {
        const freeSpots = JSON.parse(message.data);
        this._spotCollection.freeSpots(freeSpots);
        this._canvas.renderAll();
    }
}
