import { http } from "../../config";

export default {
  caracteristica: async (nome_caracteristica, id_user) => {
    try {
      const response = await http.post(
        "/caracteristica/cadastro",
        {
          nome_caracteristica: nome_caracteristica,
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

  listcaracteristica: async () => {
    try {
      const response = await http.get("/caracteristica/", {
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

  deletecaracteristica: async (id_caracteristica) => {
    try {
      const response = await http.delete(
        `/caracteristica/delete/${id_caracteristica}`,
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

  minhasCaracteristicas: async (nome_caracteristica, id_user) => {
    try {
      const response = await http.post(
        "/caracteristica/cadastro",
        {
          nome_caracteristica: nome_caracteristica,
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

  listminhascaracteristicas: async (id_user) => {
    try {
      const response = await http.get(`/caracteristica/user/${id_user}`, {
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

  deleteMinhaCaracteristicas: async (id_caracteristicas) => {
    try {
      const response = await http.delete(
        `/caracteristica/delete/${id_caracteristicas}`,
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
