<template>
  <div class="pt-2 ps-3 pe-3" style="background-color: #fff; min-width: 19%; border-right: 1px solid #d3d3d3">
    <!-- Conteúdo da Sidebar -->
    <ul class="nav flex-column mb-2">
      <h4 class="mt-3 mb-2 fw-bold fs-5">
        <strong>Gestão do relacionamento</strong>
      </h4>
      <li class="nav-item mb-4">
        <select class="form-select fs-8" v-model="corretorResponsavel" style="height: 55px; width: 90%">
          <option value="" disabled hidden>Escolha</option>
          <option :value="`${userName} ${userSobrenome}`">
            {{ userName }} {{ userSobrenome }}
          </option>
        </select>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-nav-link d-flex align-items-center" href="/seu-crm"
          :style="{ fontWeight: tab === 'Visão geral' ? 600 : 400 }">
          <i class="align-middle me-2" data-feather="home"></i>
          <!-- Ícone para Visão Geral -->
          Visão Geral
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmcontato"
          :style="{ fontWeight: tab === 'Contato recebidos' ? 600 : 400 }">
          <i class="align-middle me-2" data-feather="users"></i>
          <!-- Ícone para Contatos Recebidos -->
          Contatos Recebidos
        </a>
      </li>
      <li class="nav-item mt-4">
        <h6 class="fw-bold fs-6">Negócios em Andamento</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmvisaoetapas"
              :style="{ fontWeight: tab === 'Visão etapas' ? 600 : 400 }">
              <i class="align-middle me-2" data-feather="list"></i>
              <!-- Ícone para Visão em Etapas -->
              Visão em Etapas ({{ mostrarSkeleton ? visaoEmEtapas : 0 }})
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmlistacliente"
              :style="{ fontWeight: tab === 'Lista clientes' ? 600 : 400 }">
              <i class="align-middle me-2" data-feather="clipboard"></i>
              <!-- Ícone para Lista de Clientes -->
              Lista de Clientes ({{ mostrarSkeleton ? qtdClientesUnicos : 0 }})
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmimoveisreser"
              :style="{ fontWeight: tab === 'Imóveis reservados' ? 600 : 400 }">
              <i class="align-middle me-2" data-feather="home"></i>
              
              Imóveis Reservados ({{ mostrarSkeleton ? imoveisReserv.length : 0 }})
            </a>
          </li> -->
        </ul>
      </li>
      <li class="nav-item mt-4">
        <h6 class="fw-bold fs-8">Radar de Oportunidades</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmclientcompat" :style="{
              fontWeight: tab === 'Clientes compativeis' ? 600 : 400,
            }">
              <i class="align-middle me-2" data-feather="users"></i>
              <!-- Ícone para Clientes Compatíveis -->
              Clientes Compatíveis ({{ mostrarSkeleton ? qtdClientesCompat : 0 }})
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmimovcompat"
              :style="{ fontWeight: tab === 'Imóveis compativeis' ? 600 : 400 }">
              <i class="align-middle me-2" data-feather="home"></i>
              Imóveis Compatíveis ({{ mostrarSkeleton ? imoveisCompativ == null ? 0 : imoveisCompativ : 0 }})
            </a>
          </li> -->
        </ul>
      </li>
      <li class="nav-item mt-4">
        <!-- <h6 class="fw-bold fs-8">Relatórios</h6> -->
        <ul class="nav flex-column">
          <!-- <li class="nav-item">
            <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmnegoencer"
              :style="{ fontWeight: tab === 'Negócios encerrados' ? 600 : 400 }">
              <i class="align-middle me-2" data-feather="bar-chart"></i>
              Negócios Encerrados
            </a>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link custom-nav-link fw-regular d-flex align-items-center" href="/seu-crmshareimov" :style="{
              fontWeight: tab === 'Imóveis compartilhados' ? 600 : 400,
            }">
              <i class="align-middle me-2" data-feather="share"></i>
              Imóveis Compartilhados
            </a>
          </li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { jwtDecode } from 'jwt-decode';
