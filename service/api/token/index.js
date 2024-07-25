import { http } from "../../config";

export default {
  novoToken: async (tokenKey, urlPadrao) => {
    try {
      const response = await http.post(
        "/tokenPay/cadastrar",
        {
          api_key: tokenKey,
          url_base: urlPadrao,
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

  listTokens: async () => {
    try {
      const response = await http.get("/tokenPay/", {
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
