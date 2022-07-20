import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";

let id_counter = 0;

export const venda_new = (nome, preco, quantidade_dispo, quantidade_vendida) => {
    id_counter += 1;
    endp  = endpoints.VENDA_NOVO
    data = {
        id: id_counter,
        name: nome,
        price: preco,
        quantity_available: quantidade_dispo,
        quantity_sold: quantidade_vendida
      }
      ApiPost(endp,data)
}