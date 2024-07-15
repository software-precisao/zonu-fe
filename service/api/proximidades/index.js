import { http } from "../../config";

export default {
  proximidades: async (nome_proximidade) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  minhasProximidades: async (nome_proximidade, id_user) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  listproximidade: async () => {
    try {
      const response = await http.get("/proximidades/", {
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

  listminhasproximidades: async (id_user) => {
    try {
      const response = await http.get(`/proximidades/user/${id_user}`, {
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
  
  deleteproximidade: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
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

  deleteMinhaProximidades: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
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
};
