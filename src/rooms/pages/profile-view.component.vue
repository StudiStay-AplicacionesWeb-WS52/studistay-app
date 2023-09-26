<template>
  <div class="perfil-section">
    <div class="perfil-title">
      <h1>Mi Perfil</h1>
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
              <p>Nombres:</p>
              <div class="container-input">
                <span span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText class="input-text" placeholder="Nombres" :value="userData.nombres" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p>Email:</p>
               <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-envelope"></i>
                </span>
                <InputText class="input-text" placeholder="Email" :value="userData.email" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p>Nro. de teléfono:</p>
               <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-phone"></i>
                </span>
                <InputText class="input-text" placeholder="Telefono" :value="userData.phone" />
              </div>
            </div>

            <div class="p-inputgroup flex-1">
              <p>Contraseña:</p>
              <div class="container-input">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <InputText class="input-text" type="password" placeholder="Contraseña" :value="userData.password" />
              </div>      
            </div>
          </div>
        </div>

        <div class="perfil-buttons">
          <MyButton label="Guardar cambios" />
          <MyButton label="Eliminar cuenta" severity="danger" />
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
      userData: {
        nombres: "Seele Vollerei",
        email: "svollerei@gmail.com",
        phone: "987654321",
        password: "mysecretpassword",
        imagen: "https://cdn.donmai.us/sample/4d/d5/__seele_vollerei_honkai_and_1_more_drawn_by_qingxiao_kiyokiyo__sample-4dd517bc6a4218b771aead3433ff52ae.jpg",
      },
    };
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