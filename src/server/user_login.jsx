import { ApiGet } from "./core/api_get";

export const UserLogin = async (user,pass) => {
    let data = {
        usuario : user,
        senha: pass
    }

    await ApiGet("/user",data);
}

// UserLogin("Haug","12345")