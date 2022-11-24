import Client from "../Client/Client";
import type {AxiosResponse} from "axios";
import type Parking from "../Model/Parking";
import type ParkingForm from "../Model/ParkingForm";
import Routing from "fos-router";

export default {
    all(): Promise<AxiosResponse<Parking[]>> {
        return Client.get(Routing.generate('parking_all'));
    },
    get(id: string): Promise<AxiosResponse<Parking>> {
        return Client.get(Routing.generate('parking_one', {id: id}));
    },
    create(payload: ParkingForm): Promise<AxiosResponse<Parking>> {
        return Client.post(Routing.generate('parking_create'), payload);
    },
    remove(id: string) {
        return Client.delete(Routing.generate('parking_remove', {id: id}));
    }
}
