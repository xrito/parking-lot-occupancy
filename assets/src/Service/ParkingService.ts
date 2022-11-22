import SpotCollection from "../Model/SpotCollection";
import SpotEventHandler from "../Event/SpotEventHandler";
import type {fabric} from "fabric";
import PredictionEventHandler from "../Event/PredictionEventHandler";
import SpotDTO from "../Model/Spot";
import SpotRepository from "../Repository/SpotRepository";
import Spot from "../Spot";

export default class {
    readonly _cameraCanvas: fabric.Canvas;
    _spotCollection = new SpotCollection();
    _spots: SpotDTO[];
    _predictions = [];
    _spotEventHandler: SpotEventHandler;
    _predictionEventHandler: PredictionEventHandler;
    _freeSpotsUrl: string | URL;
    _id: string;

    constructor(id: string,
                spots: SpotDTO[],
                cameraCanvas: fabric.Canvas,
                freeSpotsUrl: string | URL,
                predictionUrl: string | URL) {
        this._spots = spots;
        this._id = id;
        this._freeSpotsUrl = freeSpotsUrl;
        this._cameraCanvas = cameraCanvas;
        this._cameraCanvas.on('object:modified', this.saveSpots.bind(this));
        this._spotEventHandler = new SpotEventHandler(this._spotCollection, this.getCamera());
        this._predictionEventHandler = new PredictionEventHandler(predictionUrl, this._predictions, this.getCamera());
    }


    getCamera(): fabric.Canvas {
        return this._cameraCanvas;
    }

    switchMonitoring(monitoringType: string) {
        switch (monitoringType) {
            case 'spot':
                this._spotEventHandler.activate(this._freeSpotsUrl);
                this._predictionEventHandler.deactivate();
                break;
            case 'prediction':
                this._predictionEventHandler.activate();
                this._spotEventHandler.deactivate();
                break;
        }
    }

    addSpot() {
        const spotDTO = new SpotDTO(80, 50, 100, 100);
        const spot = this._spotCollection.add(spotDTO);
        this.getCamera().add(spot);
    }

    saveSpots() {
        const spotsJson = this._spotCollection.toJson();
        SpotRepository.update(this._id, spotsJson);
    }

    removeSpot() {
        const selectedObject = this.getCamera().getActiveObject();
        if (selectedObject instanceof Spot) {
            this._spotCollection.remove(selectedObject);
            this.getCamera().remove(selectedObject);
        }
        if (selectedObject instanceof Array) {
            selectedObject.map(object => {
                if (object instanceof Spot) {
                    this._spotCollection.remove(object);
                    this.getCamera().remove(object);
                }
            })
        }
        this.saveSpots();
    }

    public loadSpots() {
        for (const spotDTO of this._spots) {
            const spot = this._spotCollection.add(spotDTO);
            this._cameraCanvas.add(spot)
        }
    }

}
