import Client from "../Client/Client";
import type Spot from "../Model/Spot";

const resource = '/spots';

export default {
    update(id: string, spots: Spot[]) {
        return Client.post(`${resource}/${id}`, spots);
    },
}
