import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { ApiPut } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";

let id_counter = 0;

export const produto_get_all = async () => {
    const endp = endpoints.PRODUTO_TODOS;
    return await ApiGet(endp)
}

export const produto_get_available = async () => {
    const endp = endpoints.PRODUTO_DISPONIVEL
    return await ApiGet(endp)
}

export const produto_get_search = async (id) => {
    const endp = endpoints.PRODUTO+"/"+id 
    return await ApiGet(endp)
}

export const produto_post_new = async (name, price, description, category, quantity) => {
    const endp  = endpoints.PRODUTO_NOVO
    const data = {
        "name": name,
        "price": price,
        "description": description,
        "category": category,
        "quantity": quantity
      }
      await ApiPost(endp, data)
}


export const produto_put_update = async (id, name, price, description, category, quantity) => {
    const endp = endpoints.PRODUTO_ATUALIZAR;
    const data ={
        id: id,
        name: name,
        price: price,
        description: description,
        category: category,
        quantity: quantity
    }
    await ApiPut(endp, data)
}