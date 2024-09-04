<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle js-sidebar-toggle">
      <i class="hamburger align-self-center"></i>
    </a>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <li class="nav-item dropdown">
          <a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
            <div class="position-relative">
              <i class="align-middle" data-feather="bell"></i>
              <span class="indicator">{{ totalTickets }}</span>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
            <div class="dropdown-menu-header">
              {{ totalTickets }} Novas Notificações
            </div>
            <div class="list-group" v-for="item in listTikects">
              <a href="#" class="list-group-item">
                <div class="row g-0 align-items-center">
                  <div class="col-2">
                    <div class="avatar-null img-fluid rounded me-1" alt="Avatar">
                      {{ iniciaisUser }}
                    </div>
                  </div>
                  <div class="col-10">
                    <div class="text-dark">
                      {{ item.usuario.nome }} {{ item.usuario.sobrenome }}
                    </div>
                    <div class="text-muted small mt-1">
                      {{ truncate(item.mensagem, 20) }}
                    </div>

                    <div class="text-muted small mt-1">
                      {{ formatDate(item.data_pergunta) }}
                      <span class="badge text-bg-warning">{{
                        item.assunto
                      }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="dropdown-menu-footer">
              <a href="#" class="text-muted">Mostrar todas as Solicitações</a>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
            <div class="position-relative">
              <i class="align-middle" data-feather="message-square"></i>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
            <div class="dropdown-menu-header">
              <div class="position-relative">0 Novas mensagens</div>
            </div>
            <div class="list-group">
              <!-- <a href="#" class="list-group-item">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <img src="../../../assets/image/avatars/avatar-5.jpg"
                                            class="avatar img-fluid rounded-circle" alt="Vanessa Tucker">
                                    </div>
                                    <div class="col-10 ps-2">
                                        <div class="text-dark">Vanessa Tucker</div>
                                        <div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.
                                        </div>
                                        <div class="text-muted small mt-1">15m ago</div>
                                    </div>
                                </div>
                            </a> -->
            </div>
            <div class="dropdown-menu-footer">
              <a href="#" class="text-muted">Mostrar todas as Mensagens</a>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
            <i class="align-middle" data-feather="settings"></i>
          </a>

          <a v-if="image == !null" class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
            data-bs-toggle="dropdown">
            <img :src="`https://www.zonu.com.br/api/public${image}`" class="avatar img-fluid rounded me-1"
              alt="Imagem de perfil" />
            <span class="text-dark">{{ nome }} {{ sobrenome }}</span>
          </a>
          <a v-if="image == null || image == '/avatar/default-avatar.png'"
            class="nav-link dropdown-toggle d-flex align-items-center" href="#" data-bs-toggle="dropdown">
            <div class="avatar-null img-fluid rounded me-1" alt="Avatar">
              {{ iniciais }}
            </div>
            <span class="text-dark">{{ nome }} {{ sobrenome }}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="/seu-perfil"><i class="align-middle me-1" data-feather="user"></i> Perfil</a>

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#termosModal"><i
                class="align-middle me-1" data-feather="file"></i> Termos &
              Condições</a>
            <a class="dropdown-item" target="_blank"
              href="https://wa.me/5583998587672?text=Ol%C3%A1%2C%20preciso%20de%20um%20suporte%20na%20plataforma%20Zonu%20%3A)"><i
                class="align-middle me-1" data-feather="help-circle"></i> Help
              Center</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="handleLogout" href="#"><i class="fa fa-power-off"></i> Sair</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <div v-if="bannerProfile" class="msgPerfil">
    <h6 class="text-perfil">
      <img src="../../../assets/images/icons/iconStars.png" width="25" alt="" />
      Seu perfil não está completo <a><i class="iconClose fa fa-close"></i></a>
    </h6>
  </div>

  <div style="position: absolute !important" class="modal fade" id="termosModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Termos e Condições
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-html="termos"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>

  <div style="position: absolute !important" class="modal fade" id="privacidadeModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Privacidade</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-html="privacidade"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { jwtDecode } from "jwt-decode";
import api from "../../../service/api/index";
import { format, parseISO } from "date-fns";
import _ from "lodash";

export default {
  name: "NavBar",
  data() {
    return {
      image: null,
      nome: "",
      sobrenome: "",
      email: "",
      iniciais: "",
      token: localStorage.getItem("token"),
      totalTickets: 0,
      listTikects: [],
      iniciaisUser: "",
      bannerProfile: false,
      nivel: "",
      termos: [],
    };
  },
  mounted() {
    let decode = jwtDecode(this.token);

    this.image = null;
    this.nome = decode.nome;
    this.sobrenome = decode.sobrenome;
    this.email = decode.email;
    this.nivel = decode.id_nivel;
    this.idUser = decode.id_user;

    if (decode.id_nivel == 1) {
      this.bannerProfile = false;
    } else {
      this.bannerProfile = true;
    }

    const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
    this.iniciais = iniciais;


    if (this.nivel == 1) {
      api
        .listAllTickets()
        .then((res) => {
          if (Array.isArray(res.data)) {
            const filteredTickets = res.data.filter(
              (ticket) => ticket.status === 2
            );

            this.totalTickets = filteredTickets.length;

            this.listTikects = filteredTickets;

            if (filteredTickets.length > 0) {
              const firstTicketUser = filteredTickets[0].usuario;
              this.iniciaisUser = `${firstTicketUser.nome.charAt(
                0
              )}${firstTicketUser.sobrenome.charAt(0)}`.toUpperCase();
            }
          } else {
            console.log(
              "Resposta não contém um array ou está em um formato não esperado"
            );
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar tickets: ", error);
        });
    } else if (this.nivel == 2) {
      let id_user = this.idUser;

      api
        .listMyTickets(id_user)
        .then((res) => {
          if (Array.isArray(res.data)) {
            const filteredTickets = res.data.filter(
              (ticket) => ticket.status === 1
            );

            this.totalTickets = filteredTickets.length;
            this.listTikects = filteredTickets;

            if (filteredTickets.length > 0) {
              const firstTicketUser = filteredTickets[0].usuario;
              this.iniciaisUser = `${firstTicketUser.nome.charAt(
                0
              )}${firstTicketUser.sobrenome.charAt(0)}`.toUpperCase();
            }
          } else {
            console.log(
              "Resposta não contém um array ou está em um formato não esperado"
            );
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar tickets: ", error);
        });
    }

    this.fetchProgress();
    this.fetchTermos();
    this.fetchPrivacidade();
  },
  methods: {
    fetchProgress() {
      let id_user = this.idUser;
      api.progress(id_user).then((res) => {
        let perfil = res.data.perfil;
        let capa = res.data.logo_capa;
        let imovel = res.data.imovel;
        let publicacao = res.data.publicacao;

        if (perfil == 1 && capa == 1 && imovel == 1 && publicacao == 1) {
          this.bannerProfile = false;
        } else {
          this.bannerProfile = true;
        }
      });
    },

    fetchTermos() {
      api.termos().then((res) => {
        // console.log("aqui esta os termos ===> ", res)
        this.termos = res.data.response[0].texto;
      });
    },

    fetchPrivacidade() {
      api.privacidade().then((res) => {
        // console.log("aqui esta a privacidade ===> ", res)
        this.privacidade = res.data.response[0].texto;
      });
    },

    truncate(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + "..."; // Trunca o texto e adiciona reticências
      }
      return text;
    },

    formatDate(dateString) {
      const date = parseISO(dateString);
      return format(date, "PPpp"); // 'PPpp' é um exemplo de formato que inclui a data completa e a hora
    },

    handleLogout() {
      localStorage.clear();

      window.location.href = "/login";
      return false;
    },
  },
};
</script>
