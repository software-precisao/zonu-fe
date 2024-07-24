<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">
                    <h1 class="h3 mb-3"><strong>Zonu |</strong> Token</h1>
                    <div class="row">
                        <FormToken />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    </div>
</template>
<script>
import SideBar from "../../../components/sidebar/index.vue";
import NavBar from "../../../components/navbar/index.vue";
import Footer from "../../../components/footer/index.vue";
import FormToken from "../../../components/admin/token/cadTokenComponente.vue";

export default {
    name: "CadToken-View",

    components: {
        SideBar,
        NavBar,
        Footer,
        FormToken
    },

};
</script>