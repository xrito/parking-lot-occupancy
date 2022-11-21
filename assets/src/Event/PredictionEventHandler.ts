import Prediction from "../Prediction";
import type PredictionDTO from "../Model/Prediction";
import type {fabric} from "fabric";

export default class PredictionEventHandler {
    private eventSource: EventSource | null = null;
    private predictions: Prediction[];
    private canvas: fabric.Canvas;
    private url: string | URL;

    constructor(url: string | URL, predictions: Prediction[], canvas: fabric.Canvas) {
        this.url = url;
        this.predictions = predictions;
        this.canvas = canvas;
    }

    public activate() {
        this.eventSource = new EventSource(this.url)
        this.eventSource.onmessage = this.handleMessage.bind(this);
    }

    public deactivate() {
        if (this.eventSource) {
            this.eventSource.close();
            this.predictions.map(prediction => {
                this.canvas.remove(prediction)
            });
        }
    }

    private handleMessage(message: MessageEvent) {
        this.removeAllPredictionsFromCanvas()
        const predictions: PredictionDTO[] = JSON.parse(message.data);
        predictions.map(this.addPredictionToCanvas)
    }

    private removeAllPredictionsFromCanvas() {
        this.predictions.map((prediction: Prediction) => {
            this.canvas.remove(prediction)
        });
    }

    private addPredictionToCanvas(prediction: PredictionDTO) {
        const predictionRect = new Prediction(
            prediction.confidence.toFixed(2).toString(),
            prediction.width,
            prediction.height,
            prediction.x,
            prediction.y);
        this.predictions.push(predictionRect);
        this.canvas.sendToBack(predictionRect);
    }
}
