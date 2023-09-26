<script>
export default {
  name: "toolbar-section",
}
</script>

<template>
  <header>
    <pv-toolbar class="background-primary">

      <!-- LOGO -->
      <template #start>
        <img alt="logo" src="../../assets/images/logo.jpg" height="40" class="mr-2" />
        <h3 class="title-white">StudiStay</h3>
      </template>

      <!-- BOTONES DEL TOOLBAR -->
      <template #end>
        <div class="flex-column">
          <router-link to="/" custom v-slot="{ navigate, href }">
            <pv-button
                label="Iniciar sesión"
                class="button-primary"
                icon="pi pi-sign-in"
                :href="href"
                @click="navigate"
            />
          </router-link>

          <router-link to="/register" custom v-slot="{ navigate, href }">
            <pv-button
                label="Registrarse"
                class="button-primary"
                icon="pi pi-user-plus"
                :href="href"
                @click="navigate"
            />
          </router-link>

        </div>

      </template>
    </pv-toolbar>

  </header>
</template>
