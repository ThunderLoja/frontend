import { ApiGet } from "./server_core/api_get";
import { ApiPut } from "./server_core/api_put";
import { endpoints } from "./server_core/endpoint";

export const UserLogin = async (id,pass) => {
    let user_endepoint = endpoints.USER;
    let data = {
        id : id,
        senha: pass
    }

    await ApiPut(user_endepoint+"/",data);
}

// UserLogin("Haug","12345")