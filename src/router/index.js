import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SelectView from "../views/auth/SelectView.vue";
import CadastroConstrutoraView from "../views/auth/CadastroConstrutoraView.vue";
import CadastroCorretorView from "../views/auth/CadastroCorretorView.vue";
import CadastroImobiliariaView from "../views/auth/CadastroImobiliariaView.vue";
import RecoveryView from "../views/auth/RecoveryView.vue";
import InitView from "../views/dashboard/init/CadFirstImovelView.vue";
import EnviarDocView from "../views/doc/SendDocView.vue";
import PlanoView from "../views/dashboard/plano/cadPlanoView.vue";
import TokenView from "../views/dashboard/token/cadTokenView.vue";
import MainView from "../views/dashboard/MainView.vue";
import MainViewAdmin from "../views/dashboard/MainViewAdmin.vue";
import PaymentView from "../views/payment/paymentView.vue";
import ImobiliariaView from "../views/imobiliaria/imobiView.vue";
import FiltroImovelView from "../views/imobiliaria/pesquisaFiltroView.vue";
import CadImovelView from "../views/dashboard/CadImovelView.vue";
import CadCondominioView from "../views/dashboard/CadCondominioView.vue";
import MyPlanView from "../views/dashboard/MyPlanView.vue";
import CaracteristicaView from "../views/dashboard/CaracteristicaView.vue";
import ProximidadesView from "../views/dashboard/ProximidadesView.vue";
import ImovelView from "../views/dashboard/pages/ImovelView.vue";
import PerfilView from "../views/dashboard/profile/PerfilView.vue";
import UserView from "../views/dashboard/users/CadUsersView.vue";
import ClienteView from "../views/dashboard/lists/ClienteListView.vue";
import NovoTicketView from "../views/dashboard/ticket/SendTicketView.vue";
import ListTicketView from "../views/dashboard/ticket/ResivTicketView.vue";
import TermosView from "../views/dashboard/termos/CondicoesView.vue";
import PrivacidadeView from "../views/dashboard/termos/PrivacidadeView.vue";
import SeuImovelView from "../views/dashboard/temp/ImovelView.vue";
import LinkView from "../views/dashboard/profile/myLinksView.vue";
import MeuPlanoView from "../views/dashboard/plano/myPlanoView.vue";

import md5 from "crypto-js/md5";
import MyUsersView from "@/views/dashboard/users/myUsersView.vue";
import LeadsView from "@/components/leads/LeadsView.vue";
import ImobiTicketView from "@/views/dashboard/ticket/imobiTicketView.vue";
import MessagesView from "@/views/dashboard/messages/messagesView.vue";
import PerfilImobCorView from "@/views/dashboard/profile/PerfilImobCorView.vue";
import TutorialImobiView from "@/views/dashboard/tutoriais/TutorialImobiView.vue";
import TutorialAdmimView from "@/views/dashboard/tutoriais/TutorialAdmimView.vue";
import CadastroPessoaFisicaView from "@/views/auth/CadastroPessoaFisicaView.vue";
import Countdown from "@/views/countdown/Countdown.vue";
import CrmView from "@/views/dashboard/crm/CrmView.vue";
import CrmConfigView from "@/views/dashboard/crm/CrmConfigView.vue";
import CrmContatoView from "@/views/dashboard/crm/CrmContatoView.vue";
import CrmVisaoEtapasView from "@/views/dashboard/crm/CrmVisaoEtapasView.vue";
import CrmListClientView from "@/views/dashboard/crm/CrmListClientView.vue";
import CrmImoveisReserView from "@/views/dashboard/crm/CrmImoveisReserView.vue";
import CrmClientCompatView from "@/views/dashboard/crm/CrmClientCompatView.vue";
import CrmImovCompatView from "@/views/dashboard/crm/CrmImovCompatView.vue";
import CrmNegoEncerView from "@/views/dashboard/crm/CrmNegoEncerView.vue";
import CrmShareImovView from "@/views/dashboard/crm/CrmShareImovView.vue";
import CrmEditarFunilView from "@/views/dashboard/crm/CrmEditarFunilView.vue";
import IntegratelView from "@/views/integrate/integraView.vue";

