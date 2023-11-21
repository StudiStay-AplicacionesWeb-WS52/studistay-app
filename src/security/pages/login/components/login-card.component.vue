<script>
export default {
  name: 'login-card',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$securityApiService
        .signIn({
          email: this.email,
          password: this.password
        })
        .then((res) => {
          localStorage.setItem('user-token', res.data.token) //guarda el token
          this.$router.push('/posts') //redirige a /posts
        })
        .catch((err) => {
          this.$toast.add({
            severity: 'error',
            summary: 'Error',
            detail: err.response.data.message || 'Error al iniciar sesión, intente nuevamente.',
            life: 3000
          })
        })
    }
  }
}
</script>

<template>
  <br /><br />
  <div class="card">
    <pv-card>
      <template #title> {{ $t('login-view.login') }} </template>
      <template #content>
        <p>
          {{ $t('login-view.email') }}
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-envelope" />
            <pv-input-text
              v-model="email"
              :placeholder="$t('login-view.enter-email')"
            ></pv-input-text>
          </span>
        </div>
        <p>
          {{ $t('login-view.password') }}
        </p>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <span class="p-input-icon-left">
            <i class="pi pi-lock" />
            <pv-input-text
              type="password"
              v-model="password"
              :placeholder="$t('login-view.enter-password')"
            ></pv-input-text>
          </span>
        </div>

        <br /><br />

        <div class="card flex justify-content-center">
          <pv-button :label="$t('login-view.enter-btn')" class="button-primary" @click="login" />
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
