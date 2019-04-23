<template lang="html">
  <div class="shopcart">
    <div class="content">
      <div class="content-left" @click = "toggleList">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount>0}">
            <span class="icon-shopping_cart"></span>
          </div>
          <div class="num" v-show="totalCount">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight':totalCount>0}">
          ￥{{totalPrice}}
        </div>
        <div class="desc">
          另需配送费￥{{deliveryPrice}}元
        </div>
      </div>
      <div class="content-right">
        <div class="pay" :class="{'payment':this.totalPrice>=this.minPrice}">
          {{payDes}}
        </div>
      </div>
    </div>
    <transition name="list">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <span class="title">购物车</span>
          <span class="clear" @click="clearall">清空</span>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food" v-for="food in selectFoods">
              <span class="foodname">{{food.name}}</span>
              <span class="foodPrice">￥{{food.price*food.count}}</span>
              <div class="cartControl-wrapper">
                <cartControl :food="food"></cartControl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import cartControl from '../cartControl/cartControl';
import Bscroll from 'better-scroll';


export default {
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data() {
    return {
      listShow: false
    }
  },
  computed: {
    totalPrice() {
      let totle = 0;
      this.selectFoods.forEach((food) => {
        totle += food.price * food.count;
      })
      return totle;
    },
    totalCount() {
      let totalCount = 0;
      this.selectFoods.forEach((food) => {
        totalCount += food.count;
      })
      return totalCount;
    },
    payDes() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}起送`;
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}起送`;
      } else {
        return `去结算`;
      }
    }
  },
  methods: {
    toggleList() {
      if (this.totalCount > 0) {
        this.listShow = !this.listShow;
      }
      if(this.listShow){
        this.$nextTick(()=>{
          if(!this.listScroll){
            this.listScroll = new Bscroll(this.$refs.listContent, {
              click: true,
              probeType:3
            });
          }else{
            this.listScroll.refresh();
          }
        })
      }
    },
    clearall(){
      this.selectFoods.forEach((food)=>{
        food.count = 0;
      })
    }
  },
  components: {
    cartControl
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'


.shopcart
  position: fixed
  width: 100%
  height:48px
  bottom: 0
  left: 0
  z-index: 20
  .content
    display: flex
    height: 100%
    background: #141d27
    color: rgba(255, 255, 255, 0.4)
    .content-left
      flex:1
      text-align: left
      .logo-wrapper
        display: inline-block
        position: relative
        text-align: center
        top: -10px
        height: 44px
        width: 44px
        margin: 0 12px
        background-color: #2b343c
        border: 6px solid #141d27
        border-radius: 50px
        vertical-align: top
        .logo
          width: 100%
          height: 100%
          border-radius: 50%
          color: rgba(255, 250, 250, 0.4)
          &.highlight
            background-color: rgb(0, 160, 220)
            color: #fff
          .icon-shopping_cart
            line-height: 44px
            font-size: 24px

        .num
          position: absolute
          top: -6px
          right: -6px
          height: 16px
          width: 24px
          line-height: 16px
          border-radius: 16px
          font-size: 9px
          font-weight: 700
          color: rgb(255,255,255)
          background-color: rgb(240, 20, 20)
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .price
        display: inline-block
        vertical-align: top
        margin-top: 12px
        line-height: 24px
        padding-right: 12px
        box-sizing: border-box
        border-right:1px solid rgba(255, 255, 255, 0.1)
        font-size: 16px
        font-weight: 700
        &.highlight
          color: #fff
      .desc
        display: inline-block
        vertical-align: top
        padding: 0 12px
        margin-top: 12px
        line-height: 24px
        font-size: 10px
        font-weight: 200



    .content-right
      flex:0 0 105px
      .pay
        height: 48px
        font-size: 12px
        line-height: 48px
        font-weight: 700
        padding: 0 8px 0 8px
        background: #2b333b
        &.payment
          background-color: #00b43c
          color: #fff
  .shopcart-list
    position: absolute
    width: 100%
    top: 0
    left: 0
    z-index: -1
    transform: translate3d(0,-100%,0)
    background-color: #fff
  .list-enter-active, .list-leave-active
    transition: transform 0.5s linear
  .list-enter, .list-leave-to
    transform: translate3d(0,0,0)
  .shopcart-list
    .list-header
      height: 40px
      padding: 0 18px
      background-color: #f3f5f7
      line-height: 40px
      color: rgb(7, 17, 27)
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .title
        float: left
        font-size: 14px
      .clear
        float: right
        font-size: 12px
        color: rgb(0, 160, 220)
    .list-content
      position:relative
      padding: 0 18px
      max-height: 217px
      overflow:hidden
      .food
        box-sizing: border-box
        height: 48px
        padding: 12px 0
        border-1px(rgba(7,17,27,0.1))
        .foodname
          float: left
          font-size: 14px
          line-height: 24px
        .foodPrice
          position: absolute
          right: 100px
          bottom: 12px
          font-size: 14px
          font-weight: 700
          line-height: 24px
          color: rgb(240, 20, 20)
        .cartControl-wrapper
          position: absolute
          right: 0
          bottom: 6px




</style>
