export default class RectangleFactory{
    /**
     * @param {string} title
     * @param {int} width
     * @param {int} height
     * @param {string} color
     * @return fabric.Object[]
     */
    static create(title, width, height,color = 'red'){
        const rect = new fabric.Rect({
            top: 0,
            left: 0,
            width: width,
            height: height,
            stroke: color,
            fill: 'transparent',
            strokeWidth: 1
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
