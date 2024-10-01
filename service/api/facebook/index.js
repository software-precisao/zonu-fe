import { http } from "../../config";
export default {
  sendToken: async (accessToken, id_user) => {
    try {
      const body = {
        accessToken,
        id_user,
      };

      const response = await http.post("/facebook/callback", body, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      console.log(error);
      return error.response || error.message || error;
    }
  },

  logoutFacebook: async (id_user) => {
    try {
      const response = await http.post(
        `/facebook/logout`,
        {
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
};
