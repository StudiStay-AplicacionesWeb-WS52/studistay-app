<script>
export default {
  name: 'language-component',
  data() {
    return {
      items : [
        {
          label: "language",
          icon: 'pi pi-globe',
          style: 'min-width: 200px;',
          items: [
            {
              label: "en"
            },
            {
              label: "es"
            }
          ]
        }
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      var languageObj = lang.label.toLowerCase();
      console.log(languageObj);
      /* 
      console.log(languageObj);
      console.log(this.title_language);
      console.log(this.list.english);
      console.log(this.list.spanish);
      */

      if (languageObj.toLowerCase() === 'en') {
        //console.log('Es igual a english');
        this.$i18n.locale = languageObj;
        //console.log(this.$i18n.locale);
      } else if (languageObj.toLowerCase() === 'es') {
        this.$i18n.locale = languageObj;
      }
    }
  },

};
</script>

<template>
  <pv-menubar :model="items"  class="menubar">
    <template #item="{ item, props }">
        <a  class="prueba" :target="item.target" v-bind="props.action" @click="changeLanguage(item)">
            <span class="color" :class="item.icon" />
            <span class="ml-auto color lang" v-if="item.label === 'language'">{{$t('login-toolbar.language')}}</span>
            <span class="ml-auto tag" v-if="item.label === 'es'"> {{$t('login-toolbar.language-list.spanish')}} </span>
            <span class="ml-auto tag" v-if="item.label === 'en'"> {{$t('login-toolbar.language-list.english')}} </span>
        </a>
    </template>
  </pv-menubar>

</template>


<style>
.menubar {
  height: 50px;
  justify-content: center;
    min-width: 200px;
  text-align: center;
  margin-left: 1rem;
  background-color: rgb(52, 73, 94);
}

.menubar .prueba {
  min-width: 200px;
}

.menubar .color {
  margin-left: 1.5rem;
  color: white;
}

.menubar .tag{
  margin-right: calc(100% - 32% - 3.5rem);
}

.menubar .lang{
  margin-right: 26%;
}

@media (max-width: 950px) {
  .menubar .color {
    color: black;
  }

  .menubar .tag{
    margin-right: calc(100% - 24% - 2.5rem);
  }
}

</style>