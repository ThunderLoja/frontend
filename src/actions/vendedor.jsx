import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { ApiPut } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";

export const vendedor_get_all = async () => {
    const endp = endpoints.VENDEDOR_TODOS;
    return await ApiGet(endp)
}

export const vendedor_get_search = async (id) => {
    const endp = endpoints.VENDEDOR+"/"+id
    return await ApiGet(endp)
}

export const vendedor_post_new = async (name, cpf, salary, admission_date, admission_date, is_active, manager_id, password) => {
    const endp = endpoints.VENDEDOR_NOVO;
    const data = {
        name: name,
        cpf: cpf,
        salary: salary,
        admission_date: admission_date,
        is_active: is_active,
        manager_id: manager_id,
        password: password
    }
    await ApiPost(endp, data)
}

export const vendedor_put_update = async (name, cpf, salary, admission_date, admission_date, is_active, manager_id, password) => {
    const endp = endpoints.VENDEDOR_ATUALIZAR;
    const data = {
        name: name,
        cpf: cpf,
        salary: salary,
        admission_date: admission_date,
        is_active: is_active,
        manager_id: manager_id,
        password: password
    }
    await ApiPut(endp, data)
}