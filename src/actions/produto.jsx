import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";

let id_counter = 0;

export const produto_new = (nome) => {
    id_counter += 1;
    endp  = endpoints.PRODUTO_NOVO
    data = {
        id: 0,
        name: "string",
        price: 0,
        description: "string",
        category: "string",
        quantity: 0
      }
      ApiPost(endp,data)
}