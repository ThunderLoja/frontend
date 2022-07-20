import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";


export const new_venda = (nome, preco, quantidade_dispo, quantidade_vendida) => {
    endp  = endpoints.VENDA_NOVO
    data = {
        name: nome,
        price: preco,
        quantity_available: quantidade_dispo,
        quantity_sold: quantidade_vendida
      }
      ApiPost(endp,data)
}