import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";

let id_counter = 0;

export const venda_get_all = async () => {
  const endp = endpoints.VENDA
  return await ApiGet(endp)
}

export const venda_post_new = async (id, nome, preco, quantidade_dispo, quantidade_vendida) => {
    endp  = endpoints.VENDA_NOVO
    data = {
        id: id,
        name: nome,
        price: preco,
        quantity_available: quantidade_dispo,
        quantity_sold: quantidade_vendida
      }
      ApiPost(endp,data)
}