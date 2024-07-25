<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
                <img src="../../../assets/images/logo.svg" class="mb-2" alt="" />

                <div class="area-login px-4">
                    <h1 class="title-login mt-5">Olá Ragner</h1>

                    <p>
                        Para sua experiência ser completa, precisamos que envie alguns documentos.
                    </p>
                    <p class="text-danger"><small><i class="fa fa-bell"></i> Os formatos aceitos são: .pdf .jpg .JPEG
                            .png</small></p>

                    <div class="row">
                        <div class="col-12">
                            <a class="card card-select" href="/cadastro"
                                style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconCardCreci.png"
                                        style="margin-left: auto; margin-right: auto; display: block; width: 70px;"
                                        alt="">
                                    <p class="text-center mt-3">CRECI</p>
                                </div>
                                <i class="fa-solid fa-circle-check fa-2x text-center text-secondary"></i>
                            </a>
                        </div>
                        <!-- <div class="col-6">
                            <a class="card card-select" href="/cadastro-corretor"
                                style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconDoc.png"
                                        style="margin-left: auto; margin-right: auto; display: block; width: 70px;"
                                        alt="">
                                    <p class="text-center mt-3">Cartão de CNPJ</p>
                                </div>
                                <i class="fa-solid fa-circle-check fa-2x text-center text-secondary"></i>
                            </a>
                        </div> -->


                    </div>
                </div>

                <button v-if="!mostrarSkeleton" :disabled="autenticando" type="submit" class="btn btn-dark bot mt-5">
                    {{ textoBotao }}
                    <span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                </button>
            </div>

            <div class="col-lg-6 p-0 d-none d-lg-block">
                <img src="../../../assets/images/bg-login.svg" class="bg-login" alt="" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "SendDocuments",
    data() {
        return {
           
            textoBotao: "Enviar documentos"
        };
    }

};
</script>