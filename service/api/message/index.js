import { http } from "../../config";

export default {
  novaMensagem: async (mensagen, tempos) => {
    try {
      const response = await http.post(
        "/mensagem/enviarMensagem",
        {
          mensagem: mensagen,
          tempo: tempos,
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

  getMensagem: async () => {
    try {
      const response = await http.get("/mensagem/mensagens", {
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
