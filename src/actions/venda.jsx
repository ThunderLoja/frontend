import { ApiGet } from "./server_core/api_get";
import { ApiPost } from "./server_core/api_post";
import { endpoints } from "./server_core/endpoint";

export const venda_get_all = async () => {
  const endp = endpoints.VENDA_TODAS
  return await ApiGet(endp)
}

export const venda_get_report = async (start_date, end_date) => {
  let query_string = ""

  if (start_date != null && end_date != null) {
    query_string = `?start_date=${start_date}&end_date=${end_date}`
  } else if (start_date != null) {
    query_string = `?start_date=${start_date}`
  } else if (end_date != null) {
    query_string = `?end_date=${end_date}`
  }

  const endp = endpoints.VENDA_RELATORIO + query_string
  return await ApiGet(endp)
}

export const venda_post_new = async (value, date, description, client_cpf, seller_id, itens) => {
    endp  = endpoints.VENDA_NOVA
    data = {
        value: value,
        date: date,
        description: description,
        client_cpf: client_cpf,
        seller_id: seller_id,
        itens: itens
      }
      await ApiPost(endp,data)
}