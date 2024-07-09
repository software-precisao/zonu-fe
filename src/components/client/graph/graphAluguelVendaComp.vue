<template>
    <div class="card flex-fill w-100" style="height: 250px;">
        <div class="card-header">
            <h5 class="card-title mb-0">Aluguél x Venda</h5>
        </div>
        <div class="card-body py-3">
            <div class="chart chart-sm">
                <canvas id="myChartTipoNegocio"></canvas>
            </div>
        </div>
    </div>

</template>
<script>
import api from '../../../../service/api/index'
import { jwtDecode } from "jwt-decode";
import 'https://cdn.jsdelivr.net/npm/chart.js'
export default {
    name: 'AluguelVenda',
    data() {
        return {
            token: localStorage.getItem('token'),
            id_user: '',
            myChart1: null

        }
    },
    mounted() {
        let token = this.token;
        let decode = jwtDecode(token);
        let id_user = decode.id_user;

        this.id_user = id_user

        this.fetchImoveisPorTipoNegocio();

    },
    methods: {
        fetchImoveisPorTipoNegocio() {
            let id_user = this.id_user;
            api.listmyImoveis(id_user).then(res => {
                let imoveis = res.data;

                // Contar imóveis por tipo de negócio
                let contagemTipos = { aluguel: 0, venda: 0 };
                imoveis.forEach(imovel => {
                    if (imovel.preco.tipo_negocio === 'Aluguel') {
                        contagemTipos.aluguel++;
                    } else if (imovel.preco.tipo_negocio === 'Venda') {
                        contagemTipos.venda++;
                    }
                });

                // Preparar dados para o gráfico
                let labels = ['Aluguel', 'Venda'];
                let data = [contagemTipos.aluguel, contagemTipos.venda];

                // Gerar o gráfico
                this.renderChart(labels, data);
            });
        },
        renderChart(labels, data) {
            const ctx = document.getElementById("myChartTipoNegocio").getContext('2d');
            if (this.myChart) {
                this.myChart.destroy();
            }
            this.myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Imóveis por Tipo de Negócio',
                            data: data,
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)"
                            ],
                            hoverOffset: 4,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    animation: {
                        duration: 500, // Duração da animação para renderização mais rápida
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    let label = labels[tooltipItem.dataIndex] || '';
                                    let count = data[tooltipItem.dataIndex] || 0;
                                    return `${label}: ${count}`;
                                }
                            }
                        }
                    }
                }
            });
        }
    },
    beforeDestroy() {
        if (this.myChart) {
            this.myChart.destroy();
        }
    }

}

</script>