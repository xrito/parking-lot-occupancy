import 'fabric';
import RectangleFactory from "./Factory/RectangleFactory";

export default class Spot extends fabric.Group {
    number;
    rectangle;
    #freeColor = 'blue';
    #occupyColor = 'red';
    /**
     * @param {int} number
     * @param {int} width
     * @param {int} height
     * @param {int} left
     * @param {int} top
     */
    constructor(number, width, height, left, top) {
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

    occupy(){
        this.#getRectangle().set('stroke',this.#occupyColor);
        this.#getText().set('backgroundColor',this.#occupyColor);
    }

    free() {
        this.#getRectangle().set('stroke',this.#freeColor);
        this.#getText().set('backgroundColor',this.#freeColor);
    }

    /**
     * @param {int} number
     */
    setNumber(number) {
        this.number = number;
        this.#getText().set('text', number.toString());
    }

    /**
     * @return {fabric.Text}
     */
    #getText() {
        return this.getObjects('text')[0];
    }

    /**
     *
     * @returns {fabric.Rect}
     */
    #getRectangle() {
        return this.getObjects('rect')[0];
    }

    toJson() {
        const rectangle = this.#getRectangle();
        return {
            x: Math.round(this.left),
            y: Math.round(this.top),
            width: Math.round(this.getScaledWidth()),
            height: Math.round(this.getScaledHeight())
        }
    }
}
