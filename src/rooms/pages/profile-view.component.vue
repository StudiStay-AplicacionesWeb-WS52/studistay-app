<template>
  <div class="perfil-section">
    <div class="perfil-title">
      <h1>{{$t('profile-view.profile')}}</h1>
    </div>

    <div class="perfil-container">
      <div class="card-profile">
        <div class="perfil-img">
          <div class="imagen-center">
            <img
              :src="userData.imagen"
              alt="Avatar"
              class="avatar"
            />
          </div>
        </div>

        <div class="container-info">
          <div class="perfil-info">
            
            <div class="p-inputgroup flex-1">
              <p>{{$t('profile-view.names')}}</p>
              <div class="container-input">
                <span span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText class="input-text" placeholder="Nombres" v-model="userData.nombres" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p>{{$t('profile-view.email')}}</p>
               <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-envelope"></i>
                </span>
                <InputText class="input-text" placeholder="Email" v-model="userData.email" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p>{{$t('profile-view.phone')}}</p>
               <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-phone"></i>
                </span>
                <InputText class="input-text" placeholder="Telefono" v-model="userData.phone" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p>{{$t('profile-view.password')}}</p>
              <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <InputText class="input-text" type="password" placeholder="Contraseña" v-model="userData.password" />
              </div>      
            </div>
          </div>
        </div>

        <div class="perfil-buttons">
          <MyButton :label="$t('profile-view.save-changes')" @click="updateUserProfile" />
          <MyButton :label="$t('profile-view.delete-account')" severity="danger" @click="deleteUserProfile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import MyButton from "primevue/button";

export default {
  components: {
    InputText,
    MyButton
  },
  name: "profile-content",
  data() {
    return {
      user: {},
      userData: {
        nombres: "User Name",
        email: "user_example@gmail.com",
        phone: "987654321",
        password: "mysecretpassword",
        imagen: "https://cdn.discordapp.com/attachments/1151660063606448158/1176801890676256830/4203a57a78f6f1b1cc8ce5750f614656.png",
      },
    };
  },
  methods: {
    async updateUserProfile() {
      try {
        //Actualizar datos del usuario
        const userUpdated = {
          fullName: this.userData.nombres,
          email: this.userData.email,
          phone: this.userData.phone,
          imageUrl: this.userData.imagen,
        };

        //Apunto de enviar datos del usuario
        console.log("A punto de actualizar el usuario");
        console.log(userUpdated);
        
        //Enviar datos del usuario al backend
        const response = await this.$userApiService.updateUserById(this.user.id, userUpdated);
        console.log(response);

        this.$toast.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'User updated',
              life: 3000
            })

        console.log("Update user profile");
      } catch (error) {
        console.log(error);
         this.$toast.add({
           severity: 'error',
           summary: 'Error',
           detail: `Error: ${error.response.data.message}`,
           life: 3000
         })
      }
    },
    async deleteUserProfile() {
      try {
        //Eliminar datos del usuario
        console.log("A punto de eliminar el usuario");
        const response = await this.$userApiService.deleteUserById(this.user.id);
        console.log(response);
        console.log("Delete user profile");

        this.$toast.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'User deleted',
              life: 3000
            })

        //Eliminar token y usuario del localStorage
        localStorage.removeItem('user-token')
        localStorage.removeItem('user')
        this.$router.push('/login')

      } catch (error) {
        console.log(error);
        this.$toast.add({
           severity: 'error',
           summary: 'Error',
           detail: `Error: ${error.response.data.message}`,
           life: 3000
         })
      }
    },
  },
  async created() {
    try {
      //Obtener datos del usuario
      const userLocal = localStorage.getItem("user");
      const userObj = JSON.parse(userLocal);

      // Cargar datos del usuario
      const response = await this.$userApiService.getUserById(userObj.id);
      this.user = response.data;

      console.log("User loaded");
      console.log(this.user);

      //Asignar datos del usuario a userData
      this.userData.nombres = this.user.fullName;
      this.userData.email = this.user.email;
      this.userData.phone = this.user.phone;
      this.userData.imagen = this.user.imageUrl;

    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.perfil-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
}

.perfil-title {
  width: 89%;
  height: 5%;
  margin-bottom: 40px;
}

.perfil-title h1 {
  font-size: 40px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: black;
}

.perfil-container {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.card-profile {
  width: 75%;
  height: 100%;
  border: 1px solid black;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.perfil-img {
  margin-top: 5px;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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

.input-text {
  font-size: 20px;
  width: 100%;
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
  gap: 10px;
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
  border-radius: 15px;
  margin-bottom: 20px;
  color: white;
}

</style>