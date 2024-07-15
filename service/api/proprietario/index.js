import { http } from "../../config";

export default {
  novoProprietario: async (
    nomeProprietario,
    emailProprietario,
    documentoProprietario,
    telefonePropietario,
    id_user
  ) => {
    try {
      const response = await http.post(
        "/proprietario/cadastro",
        {
          nome: nomeProprietario,
          email: emailProprietario,
          documento: documentoProprietario,
          telefone: telefonePropietario,
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
