import { ApiGet } from "./server_core/api_get";
import { endpoints } from "./server_core/endpoint";

export const UserLogin = async (user,pass) => {
    let user_endepoint = endpoints.USER;
    let data = {
        usuario : user,
        senha: pass
    }

    await ApiGet(user_endepoint,data);
}

// UserLogin("Haug","12345")