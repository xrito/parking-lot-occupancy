import Prediction from "../Prediction";
import type PredictionDTO from "../Model/Prediction";
import type {fabric} from "fabric";
import DetectionEventHandler from "./DetectionEventHandler";

export default class PredictionEventHandler extends DetectionEventHandler {
    _predictions: Prediction[];

    constructor(predictions: Prediction[],
                topic: string,
                canvas: fabric.Canvas,
                ttl: number) {
        super(topic, canvas, ttl);
        this._predictions = predictions;
    }

    protected onDeactivate(): void {
        this._predictions.map(prediction => {
            this._canvas.remove(prediction)
        });
    }

    protected handleMessage(predictions: PredictionDTO[]) {
        this.removeAllPredictionsFromCanvas()
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
