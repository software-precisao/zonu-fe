import { http } from "../../config";

export default {
  myPeriodoTeste: async (id_user) => {
    try {
      const response = await http.get(`/periodo-teste/${id_user}`, {
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

  atualizarStatusPeriodoTeste: async (id_controle) => {
    try {
      const response = await http.put(
        `/periodo-teste/controle/${id_controle}`,
        {
          status: 2,
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
