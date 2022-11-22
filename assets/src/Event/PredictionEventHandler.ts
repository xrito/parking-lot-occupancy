import Prediction from "../Prediction";
import type PredictionDTO from "../Model/Prediction";
import type {fabric} from "fabric";

export default class PredictionEventHandler {
    _eventSource: EventSource | null = null;
    _predictions: Prediction[];
    _canvas: fabric.Canvas;
    _url: string | URL;

    constructor(url: string | URL, predictions: Prediction[], canvas: fabric.Canvas) {
        this._url = url;
        this._predictions = predictions;
        this._canvas = canvas;
    }

    public activate() {
        this._eventSource = new EventSource(this._url)
        this._eventSource.onmessage = this.handleMessage.bind(this);
    }

    public deactivate() {
        if (this._eventSource) {
            this._eventSource.close();
            this._predictions.map(prediction => {
                this._canvas.remove(prediction)
            });
        }
    }

    private handleMessage(message: MessageEvent) {
        this.removeAllPredictionsFromCanvas()
        const predictions: PredictionDTO[] = JSON.parse(message.data);
        predictions.map(this.addPredictionToCanvas.bind(this));
    }

    private removeAllPredictionsFromCanvas() {
        this._predictions.map((prediction: Prediction) => {
            this._canvas.remove(prediction)
        });
    }

    private addPredictionToCanvas(prediction: PredictionDTO) {
        const predictionRect = new Prediction(
            prediction.confidence.toFixed(2).toString(),
            prediction.width,
            prediction.height,
            prediction.x,
            prediction.y);
        this._predictions.push(predictionRect);
        this._canvas.sendToBack(predictionRect);
    }
}
