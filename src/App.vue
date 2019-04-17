<template>
<div id="app">
  <v-header :seller='seller'></v-header>
  <v-tab></v-tab>
  <router-view/>
</div>
</template>

<script>
import Header from './components/head/Header.vue';
import Tab from './components/tab/Tab.vue';

  
const ERR_OK = 0;
const axios = require('axios');


export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.getAjax();
  },
  components: {
    'v-header': Header,
    'v-tab': Tab
  },
  methods: {
    getAjax: function() {
      axios.get('/api/seller')
        .then((response) => {
          response = response.data;
          if (response.errno === ERR_OK) {
            this.seller = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
