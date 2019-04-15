<template lang="html">
  <div class="header" >
    <div class="content-wrapper">
      <div class="avatar">
        <img  :src="seller.avatar"  alt="商家头像" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliverTime}}分钟送达
        </div>
        <div class="details-btn">
          <button type="button" @click="toggle">详情</button>
        </div>

      </div>
    </div>
    <div class="bulletin-wrapper">
      <span>{{seller.bulletin}}</span>
    </div>
    <div class="bg-img">
      <img :src="seller.avatar">
    </div>
    <transition name="fade">
      <div v-show="detailsShow" class="details">
        <div class="details-wrapper">
          <div class="details-main">
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>

          </div>
        </div>
        <div class="close-btn">
          <button type="button" @click="toggle">关闭</button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  props: {
    seller: {}
  },
  data(){
    return {
      detailsShow:false
    };
  },
  methods:{
    toggle(){
      this.detailsShow = !this.detailsShow;
    }
  }

}
</script>

<style lang="stylus" scoped>
.header
  // height: 100px
  position: relative
  color:#fff
  background:rgba(7,17,27,0.5)
  overflow: hidden
  .content-wrapper
    font-size: 0px
    text-align: left;
    padding: 24px 12px 18px 24px
    .avatar,.content
      display: inline-block;
      vertical-align: top
      font-size: 14px
      margin:4px 14px
      .title
        font-size: 32px
        margin:4px 14px 4px 0
  .bg-img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(10px)
    &>img
      width: 100%
      height: 100%
  .bulletin-wrapper
    height: 28px
    line-height: 28px
    padding: 0 22px 0 12px
    font-size: 10px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    background: rgba(7,17,27,0.5)
  .fade-enter-active, .fade-leave-active
    transition: opacity .8s
  .fade-enter, .fade-leave-to
    opacity: 0
  .details
    width: 100%
    height: 100%
    position: fixed
    z-index: 100
    top: 0
    left: 0
    overflow: auto
    background: rgba(7,17,27,0.8)
    .details-wrapper
      min-height: 100%
      .details-main
        padding-top: 64px
        padding-bottom: 64px
    .close-btn
      position: relative;
      margin-top: -64px
      height: 64px
      font-size: 32px
      clear: both



</style>
