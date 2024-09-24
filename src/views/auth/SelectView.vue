<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
        <img src="../../../assets/images/logo.svg" class="mb-2" alt="" />

        <div class="area-login px-4">
          <h1 class="title-login mt-5">Tudo pronto?</h1>

          <p>Chegou a hora de montar o perfil que mais encaixa com você.</p>

          <div class="container">
            <div class="row">
              <div class="col-6 col-sm-6 col-md-3 col-lg-4 col-xl-3 mb-4">
                <a class="card card-select text-center" href="/cadastro-construtora" style="text-decoration: none">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center"
                    style="height: 150px">
                    <img src="../../../assets/images/iconConstrutora.svg" class="img-fluid" alt="Construtora" />
                    <p class="mt-3">Construtora</p>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-4 col-xl-3 mb-4">
                <a class="card card-select text-center" href="/cadastro-corretor" style="text-decoration: none">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center"
                    style="height: 150px">
                    <img src="../../../assets/images/iconCorretor.svg" class="img-fluid" alt="Corretor" />
                    <p class="mt-3">Corretor</p>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-4 col-xl-3 mb-4">
                <a class="card card-select text-center" href="/cadastro-imobiliaria" style="text-decoration: none">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center"
                    style="height: 150px">
                    <img src="../../../assets/images/iconImobiliaria.svg" class="img-fluid" alt="Imobiliária" />
                    <p class="mt-3">Imobiliária</p>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-4 col-xl-3 mb-4">
                <a class="card card-select text-center" href="/cadastro-pessoa-fisica" style="text-decoration: none">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center"
                    style="height: 150px">
                    <img src="../../../assets/images/iconPessoa.svg" class="img-fluid" alt="Pessoa Física" />
                    <p class="mt-3">Pessoa Física</p>
                  </div>
                </a>
              </div>
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
