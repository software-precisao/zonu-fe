import { http } from "../../config";

export default {
  cadastroAdmin: async (nome, sobrenome, email, senha) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro-administrador",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          id_plano: 1,
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

  cadastroEquipe: async (nome, sobrenome, email, senha, selectNivel) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro-equipe",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          status: 1,
          nivel: selectNivel,
          id_plano: 1,
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

  editStatusUser: async (id_user, status) => {
    try {
      const response = await http.patch(
        "/usuarios/status",
        {
          id_user: id_user,
          status: status,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  editUser: async (
    id_user,
    nome,
    sobrenome,
    email,
    razao_social,
    cnpj,
    telefone,
    cep,
    endereco,
    numero,
    complemento,
    cidade,
    estado,
    bairro
  ) => {
    try {
      const response = await http.patch(
        "/usuarios/editar",
        {
          id_user: id_user,
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          razao_social: razao_social,
          cnpj: cnpj,
          telefone: telefone,
          cep: cep,
          endereco: endereco,
          numero: numero,
          complemento: complemento,
          cidade: cidade,
          estado: estado,
          bairro: bairro,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deleteUser: async (id_user) => {
    try {
      const response = await http.delete(`/usuarios/delete/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,DELETE",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listusuarios: async () => {
    try {
      const response = await http.get("/usuarios/", {
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

  sendNewAccount: async (email, nome) => {
    try {
      const response = await http.post(
        "/email/boas-vindas",
        {
          email: email,
          nome: nome,
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
