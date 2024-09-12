<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle js-sidebar-toggle" href="/" style="width: 107px">
      <img src="../../../assets/images/logo-transparente.png" alt="" />
    </a>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <li class="nav-item dropdown" v-if="nivel == 1">
          <a style="text-decoration: none !important; margin-left: -20%" class="nav-icon dropdown-toggle"
            href="/dashboard-admin">
            <div class="position-relative">
              <i class="align-middle" data-feather="monitor"></i>
              <span style="font-size: 15px"> Dashboard</span>
            </div>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a style="text-decoration: none !important; margin-left: -20%" class="nav-icon dropdown-toggle"
            href="/filtro-imovel">
            <div class="position-relative">
              <i class="align-middle" data-feather="layers"></i>
              <span style="font-size: 15px"> Imobiliária Virtual</span>
            </div>
          </a>
        </li>

        <li class="nav-item dropdown" v-if="nivel != 6">
          <a style="text-decoration: none !important; margin-left: -20%" class="nav-icon dropdown-toggle"
            href="/meus-plano" id="alertsDropdown">
            <div class="position-relative">
              <i class="align-middle" data-feather="dollar-sign"></i>
              <span style="font-size: 15px"> Meu plano</span>
            </div>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a style="text-decoration: none !important; margin-left: -20%" class="nav-icon dropdown-toggle"
            href="/seus-links" id="alertsDropdown">
            <div class="position-relative">
              <i class="align-middle" data-feather="grid"></i>
              <span style="font-size: 15px"> Meus links</span>
            </div>
          </a>
        </li>
        {{
          console.log(nivel)
        }}
        <li class="nav-item dropdown" v-if="nivel !== 4 && nivel !== 6">
          <a style="text-decoration: none !important; margin-left: -10%" class="nav-icon dropdown-toggle"
            href="/meus-usuarios" id="alertsDropdown">
            <div class="position-relative">
              <i class="align-middle" data-feather="users"></i>
              <span style="font-size: 15px"> Meus usuarios</span>
            </div>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a style="text-decoration: none !important; margin-left: -10%" class="nav-icon dropdown-toggle"
            href="/seu-ticket" id="alertsDropdown">
            <div class="position-relative">
              <i class="align-middle" data-feather="tag"></i>
              <span style="font-size: 15px"> Suporte</span>
            </div>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a style="text-decoration: none !important; margin-left: -20%" class="nav-icon dropdown-toggle"
            href="/seu-crm" id="alertsDropdown">
            <div class="position-relative">
              <i class="align-middle" data-feather="tag"></i>
              <span style="font-size: 15px"> CRM</span>
            </div>
          </a>
        </li>
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
            <a class="dropdown-item" href="/seu-perfil-imcor"><i class="align-middle me-1" data-feather="user"></i>
              Perfil</a>

            <div class="dropdown-divider"></div>

            <a class="dropdown-item" href="/integrate"><i class="align-middle me-1" data-feather="link"></i>
              Integração</a>

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/seu-tutorial-imcor"><i class="align-middle me-1" data-feather="play"></i>
              Tutoriais</a>
            <!-- <div class="dropdown-divider"></div>
            <a
              class="dropdown-item"
              target="_blank"
              href="https://wa.me/5583998587672?text=Ol%C3%A1%2C%20preciso%20de%20um%20suporte%20na%20plataforma%20Zonu%20%3A)"
              ><i class="align-middle me-1" data-feather="folder"></i>
              Arquivos</a
            > -->

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#termosModal"><i
                class="align-middle me-1" data-feather="file"></i> Termos &
              Condições</a>
            <div class="dropdown-divider"></div>
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
  {{ console.log("nivel para aparecer a progress bar ===> ", nivel) }}
  <div v-if="nivel !== 1 && nivel !== 6 && status == 1">
    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar overflow-visible text-dark bg-warning" :style="{ width: barprogress + '%' }">
        Seu período de teste
      </div>
    </div>
  </div>
  <img src="../../../assets/images/imgLogoZonu.jpg" style="position: relative" alt="" />
  <div class="container-fluid p-0">
    <h1 class="h3 text-light" style="
        position: absolute;
        margin-top: -10%;
        margin-left: 2%;
        font-size: 40px;
      ">
      <strong v-if="nivel == 5 || nivel == 6">Olá Imobiliária</strong>
      <strong v-if="nivel == 1 || nivel == 2">Olá Admim</strong>
      <strong v-if="nivel == 4">Olá Corretor</strong>
    </h1>
    <h1 class="h3 text-light" style="position: absolute; margin-top: -6.5%; margin-left: 2%">
      Esse é seu espaço, seja bem-vindo!
    </h1>
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
import teste from "../../../service/api/teste/index";
import { format, parseISO } from "date-fns";
import apiPayment from '../../../service/api/payment/index'

export default {
  name: "NavBarImob",
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

      status: null,
      barprogress: 0,

      idUser: '',
      customerId: '',
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

    this.fetchTermos();
    this.fetchPrivacidade();

    this.getPeriodoTeste();

    this.fetchCobranca()
  },
  methods: {
    fetchCobranca() {
      apiPayment.getCobranca(this.idUser).then((res) => {
        if (res.status === 200) {
          // console.log(res.data.dados)
          res.data.dados.map((dado) => {
            console.log("Aqui estao os dados ===> ", dado)
          })
        }
      })
    },

    fetchTermos() {
      api.termos().then((res) => {
        this.termos = res.data.response[0].texto;
      });
    },

    async getPeriodoTeste() {
      let id_user = this.idUser;
      // console.log(id_user);
      try {
        const res = await teste.myPeriodoTeste(id_user);
        console.log("Aqui ta o periodo de Teste ====>", res.data);

        this.customerId = res.data.customerId

        const dataInicio = new Date(res.data.data_inicio);
        const hoje = new Date();
        const diasRestantes =
          7 - Math.floor((hoje - dataInicio) / (1000 * 60 * 60 * 24));

        // console.log("Dias Restantes:", diasRestantes);

        if (diasRestantes <= 0 && res.data.status === 1) {
          window.location.href = "/pagamento-zonu";
        } else {
          this.status = res.data.status;
          this.updateProgressBar(diasRestantes);
        }
      } catch (error) {
        console.error("Erro ao buscar o período de teste:", error);
      }
    },
    updateProgressBar(diasRestantes) {
      const totalDias = 7;
      const progresso = Math.max(0, (diasRestantes / totalDias) * 100); // Garantir que a barra não fique negativa
      this.barprogress = progresso.toFixed(2); // Garantir que seja um valor com duas casas decimais
      console.log("Progresso da Barra:", this.barprogress);
    },

    fetchPrivacidade() {
      api.privacidade().then((res) => {
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
      return format(date, "PPpp");
    },

    handleLogout() {
      localStorage.clear();

      window.location.href = "/login";
      return false;
    },
  },
};
</script>
