import { http } from "../../config";

export default {
  progress: async (id_user) => {
    try {
      const response = await http.get(`/progressao/buscar/${id_user}`, {
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

  editProgressImovel: async (id_progresso) => {
    try {
      const response = await http.patch(
        "/progressao/editar",
        {
          id_progresso: id_progresso,
          imovel: 1,
          publicacao: 1,
          logo_capa: 1,
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

  editProgressCodominio: async (id_progresso) => {
    try {
      const response = await http.patch(
        "/progressao/editar",
        {
          id_progresso: id_progresso,
          logo_capa: 1,
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
};
