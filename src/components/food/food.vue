<template lang="html">
  <transition name="fade">
    <div class="food" ref="food" v-show="foodDetial">
      <div class="foodBox">
        <span class="icon-arrow_lift" @click="back"></span>
        <div class="image">
          <img :src="food.image" alt="图片" width="100%" height="375">
        </div>
        <div class="info">
          <h1 class="name">{{this.food.name}}</h1>
          <div class="extra">
            <span class="sellCount">月售{{food.sellCount}}</span>
            <span>好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="newPrice">￥{{food.price}}</span>
            <span v-show='food.oldPrice' class="oldPrice"><s>￥{{food.oldPrice}}</s></span>
            <span class="addCart" @click="addCount($event)">
              加入购物车
            </span>
          </div>
        </div>
        <div class="line"></div>
        <div class="intro">
          <h1 class="title">商品介绍</h1>
          <p class="detial">{{this.food.info}}</p>
        </div>
        <div class="line"></div>
        <div class="ratings">
          <h1 class="title">商品评价</h1>
          <ratingList :ratings="this.food.ratings"></ratingList>
        </div>
      </div>


    </div>
  </transition>


</template>

<script>
import Bscroll from 'better-scroll'
import ratingList from '../ratingList/ratinglist'

export default {
  props: {
    food: {}
  },
  computed: {
    foodDetial() {
      if (Object.keys(this.food).length) {
        this.foodScroll();
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    foodScroll() {
      this.$nextTick(() => {
        if (!this._foodScroll) {
          this._foodScroll = new Bscroll(this.$refs.food, {
            click: true,
            probeType: 3
          });
        } else {
          this._foodScroll.refresh();
        }
      });
    },
    back() {
      this.$emit('back');
    },
    addCount(event){
      if(!event._constructed){
        return;
      }
      if(!this.food.count){
        this.$set(this.food,'count',1);
      }else{
        this.food.count++;
      }

    }
  },
  components:{
    ratingList
  }
}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition: transform 0.4s
.fade-enter,.fade-leave-to
  transform: translate3d(100%,0,0)
.food
  position: fixed
  width: 100%
  left: 0
  top: 0
  bottom: 48px
  overflow: hidden
  z-index: 19
  background-color: #fff
  .icon-arrow_lift
    position: absolute
    left: 0
    top: 10px
    font-size: 30px
    color: rgba(255,255,255,0.6)
  .info
    padding: 18px 18px
    text-align: left
    .name
      font-size: 14px
      font-weight: 700
      padding-bottom: 8px
      color: rgb(7,17,27)
    .extra
      font-size: 10px
      color: rgb(147,153,159)
      .sellCount
        margin-right: 12px
    .price
      position: relative
      padding: 18px 0
      .newPrice
        font-size: 14px
        font-weight: 700
        color: rgb(240,20,20)
      .oldPrice
        font-size: 10px
        color: rgb(147, 153, 159)
      .addCart
        position: absolute
        display: inline-block
        right: 0
        height: 24px
        width: 74px
        font-size: 10px
        border-radius: 12px
        line-height: 24px
        text-align: center
        color: rgb(255, 255, 255)
        background-color: rgb(0, 160, 220)
  .line
    width: 100%
    height: 16px
    background: #f3f5f7
  .intro
    padding: 18px
    text-align: left
    .title

      font-size: 14px
    .detial
      padding: 6px 8px 18px 8px
      font-size: 12px
      color: rgb(77, 85, 93)
      line-height: 24px
  .ratings
    padding:  18px
    text-align: left
    .title
      font-size: 14px



</style>
