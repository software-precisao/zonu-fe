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
};
