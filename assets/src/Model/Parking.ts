import type Spot from "./Spot";

export default interface Parking {
    id: string;
    name: string;
    preview: string;
    stream: string;
    spots: Spot[];
}
