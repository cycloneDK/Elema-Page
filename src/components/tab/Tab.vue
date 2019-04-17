<template lang="html">
  <div class="tab border-1px">
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
@import "../../common/stylus/mixin.styl"

.tab
  display: flex
  height: 40px
  line-height: 40px
  width: 100%
  // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex: 1
    text-align: center
    &>a
      display: block
      font-size: 14px
      color: rgb(77, 85, 93)
  .router-link-exact-active
      color: rgb(240, 20, 20)


</style>
