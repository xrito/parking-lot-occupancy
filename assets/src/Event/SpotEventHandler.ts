import type SpotCollection from "../Model/SpotCollection";
import type {fabric} from "fabric";

export default class SpotEventHandler {
    #eventSource?: EventSource;
    #spotCollection: SpotCollection;
    #canvas: fabric.Canvas;

    constructor(spotCollection: SpotCollection, canvas: fabric.Canvas) {
        this.#spotCollection = spotCollection;
        this.#canvas = canvas;
    }

    activate(url: string | URL) {
        const eventSource = new EventSource(url)
        eventSource.onmessage = this.#handleMessage.bind(this);
        this.#eventSource = eventSource;

        this.#spotCollection.getAll().map(spot => {
            spot.opacity = 1;
        });
        this.#canvas.renderAll();
    }

    deactivate() {
        this.#spotCollection.getAll().map(spot => {
            spot.opacity = 0;
        });
        if (this.#eventSource) {
            this.#eventSource.close();
        }
        this.#canvas.renderAll();
    }

    #handleMessage(message: MessageEvent) {
        const freeSpots = JSON.parse(message.data);
        this.#spotCollection.freeSpots(freeSpots);
        this.#canvas.renderAll();
    }
}
