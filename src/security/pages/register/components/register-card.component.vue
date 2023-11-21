<script>
export default {
  name: "register-card",
}

</script>

<template>
  <br><br>
  <div class="card">
    <pv-card>
      <template #title> {{$t('register-view.register')}} </template>
      <template #content>
        <p>
          {{$t('register-view.names')}}
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-user"/>
            <pv-input-text :placeholder="$t('register-view.enter-names')" ></pv-input-text>
          </span>
        </div>
        <p>
          {{$t('register-view.email')}}
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-envelope"/>
            <pv-input-text :placeholder="$t('register-view.enter-email')"></pv-input-text>
          </span>
        </div>
        <p>
          {{$t('register-view.phone')}}
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-phone"/>
            <pv-input-text :placeholder="$t('register-view.enter-phone')"></pv-input-text>
          </span>
        </div>
        <p>
          {{$t('register-view.password')}}
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-lock"/>
            <pv-input-text :placeholder="$t('register-view.enter-password')"></pv-input-text>
          </span>
        </div>

        <br><br>

        <div class="card flex justify-content-center">
          <router-link to="/" custom v-slot="{ navigate, href }">
            <pv-button
                :label="$t('register-view.register-btn')"
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