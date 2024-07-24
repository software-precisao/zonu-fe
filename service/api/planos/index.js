import { http } from "../../config";

export default {
  cadastroPlano: async (nomePlano, valorPlano, descricao, itens) => {
    itens.map((item) => {
      console.log(item.nome);
    });
    try {
      const response = await http.post(
        "/plano/cadastrar",
        {
          nome_plano: nomePlano,
          valor_plano: valorPlano,
          descricao: descricao,
          itens_do_plano: [
            itens.map((item) => {
              return item.nome;
            }),
          ],
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

  cadastroItensPlano: async (idPlano, nomeItem) => {
    try {
      const response = await http.post(
        "/plano/itensplano",
        {
          id_plano: idPlano,
          nome_item: nomeItem,
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

  getPlanos: async () => {
    try {
      const response = await http.get("/plano/", {
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
