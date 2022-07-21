export const endpoints = {
    USER: "login",

    CLIENTE_TODOS: 'cliente/todos',
    CLIENTE: 'cliente',
    CLIENTE_NOVO: 'cliente/novo',
    CLIENTE_ATUALIZAR: 'cliente/atualizar',

    PRODUTO_TODOS: 'produto/todos',
    PRODUTO_DISPONIVEL: 'produto/disponiveis',
    PRODUTO: 'produto',
    PRODUTO_NOVO: 'produto/novo',
    PRODUTO_ATUALIZAR: 'produto/atualizar',

    VENDEDOR_TODOS: 'vendedor/todos',
    VENDEDOR_ATIVOS: 'vendedor/ativos',
    VENDEDOR: 'vendedor',
    VENDEDOR_NOVO: 'vendedor/novo',
    VENDEDOR_ATUALIZAR: 'vendedor/atualizar',

    VENDA_TODAS: 'venda/todas',
    VENDA_RELATORIO: 'venda/relatorio',
    VENDA_NOVA: 'venda/nova',
  };

export const api_links = {
  BACKEND: "http://localhost:8000",
  FRONTEND: "http://localhost:1234"
}

export const headers = {
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
};