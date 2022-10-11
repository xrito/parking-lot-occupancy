export default class Spot{
    number;
    rectangle;
    /**
     * @param {int} number
     * @param {fabric.Rect} rectangle
     */
    constructor(number, rectangle){
        this.number = number;
        this.rectangle = rectangle;
    }

    toJson(){
        return {
            x: Math.round(this.rectangle.left),
            y: Math.round(this.rectangle.top),
            width: Math.round(this.rectangle.getScaledWidth()),
            height: Math.round(this.rectangle.getScaledHeight())
        }
    }
}
