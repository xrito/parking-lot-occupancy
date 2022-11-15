import Prediction from "../Prediction";

export default class SpotEventHandler {
    #eventSource = null;
    #spotCollection;
    #canvas;

    constructor( spotCollection, canvas) {
        this.#spotCollection = spotCollection;
        this.#canvas = canvas;
    }

    activate(url) {
        this.#eventSource = new EventSource(url)
        this.#eventSource.onmessage = this.#handleMessage.bind(this);
        this.#spotCollection.getAll().map(spot => {
            spot.opacity= 1;
        });
        this.#canvas.renderAll();
    }

    deactivate() {
        this.#spotCollection.getAll().map(spot => {
            spot.opacity= 0;
        });
        if(this.#eventSource) {
            this.#eventSource.close();
        }
        this.#canvas.renderAll();
    }

    #handleMessage(message) {
        const freeSpots = JSON.parse(message.data);
        this.#spotCollection.freeSpots(freeSpots);
        this.#canvas.renderAll();
    }
}
