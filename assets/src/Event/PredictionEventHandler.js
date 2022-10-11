import Prediction from "../Prediction";

export default class PredictionEventHandler {
    #eventSource = null;
    #predictions;
    #canvas;

    constructor(predictions, canvas) {
        this.#predictions = predictions;
        this.#canvas = canvas;
    }

    activate(url) {
        this.#eventSource = new EventSource(url)
        this.#eventSource.onmessage = this.#handleMessage.bind(this);
    }

    deactivate() {
        if (this.#eventSource) {
            this.#eventSource.close();
            this.#predictions.map(prediction => {
                this.#canvas.remove(prediction)
            });
        }
    }

    #handleMessage(message) {
        const predictions = JSON.parse(message.data);
        this.#predictions.map(prediction => {
            this.#canvas.remove(prediction)
        });
        predictions.map(prediction => {
            const predictionRect = new Prediction(prediction.confidence.toFixed(2).toString(), prediction.width, prediction.height, prediction.x, prediction.y);
            this.#predictions.push(predictionRect);
            this.#canvas.sendToBack(predictionRect);
        })
    }
}
