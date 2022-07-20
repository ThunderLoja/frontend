import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { ApiPut } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";

export const cliente_get_all = async () => {
    const endp = endpoints.CLIENTE_TODOS
    return await ApiGet(endp)
}

export const cliente_get_get_search = async (cpf) => {
    const endp = endpoints.CLIENTE+"/"+cpf
    return await ApiGet(endp)
}

export const cliente_post_new = async (cpf, name) => {
    const endp = endpoints.CLIENTE_NOVO;
    const data  = {
        cpf: cpf,
        name: name
    }
    await ApiPost(endp, data)
}

export const cliente_put_update = async (cpf, name) => {
    const endp = endpoints.CLIENTE_ATUALIZAR;
    const data ={
        cpf: cpf,
        name: name
    }
    await ApiPut(endp, data)
}