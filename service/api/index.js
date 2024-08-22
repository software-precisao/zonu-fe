import { http } from "../config";

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

  listNivel: async () => {
    try {
      const response = await http.get("/nivel/", {
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

  editTermos: async (id_termos, termos) => {
    try {
      const response = await http.patch(
        `/termos/${id_termos}`,
        {
          texto: termos,
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

  termos: async () => {
    try {
      const response = await http.get("/termos/", {
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

  editProvacidade: async (id_privacidade, privacidade) => {
    try {
      const response = await http.patch(
        `/privacidade/${id_privacidade}`,
        {
          texto: privacidade,
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

  privacidade: async () => {
    try {
      const response = await http.get("/privacidade/", {
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

  editUser: async ({
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
    bairro,
  }) => {
    console.log({
      id_user,
    });

    try {
      const response = await http.put(
        `/usuarios/editar-cliente/${id_user}`,
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

  caracteristica: async (nome_caracteristica, id_user) => {
    try {
      const response = await http.post(
        "/caracteristica/cadastro",
        {
          nome_caracteristica: nome_caracteristica,
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

  listcaracteristica: async () => {
    try {
      const response = await http.get("/caracteristica/", {
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

  deletecaracteristica: async (id_caracteristica) => {
    try {
      const response = await http.delete(
        `/caracteristica/delete/${id_caracteristica}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  proximidades: async (nome_proximidade) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  minhasProximidades: async (nome_proximidade, id_user) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  minhasCaracteristicas: async (nome_caracteristica, id_user) => {
    try {
      const response = await http.post(
        "/caracteristica/cadastro",
        {
          nome_caracteristica: nome_caracteristica,
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

  listproximidade: async () => {
    try {
      const response = await http.get("/proximidades/", {
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

  listminhasproximidades: async (id_user) => {
    try {
      const response = await http.get(`/proximidades/user/${id_user}`, {
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

  listminhascaracteristicas: async (id_user) => {
    try {
      const response = await http.get(`/caracteristica/user/${id_user}`, {
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

  deleteproximidade: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deleteMinhaProximidades: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deleteMinhaCaracteristicas: async (id_caracteristicas) => {
    try {
      const response = await http.delete(
        `/caracteristica/delete/${id_caracteristicas}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  novoCondominio: async (nome_condominio, id_user) => {
    try {
      const response = await http.post(
        "/condominio/cadastro",
        {
          nome_condominio: nome_condominio,
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

  listcondominio: async (id_user) => {
    try {
      const response = await http.get(`/condominio/${id_user}`, {
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

  listAllcondominio: async () => {
    try {
      const response = await http.get("/condominio", {
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

  listproprietario: async (id_user) => {
    try {
      const response = await http.get(`/proprietario/${id_user}`, {
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

  listBairro: async () => {
    try {
      const response = await http.get("/imovel/bairro", {
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

  novoImovel: async (formData) => {
    try {
      const response = await http.post("/imovel/cadastrar", formData, {
        headers: {
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

  editarImovel: async (id, formData) => {
    console.log("FormatData ===> ", formData);
    try {
      const response = await http.put(
        `/imovel/editar/${id}`,
        formData,

        {
          headers: {
            // "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  progress: async (id_user) => {
    try {
      const response = await http.get(`/progressao/buscar/${id_user}`, {
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

  editProgressImovel: async (id_progresso) => {
    try {
      const response = await http.patch(
        "/progressao/editar",
        {
          id_progresso: id_progresso,
          imovel: 1,
          publicacao: 1,
          logo_capa: 1,
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

  editProgressCodominio: async (id_progresso) => {
    try {
      const response = await http.patch(
        "/progressao/editar",
        {
          id_progresso: id_progresso,
          logo_capa: 1,
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

  listmyImoveis: async (id_user) => {
    try {
      const response = await http.get(`/imovel/user/${id_user}`, {
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

  listallImoveis: async () => {
    try {
      const response = await http.get("/imovel", {
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

  comentarioImovel: async (id_imovel) => {
    try {
      const response = await http.patch(
        "/imovel/anotacao",
        {
          anotacao: anotacao,
          id_imovel: id_imovel,
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

  deleteImovel: async (id_imovel) => {
    try {
      const response = await http.delete(`/imovel/delete/${id_imovel}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deletecondominio: async (id_condominio) => {
    try {
      const response = await http.delete(`/condominio/${id_condominio}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  postPosicao: async (tipo_posicao) => {
    try {
      const response = await http.post(
        "/posicao/cadastrar",
        {
          tipo_posicao: tipo_posicao,
        },
        {
          headers: {
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

  getPosicao: async () => {
    try {
      const response = await http.get("/posicao/", {
        headers: {
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

  postNivelInteresse: async (nivel_interesse) => {
    try {
      const response = await http.post(
        "/niveisInteresse/cadastrar",
        {
          nivel_interesse: nivel_interesse,
        },
        {
          headers: {
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

  getNivelInteresse: async () => {
    try {
      const response = await http.get("/niveisInteresse/", {
        headers: {
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

  postCliente: async (
    id_captacao,
    id_categoria_cliente,
    nome,
    idTipoCliente,
    cpf,
    rg,
    email,
    data_de_nascimento,
    profissao,
    cep,
    pais,
    uf,
    cidade,
    bairro,
    logradouro,
    numero,
    complemento,
    anotacao,
    telefone1,
    telefone2,
    idUser,
    pessoasLigadas
  ) => {
    try {
      const response = await http.post(
        "/clientes/cadastrar",
        {
          id_captacao: id_captacao,
          id_categoria_cliente: id_categoria_cliente,
          nome: nome,
          id_tipo_cliente: idTipoCliente,
          cpf: cpf,
          rg: rg,
          email: email,
          data_de_nascimento: data_de_nascimento,
          profissao: profissao,
          cep: cep,
          pais: pais,
          uf: uf,
          cidade: cidade,
          bairro: bairro,
          logradouro: logradouro,
          numero: numero,
          complemento: complemento,
          anotacao: anotacao,
          telefone_1: telefone1,
          telefone_2: telefone2,
          id_user: idUser,
          pessoas_ligadas: pessoasLigadas,
        },
        {
          headers: {
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

  getCliente: async () => {
    try {
      const response = await http.get("/clientes/", {
        headers: {
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

  postTipoCliente: async (tipo_cliente) => {
    try {
      const response = await http.post(
        "/tipoCliente/cadastrar",
        {
          tipo_cliente: tipo_cliente,
        },
        {
          headers: {
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

  getTipoCliente: async () => {
    try {
      const response = await http.get("/tipoCliente/", {
        headers: {
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

  postNegocio: async (
    id_posicao,
    id_nivel_interesse,
    id_cliente,
    id_imovel
  ) => {
    try {
      const response = await http.post(
        "/negocios/cadastrar",
        {
          id_etapa: id_posicao,
          id_nivel_interesse: id_nivel_interesse,
          id_cliente: id_cliente,
          id_imovel: id_imovel,
        },
        {
          headers: {
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

  getNegocios: async () => {
    try {
      const response = await http.get("/negocios/", {
        headers: {
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

  deleteNegocios: async (idNegocio) => {
    try {
      const response = await http.delete(`/negocios/deletar/${idNegocio}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getAllLeads: async () => {
    try {
      const response = await http.get("/leads", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response.data;
    } catch (error) {
      console.error(
        "Erro ao buscar leads:",
        error.response || error.message || error
      );
      throw error;
    }
  },

  getCategorias: async () => {
    try {
      const response = await http.get("/categoriaCliente/", {
        headers: {
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

  getOrigemCaptacao: async () => {
    try {
      const response = await http.get("/captacao/", {
        headers: {
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

  postFunil: async (nomeFunil, diasLimpeza, descricao, etapas) => {
    try {
      const response = await http.post(
        "/funil/cadastrar",
        {
          nome_funil: nomeFunil,
          dias_limpeza: diasLimpeza,
          descricao: descricao,
          etapas: etapas,
        },
        {
          headers: {
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

  putFunil: async (id, nomeFunil, diasLimpeza, descricao, etapas) => {
    try {
      const response = await http.put(
        `/funil/editar/${id}`,
        {
          nome_funil: nomeFunil,
          dias_limpeza: diasLimpeza,
          descricao: descricao,
          etapas: etapas,
        },
        {
          headers: {
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

  getAllFunil: async () => {
    try {
      const response = await http.get(`/funil/`, {
        headers: {
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

  getFunilporId: async (idFunil) => {
    try {
      const response = await http.get(`/funil/${idFunil}`, {
        headers: {
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

  removeFunil: async (idFunil) => {
    try {
      const response = await http.delete(`/funil/deletar/${idFunil}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  postLigarPessoa: async (idCliente, descricao) => {
    try {
      const response = await http.post(
        `/pessoasLigadas/cadastrar`,
        {
          id_cliente: idCliente,
          breve_descricao: descricao,
        },
        {
          headers: {
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

  getClientPorId: async (idCliente) => {
    try {
      const response = await http.get(`/clientes/${idCliente}`, {
        headers: {
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

  getEtapa: async () => {
    try {
      const response = await http.get("/etapa/", {
        headers: {
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
