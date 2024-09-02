<template>
  <nav id="sidebar" class="sidebar js-sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-content js-simplebar">
      <a class="sidebar-brand" href="/">
        <span class="align-middle">
          <img src="../../../assets/images/logo.svg" class="logomin" alt="" srcset="" />
        </span>
      </a>

      <hr />

      <ul v-if="viewAdmin" class="sidebar-nav" style="margin-top: -20px !important">
        <li class="sidebar-header">Administrador</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/dashboard-admin">
            <i class="align-middle" data-feather="sliders"></i>
            <span class="align-middle">Dashboard <span class="badge text-bg-warning">Zonu</span></span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/usuarios">
            <i class="align-middle" data-feather="user-plus"></i>
            <span class="align-middle">Usuários <span class="badge text-bg-info">{{ totalUsers }}</span>
            </span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-plano">
            <i class="align-middle" data-feather="dollar-sign"></i>
            <span class="align-middle">Planos </span>
          </a>
        </li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/clientes">
            <i class="align-middle" data-feather="user-check"></i>
            <span class="align-middle">Clientes
              <span class="badge text-bg-primary">{{ totalClientes }}</span>
            </span>
          </a>
        </li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/messages">
            <i class="align-middle" data-feather="message-circle"></i>
            <span class="align-middle">Mensagens </span>
          </a>
        </li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/filtro-imovel">
            <i class="align-middle" data-feather="grid"></i>
            <span class="align-middle">Imobiliária Virtual </span>
          </a>
        </li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/seu-tutorial">
            <i class="align-middle" data-feather="play"></i>
            <span class="align-middle"> Tutoriais </span>
          </a>
        </li>
        <!-- <li class="sidebar-item">
          <a class="sidebar-link" href="/leads">
            <i class="align-middle" data-feather="user-plus"></i>
            <span class="align-middle"
              >Leads Site
            </span>
          </a>
         </li> -->
        <li class="sidebar-header">Configurações iniciais</li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/proximidades">
            <i class="align-middle" data-feather="check-square"></i>
            <span class="align-middle">Proximidades
              <span class="badge text-bg-success">{{
                totalProximidades
              }}</span></span>
          </a>
        </li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/caracteristica">
            <i class="align-middle" data-feather="check-square"></i>
            <span class="align-middle">Caracteristica
              <span class="badge text-bg-success">{{
                totalCaracteristica
              }}</span></span>
          </a>
        </li>
        <li class="sidebar-header">Pedidos de suporte</li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/list-ticket">
            <i class="align-middle" data-feather="tag"></i>
            <span class="align-middle">Tickets
              <span class="badge text-bg-danger">{{ totalTickets }}</span></span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/termos">
            <i class="align-middle" data-feather="file"></i>
            <span class="align-middle">Termos & Condições </span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/privacidade">
            <i class="align-middle" data-feather="file"></i>
            <span class="align-middle">Privacidade </span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/token">
            <i class="align-middle" data-feather="key"></i>
            <span class="align-middle">Token ASAAS </span>
          </a>
        </li>

        <li class="sidebar-header">Visão cliente</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/dashboard">
            <i class="align-middle" data-feather="sliders"></i>
            <span class="align-middle">Dashboard Cliente</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-condominio">
            <i class="align-middle" data-feather="plus"></i>
            <span class="align-middle">Novo condomínio</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-imovel">
            <i class="align-middle" data-feather="home"></i>
            <span class="align-middle">Novo imóvel</span>
          </a>
        </li>
      </ul>

      <ul v-if="viewClient" class="sidebar-nav" style="margin-top: -20px !important">
        <li class="sidebar-header">Gestão</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/dashboard">
            <i class="align-middle" data-feather="sliders"></i>
            <span class="align-middle">Dashboard</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-imovel">
            <i class="align-middle" data-feather="home"></i>
            <span class="align-middle">Novo imóvel</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-condominio">
            <i class="align-middle" data-feather="plus"></i>
            <span class="align-middle">Novo condomínio</span>
          </a>
        </li>

        <li class="sidebar-header">Suporte</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-ticket">
            <i class="align-middle" data-feather="tag"></i>
            <span class="align-middle">Tickets <span class="badge text-bg-danger">0</span></span>
          </a>
        </li>
      </ul>

      <ul v-if="viewSuporte" class="sidebar-nav" style="margin-top: -20px !important">
        <li class="sidebar-header">Atendimento & Suporte</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/list-ticket">
            <i class="align-middle" data-feather="tag"></i>
            <span class="align-middle">Tickets
              <span class="badge text-bg-danger">{{ totalTickets }}</span></span>
          </a>
        </li>
        <li class="sidebar-item">
          <a class="sidebar-link" href="/clientes">
            <i class="align-middle" data-feather="user-check"></i>
            <span class="align-middle">Clientes
              <span class="badge text-bg-primary">{{ totalClientes }}</span>
            </span>
          </a>
        </li>

        <li class="sidebar-header">Visão cliente</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/dashboard">
            <i class="align-middle" data-feather="sliders"></i>
            <span class="align-middle">Dashboard <span class="badge text-bg-info">Teste</span>
            </span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-condominio">
            <i class="align-middle" data-feather="plus"></i>
            <span class="align-middle">Novo condomínio</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="/novo-imovel">
            <i class="align-middle" data-feather="home"></i>
            <span class="align-middle">Novo imóvel</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import api from "../../../service/api/index";
