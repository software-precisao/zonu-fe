import { http } from "../../config";

export default {
  sendNewAccountAdmin: async (nome, email) => {
    try {
      const response = await http.post(
        "/email/admin",
        {
          nome: nome,
          email: email,
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
