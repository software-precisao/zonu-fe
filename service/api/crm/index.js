import { http } from "../../config";

export default {
  getAllAnotacoes: async () => {
    try {
      const response = await http.get("/anotacao-crm/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  criarAnotacao: async (id_negocio, anotacao) => {
    try {
      const response = await http.post(
        "/anotacao-crm/cadastrar",
        {
          id_negocio: id_negocio,
          anotacao: anotacao,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  atualizarAnotacao: async (idAnotacao, id_negocio, anotacao) => {
    try {
      const response = await http.put(
        `/anotacao-crm/editar/${idAnotacao}`,
        {
          id_negocio: id_negocio,
          anotacao: anotacao,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deletarAnotacao: async (idAnotacao) => {
    try {
      const response = await http.delete(
        `/anotacao-crm/deletar/${idAnotacao}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  atualizarStatusNegocio: async (idNegocio, status) => {
    try {
      const response = await http.put(
        `/negocios/${idNegocio}/status`,
        {
          status_negocio: status,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cadastrarFunilVenda: async (idEtapa, id_user) => {
    try {
      const response = await http.post(
        `/vendas/cadastrar`,
        {
          id_etapa: idEtapa,
          id_user: id_user,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cadastrarFunilLocacao: async (idLocacao, id_user) => {
    try {
      const response = await http.post(
        `/locacao/cadastrar`,
        {
          id_etapa: idLocacao,
          id_user: id_user,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getFunilLocacao: async () => {
    try {
      const response = await http.get(`/locacao/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getFunilVenda: async () => {
    try {
      const response = await http.get(`/vendas/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  editarFunilLocacao: async (idLocacao, idEtapa, id_user) => {
    try {
      const response = await http.put(
        `/locacao/editar/${idLocacao}`,
        {
          id_etapa: idEtapa,
          id_user: id_user,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  editarFunilVenda: async (idVenda, idEtapa, id_user) => {
    try {
      const response = await http.put(
        `/vendas/editar/${idVenda}`,
        {
          id_etapa: idEtapa,
          id_user: id_user,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },
};
