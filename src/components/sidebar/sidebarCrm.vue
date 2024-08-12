<template>
  <div
    class="pt-2 ps-4 pe-4"
    style="background-color: #fff; width: 23%; border-right: 1px solid #d3d3d3"
  >
    <!-- Conteúdo da Sidebar -->
    <ul class="nav flex-column">
      <h4 class="mt-3 mb-2 fw-bold fs-5">
        <strong>Gestão do relacionamento</strong>
      </h4>
      <li class="nav-item mb-4">
        <select
          class="form-select fs-8"
          v-model="person"
          style="height: 55px; width: 90%"
        >
          <option value="">Escolha</option>
          <option value="corretor">Corretor</option>
          <option value="imobi">Imobiliária</option>
        </select>
      </li>
      {{
        console.log(tab)
      }}
      <li class="nav-item">
        <a
          class="nav-link custom-nav-link d-flex align-items-center"
          href="/seu-crm"
          :style="{ fontWeight: tab === 'Visão geral' ? 600 : 400 }"
        >
          <i class="align-middle me-2" data-feather="home"></i>
          <!-- Ícone para Visão Geral -->
          Visão Geral
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link custom-nav-link fw-regular d-flex align-items-center"
          href="/seu-crmcontato"
          :style="{ fontWeight: tab === 'Contato recebidos' ? 600 : 400 }"
        >
          <i class="align-middle me-2" data-feather="users"></i>
          <!-- Ícone para Contatos Recebidos -->
          Contatos Recebidos
        </a>
      </li>
      <li class="nav-item mt-4">
        <h6 class="fw-bold fs-6">Negócios em Andamento</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link custom-nav-link fw-regular d-flex align-items-center"
              href="#"
            >
              <i class="align-middle me-2" data-feather="list"></i>
              <!-- Ícone para Visão em Etapas -->
              Visão em Etapas (330)
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link custom-nav-link fw-regular d-flex align-items-center"
              href="#"
            >
              <i class="align-middle me-2" data-feather="clipboard"></i>
              <!-- Ícone para Lista de Clientes -->
              Lista de Clientes (330)
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link custom-nav-link fw-regular d-flex align-items-center"
              href="#"
            >
              <i class="align-middle me-2" data-feather="home"></i>
              <!-- Ícone para Imóveis Reservados -->
              Imóveis Reservados (0)
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item mt-4">
        <h6 class="fw-bold fs-8">Radar de Oportunidades</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link custom-nav-link fw-regular d-flex align-items-center"
              href="#"
            >
              <i class="align-middle me-2" data-feather="users"></i>
              <!-- Ícone para Clientes Compatíveis -->
              Clientes Compatíveis (272)
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link custom-nav-link fw-regular d-flex align-items-center"
              href="#"
            >
              <i class="align-middle me-2" data-feather="home"></i>
              <!-- Ícone para Imóveis Compatíveis -->
              Imóveis Compatíveis (4)
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item mt-4">
        <h6 class="fw-bold fs-8">Relatórios</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link custom-nav-link fw-regular d-flex align-items-center"
              href="#"
            >
              <i class="align-middle me-2" data-feather="bar-chart"></i>
              <!-- Ícone para Negócios Encerrados -->
              Negócios Encerrados
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link custom-nav-link fw-regular d-flex align-items-center"
              href="#"
            >
              <i class="align-middle me-2" data-feather="share"></i>
              <!-- Ícone para Imóveis Compartilhados -->
              Imóveis Compartilhados
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBarCrm",
  props: {
    tab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      person: "",
    };
  },
};
</script>
