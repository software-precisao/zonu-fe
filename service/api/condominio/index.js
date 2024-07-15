import { http } from "../../config";

export default {
  novoCondominio: async (nome_condominio, id_user) => {
    try {
      const response = await http.post(
        "/condominio/cadastro",
        {
          nome_condominio: nome_condominio,
          id_user: id_user,
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

  listcondominio: async (id_user) => {
    try {
      const response = await http.get(`/condominio/${id_user}`, {
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

  listAllcondominio: async () => {
    try {
      const response = await http.get("/condominio", {
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
};
