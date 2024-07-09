import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import CadastroView from '../views/auth/CadastroView.vue'
import RecoveryView from '../views/auth/RecoveryView.vue'
import MainView from '../views/dashboard/MainView.vue'
import MainViewAdmin from '../views/dashboard/MainViewAdmin.vue'
import CadImovelView from '../views/dashboard/CadImovelView.vue'
import CadCondominioView from '../views/dashboard/CadCondominioView.vue'
import MyPlanView from '../views/dashboard/MyPlanView.vue'
import CaracteristicaView from '../views/dashboard/CaracteristicaView.vue'
import ProximidadesView from '../views/dashboard/ProximidadesView.vue'
import ImovelView from '../views/dashboard/pages/ImovelView.vue'
import PerfilView from '../views/dashboard/profile/PerfilView.vue'
import UserView from '../views/dashboard/users/CadUsersView.vue'
import ClienteView from '../views/dashboard/lists/ClienteListView.vue'
import NovoTicketView from '../views/dashboard/ticket/SendTicketView.vue'
import ListTicketView from '../views/dashboard/ticket/ResivTicketView.vue'
import TermosView from '../views/dashboard/termos/CondicoesView.vue'
import PrivacidadeView from '../views/dashboard/termos/PrivacidadeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },  
    {
      path: '/recovery',
      name: 'recovery',
      component: RecoveryView
    },  
    {
      path: '/dashboard',
      name: 'dashboard',
      component: MainView
    },
    {
      path: '/dashboard-admin',
      name: 'dashboard-admin',
      component: MainViewAdmin
    },    
    {
      path: '/novo-imovel',
      name: 'novo-imovel',
      component: CadImovelView
    },  
    {
      path: '/caracteristica',
      name: 'caracteristica',
      component: CaracteristicaView
    },  
    {
      path: '/novo-condominio',
      name: 'novo-condominio',
      component: CadCondominioView
    },  
    {
      path: '/proximidades',
      name: 'proximidades',
      component: ProximidadesView
    },  
    {
      path: '/meu-plano',
      name: 'meu-plano',
      component: MyPlanView
    },
    {
      path: '/imovel',
      name: 'imovel',
      component: ImovelView
    },
    {
      path: '/seu-perfil',
      name: 'perfil',
      component: PerfilView
    },  
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UserView
    }, 
    {
      path: '/clientes',
      name: 'clientes',
      component: ClienteView
    }, 
    {
      path: '/novo-ticket',
      name: 'novo-ticket',
      component: NovoTicketView
    },
    {
      path: '/list-ticket',
      name: 'list-ticket',
      component: ListTicketView
    },     
    {
      path: '/termos',
      name: 'termos',
      component: TermosView
    },  
    {
      path: '/privacidade',
      name: 'privacidade',
      component: PrivacidadeView
    },  
  ]
})


router.beforeEach((to, from, next) => {

  const publicPages = ['/', '/cadastro', '/code', '/imovel', '/recovery'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
});


export default router
