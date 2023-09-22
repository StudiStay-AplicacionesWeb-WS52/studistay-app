<script>
export default {
  name: "login-card",
}

</script>

<template>
  <br><br>
  <div class="card">
    <pv-card>
      <template #title> Iniciar Sesión </template>
      <template #content>
        <p>
          Email:
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-envelope"/>
            <pv-input-text placeholder="Ingresa tu Email"></pv-input-text>
          </span>
        </div>
        <p>
          Contraseña:
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-lock"/>
            <pv-input-text placeholder="Ingresa tu contraseña"></pv-input-text>
          </span>
        </div>

        <br><br>

        <div class="card flex justify-content-center">
          <router-link to="/posts" custom v-slot="{ navigate, href }">
            <pv-button
                label="Ingresar"
                class="button-primary"
                :href="href"
                @click="navigate"
            />
          </router-link>
        </div>



      </template>
    </pv-card>

  </div>
</template>

<style>

.card {
  text-align: center;
  align-items: center;
  position: relative;
}

</style>