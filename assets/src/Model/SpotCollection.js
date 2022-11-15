import Spot from "../Spot";

export default class SpotCollection{
    /**
     * @type Spot[]
     */
    #spots = [];

    /**
     * @param {int} width
     * @param {int} height
     * @param {int} left
     * @param {int} top
     * @return {Spot}
     */
    add(width, height, left, top) {
        const spot = new Spot(this.#spots.length + 1, width, height, left, top);
        this.#spots.push(spot);
        return spot;
    }

    /**
     *
     * @param {int} number
     * @return {Spot}
     */
    get(number){
        return this.#spots[number - 1];
    }

    getAll() {
        return this.#spots;
    }

    toJson() {
        return this.#spots.map(spot => spot.toJson());
    }

    /**
     * @param {Spot} spot
     */
    remove(spot){
        this.#spots = this.#spots.filter(s => s !== spot);
        this.#spots.map((s, index) => s.setNumber(index + 1));
    }

    /**
     * @param {int[]} freeSpots
     */
    freeSpots(freeSpots) {
        this.#spots.map(spot => {
            if(freeSpots.includes(spot.number)){
                spot.free();
            }else{
                spot.occupy();
            }
        });
    }
}