const generateMD5 = () => {
  return md5(new Date().toISOString()).toString();
};

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/seu-imovel",
    name: "seu-imovel",
    component: SeuImovelView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "countdown",
    component: Countdown,
  },
  {
    path: "/cadastro-construtora",
    name: "cadastro-construtora",
    component: CadastroConstrutoraView,
  },
  {
    path: "/cadastro-corretor",
    name: "cadastro-corretor",
    component: CadastroCorretorView,
  },
  {
    path: "/cadastro-imobiliaria",
    name: "cadastro-imobiliaria",
    component: CadastroImobiliariaView,
  },
  {
    path: "/cadastro-pessoa-fisica",
    name: "cadastro pessoa fisica",
    component: CadastroPessoaFisicaView,
  },
  {
    path: "/enviar-documentos",
    name: "enviar-documentos",
    component: EnviarDocView,
  },
  {
    path: "/select",
    name: "select",
    component: SelectView,
  },
  {
    path: "/recovery",
    name: "recovery",
    component: RecoveryView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: MainView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/dashboard/${hash}`);
    },
  },
  {
    path: "/dashboard/:hash",
    name: "DashboardWithHash",
    component: MainView,
  },
  {
    path: "/seu-crm",
    name: "crm",
    component: CrmView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crm/${hash}`);
    },
  },
  {
    path: "/seu-crm/:hash",
    name: "CrmWithHash",
    component: CrmView,
  },

  {
    path: "/seu-crmconfig",
    name: "crmconfig",
    component: CrmConfigView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmconfig/${hash}`);
    },
  },
  {
    path: "/seu-crmconfig/:hash",
    name: "CrmConfgiWithHash",
    component: CrmConfigView,
  },

  {
    path: "/seu-crmcontato",
    name: "crmcontato",
    component: CrmContatoView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmcontato/${hash}`);
    },
  },
  {
    path: "/seu-crmcontato/:hash",
    name: "CrmContatoiWithHash",
    component: CrmContatoView,
  },
  {
    path: "/seu-crmvisaoetapas",
    name: "crmvisaoetapas",
    component: CrmVisaoEtapasView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmvisaoetapas/${hash}`);
    },
  },
  {
    path: "/seu-crmvisaoetapas/:hash",
    name: "CrmVisaoEtapasWithHash",
    component: CrmVisaoEtapasView,
  },
  {
    path: "/seu-crmlistacliente",
    name: "crmlistaClient",
    component: CrmListClientView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmlistacliente/${hash}`);
    },
  },
  {
    path: "/seu-crmlistacliente/:hash",
    name: "CrmListaClientWithHash",
    component: CrmListClientView,
  },
  {
    path: "/seu-crmimoveisreser",
    name: "crmimovreser",
    component: CrmImoveisReserView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmimoveisreser/${hash}`);
    },
  },
  {
    path: "/seu-crmimoveisreser/:hash",
    name: "CrmImovReserWithHash",
    component: CrmImoveisReserView,
  },
  {
    path: "/seu-crmclientcompat",
    name: "crmclientcompat",
    component: CrmClientCompatView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmclientcompat/${hash}`);
    },
  },
  {
    path: "/seu-crmclientcompat/:hash",
    name: "CrmClientCompatWithHash",
    component: CrmClientCompatView,
  },
  {
    path: "/seu-crmimovcompat",
    name: "crmimovcompat",
    component: CrmImovCompatView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmimovcompat/${hash}`);
    },
  },
  {
    path: "/seu-crmimovcompat/:hash",
    name: "CrmImovCompatWithHash",
    component: CrmImovCompatView,
  },
  {
    path: "/seu-crmnegoencer",
    name: "crmnegoencer",
    component: CrmNegoEncerView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmnegoencer/${hash}`);
    },
  },
  {
    path: "/seu-crmnegoencer/:hash",
    name: "CrmNegoEncerWithHash",
    component: CrmNegoEncerView,
  },
  {
    path: "/seu-crmshareimov",
    name: "crmshareimov",
    component: CrmShareImovView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmshareimov/${hash}`);
    },
  },
  {
    path: "/seu-crmshareimov/:hash",
    name: "CrmShareImovWithHash",
    component: CrmShareImovView,
  },
  {
    path: "/seu-crmeditfunil",
    name: "crmeditfunil",
    component: CrmEditarFunilView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-crmeditfunil/${hash}`);
    },
  },
  {
    path: "/seu-crmeditfunil/:hash",
    name: "CrmEditFunilWithHash",
    component: CrmEditarFunilView,
  },

  {
    path: "/primeiro-acesso",
    name: "primeiro-acesso",
    component: InitView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/primeiro-acesso/${hash}`);
    },
  },
  {
    path: "/primeiro-acesso/:hash",
    name: "PrimeiroWithHash",
    component: InitView,
  },

  {
    path: "/token",
    name: "token",
    component: TokenView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/token/${hash}`);
    },
  },
  {
    path: "/token/:hash",
    name: "TokenWithHash",
    component: TokenView,
  },

  {
    path: "/sua-imobiliaria-virtual",
    name: "sua-imobiliaria-virtual",
    component: ImobiliariaView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/sua-imobiliaria-virtual/${hash}`);
    },
  },
  {
    path: "/sua-imobiliaria-virtual/:hash",
    name: "ImobiliariaWithHash",
    component: ImobiliariaView,
  },
  {
    path: "/filtro-imovel",
    name: "filtro-imovel",
    component: FiltroImovelView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/filtro-imovel/${hash}`);
    },
  },
  {
    path: "/filtro-imovel/:hash",
    name: "filtroWithHash",
    component: FiltroImovelView,
  },
  {
    path: "/seu-ticket",
    name: "seu-ticket",
    component: ImobiTicketView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-ticket/${hash}`);
    },
  },
  {
    path: "/seu-ticket/:hash",
    name: "SeuTicketWithHash",
    component: ImobiTicketView,
  },
  {
    path: "/pagamento-zonu",
    name: "pagamento-zonu",
    component: PaymentView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/pagamento-zonu/${hash}`);
    },
  },
  {
    path: "/pagamento-zonu/:hash",
    name: "pagamentoWithHash",
    component: PaymentView,
  },
  {
    path: "/dashboard-admin",
    name: "dashboard-admin",
    component: MainViewAdmin,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/dashboard-admin/${hash}`);
    },
  },
  {
    path: "/dashboard-admin/:hash",
    name: "DashboardAdminWithHash",
    component: MainViewAdmin,
  },
  {
    path: "/novo-plano",
    name: "novo-plano",
    component: PlanoView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/novo-plano/${hash}`);
    },
  },
  {
    path: "/novo-plano/:hash",
    name: "PlanoWithHash",
    component: PlanoView,
  },
  {
    path: "/novo-imovel",
    name: "novo-imovel",
    component: CadImovelView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/novo-imovel/${hash}`);
    },
  },
  {
    path: "/novo-imovel/:hash",
    name: "NovoImovelWithHash",
    component: CadImovelView,
  },
  {
    path: "/caracteristica",
    name: "caracteristica",
    component: CaracteristicaView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/caracteristica/${hash}`);
    },
  },
  {
    path: "/caracteristica/:hash",
    name: "CaracteristicaWithHash",
    component: CaracteristicaView,
  },
  {
    path: "/novo-condominio",
    name: "novo-condominio",
    component: CadCondominioView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/novo-condominio/${hash}`);
    },
  },
  {
    path: "/novo-condominio/:hash",
    name: "NovoCondominioWithHash",
    component: CadCondominioView,
  },
  {
    path: "/proximidades",
    name: "proximidades",
    component: ProximidadesView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/proximidades/${hash}`);
    },
  },
  {
    path: "/proximidades/:hash",
    name: "ProximidadesWithHash",
    component: ProximidadesView,
  },
  {
    path: "/meu-plano",
    name: "meu-plano",
    component: MyPlanView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/meu-plano/${hash}`);
    },
  },
  {
    path: "/meu-plano/:hash",
    name: "MeuPlanoWithHash",
    component: MyPlanView,
  },
  {
    path: "/imovel",
    name: "imovel",
    component: ImovelView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/imovel/${hash}`);
    },
  },
  {
    path: "/imovel/:hash",
    name: "ImovelWithHash",
    component: ImovelView,
  },
  {
    path: "/seu-perfil",
    name: "perfil",
    component: PerfilView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-perfil/${hash}`);
    },
  },
  {
    path: "/seu-perfil/:hash",
    name: "PerfilWithHash",
    component: PerfilView,
  },

  {
    path: "/integrate",
    name: "integrate",
    component: IntegratelView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/integrate/${hash}`);
    },
  },
  {
    path: "/integrate/:hash",
    name: "IntegrateWithHash",
    component: IntegratelView,
  },
  {
    path: "/seu-perfil-imcor",
    name: "perfilImobiCor",
    component: PerfilImobCorView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-perfil-imcor/${hash}`);
    },
  },
  {
    path: "/seu-perfil-imcor/:hash",
    name: "PerfilImobiCorWithHash",
    component: PerfilImobCorView,
  },
  {
    path: "/seu-tutorial-imcor",
    name: "tutorialImobiCor",
    component: TutorialImobiView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-tutorial-imcor/${hash}`);
    },
  },
  {
    path: "/seu-tutorial-imcor/:hash",
    name: "TutorialImobiCorWithHash",
    component: TutorialImobiView,
  },
  {
    path: "/seu-tutorial",
    name: "tutorial",
    component: TutorialAdmimView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-tutorial/${hash}`);
    },
  },

  {
    path: "/seu-tutorial/:hash",
    name: "TutorialWithHash",
    component: TutorialAdmimView,
  },
  {
    path: "/seus-links",
    name: "links",
    component: LinkView,
  },
  {
    path: "/meus-plano",
    name: "meuPlano",
    component: MeuPlanoView,
  },
  {
    path: "/meus-usuarios",
    name: "meusUsuarios",
    component: MyUsersView,
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: UserView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/usuarios/${hash}`);
    },
  },
  {
    path: "/usuarios/:hash",
    name: "UsuariosWithHash",
    component: UserView,
  },
  {
    path: "/clientes",
    name: "clientes",
    component: ClienteView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/clientes/${hash}`);
    },
  },
  {
    path: "/clientes/:hash",
    name: "ClientesWithHash",
    component: ClienteView,
  },
  {
    path: "/novo-ticket",
    name: "novo-ticket",
    component: NovoTicketView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/novo-ticket/${hash}`);
    },
  },
  {
    path: "/novo-ticket/:hash",
    name: "NovoTicketWithHash",
    component: NovoTicketView,
  },
  {
    path: "/list-ticket",
    name: "list-ticket",
    component: ListTicketView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/list-ticket/${hash}`);
    },
  },
  {
    path: "/list-ticket/:hash",
    name: "ListTicketWithHash",
    component: ListTicketView,
  },
  {
    path: "/termos",
    name: "termos",
    component: TermosView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/termos/${hash}`);
    },
  },
  {
    path: "/termos/:hash",
    name: "TermosWithHash",
    component: TermosView,
  },
  {
    path: "/privacidade",
    name: "privacidade",
    component: PrivacidadeView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/privacidade/${hash}`);
    },
  },
  {
    path: "/privacidade/:hash",
    name: "PrivacidadeWithHash",
    component: PrivacidadeView,
  },
  {
    path: "/leads",
    name: "Leads",
    component: LeadsView,
  },
  {
    path: "/messages",
    name: "messages",
    component: MessagesView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = [
    "/",
    "/login",
    "/imovel",
    "/enviar-documentos",
    "/cadastro",
    "/recovery",
    "/select",
    "/cadastro-corretor",
    "/cadastro-imobiliaria",
    "/cadastro-construtora",
    "/seu-imovel",
  ];
  const isPublicPage = publicPages.some((page) => to.path.startsWith(page));
  const authRequired = !isPublicPage;
  const loggedIn = localStorage.getItem("token");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
