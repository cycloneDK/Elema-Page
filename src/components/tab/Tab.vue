<template lang="html">
  <div class="tab">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评价</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.tab
  display: flex
  font-size: 16px
  height: 40px
  line-height: 40px
  width: 100%
  border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  .tab-item
    flex: 1
    text-align: center
    text-decoration: none
    &>a
      display: block
      color: rgb(77, 85, 93)
  .router-link-exact-active
      color: rgb(240, 20, 20)


</style>
