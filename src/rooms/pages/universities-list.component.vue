<script>
export default {

  data() {
    return {
      cardsData:[
        {
          url: 'https://seeklogo.com/images/U/universidad-peruana-de-ciencias-aplicadas-upc-logo-B98C3A365C-seeklogo.com.png',
          initials: 'UPC',
          name:'Universidad Peruana de Ciencias Aplicadas',
          description: '5 sedes',
          type: 'Universidad',
        },
        {
          url: 'https://utp.hiringroom.com/data/accounts/utp/vacancies/eedd872335ccdbe3dedccf01195f021a.jpeg',
          initials: 'UTP',
          name:'Universidad Tecnológica del Perú',
          description: '8 sedes',
          type: 'Universidad',
        },
        {
          url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/UPN_-_Universidad_Privada_del_Norte.png',
          initials: 'UPN',
          name:'Universidad Privada del Norte',
          description: '2 sedes',
          type: 'Universidad',
        },
        {
          url: 'https://d9hhrg4mnvzow.cloudfront.net/puntoedu.pucp.edu.pe/se-transforma/07b57513-escudo_10ci0ch00000000000001o.jpg',
          initials: 'PUCP',
          name:'Pontifica Universidad Católica del Perú',
          description: '5 sedes',
          type: 'Universidad',
        },
        {
          url: 'https://media.discordapp.net/attachments/1146490170917535764/1166564014533390397/logo-upch-chatbot.png?ex=654af266&is=65387d66&hm=63d1220eaf3756f35fd470e455282d0af5e9fe5218b87bc9d3e809741059d9b3&=&width=550&height=550',
          initials: 'UPCH',
          name:'Universidad Peruana Cayetano Heredia',
          description: '5 sedes',
          type: 'Universidad',
        },
        {
          url: 'https://pbs.twimg.com/profile_images/1630555077223088129/u1QMGa8M_400x400.jpg',
          initials: 'UP',
          name:'Universidad del Pacífico',
          description: '5 sedes',
          type: 'Universidad',
        },
      ],

      filters: {}
    }
  },
  created() {
    this.initFilters();
  },
  methods:{
    initFilters(){
      this.filters={
        global: { value: null},
      };
    },
    matchesFilter(name) {
      const filterValue = this.filters.global.value;
      if (!filterValue) {
        return true;  // Mostrar todos si no hay filtro
      }
      // Convierte a minúsculas para hacer la comparación sin importar mayúsculas/minúsculas
      return name.toLowerCase().includes(filterValue.toLowerCase());
    }
  }
}


</script>

<template>
  <pv-dataview :filters="filters" :value="cardsData">
    <template #header>
      <div class="md:flex row">
        <span class="paragraph font-bold" style="text-align: left; font-size: 40px;"> {{$t('universities-view.universities')}}</span>
        <span class="p-input-icon-left" style="margin-left: auto;">
        <i class="pi pi-search"></i>
        <pv-input-text style="border-radius: 15px; width: 320px;" v-model="filters['global'].value" :placeholder="$t('universities-view.search-university')"></pv-input-text>
      </span>
      </div>
    </template>
    <template #list="slotProps">
      <div v-if="matchesFilter(slotProps.data.name) || matchesFilter(slotProps.data.initials)" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2  paragraph" >
        <div class=" p-4 border-1" style="border-radius: 20px; width: 332px; text-align: center;  margin: auto;">
          <div class="flex flex-column align-items-center gap-3 py-5">
            <img :src="slotProps.data.url" :alt="slotProps.data.name" style="width: auto; height: 130px" />
            <br>
            <div class="text-2xl font-bold title-secondary">{{ slotProps.data.initials }}</div>
            <div class="text-2xl font-normal" style="width: 240px;">({{ slotProps.data.name }})</div>
          </div>
          <div style="text-align: left; font-size: 20px;"><i class="pi pi-globe icon-secondary" style="margin-right: 0; font-size: 18px;"></i> {{ slotProps.data.description }}</div>
          <div style="text-align: left; font-size: 20px; margin-top: 5px"><i class="pi pi-info-circle icon-secondary" style="margin-right: 0; font-size: 18px;" ></i> {{ slotProps.data.type }}</div>
          <br>
          <div style="text-align: right;">
            <router-link to="/posts">
              <pv-button rectangle :disabled="false" class="font-normal button-secondary" style=" font-size: 18px; border-radius: 20px; padding: 8px 12px;">
                {{$t('universities-view.look-rooms')}}<i class="pi pi-home" style="margin-left: 5px;"></i>
              </pv-button>
            </router-link>
          </div>
        </div>
        <br>
      </div>
    </template>
  </pv-dataview>
</template>

<style scoped>

</style>