<template>
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col mt-0">
            <h5 class="card-title">Meus imoveis</h5>
          </div>
          <div class="col-auto">
            <div class="stat text-primary">
              <i class="align-middle" data-feather="home"></i>
            </div>
          </div>
        </div>
        <h1 class="mt-1 mb-3">0{{ totalImovel }}</h1>
        <div class="mb-0">
          <span class="text-danger">
            <i class="mdi mdi-arrow-bottom-right"></i> 0
          </span>
          <span class="text-muted">Última semana</span>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col mt-0">
            <h5 class="card-title">Meus condomínios</h5>
          </div>
          <div class="col-auto">
            <div class="stat text-primary">
              <i class="align-middle" data-feather="building"></i>
            </div>
          </div>
        </div>
        <h1 class="mt-1 mb-3">00</h1>
        <div class="mb-0">
          <span class="text-danger">
            <i class="mdi mdi-arrow-bottom-right"></i> 0
          </span>
          <span class="text-muted">Última semana</span>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col mt-0">
            <h5 class="card-title">
              Meus Tickes <small class="text-warning">Aberto</small>
            </h5>
          </div>
          <div class="col-auto">
            <div class="stat text-primary">
              <i class="align-middle" data-feather="tag"></i>
            </div>
          </div>
        </div>
        <h1 class="mt-1 mb-3">0{{ ticketsAbertos }}</h1>
        <div class="mb-0">
          <span class="text-muted"
            ><small>
              <i class="fa fa-smile-o"></i> Sem problemas graves</small
            ></span
          >
          <span class="text-success">
            <i class="mdi mdi-arrow-bottom-right"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col mt-0">
            <h5 class="card-title">
              Meus Tickets <small class="text-success">Resolvidos</small>
            </h5>
          </div>
          <div class="col-auto">
            <div class="stat text-primary">
              <i class="align-middle" data-feather="users"></i>
            </div>
          </div>
        </div>
        <h1 class="mt-1 mb-3">0{{ ticketsResolvidos }}</h1>
        <div class="mb-0">
          <span class="text-muted">
            <small><i class="fa fa-clock"></i> Tempo de resposta </small></span
          >
          <span class="text-warning">
            <i class="mdi mdi-arrow-bottom-right"></i><small> 1 min</small>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../service/api/index";
import { jwtDecode } from "jwt-decode";
export default {
  name: "CardCompAdmin",
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      totalImovel: 0,
      totalConstrutora: 0,
      totalCondominio: 0,
      equipeZonu: 0,
      userAtivo: 0,
      userAguardando: 0,
      ticketsAbertos: 0,
      ticketsResolvidos: 0,
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;

    this.id_user = id_user;

    this.fetchAllConstrutoras();
    this.fetchAllImoveis();
    this.fetchAllusuarios();
    this.fetchAllTikets();
  },
  methods: {
    fetchAllConstrutoras() {
      api.listusuarios().then((res) => {
        let usuarios = res.data.response;

        let construtoras = usuarios.filter(
          (user, index, self) =>
            user.id_nivel === 3 &&
            index === self.findIndex((u) => u.id_user === user.id_user)
        );

        let timeZonu = usuarios.filter(
          (user, index, self) =>
            user.id_nivel === 2 &&
            index === self.findIndex((u) => u.id_user === user.id_user)
        );

        this.totalConstrutora = construtoras.length;
        this.equipeZonu = timeZonu.length;
      });
    },
    fetchAllusuarios() {
      api.listusuarios().then((res) => {
        let Allusuarios = res.data.response;

        let filteredUsuariosAtivos = Allusuarios.filter(
          (usuario) => usuario.id_user === 3 && usuario.id_status === 1
        );

        let filteredUsuariosAguardando = Allusuarios.filter(
          (usuario) => usuario.id_user === 3 && usuario.id_nivel === 2
        );

        this.userAtivo = filteredUsuariosAtivos.length;
        this.userAguardando = filteredUsuariosAguardando.length;
      });
    },
    fetchAllImoveis() {
      let id_user = this.id_user;
      api.listmyImoveis(id_user).then((res) => {
        let imoveis = res.data;

        this.totalImovel = imoveis.length;
      });
    },
    fetchAllTikets() {
      let id_user = this.id_user;
      api.listMyTickets(id_user).then((res) => {
        let tickets = res.data;

        let ticketsAbertos = tickets.filter(
          (ticket, index, self) =>
            ticket.status === 2 &&
            index === self.findIndex((u) => u.status === ticket.status)
        );

        let ticketsResolvidos = tickets.filter(
          (ticket, index, self) =>
            ticket.status === 1 &&
            index === self.findIndex((u) => u.status === ticket.status)
        );

        this.ticketsResolvidos = ticketsResolvidos.length;
        this.ticketsAbertos = ticketsAbertos.length;
      });
    },
    fetchAllCondominios() {
      let id_user = this.id_user;
      api.listcondominio(id_user).then((res) => {
        let condominios = res.data;
        this.totalCondominio = condominios.length;
      });
    },
  },
};
</script>
