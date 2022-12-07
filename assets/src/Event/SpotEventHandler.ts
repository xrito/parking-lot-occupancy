import type SpotCollection from "../Model/SpotCollection";
import type {fabric} from "fabric";
import DetectionEventHandler from "./DetectionEventHandler";

export default class SpotEventHandler extends DetectionEventHandler {
    _spotCollection: SpotCollection;

    constructor(
        spotCollection: SpotCollection,
        topic: string,
        canvas: fabric.Canvas ) {
        super(topic, canvas);
        this._spotCollection = spotCollection;
    }

    protected onActivate(): void {
        this._spotCollection.getAll().map(spot => spot.show());
        this._canvas.renderAll();
    }

    protected handleMessage(freeSpots: number[]): void {
        this._spotCollection.freeSpots(freeSpots);
        this._canvas.renderAll();
    }

    protected onDeactivate(): void {
        this._spotCollection.getAll().map(spot => spot.hide());
        this._canvas.renderAll();
    }

}
