import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/auth/LoginView.vue";
import CadastroView from "../views/auth/CadastroView.vue";
import RecoveryView from "../views/auth/RecoveryView.vue";
import MainView from "../views/dashboard/MainView.vue";
import MainViewAdmin from "../views/dashboard/MainViewAdmin.vue";
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

import md5 from 'crypto-js/md5';

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
    path: "/cadastro",
    name: "cadastro",
    component: CadastroView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/cadastro/${hash}`);
    }
  },
  {
    path: "/cadastro/:hash",
    name: "CadastoClientWithHash",
    component: CadastroView
  },
  {
    path: "/recovery",
    name: "recovery",
    component: RecoveryView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/recovery/${hash}`);
    }
  },
  {
    path: "/recovery/:hash",
    name: "RecoveryWithHash",
    component: RecoveryView
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: MainView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/dashboard/${hash}`);
    }
  },
  {
    path: "/dashboard/:hash",
    name: "DashboardWithHash",
    component: MainView
  },
  {
    path: "/dashboard-admin",
    name: "dashboard-admin",
    component: MainViewAdmin,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/dashboard-admin/${hash}`);
    }
  },
  {
    path: "/dashboard-admin/:hash",
    name: "DashboardAdminWithHash",
    component: MainViewAdmin
  },
  {
    path: "/novo-imovel",
    name: "novo-imovel",
    component: CadImovelView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/novo-imovel/${hash}`);
    }
  },
  {
    path: "/novo-imovel/:hash",
    name: "NovoImovelWithHash",
    component: CadImovelView
  },
  {
    path: "/caracteristica",
    name: "caracteristica",
    component: CaracteristicaView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/caracteristica/${hash}`);
    }
  },
  {
    path: "/caracteristica/:hash",
    name: "CaracteristicaWithHash",
    component: CaracteristicaView
  },
  {
    path: "/novo-condominio",
    name: "novo-condominio",
    component: CadCondominioView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/novo-condominio/${hash}`);
    }
  },
  {
    path: "/novo-condominio/:hash",
    name: "NovoCondominioWithHash",
    component: CadCondominioView
  },
  {
    path: "/proximidades",
    name: "proximidades",
    component: ProximidadesView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/proximidades/${hash}`);
    }
  },
  {
    path: "/proximidades/:hash",
    name: "ProximidadesWithHash",
    component: ProximidadesView
  },
  {
    path: "/meu-plano",
    name: "meu-plano",
    component: MyPlanView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/meu-plano/${hash}`);
    }
  },
  {
    path: "/meu-plano/:hash",
    name: "MeuPlanoWithHash",
    component: MyPlanView
  },
  {
    path: "/imovel",
    name: "imovel",
    component: ImovelView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/imovel/${hash}`);
    }
  },
  {
    path: "/imovel/:hash",
    name: "ImovelWithHash",
    component: ImovelView
  },
  {
    path: "/seu-perfil",
    name: "perfil",
    component: PerfilView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/seu-perfil/${hash}`);
    }
  },
  {
    path: "/seu-perfil/:hash",
    name: "PerfilWithHash",
    component: PerfilView
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: UserView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/usuarios/${hash}`);
    }
  },
  {
    path: "/usuarios/:hash",
    name: "UsuariosWithHash",
    component: UserView
  },
  {
    path: "/clientes",
    name: "clientes",
    component: ClienteView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/clientes/${hash}`);
    }
  },
  {
    path: "/clientes/:hash",
    name: "ClientesWithHash",
    component: ClienteView
  },
  {
    path: "/novo-ticket",
    name: "novo-ticket",
    component: NovoTicketView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/novo-ticket/${hash}`);
    }
  },
  {
    path: "/novo-ticket/:hash",
    name: "NovoTicketWithHash",
    component: NovoTicketView
  },
  {
    path: "/list-ticket",
    name: "list-ticket",
    component: ListTicketView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/list-ticket/${hash}`);
    }
  },
  {
    path: "/list-ticket/:hash",
    name: "ListTicketWithHash",
    component: ListTicketView
  },
  {
    path: "/termos",
    name: "termos",
    component: TermosView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/termos/${hash}`);
    }
  },
  {
    path: "/termos/:hash",
    name: "TermosWithHash",
    component: TermosView
  },
  {
    path: "/privacidade",
    name: "privacidade",
    component: PrivacidadeView,
    beforeEnter: (to, from, next) => {
      const hash = generateMD5();
      next(`/privacidade/${hash}`);
    }
  },
  {
    path: "/privacidade/:hash",
    name: "PrivacidadeWithHash",
    component: PrivacidadeView
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/login", "/cadastro", "/recovery"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
