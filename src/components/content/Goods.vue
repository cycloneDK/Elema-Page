<template lang="html">
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text">
            <span v-show="item.type>=0">i</span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">

    </div>
  </div>
</template>

<script>
const ERR_OK = 0;
const axios = require('axios');


export default {
  props: {
    seller: {}
  },
  data() {
    return {
      goods: {}
    }
  },
  created() {
    this.getAjax();
  },
  methods:{
    getAjax:function (){
      axios.get('/api/goods')
        .then((response) => {
          response = response.data;
          if (response.errno === ERR_OK) {
            this.goods = response.data;
          }
        }).catch((error) => {
          console.log(error);
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods
  display: flex
  position: absolute
  top: 195px
  bottom: 64px
  width: 100%
  overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background-color: #f3f5f7
    text-align: center
    .menu-item
      display: table
      height: 54px
      width: 56px
      font-size: 14px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      margin: 0 auto
      .text
        display: table-cell
        vertical-align: middle
        width: 56px
        line-height: 14px
        font-size: 12px
        text-align: left
  .foods-wrapper
    flex: 1
  //
</style>
