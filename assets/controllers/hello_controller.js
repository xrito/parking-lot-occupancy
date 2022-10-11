import {Controller} from '@hotwired/stimulus';
import 'fabric';
import Spot from "../src/Spot";
import Routing from "fos-router";
import Prediction from "../src/Prediction";
import SpotCollection from "../src/Model/SpotCollection";
import PredictionEventHandler from "../src/Event/PredictionEventHandler";
import SpotEventHandler from "../src/Event/SpotEventHandler";

export default class extends Controller {
    static targets = ['camera', 'predictionsUrl', 'freeSpotsUrl' ]
    #canvas = null;
    #spotCollection = new SpotCollection();
    #predictions = [];

    constructor(context) {
        super(context);
        this.loadSpots();
        this.spotEventHandler = new SpotEventHandler(this.#spotCollection, this.getCanvas());
        this.predictionEventHandler = new PredictionEventHandler(this.#predictions, this.getCanvas());
    }


    getCanvas() {
        if (!this.#canvas) {
            this.#canvas = new fabric.Canvas(this.cameraTarget);
            this.#canvas.on('object:modified', (e) => {
                this.saveSpots();
            });
        }
        return this.#canvas;
    }

    switchMonitoring(event) {
        switch (event.target.value) {
            case 'spot':
                this.spotEventHandler.activate(this.freeSpotsUrlTarget.value);
                this.predictionEventHandler.deactivate();
                break;
            case 'prediction':
                this.predictionEventHandler.activate(this.predictionsUrlTarget.value);
                this.spotEventHandler.deactivate();
                break;
        }
    }
    addSpot() {
        const spot = this.#spotCollection.add(80, 50, 100, 100);
        this.getCanvas().add(spot);
    }

    saveSpots() {
        const spotsJson = this.#spotCollection.toJson();
        const request = new Request(Routing.generate('spots_list'), {
            method: 'POST',
            body: JSON.stringify(spotsJson),
        });
        fetch(request);
    }

    removeSpot() {
        const selectedObject = this.getCanvas().getActiveObject();
        if (selectedObject instanceof Spot) {
            this.#spotCollection.remove(selectedObject);
            this.getCanvas().remove(selectedObject);
        }
        if (selectedObject instanceof Array) {
            selectedObject.map(object => {
                if (object instanceof Spot) {
                    this.#spotCollection.remove(object);
                    this.getCanvas().remove(object);
                }
            })
        }
        this.saveSpots();
    }

    loadSpots() {
        const request = new Request(Routing.generate('spots_update'), {
            method: 'GET',
        });
        fetch(request).then(response => response.json()).then(spotsJson => {
            spotsJson.forEach((spotJson) => {
                const spot = this.#spotCollection.add(spotJson.width, spotJson.height, spotJson.x, spotJson.y);
                this.getCanvas().add(spot)
            });
        });
    }

}
