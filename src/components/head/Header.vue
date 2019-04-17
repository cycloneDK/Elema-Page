<template lang="html">
  <div class="header" >
    <div class="content-wrapper">
      <div class="avatar">
        <img  :src="seller.avatar"  alt="商家头像" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliverTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>


      </div>
      <div v-if="seller.supports" class="support-count" @click="toggle">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">
        {{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right" @click="toggle"></i>
    </div>
    <div class="bg-img">
      <img :src="seller.avatar">
    </div>
    <transition name="fade">
      <div v-show="detailsShow" class="details">
        <div class="details-wrapper clearfix">
          <div class="details-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <v-star :size="48" :score='seller.score'></v-star>
            </div>
            <div class="info-prefer">
              <hr class='line' />
              <span class="text">优惠信息</span>
              <hr class="line"/>
            </div>
            <div class="info-details">
              <ul class="support-wrapper">
                <li v-for="support in seller.supports" class="support">
                  <span :class="classMap[support.type]" class="icon"></span>
                  <span class="text">{{support.description}}</span>
                </li>
              </ul>
            </div>
            <div class="info-prefer">
              <hr class='line' />
              <span class="text">商家公告</span>
              <hr class="line"/>
            </div>
            <div class="info-details">
              <ul class="support-wrapper">
                <li  class="support">
                  <span class="text">{{seller.bulletin}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="close-btn">
          <span class="icon-close" @click="toggle"></span>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import Star from '../star/star.vue';

export default {
  props: {
    seller: {}
  },
  data() {
    return {
      detailsShow: false
    };
  },
  components:{
    'v-star':Star
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    toggle() {
      this.detailsShow = !this.detailsShow;
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'


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
      margin-left: 16px
      .title
        font-size: 16px
        margin:2px 0px 8px 0
        .brand
          display: inline-block
          vertical-align: top
          width: 30px
          height: 18px
          bg-img('brand')
          background-size:30px 18px
          background-repeat: no-repeat
        .name
          margin-left: 6px
          font-size: 16px
          line-height: 18px
      .description
        margin-bottom: 10px
        line-height: 12px
        font-size: 12px
      .support
        vertical-align: top
        .icon
          display: inline-block
          width: 12px
          height: 12px
          margin-right: 4px
          background-size:12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-img('decrease_1')
          &.discount
            bg-img('discount_1')
          &.guarantee
            bg-img('guarantee_1')
          &.invoice
            bg-img('invoice_1')
          &.special
            bg-img('special_1')
        .text
          display: inline-block
          line-height: 12px
          font-size: 10px

      .details-btn
        position: absolute
        right:0
        width:60px
        height: 30px
        border-radius: 15px
        background: rgba(96, 96,96, 0.5)
        text-align: center
    .support-count
      position: absolute
      right: 12px
      bottom: 30px
      height: 24px
      font-size: 0
      line-height: 24px
      padding: 0 8px
      border-radius: 14px
      background-color: rgba(0,0,0,0.2)
      text-align: center
      .count
        font-size: 10px
        vertical-align: top
        line-height: 24px
      .icon-keyboard_arrow_right
        font-size: 10px
        line-height: 24px
        margin-left: 2px

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
    position: relative
    height: 28px
    line-height: 28px
    padding: 0 22px 0 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    background: rgba(7,17,27,0.2)
    .bulletin-title
      display: inline-block
      vertical-align: top
      margin-top: 8px
      height: 12px
      width: 22px
      background-size: 22px 12px
      background-repeat: no-repeat
      bg-img('bulletin')
    .bulletin-text
      font-size: 10px
      margin: 0 4px
      vertical-align: top
    .icon-keyboard_arrow_right
      position: absolute
      font-size: 10px
      right: 12px
      line-height: 28px
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
      width: 100%
      .details-main
        padding-top: 64px
        padding-bottom: 64px
        .name
          font-size: 16px
          line-height: 16px
          font-weight: 700
        .star-wrapper
          margin: 16px 0 28px 0
        .info-prefer
          display: flex
          width: 80%
          margin: 30px auto 24px auto
          .line
            flex:1
            background-color: rgba(250,250,250,0.2)
            border: none
            height: 1px
          .text
            flex-basis:88px
        .info-details
          width: 80%
          font-size: 12px
          margin: 0 auto
          .support-wrapper
            margin: 0 12px
            .support
              text-align: left
              margin-bottom: 12px
              .icon
                display: inline-block
                width: 16px
                height: 16px
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-img('decrease_1')
                &.discount
                  bg-img('discount_1')
                &.guarantee
                  bg-img('guarantee_1')
                &.invoice
                  bg-img('invoice_1')
                &.special
                  bg-img('special_1')
              .text
                display: inline-block
                line-height: 24px

    .close-btn
      position: relative
      margin-top: -64px
      height: 64px
      font-size: 32px
      color: rgba(255, 250, 250, 0.5);
      clear: both



</style>
