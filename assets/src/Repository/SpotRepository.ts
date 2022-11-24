import Client from "../Client/Client";
import type Spot from "../Model/Spot";
import Routing from "fos-router";

export default {
    update(id: string, spots: Spot[]) {
        return Client.post(Routing.generate('spots_update', {id: id}), spots);
    },
}
