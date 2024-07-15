<template>
  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0"><i class="fa fa-users"></i> Equipe Zonu</h5>
    </div>
    <div class="card-body py-3">
      <input
        type="text"
        placeholder="Pesquise aqui"
        class="form-control mb-3"
        aria-describedby="passwordHelpBlock"
        v-model="searchUsuario"
      />
      <div
        class="mt-4"
        v-for="item in usuariosOnCurrentPage"
        :key="item.id_user"
      >
        <a class="row" style="text-decoration: none">
          <div class="col-3">
            <div
              class="avatar-null rounded me-1"
              alt="Avatar"
              style="width: 50px; height: 50px"
            >
              {{ item.iniciais }}
            </div>
          </div>

          <div class="col-9" style="margin-left: -5px">
            <h5>
              <a href="#" style="text-decoration: none; color: #000"
                ><strong>{{ item.nome }} {{ item.sobrenome }}</strong></a
              >
            </h5>
            <h6>
              <a
                href="#"
                style="
                  text-decoration: none;
                  color: #000;
                  font-size: 10px;
                  margin-top: -200px !important;
                  font-weight: 100 !important;
                "
                >{{ item.email }}</a
              >
            </h6>
            <h5>
              <a href="#" style="text-decoration: none; color: #000"
                ><strong
                  ><span v-if="item.id_nivel === 1" class="badge text-bg-dark"
                    >Administrador</span
                  ></strong
                ></a
              >
            </h5>
            <h5>
              <a href="#" style="text-decoration: none; color: #000"
                ><strong
                  ><span v-if="item.id_nivel === 2" class="badge text-bg-info"
                    >Suporte / Atendimento</span
                  ></strong
                ></a
              >
            </h5>
            <h5>
              <a href="#" style="text-decoration: none; color: #000"
                ><strong
                  ><span v-if="item.id_nivel === 4" class="badge text-bg-info"
                    >Corretor</span
                  ></strong
                ></a
              >
            </h5>
          </div>
        </a>
        <hr class="mt-3" />
        <!-- Modal -->
      </div>

      <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
        <button
          class="btn btn-dark btn-sm"
          @click="previousPageUser()"
          :disabled="currentPageUser <= 1"
        >
          Anterior
        </button>
        <button
          class="btn btn-dark btn-sm"
          style="margin-right: 3% !important"
          @click="nextPageUser()"
          :disabled="currentPageUser >= totalPagesUsuarios"
        >
          Proximo
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../service/api/index";
import { jwtDecode } from "jwt-decode";
export default {
  name: "ListImoveisdmin",
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      Allusuarios: [],
      currentPageUser: 1,
      perPageUser: 4,
      searchUsuario: "",
      msgQualidade: "",
      estrelas: 0,
      porcentagemQualidade: 0,
      iniciais: "",
      nome: "",
      sobrenome: "",
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.nome = decode.nome;
    this.sobrenome = decode.sobrenome;

    this.id_user = id_user;

    this.fetchAllusuarios();
  },
  methods: {
    fetchAllusuarios() {
      api.listusuarios().then((res) => {
        let usuarios = res.data.response;

        // Filtrar usuários com id_nivel 1, 2 ou 4
        let filteredUsuariosTime = usuarios.filter(
          (usuario) =>
            usuario.id_nivel === 1 ||
            usuario.id_nivel === 2 ||
            usuario.id_nivel === 4
        );

        // Remover duplicatas (caso necessário)
        let uniqueUsuarios = [];
        let ids = new Set();
        filteredUsuariosTime.forEach((usuario) => {
          if (!ids.has(usuario.id_user)) {
            ids.add(usuario.id_user);
            uniqueUsuarios.push(usuario);
          }
        });

        // Adicionar iniciais a cada usuário
        uniqueUsuarios = uniqueUsuarios.map((usuario) => {
          usuario.iniciais =
            usuario.nome.charAt(0) + usuario.sobrenome.charAt(0);
          return usuario;
        });

        this.Allusuarios = uniqueUsuarios;
      });
    },

    previousPageUser() {
      if (this.currentPageUser > 1) {
        this.currentPageUser -= 1;
      }
    },
    nextPageUser() {
      if (this.currentPageUser < this.totalPagesUsuarios) {
        this.currentPageUser += 1;
      }
    },
  },

  computed: {
    usuariosOnCurrentPage() {
      const startIndex = (this.currentPageUser - 1) * this.perPageUser;
      const endIndex = startIndex + this.perPageUser;
      return this.Allusuarios.filter((usuario) => {
        return usuario.nome
          .toLowerCase()
          .includes(this.searchUsuario.toLowerCase());
      }).slice(startIndex, endIndex);
    },
    totalPagesUsuarios() {
      return Math.ceil(
        this.Allusuarios.filter((usuario) => {
          this.currentPageConcept = 1;
          return usuario.nome
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        }).length / this.perPageUser
      );
    },
  },
};
</script>
