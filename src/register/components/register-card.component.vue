<script>
export default {
  name: "register-card",
}

</script>

<template>
  <br><br>
  <div class="card">
    <pv-card>
      <template #title> Registrarse </template>
      <template #content>
        <p>
          Nombres:
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-user"/>
            <pv-input-text placeholder="Ingresa tus nombres"></pv-input-text>
          </span>
        </div>
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
          Número de Teléfono:
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-phone"/>
            <pv-input-text placeholder="Ingresa tu teléfono"></pv-input-text>
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
          <router-link to="/" custom v-slot="{ navigate, href }">
            <pv-button
                label="Registrarme"
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