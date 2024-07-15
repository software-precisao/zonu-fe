import { http } from "../../config";

export default {
  login: async (email, senha) => {
    try {
      const response = await http.post(
        "/login",
        {
          email: email,
          senha: senha,
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

  varificaEmail: async (email) => {
    try {
      const response = await http.post(
        "/usuarios/verifica-email",
        {
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

  validaCode: async (code) => {
    try {
      const response = await http.post(
        "/usuarios/valida-code",
        {
          code: code,
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

  recovery: async (email, senha) => {
    try {
      const response = await http.put(
        "/usuarios/edit/trocar-senha",
        {
          email: email,
          senha: senha,
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

  alteraSenha: async (senha, id_user) => {
    try {
      const response = await http.put(
        `/usuarios/dados/${id_user}`,
        {
          senha: senha,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cadastro: async (
    nome,
    sobrenome,
    email,
    senha,
    razao_social,
    cnpj,
    telefone,
    cep,
    endereco,
    complemento,
    numero,
    cidade,
    estado,
    bairro
  ) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          nivel: 2,
          status: 2,
          id_plano: 1,
          razao_social: razao_social,
          cnpj: cnpj,
          telefone: telefone,
          cep: cep,
          endereco: endereco,
          complemento: complemento,
          numero: numero,
          cidade: cidade,
          estado: estado,
          bairro: bairro,
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
