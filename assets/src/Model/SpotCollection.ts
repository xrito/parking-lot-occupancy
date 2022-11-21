import Spot from "../Spot";
import type SpotDTO from "./Spot";

export default class SpotCollection {

    _spots: Spot[] = [];

    add(spotDTO: SpotDTO): Spot {
        const spot = new Spot(this._spots.length + 1, spotDTO.width, spotDTO.height, spotDTO.x, spotDTO.y);
        this._spots.push(spot);
        return spot;
    }

    get(number: number): Spot {
        return this._spots[number - 1];
    }

    getAll() {
        return this._spots;
    }

    toJson() {
        return this._spots.map(spot => spot.toJson());
    }

    remove(spot: Spot) {
        this._spots = this._spots.filter(s => s !== spot);
        this._spots.map((s, index) => s.setNumber(index + 1));
    }

    freeSpots(freeSpots: number[]) {
        this._spots.map(spot => {
            if (freeSpots.includes(spot.number)) {
                spot.free();
            } else {
                spot.occupy();
            }
        });
    }
}
