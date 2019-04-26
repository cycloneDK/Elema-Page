<template lang="html">
  <div class="seller">
    <div class="basic">
      <div class="left">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper">
          <star :size = "36"
                :score = "seller.score"
                class="star"
          ></star>
          <span class="title">月售{{seller.sellCount}}单</span>
        </div>
      </div>
      <div class="right">
        <div class="heart">
          <span class="icon-favorite"></span>
        </div>
        <span>已收藏</span>
      </div>
    </div>
    <div class="info">
      <div class="minPrice">
        <h1 class="title">起送价</h1>
        <span class="value">{{seller.minPrice}}<span class="unit">元</span>
        </span>
      </div>
      <div class="deliveryPrice">
        <h1 class="title">商家配送费</h1>
        <span class="value">{{seller.deliveryPrice}}<span class="unit">元</span>
        </span>
      </div>
      <div class="deliveryTime">
        <h1 class="title">平均配送时间</h1>
        <span class="value">{{seller.deliveryTime}}<span class="unit">分钟</span>
      </span>
      </div>
    </div>
    <div class="line"></div>
    <div class="bulletin">
      <h1 class="title">公告与活动</h1>
      <p class="content">{{seller.bulletin}}</p>
    </div>
    <div class="supports">
      <ul>
        <li v-for="support in seller.supports">
          <span class="this.classMap[support.type]"></span>
          <span class="text">{{support.description}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import star from '../star/star'


export default {
  props:{
    seller:{}
  },
  created(){
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components:{
    star
  }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/stylus/mixin'


.seller
  position: absolute
  top: 174px
  bottom: 64px
  width: 100%
  overflow: hidden
  .basic
    padding: 18px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    overflow: hidden
    .left
      text-align: left
      float: left
      .name
        font-size: 14px
        margin-bottom: 6px
        color: rgb(7, 17, 27)
      .star-wrapper
        .star,.title
          display: inline-block
        .title
          margin-left: 12px
          font-size: 10px
          color: rgb(77, 85, 93)
    .right
      float: right
      height: 100%
      font-size: 10px
      color: rgb(77, 85, 93)
      .heart
        font-size: 24px
        margin-bottom: 4px
        color: rgb(240, 20, 20)
  .info
    display: flex
    .minPrice,.deliveryPrice,.deliveryTime
      flex: 1
      margin: 18px 0
      border-right: 1px solid rgba(7, 17, 17, 0.1)
      :last-child
        border-right:none
      .title
        font-size: 10px
        margin-bottom: 4px
        color: rgb(147, 153, 159)
      .value
        font-size: 24px
        color: rgb(7, 17, 17)
        .unit
          font-size: 10px
  .line
    height: 18px
    width: 100%
    background: #f3f5f7
    border-bottom: 1px solid rgba(147,153,159, 0.1)
    border-top:  1px solid rgba(147,153,159, 0.1)
  .bulletin
    margin: 18px 18px 12px
    text-align: left
    .title
      font-size: 14px
      margin-bottom: 8px
      color: rgb(7, 17, 27)
    .content
      margin: 0 12px
      font-size: 12px
      line-height: 24px
      color: rgb(140, 20, 20)




</style>
