<template lang="html">
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
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
  </div>
</template>

<script>
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
        return [{
          price: 12,
          count: 1
        }];
      }
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
      } else if (this.totalPrice < this.minPrice)
      {
        let diff = this.minPrice-this.totalPrice;
        return `还差￥${diff}起送`;
      } else {
        return `去结算`;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
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


</style>