import { jwtDecode } from "jwt-decode";
export default {
  name: "SideBar",

  data() {
    return {
      token: localStorage.getItem("token"),
      isCollapsed: this.defaultCollapsed,
      totalTickets: 0,
      viewClient: false,
      viewAdmin: false,
      viewSuporte: false,
      viewLogo: false,
      totalUsers: 0,
      totalClientes: 0,
      totalCaracteristica: 0,
      totalProximidades: 0,
    };
  },

  created() {
    if (this.$route.path === "/novo-imovel") {
      this.isCollapsed = true;
    }

    this.fetchUsuarios();
    this.fetchClientes();
    this.fetchCaracteristica();
    this.fetchProximidades();
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);

    if (decode.id_nivel == 1) {
      this.viewAdmin = true;
      this.viewClient = false;
      this.viewSuporte = false;
      this.viewLogo = false;
    } else if (decode.id_nivel == 2) {
      this.viewAdmin = false;
      this.viewClient = false;
      this.viewSuporte = true;
      this.viewLogo = false;
    } else {
      this.viewAdmin = false;
      this.viewClient = true;
      this.viewSuporte = false;
      this.viewLogo = true;
    }

    if (!token || token === "null") {
      window.location.href = "/";
    } else {
      try {
        if (decode.id_status == 2) {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
      }
    }

    api
      .listAllTickets()
      .then((res) => {
        if (Array.isArray(res.data)) {
          const filteredTickets = res.data.filter(
            (ticket) => ticket.status === 2
          );

          this.totalTickets = filteredTickets.length;
        } else {
          console.log(
            "Resposta não contém um array ou está em um formato não esperado"
          );
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar tickets: ", error);
      });
  },

  methods: {
    fetchUsuarios() {
      api.listusuarios().then((res) => {
        let usuarios = res.data.response;
        // Filtrar os usuários com id_nivel igual a 1
        const idsAdicionados = new Set();

        let usuariosFiltrados = usuarios.filter((user) => {
          if (
            (user.id_nivel === 1 || user.id_nivel === 2) &&
            !idsAdicionados.has(user.id_user)
          ) {
            idsAdicionados.add(user.id_user);
            return true;
          }
          return false;
        });
        // Atribuir os usuários filtrados ao estado listUsers
        this.listUsers = usuariosFiltrados;
        // Atualizar o total de usuários filtrados
        this.totalUsers = usuariosFiltrados.length;
      });
    },

    fetchClientes() {
      api.listusuarios().then((res) => {
        let clientes = res.data.response;
        // Filtrar os usuários com id_nivel igual a 1
        let clientesFiltrados = clientes.filter(
          (cliente) =>
            cliente.id_nivel === 3 ||
            cliente.id_nivel === 4 ||
            cliente.id_nivel === 5 ||
            cliente.id_nivel === 7
        );
        // Atribuir os usuários filtrados ao estado listUsers
        this.totalClientes = clientesFiltrados.length;
      });
    },

    fetchCaracteristica() {
      api.listcaracteristica().then((res) => {
        res.data.response.map((caracteristica) => {
          if (caracteristica.id_user == null || caracteristica.id_user == 1) {
            this.totalCaracteristica += 1;
          } else {
            return;
          }
        });
        // console.log("res ===> ", res.data.response);
        // console.log("lista ===>", this.lists);
        // this.lists = res.data.response;

        // this.totalCaracteristica = this.lists.length;
      });
    },

    fetchProximidades() {
      api.listproximidade().then((res) => {
        res.data.response.map((proximidade) => {
          if (proximidade.id_user == null || proximidade.id_user == 1) {
            this.totalProximidades += 1;
          } else {
            return;
          }
        });
        // console.log(res.data.response);
        // this.listsProximidades = res.data.response;
        // this.totalProximidades = this.listsProximidades.length;
      });
    },
  },
};
</script>
