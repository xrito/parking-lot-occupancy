import {Controller} from '@hotwired/stimulus';
import 'fabric';
import Spot from "../src/Spot";
import Routing from "fos-router";
import Prediction from "../src/Prediction";

export default class extends Controller {
    static targets = ['camera', 'number','mercureUrl']
    #canvas = null;
    /**
     * @type Spot[]
     */
    #spots = [];
    #predictions = [];

    constructor(context) {
        super(context);
        this.loadSpots();
        this.eventSubscribe()
    }

    /**
     * @param {fabric.Rect} rectangle
     */
    renderSpot(rectangle) {
        rectangle.controls.mtr.visible = false;
       // this.getCanvas().add(rectangle)
    }

    /**
     * @param {fabric.Rect} rectangle
     */
    renderPrediction(rectangle) {
        rectangle.hoverCursor = 'auto';
        rectangle.selectable = false;
        this.getCanvas().sendToBack(rectangle)
    }


    getCanvas() {
        if (!this.#canvas) {
            this.#canvas = new fabric.Canvas(this.cameraTarget);
        }
        return this.#canvas;
    }

    addSpot() {
        const numberSpot = parseInt(this.numberTarget.value);
        const rect = new fabric.Rect({
            top: 100,
            left: 100,
            width: 80,
            height: 50,
            stroke: 'red',
            fill: 'transparent',
            strokeWidth: 1
        });
        const spot = new Spot(numberSpot, rect);
        this.#spots.push(spot);
        this.renderSpot(rect);
    }

    saveSpots() {
        const spotsJson = this.#spots.sort((spot1, spot2) => spot1.number - spot2.number).map(spot => spot.toJson());
        const request = new Request(Routing.generate('spots_list'), {
            method: 'POST',
            body: JSON.stringify(spotsJson),
        });
        fetch(request);
    }

    loadSpots() {
        const request = new Request(Routing.generate('spots_update'), {
            method: 'GET',
        });
        fetch(request).then(response => response.json()).then(spotsJson => {
            spotsJson.forEach(spotJson => {
                const rect = new fabric.Rect({
                    top: spotJson.y,
                    left: spotJson.x,
                    width: spotJson.width,
                    height: spotJson.height,
                    stroke: 'red',
                    fill: 'transparent',
                    strokeWidth: 1
                });
                const spot = new Spot(spotJson.number, rect);
                this.#spots.push(spot);
                this.renderSpot(rect)
            });
        });
    }

    eventSubscribe() {
        const url = this.mercureUrlTarget.value;
        const eventSource = new EventSource(url);

        eventSource.onmessage = event => {
            const predictions = JSON.parse(event.data);
            this.#predictions.map(prediction => {
                this.#canvas.remove(prediction.text)
                this.#canvas.remove(prediction.rectangle)
            });
            console.log(predictions);
            predictions.map(prediction => {
                const rect = new fabric.Rect({
                    top: prediction.y/3,
                    left: prediction.x/3,
                    width: prediction.width/3,
                    height: prediction.height/3,
                    stroke: 'green',
                    fill: 'transparent',
                    strokeWidth: 1
                });
                const text = new fabric.Text(prediction.confidence.toFixed(2).toString(), {
                    left: prediction.x/3,
                    top: prediction.y/3-17,
                    stroke: 'white',
                    backgroundColor: 'green',
                    fontSize: 15,
                    padding: 10
                });
                this.#predictions.push(new Prediction(text, rect));
                this.renderPrediction(rect);
                this.renderPrediction(text);
            })
        }
    }
}
