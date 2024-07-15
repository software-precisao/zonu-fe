import { http } from "../../config";

export default {
  abritTicket: async (assunto, mensagem, id_user) => {
    try {
      const response = await http.post(
        "/ticket/abrir",
        {
          assunto: assunto,
          mensagem: mensagem,
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

  listMyTickets: async (id_user) => {
    try {
      const response = await http.get(`/ticket/list/${id_user}`, {
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

  listAllTickets: async () => {
    try {
      const response = await http.get("/ticket", {
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

  listMyTickets: async (id_user) => {
    try {
      const response = await http.get(`/ticket/my/${id_user}`, {
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

  RespondaTicket: async (id_ticket, resposta) => {
    try {
      const response = await http.patch(
        `/ticket/${id_ticket}`,
        {
          resposta: resposta,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET, PATCH",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },
};
