import 'fabric';
import RectangleFactory from "./Factory/RectangleFactory";
import {fabric} from "fabric";
import SpotDTO from "./Model/Spot";

export default class Spot extends fabric.Group {
    number: number;
    _freeColor = 'blue';
    _occupyColor = 'red';

    constructor(number: number, width: number, height: number, left: number, top: number) {
        const elements = RectangleFactory.create(number.toString(), width, height, 'red');
        super(elements, {
            left: left,
            top: top,
            width: width,
            height: height,
        });
        this.controls.mtr.visible = false;
        this.number = number;
    }

    public occupy() {
        this.getRectangle().set('stroke', this._occupyColor);
        this.getText().set('backgroundColor', this._occupyColor);
    }

    public free() {
        this.getRectangle().set('stroke', this._freeColor);
        this.getText().set('backgroundColor', this._freeColor);
    }

    public setNumber(number: number) {
        this.number = number;
        this.getText().set('text', number.toString());
    }

    private getText(): fabric.Text {
        return this.getObjects('text')[0] as fabric.Text;
    }

    /**
     *
     * @returns {fabric.Rect}
     */
    private getRectangle() {
        return this.getObjects('rect')[0];
    }

    public toJson(): SpotDTO {
        return new SpotDTO(
            Math.round(this.getScaledWidth()),
            Math.round(this.getScaledHeight()),
            Math.round(this.left ?? 0),
            Math.round(this.top ?? 0),
        )
    }
}
