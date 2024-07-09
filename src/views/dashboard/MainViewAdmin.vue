<template>
  <div class="wrapper">

    <Sidebar />
    <div class="main">
      <Navbar />

      <main class="content">
        <div class="container-fluid p-0">

          <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
          <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Administrador</h1>

          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <CardsInfo />
              </div>
            </div>
          </div>
          <div class="row">
          </div>
          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <div class="col-xl-6 col-xxl-6">
                  <AtividadeGraph />
                </div>

                <div class="col-xl-6 col-xxl-6">
                  <LocalizacaoGraph />
                </div>

                <div class="col-xl-6 col-xxl-6">
                  <ListImoveis />
                </div>

                <div class="col-xl-3 col-xxl-3">
                  <ListUserZonu />
                </div>

                <div class="col-xl-3 col-xxl-3">
                  <ListClientZonu />
                </div>

                <div class="col-xl-12 col-xxl-12">
                  <FilterGraph />
                </div>

                <div class="col-xl-4 col-xxl-4">
                  <GraphAluguelVenda />
                </div>

                <div class="col-xl-4 col-xxl-4">
                  <GraphPublicados />
                </div>
                <div class="col-xl-4 col-xxl-4">
                  <GraphTipo />
                </div>

                <div class="col-xl-12 col-xxl-12">
                  <GraphMes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
import Footer from '../../components/footer/index.vue'
import FilterGraph from '../../components/graph/index.vue'
import CardsInfo from '../../components/admin/cards/cardComp.vue'
import AtividadeGraph from '../../components/admin/graph/graphAtivComp.vue'
import LocalizacaoGraph from '../../components/admin/graph/graphLocalizacaoComp.vue'
import ListImoveis from '../../components/admin/imoveis/cardImoveisComp.vue'
import GraphMes from '../../components/admin/mes/graphMes.vue'
import GraphAluguelVenda from '../../components/admin/graph/graphAluguelVendaComp.vue'
import GraphPublicados from '../../components/admin/graph/graphPubliComp.vue'
import GraphTipo from '../../components/admin/graph/graphTipoComp.vue'
import ListUserZonu from '../../components/admin/cards/listTeamComp.vue'
import ListClientZonu from '../../components/admin/cards/listClientComp.vue'


export default {
  name: 'MainView',

  data() {
    return {
      token: localStorage.getItem('token'),

    }
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
    FilterGraph,
    CardsInfo,
    AtividadeGraph,
    LocalizacaoGraph,
    ListImoveis,
    GraphMes,
    GraphAluguelVenda,
    GraphPublicados,
    GraphTipo,
    ListUserZonu,
    ListClientZonu
  },







}
</script>