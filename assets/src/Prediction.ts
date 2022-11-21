import RectangleFactory from "./Factory/RectangleFactory";
import {fabric} from "fabric";

export default class Prediction extends fabric.Group {
    text;

    constructor(text: string, width: number, height: number, left: number, top: number) {
        const elements = RectangleFactory.create(text, width, height, 'green');
        super(elements, {
            left: left,
            top: top,
            width: width,
            height: height,
        });
        this.text = text;
        this.hoverCursor = 'auto';
        this.selectable = false;
    }
}
