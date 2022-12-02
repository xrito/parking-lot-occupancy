import SpotCollection from "../Model/SpotCollection";
import SpotEventHandler from "../Event/SpotEventHandler";
import type {fabric} from "fabric";
import PredictionEventHandler from "../Event/PredictionEventHandler";
import SpotDTO from "../Model/Spot";
import SpotRepository from "../Repository/SpotRepository";
import Spot from "../Spot";

export default class {
    _spotCollection = new SpotCollection();
    _predictions = [];
    _id: string;
    _freeSpotsTopic: string;
    _predictionTopic: string;
    _cameraCanvas?: fabric.Canvas;
    _spotEventHandler?: SpotEventHandler;
    _predictionEventHandler?: PredictionEventHandler;

    constructor(id: string,
                freeSpotsTopic: string,
                predictionTopic: string) {
        this._id = id;
        this._freeSpotsTopic = freeSpotsTopic;
        this._predictionTopic = predictionTopic;
    }

    public init(camera: fabric.Canvas, spots: SpotDTO[], monitoringType: string) {
        this.setCamera(camera);
        this._spotEventHandler = new SpotEventHandler(this._spotCollection, this._freeSpotsTopic, this.getCamera()!);
        this._predictionEventHandler = new PredictionEventHandler(this._predictions, this._predictionTopic, this.getCamera()!);
        this.loadSpots(spots);
        this.switchMonitoring(monitoringType);
    }

    private setCamera(camera: fabric.Canvas) {
        this._cameraCanvas = camera;
        this._cameraCanvas.selection = false;
        this._cameraCanvas.on('object:scaling', (e) => {
            console.log(e);
           if(e.target instanceof Spot) {
                e.target.onScaling();
           }
        })
        this._cameraCanvas.on('object:modified', this.saveSpots.bind(this));
    }

    public getCamera(): fabric.Canvas | undefined {
        return this._cameraCanvas;
    }

    public deactivate() {
        this._spotEventHandler!.deactivate();
        this._predictionEventHandler!.deactivate();
    }

    public switchMonitoring(monitoringType: string) {
        switch (monitoringType) {
            case 'spot':
                this._spotEventHandler!.activate();
                this._predictionEventHandler!.deactivate();
                break;
            case 'prediction':
                this._predictionEventHandler!.activate();
                this._spotEventHandler!.deactivate();
                break;
        }
    }

    public addSpot() {
        const spotDTO = new SpotDTO(80, 50, 100, 100);
        const spot = this._spotCollection.add(spotDTO);
        this.getCamera()!.add(spot);
        this.saveSpots();
    }

    public saveSpots() {
        const spotsJson = this._spotCollection.toJson();
        SpotRepository.update(this._id, spotsJson);
    }

    public clear() {
        const spots = this
            .getCamera()!
            .getObjects()
            .filter(object => object instanceof Spot) as Spot[];
        spots.map((spot: Spot) => {
            this._spotCollection.remove(spot);
            this.getCamera()!.remove(spot);
        });

        this.saveSpots();
    }

    public removeSpot() {
        const selectedObject = this.getCamera()!.getActiveObject();
        if (selectedObject instanceof Spot) {
            this._spotCollection.remove(selectedObject);
            this.getCamera()!.remove(selectedObject);
        }
        if (selectedObject instanceof Array) {
            selectedObject.map(object => {
                if (object instanceof Spot) {
                    this._spotCollection.remove(object);
                    this.getCamera()!.remove(object);
                }
            })
        }
        this.saveSpots();
    }

    private loadSpots(spots: SpotDTO[],) {
        for (const spotDTO of spots) {
            const spot = this._spotCollection.add(spotDTO);
            this._cameraCanvas!.add(spot)
        }
    }

}
