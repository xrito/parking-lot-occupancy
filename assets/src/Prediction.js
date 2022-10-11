export default class Prediction{
    text;
    rectangle;
    /**
     * @param {fabric.Text} text
     * @param {fabric.Rect} rectangle
     */
    constructor(text, rectangle){
        this.text = text;
        this.rectangle = rectangle;
    }
}
