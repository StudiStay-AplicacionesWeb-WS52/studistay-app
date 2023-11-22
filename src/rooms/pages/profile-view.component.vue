<template>
  <div class="perfil-section">
    <div class="perfil-title">
      <span class="paragraph font-bold" style="text-align: left; font-size: 40px;"> Perfil</span>
    </div>

    <div class="perfil-container">
      <div class="card-profile">
        <div class="perfil-img">
          <div class="imagen-center">
            <img
              :src="userData.imageUrl"
              alt="Avatar"
              class="avatar"
            />
          </div>
        </div>

        <div class="container-info">
          <div class="perfil-info">
            
            <div class="p-inputgroup flex-1">
              <p class="paragraph">{{$t('profile-view.names')}}</p>
              <div class="container-input">
                <span span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText class="input-text" placeholder="Nombres" :value="userData.fullName" :readonly="true" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p class="paragraph">{{$t('profile-view.email')}}</p>
               <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-envelope"></i>
                </span>
                <InputText class="input-text" placeholder="Email" :value="userData.email" :readonly="true" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p class="paragraph">{{$t('profile-view.phone')}}</p>
               <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-phone"></i>
                </span>
                <InputText class="input-text" placeholder="Telefono" :value="987654321" :readonly="true" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p class="paragraph">{{$t('profile-view.password')}}</p>
              <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <InputText class="input-text" type="password" placeholder="Contraseña" :value="123456789" :readonly="true" />
              </div>      
            </div>
          </div>
        </div>

        <div class="perfil-buttons">
          <pv-button
            :label="$t('profile-view.logout')"
            icon="pi pi-sign-out"
            severity="danger"
            outlined 
            @click="logout"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";

export default {
  components: {
    InputText,
  },
  name: "profile-content",
  data() {
    return {
      userData: {}
    }
  },
  created() {
    this.userData = JSON.parse(localStorage.getItem('user-data')) //obtiene los datos del usuario guardados en el localstorage
  },
  methods: {
    logout() {
      localStorage.removeItem('user-data') //elimina los datos del usuario guardados en el localstorage
      this.$router.push({ name: 'login' }) //redirecciona a la pagina de login
    }
  }
};
</script>

<style>
.perfil-title {
  margin-top: 15px;
  margin-left: 20px;
}

.perfil-container {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.perfil-img {
  margin-bottom: 25px;
  width: 100%;
  height: 43%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen-center {
  width: 26%;
  height: 90%;
  border-radius: 15px;
  overflow: hidden;
}

.imagen-center img {
  width: 100%;
  height: 100%;
}

.container-info {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.perfil-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas iguales */
  grid-auto-rows: 95px;
  gap: 45px 100px;
  width: 85%;
  margin-bottom: 50px;
}

.p-inputtext {
  border-radius: 0px;
}

.p-inputgroup {
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-input{
  width: 100%;
  height: 100%;
  display: flex;
}

.perfil-buttons {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.perfil-buttons button {
  width: 45%;
  height: 36%;
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
}

</style>