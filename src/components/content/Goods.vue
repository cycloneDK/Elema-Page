<template lang="html">
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item border-1px">
          <span class="text">
              <span v-show="item.type>=0" :class="classMap[item.type]" class="icon"></span>
              {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="foods-list">
          <h2 class="title">{{item.name}}</h2>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="description">{{food.description}}</p>
                <div class="extra">
                  <span class="sellCount">月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span >￥{{food.price}}</span>
                  <span v-show='food.oldPrice' class="oldPrice"><s>￥{{food.oldPrice}}</s></span>
                </div>
              </div>

            </li>
          </ul>
        </li>
      </ul>
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
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
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
@import '../../common/stylus/mixin.styl'

.goods
  display: flex
  position: absolute
  top: 174px
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
      border-1px(rgba(7, 17, 27, 0.1))
      // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      margin: 0 auto
      .text
        display: table-cell
        vertical-align: middle
        width: 56px
        line-height: 14px
        font-size: 12px
        text-align: left
        .icon
          display: inline-block
          width: 12px
          height: 12px
          margin-right: 2px
          background-size:12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-img('decrease_3')
          &.discount
            bg-img('discount_3')
          &.guarantee
            bg-img('guarantee_3')
          &.invoice
            bg-img('invoice_3')
          &.special
            bg-img('special_3')
  .foods-wrapper
    flex: 1
    .title
      padding-left: 14px
      height: 26px
      line-height: 26px
      text-align: left
      border-left: 2px solid #d9dde1
      font-size:12px
      color: rgb(147,153,159)
      background: #f3f5f7
    .food-item
      display: flex
      margin: 18px
      padding-bottom: 18px
      border-1px(rgba(7,17,27,0.1))
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        height: 57px
        margin-right: 10px
      .content
        flex: 1
        text-align: left
        .name
          font-size: 14px
          color: rgb(7,17,27)
          line-height: 14px
          margin-top: 2px
        .description
          font-size: 10px
          color: rgb(147,153,159)
          line-height: 10px
          margin: 8px 0
        .extra
          font-size: 10px
          color: rgb(147,153,159)
          line-height: 10px
          .sellCount
            margin-right: 12px
        .price
          font-size: 14px
          color: red
          line-height: 24px
          .oldPrice
            font-size: 10px
            color: rgb(147,153,159)



</style>
