export default class Spot{
    constructor(number, rectangle){
        this.number = number;
        this.rectangle = rectangle;
    }

    toJSON(){
        return {
            'number': this.number,
            'rectangle': {
                x: this.rectangle.x,
                y: this.rectangle.y,
                width: this.rectangle.width,
                height: this.rectangle.height
            }
        }
    }
}
