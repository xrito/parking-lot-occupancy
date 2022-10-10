import {Controller} from '@hotwired/stimulus';
import 'fabric';
import Spot from "../src/Spot";
import Routing from "fos-router";

export default class extends Controller {
    static targets = ['camera', 'number']
    canvas = null;
    spots = [];

    constructor(context) {
        super(context);
    }

    addSpot() {
        const numberSpot = parseInt(this.numberTarget.value);
        if (!this.canvas) {
            this.canvas = new fabric.Canvas(this.cameraTarget);
        }
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
        this.spots.push(spot);
        this.canvas.add(rect)
    }

    saveSpots() {
        const spotsJson = this.spots.map(spot => spot.toJson());
        const request = new Request(Routing.generate('spots'), {
            method: 'POST',
            body: JSON.stringify(spotsJson),
        });
        fetch(request);
    }
}
