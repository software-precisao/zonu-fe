<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
                <img src="../../../assets/images/logo.svg" class="mb-2" alt="" />

                <div class="area-login px-4">
                    <h1 class="title-login mt-5">Tudo pronto?</h1>

                    <p>
                        Chegou a hora de montar o perfil que mais encaixa com você.
                    </p>

                    <div class="row">
                        <div class="col-4">
                            <a class="card card-select" href="/cadastro-construtora" style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconConstrutora.svg"
                                        style="margin-left: auto; margin-right: auto; display: block;" alt="">
                                    <p class="text-center mt-3">Construtora</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-4">
                            <a class="card card-select" href="/cadastro-corretor" style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconCorretor.svg"
                                        style="margin-left: auto; margin-right: auto; display: block;" alt="">
                                    <p class="text-center mt-3">Corretor</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-4">
                            <a class="card card-select" href="/cadastro-imobiliaria" style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconImobiliaria.svg" class="mt-2"
                                        style="margin-left: auto; margin-right: auto; display: block;" alt="">
                                    <p class="text-center mt-3">Imobiliária</p>
                                </div>
                            </a>
                        </div>
                    </div>


                    <a href="/login">
                        <button v-if="!mostrarSkeleton" href="/login" class="btn btn-outline-dark bot mt-4">
                            Voltar ao login
                        </button>
                    </a>
                </div>

            </div>

            <div class="col-lg-6 p-0 d-none d-lg-block">
                <img src="../../../assets/images/bg-login.svg" class="bg-login" alt="" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "SelectView",

};
</script>