export default class{
    confidence: number
    width: number
    height: number
    x: number
    y: number

    constructor(confidence: number, width: number, height: number, x: number, y: number) {
        this.confidence = confidence;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
}
