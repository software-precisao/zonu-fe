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

  cadastroConstrutora: async (
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
    bairro,
    nomeConstrutora
  ) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro-construtora",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          nivel: 2,
          status: 2,
          id_plano: 4,
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
          nome_construtora: nomeConstrutora,
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

  cadastroCorretor: async (
    // nome,
    // sobrenome,
    // email,
    // senha,
    // cpf,
    // id_plano,
    // telefone,
    // cep,
    // endereco,
    // complemento,
    // numero,
    // cidade,
    // estado,
    // bairro,
    formData
  ) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro-corretor",
        // {
        // nome: nome,
        // sobrenome: sobrenome,
        // email: email,
        // senha: senha,
        // avatar: "",
        // cpf: cpf,
        // id_plano: id_plano,
        // telefone: telefone,
        // cep: cep,
        // endereco: endereco,
        // complemento: complemento,
        // numero: numero,
        // cidade: cidade,
        // estado: estado,
        // bairro: bairro,
        formData,
        // },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cadastroPessoaFisica: async (
    nome,
    sobrenome,
    email,
    senha,
    cpf,
    id_plano,
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
        "/usuarios/cadastro-pessoa-fisica",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          cpf: cpf,
          id_plano: null,
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

  cadastroImobiliaria: async (
    // nome,
    // sobrenome,
    // email,
    // senha,
    // razao_social,
    // cnpj,
    // id_plano,
    // telefone,
    // cep,
    // endereco,
    // complemento,
    // numero,
    // cidade,
    // estado,
    // bairro
    formData
  ) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro-imobiliaria",
        // {
        //   nome: nome,
        //   sobrenome: sobrenome,
        //   email: email,
        //   senha: senha,
        //   avatar: "",
        //   status: 2,
        //   id_plano: id_plano,
        //   razao_social: razao_social,
        //   cnpj: cnpj,
        //   telefone: telefone,
        //   cep: cep,
        //   endereco: endereco,
        //   complemento: complemento,
        //   numero: numero,
        //   cidade: cidade,
        //   estado: estado,
        //   bairro: bairro,
        // },
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cadastroSubImobiliaria: async (nome, sobrenome, email, senha, idUser) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro-imobiliaria-user",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          id_user: idUser,
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

  getMyImobiliaria: async (idUser) => {
    try {
      const response = await http.get(`/usuarios/subusuarios/${idUser}`, {
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
