import { ApiGet } from "./server_core/api_get";
import { ApiPut } from "./server_core/api_put";
import { endpoints } from "./server_core/endpoint";

export const user_put_login = async (id,pass) => {
    const user_endpoint = endpoints.USER;
    const data = {
        "id": id,
        "password": pass
    }

    return await ApiPut(user_endpoint,data);
}