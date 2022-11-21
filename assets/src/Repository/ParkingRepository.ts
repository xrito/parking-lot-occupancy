import Client from "../Client/Client";
import type {AxiosResponse} from "axios";
import type Parking from "../Model/Parking";
import type ParkingForm from "../Model/ParkingForm";

const resource = '/parking';

export default {
    all(): Promise<AxiosResponse<Parking[]>> {
        return Client.get(`${resource}`);
    },
    get(id: string): Promise<AxiosResponse<Parking>> {
        return Client.get(`${resource}/${id}`);
    },
    create(payload: ParkingForm): Promise<AxiosResponse<Parking>> {
        return Client.post(`${resource}`, payload);
    },
    remove(id: string) {
        return Client.delete(`${resource}/${id}`);
    }
}