import api from "../../../service/api/index"

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
      token: localStorage.getItem("token"),
      id_user: "",
      userName: "",
      userSobrenome: "",
      corretorResponsavel: "",

      imoveisUnicos: "",
      qtdClientesUnicos: "",
      funis: [],
      imoveisReserv: [],
      valorimoveis: "",
      clientesNegocios: [],
      allClientes: [],
      imoveisCompativ: "",
      visaoEmEtapas: "",
      qtdClientesCompat: "",

      mostrarSkeleton: false,
    };
  },

  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.userName = decode.nome;
    this.userSobrenome = decode.sobrenome;

    this.id_user = id_user;

    this.corretorResponsavel = `${this.userName} ${this.userSobrenome}`;

    this.fetchFunil()
    setTimeout(() => {
      this.fetchNegocios()
      this.fetchImoveis()
    }, 1500);
    this.fetchClientes();

    setTimeout(() => {
      this.mostrarSkeleton = true
    }, 2000);
  },
  methods: {
    fetchFunil() {
      api.getAllFunil().then((res) => {
        // console.log(res.data)
        if (res.status === 200) {
          this.funis = res.data.filter(funil => funil.id_user === this.id_user)
        }
      })
    },

    fetchImoveis() {
      api.listallImoveis().then((res) => {
        if (res.status === 200) {
          // Inicializa o conjunto para armazenar os IDs dos imóveis e um Set para armazenar IDs únicos dos clientes
          const imovelIdsNosFunis = new Set();
          const clienteIds = new Set();

          // Itera sobre cada funil e depois sobre cada negócio dentro dos funis
          this.funis.forEach((funil, funilIndex) => {
            if (funil.negocios && Array.isArray(funil.negocios)) {
              funil.negocios.forEach((negocio, negocioIndex) => {
                // console.log(negocio);

                // Verifica se o negócio tem um NovoImovel com um id_imovel válido e uma etapa "Reserva"
                if (negocio.NovoImovel && negocio.NovoImovel.id_imovel && negocio.Etapa.nome_etapa == "Reserva") {
                  imovelIdsNosFunis.add(negocio.NovoImovel.id_imovel);
                  // console.log(`Adicionado id_imovel: ${negocio.NovoImovel.id_imovel}`);

                  // Verifica se o negócio tem um cliente com um id_cliente válido
                  if (negocio.Cliente && negocio.Cliente.id_cliente) {
                    clienteIds.add(negocio.Cliente.id_cliente); // Adiciona o id_cliente ao Set de clientes
                  } else {
                    console.warn(`Negócio #${negocioIndex} no funil ${funilIndex} não tem um id_cliente válido`); // Log de aviso
                  }
                } else {
                  console.warn(`Negócio #${negocioIndex} no funil ${funilIndex} não tem um id_imovel válido`); // Log de aviso
                }
              });
            } else {
              console.warn(`O funil #${funilIndex} não possui negócios ou o campo não é um array`); // Log de aviso
            }
          });

          // Filtra os imóveis retornados pela API para incluir apenas aqueles com id_imovel nos funis
          this.imoveisReserv = res.data.filter(imovel => imovelIdsNosFunis.has(imovel.id_imovel));
          // console.log("Imóveis filtrados:", this.imoveisReserv); // Log para verificar os imóveis filtrados

          // Calcula a soma dos preços dos imóveis
          this.valorimoveis = this.imoveisReserv.reduce((total, imovel) => {
            // Converte o preço de string para número e soma
            const preco = parseFloat(imovel.preco.preco_imovel.replace(',', '.')) || 0; // substitui vírgula por ponto e converte para número
            return total + preco;
          }, 0);

          console.log(this.valorimoveis)

          // Adiciona os clientes únicos ao array this.clientesNegocios
          this.clientesNegocios = [...clienteIds]; // Converte o Set de IDs de clientes para um array

          // console.log("Clientes únicos:", this.clientesNegocios); // Log para verificar os clientes únicos
          // console.log("Valor total dos imóveis formatado:", this.valorimoveis); // Log para verificar o valor total dos imóveis
        }
      });
    },

    fetchNegocios() {
      api.getNegocios()
        .then((res) => {
          if (res.status === 200) {
            // console.log("negocios aqui ===> ", res.data)
            const negocios = res.data.filter(negocio => negocio.Usuario.id_user === this.id_user);

            // Limpa a contagem e arrays de negócios atuais
            this.funis.forEach((funil) => {
              funil.qtdNegoicos = 0;
              funil.negocios = [];
              funil.imoveisCompativ = new Set(); // Cria um Set para imóveis únicos
              funil.etapas.forEach((etapa) => {
                etapa.qtdNegoicos = 0;
                etapa.negocios = [];
              });
            });

            const etapaMap = new Map();

            // Agrupa os negócios por id_etapa
            negocios.forEach((negocio) => {
              const idEtapa = negocio.Etapa.id_etapa;

              // Mapeia o negócio para a etapa correspondente
              if (!etapaMap.has(idEtapa)) {
                etapaMap.set(idEtapa, []);
              }
              etapaMap.get(idEtapa).push(negocio);
            });

            // Atualiza os negócios utilizando os imóveis já buscados em this.imoveis
            const promises = Array.from(etapaMap.entries()).map(async ([idEtapa, negocios]) => {
              return Promise.all(negocios.map(async (negocio) => {
                const idImovel = negocio.NovoImovel.id_imovel;

                // Busca o imóvel correspondente em this.imoveis
                const imovelCorrespondente = this.imoveisReserv.find(imovel => imovel.id_imovel === idImovel);

                // Se o imóvel correspondente for encontrado, atualiza o preço do negócio
                if (imovelCorrespondente && imovelCorrespondente.preco) {
                  negocio.NovoImovel.preco_imovel = imovelCorrespondente.preco.preco_imovel;
                } else {
                  console.warn(`Imóvel com id ${idImovel} não encontrado em this.imoveis`);
                }
              })).then(() => {
                // Encontra a etapa e funil correspondentes e adiciona os negócios de uma vez
                this.funis.forEach((funil) => {
                  funil.etapas.forEach((etapa) => {
                    if (etapa.id_etapa === idEtapa) {
                      etapa.negocios.push(...negocios);
                      etapa.qtdNegoicos += negocios.length;
                      funil.negocios.push(...negocios);

                      // Adiciona imóveis únicos ao Set do funil
                      negocios.forEach((negocio) => {
                        funil.imoveisCompativ.add(negocio.NovoImovel.id_imovel);
                      });

                      funil.qtdNegoicos += negocios.length;
                    }
                  });
                });
              });
            });

            Promise.all(promises).then(() => {
              // Atualiza a quantidade de imóveis únicos para cada funil
              this.funis.forEach(funil => {
                funil.imoveisCompativ = funil.imoveisCompativ.size;
                const clientesUnicos = new Set(funil.negocios.map(negocio => negocio.Cliente.id_cliente));
                funil.qtdClientesUnicos = clientesUnicos.size;
              });
              console.log(this.funis)
              // this.qtdNegoicos = this.funis.reduce((total, funil) => total + (funil.qtdNegoicos || 0), 0);

              // Calcula a quantidade total de clientes únicos em todos os funis
              const todosClientesUnicos = new Set(
                this.funis.flatMap(funil => funil.negocios.map(negocio => negocio.Cliente.id_cliente))
              );

              this.qtdClientesUnicos = todosClientesUnicos.size;
              this.imoveisCompativ = this.funis.reduce((total, funil) => total + (funil.imoveisCompativ || 0), 0);
              this.visaoEmEtapas = this.funis.reduce((total, funil) => total + (funil.qtdNegoicos || 0), 0)
              this.$nextTick(() => {
                // Atualize a interface se necessário
                this.funils = this.funis;
              });
            });
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar negócios:', error);
        });
    },

    fetchClientes() {
      api.getCliente().then((res) => {
        // console.log(res)
        this.allClientes = res.data.filter(cliente => cliente.id_user === this.id_user)

        this.qtdClientesCompat = new Set(this.allClientes.map(cliente => cliente.id_cliente)).size;

        console.log("Aqui esta os filters ===> ", res.data.filter(cliente => cliente.id_user === this.id_user))
      })
    },
  }
};
</script>
