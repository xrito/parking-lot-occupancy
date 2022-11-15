import Client from "../Client/Client";

const resource = '/parking';

export default {
    all() {
        return Client.get(`${resource}`);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    }
}
