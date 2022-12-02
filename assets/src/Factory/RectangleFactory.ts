import {fabric} from "fabric";
fabric.Object.prototype.noScaleCache = false;

export default class RectangleFactory {
    static create(title: string, width: number, height: number, color: string = 'red') {
        const rect = new fabric.Rect({
            top: 0,
            left: 0,
            width: width,
            height: height,
            stroke: color,
            fill: 'transparent',
            strokeWidth: 1,
            strokeUniform: true
        });
        const text = new fabric.Text(title, {
            left: 0,
            top: 0,
            stroke: 'white',
            backgroundColor: color,
            fontSize: 15,
        });
        return [rect, text];
    }
}
