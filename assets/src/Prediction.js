import RectangleFactory from "./Factory/RectangleFactory";

export default class Prediction extends fabric.Group{
    text;
    rectangle;
    /**
     * @param {string} text
     * @param {int} width
     * @param {int} height
     * @param {int} left
     * @param {int} top
     */
    constructor(text,  width, height, left, top){
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
