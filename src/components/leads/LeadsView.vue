<template>
    <div>
        <h2>Leads</h2>
        <ul>
            <li v-for="lead in leads" :key="lead.id_lead">{{ lead.email }}</li>
        </ul>
    </div>
</template>

<script>
import api from '../../../service/api'


export default {
    data() {
        return {
            leads: []
        };
    },
    methods: {
        async fetchLeads() {
            try {
                const response = await api.listLead();
                console.log(response)
                
                this.leads = response.data; // ajustar conforme a estrutura da resposta
            } catch (error) {
                console.error("Erro ao buscar leads: ", error);
            }
        }
    },
    created() {
        this.fetchLeads();
    }
};
</script>